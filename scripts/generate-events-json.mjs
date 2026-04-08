import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { TEAM_NUMBER_PREFIXES } from "../src/config/club.js";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(
  scriptDir,
  "../src/generated/competition-schedule.json",
);
const teamsOutputPath = path.resolve(scriptDir, "../src/generated/teams.json");
const accomplishmentsOutputPath = path.resolve(
  scriptDir,
  "../src/generated/recent-accomplishments.json",
);
const teamStatsOutputPath = path.resolve(
  scriptDir,
  "../src/generated/team-stats.js",
);
const allowedStatuses = new Set(["upcoming", "completed", "tbd"]);
const apiBaseUrl = "https://www.robotevents.com/api/v2";
const suffixAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const defaultSuffixDepth = 1;
const envFileDisallowedKeys = new Set();
const apiMaxRetries = 5;
const rateLimitSafetySeconds = 1;

const rateLimitState = {
  limit: null,
  remaining: null,
  resetEpochSeconds: null,
};

const rateLimitReportState = {
  lastReportedLimit: null,
  minRemainingSeen: null,
};

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function parseRateLimitInteger(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, Math.floor(parsed)) : null;
}

function getRateLimitLowWatermark(limit) {
  if (!Number.isInteger(limit) || limit <= 0) {
    return 0;
  }

  return Math.max(1, Math.floor(limit * 0.02));
}

function logRateLimitHeaders(headers) {
  for (const [name, value] of headers.entries()) {
    if (
      name.toLowerCase().startsWith("x-ratelimit") ||
      name.toLowerCase() === "retry-after"
    ) {
      console.log(`RobotEvents header ${name}: ${value}`);
    }
  }
}

function updateRateLimitStateFromHeaders(headers) {
  logRateLimitHeaders(headers);

  const limit = parseRateLimitInteger(headers.get("x-ratelimit-limit"));
  const remaining = parseRateLimitInteger(headers.get("x-ratelimit-remaining"));
  const resetEpochSeconds = parseRateLimitInteger(
    headers.get("x-ratelimit-reset"),
  );

  if (limit !== null) {
    rateLimitState.limit = limit;

    if (rateLimitReportState.lastReportedLimit !== limit) {
      const lowWatermark = getRateLimitLowWatermark(limit);

      console.log(
        `RobotEvents rate limit: ${limit} requests/window, low watermark=${lowWatermark}, reset=${resetEpochSeconds}, now=${Math.floor(Date.now() / 1000)}`,
      );
      rateLimitReportState.lastReportedLimit = limit;
    }
  }

  if (remaining !== null) {
    rateLimitState.remaining = remaining;

    if (
      rateLimitReportState.minRemainingSeen === null ||
      remaining < rateLimitReportState.minRemainingSeen
    ) {
      rateLimitReportState.minRemainingSeen = remaining;
    }
  }

  if (resetEpochSeconds !== null) {
    rateLimitState.resetEpochSeconds = resetEpochSeconds;
  }
}

async function maybeWaitForRateLimitWindow() {
  const lowWatermark = getRateLimitLowWatermark(rateLimitState.limit);

  if (
    rateLimitState.remaining === null ||
    rateLimitState.remaining > lowWatermark ||
    rateLimitState.resetEpochSeconds === null
  ) {
    return;
  }

  const nowEpochSeconds = Math.floor(Date.now() / 1000);
  console.log(
    `Rate limit approached. Remaining: ${rateLimitState.remaining} Reset: ${rateLimitState.resetEpochSeconds}  Now: ${nowEpochSeconds}  Waiting: ${
      rateLimitState.resetEpochSeconds -
      nowEpochSeconds +
      rateLimitSafetySeconds
    } seconds before retrying.`,
  );
  if (rateLimitState.resetEpochSeconds <= nowEpochSeconds) {
    return;
  }

  const waitSeconds =
    rateLimitState.resetEpochSeconds - nowEpochSeconds + rateLimitSafetySeconds;
  await delay(waitSeconds * 1000);
}

function getRateLimitBackoffMs(headers, attempt) {
  const retryAfterHeader = Number(headers.get("retry-after"));
  if (Number.isFinite(retryAfterHeader) && retryAfterHeader > 0) {
    return retryAfterHeader * 1000;
  }

  const resetEpochSeconds = parseRateLimitInteger(
    headers.get("x-ratelimit-reset"),
  );
  if (resetEpochSeconds !== null) {
    const nowEpochSeconds = Math.floor(Date.now() / 1000);
    if (resetEpochSeconds > nowEpochSeconds) {
      return (
        (resetEpochSeconds - nowEpochSeconds + rateLimitSafetySeconds) * 1000
      );
    }
  }

  return 1000 * 2 ** attempt;
}

function parsePrefixList(raw) {
  if (!raw) {
    return [];
  }

  return raw
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

async function loadDotEnvLocal() {
  const envPath = path.resolve(scriptDir, "../.env.local");

  try {
    await access(envPath);
  } catch {
    return;
  }

  const raw = await readFile(envPath, "utf8");

  for (const line of raw.split(/\r?\n/u)) {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
      continue;
    }

    const equalsIndex = trimmed.indexOf("=");
    const key = trimmed.slice(0, equalsIndex).trim();
    const value = trimmed.slice(equalsIndex + 1).trim();

    if (
      !key ||
      envFileDisallowedKeys.has(key) ||
      process.env[key] !== undefined
    ) {
      continue;
    }

    process.env[key] = value.replace(/^['\"]|['\"]$/g, "");
  }
}

function formatDateRange(startIso, endIso) {
  if (!startIso) {
    return "TBD";
  }

  const start = new Date(startIso);
  const end = endIso ? new Date(endIso) : new Date(startIso);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    throw new Error(
      `Unable to parse event dates: start=${startIso} end=${endIso ?? ""}`,
    );
  }

  const shortYear = String(start.getUTCFullYear()).slice(-2);
  const sameDay =
    start.getUTCFullYear() === end.getUTCFullYear() &&
    start.getUTCMonth() === end.getUTCMonth() &&
    start.getUTCDate() === end.getUTCDate();

  if (sameDay) {
    return `${start.getUTCMonth() + 1}/${start.getUTCDate()}/${shortYear}`;
  }

  const sameMonthYear =
    start.getUTCFullYear() === end.getUTCFullYear() &&
    start.getUTCMonth() === end.getUTCMonth();

  if (sameMonthYear) {
    return `${start.getUTCMonth() + 1}/${start.getUTCDate()}–${end.getUTCDate()}/${shortYear}`;
  }

  const endShortYear = String(end.getUTCFullYear()).slice(-2);
  return `${start.getUTCMonth() + 1}/${start.getUTCDate()}/${shortYear}–${end.getUTCMonth() + 1}/${end.getUTCDate()}/${endShortYear}`;
}

function formatLocation(location) {
  if (!location || typeof location !== "object") {
    return "";
  }

  const parts = [
    location.venue,
    location.city,
    location.region,
    location.country,
  ]
    .map((part) => (typeof part === "string" ? part.trim() : ""))
    .filter(Boolean);

  return parts.join(", ");
}

function toStatus(endIso) {
  if (!endIso) {
    return "tbd";
  }

  const end = new Date(endIso);
  if (Number.isNaN(end.getTime())) {
    return "tbd";
  }

  return end.getTime() < Date.now() ? "completed" : "upcoming";
}

function buildEventUrl(event) {
  if (typeof event?.url === "string" && event.url.startsWith("http")) {
    return event.url;
  }

  const sku = typeof event?.sku === "string" ? event.sku.trim() : "";
  const programSlug = "vex-robotics-competition";
  if (sku) {
    return `https://www.robotevents.com/robot-competitions/${programSlug}/${encodeURIComponent(sku)}.html`;
    // return `https://www.robotevents.com/robot-competitions?query=${encodeURIComponent(sku)}`;
  }

  return "https://www.robotevents.com";
}

function sortUniqueTeamNumbers(teamNumbers) {
  return [...new Set(teamNumbers.filter(Boolean))].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true }),
  );
}

async function fetchRobotEventsPage(url, token) {
  for (let attempt = 0; attempt <= apiMaxRetries; attempt += 1) {
    await maybeWaitForRateLimitWindow();

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    updateRateLimitStateFromHeaders(response.headers);

    if (response.ok) {
      return response.json();
    }

    const details = await response.text();
    const shouldRetry =
      response.status === 429 ||
      response.status === 502 ||
      response.status === 503 ||
      response.status === 403;

    if (shouldRetry && attempt < apiMaxRetries) {
      const retryAfterMs = getRateLimitBackoffMs(response.headers, attempt);
      logRateLimitHeaders(response.headers);
      console.log(
        `RobotEvents API backoff: status=${response.status}, attempt=${attempt + 1}/${apiMaxRetries}, waiting=${Math.ceil(retryAfterMs / 1000)}s before retry.`,
      );
      await delay(retryAfterMs);
      continue;
    }

    logRateLimitHeaders(response.headers);

    throw new Error(
      `RobotEvents API request failed (${url} -- ${response.status} ${response.statusText}): ${details}`,
    );
  }

  throw new Error("RobotEvents API request failed after retry attempts.");
}

function buildTeamNumberCandidates(prefixes, suffixDepth) {
  const candidates = new Set();

  for (const prefix of prefixes) {
    candidates.add(prefix);

    if (suffixDepth >= 1) {
      for (const c1 of suffixAlphabet) {
        candidates.add(`${prefix}${c1}`);
      }
    }

    if (suffixDepth >= 2) {
      for (const c1 of suffixAlphabet) {
        for (const c2 of suffixAlphabet) {
          candidates.add(`${prefix}${c1}${c2}`);
        }
      }
    }
  }

  return [...candidates];
}

async function fetchTeamsByNumbers(token, teamNumbers) {
  const matchesById = new Map();
  const batchSize = 25;

  for (let index = 0; index < teamNumbers.length; index += batchSize) {
    const batch = teamNumbers.slice(index, index + batchSize);
    const url = new URL(`${apiBaseUrl}/teams`);
    url.searchParams.set("per_page", "250");

    for (const number of batch) {
      url.searchParams.append("number[]", number);
    }

    const payload = await fetchRobotEventsPage(url, token);
    const data = Array.isArray(payload?.data) ? payload.data : [];

    for (const team of data) {
      if (Number.isInteger(team?.id)) {
        matchesById.set(team.id, team);
      }
    }
  }

  return [...matchesById.values()];
}

async function fetchEventsForTeam(token, seasonId, teamId) {
  const events = [];
  let page = 1;

  while (true) {
    const url = new URL(`${apiBaseUrl}/events`);
    url.searchParams.set("per_page", "250");
    url.searchParams.set("page", String(page));
    url.searchParams.append("team[]", String(teamId));

    if (seasonId) {
      url.searchParams.append("season[]", String(seasonId));
    }

    const payload = await fetchRobotEventsPage(url, token);
    const data = Array.isArray(payload?.data) ? payload.data : [];

    events.push(...data);

    const currentPage = Number(payload?.meta?.current_page ?? page);
    const lastPage = Number(payload?.meta?.last_page ?? currentPage);

    if (currentPage >= lastPage || data.length === 0) {
      break;
    }

    page += 1;
  }

  return events;
}

async function fetchAwardsForTeam(token, seasonId, teamId) {
  const awards = [];
  let page = 1;

  while (true) {
    const url = new URL(`${apiBaseUrl}/teams/${teamId}/awards`);
    url.searchParams.set("per_page", "250");
    url.searchParams.set("page", String(page));

    if (seasonId) {
      url.searchParams.append("season[]", String(seasonId));
    }

    const payload = await fetchRobotEventsPage(url, token);
    const data = Array.isArray(payload?.data) ? payload.data : [];

    awards.push(...data);

    const currentPage = Number(payload?.meta?.current_page ?? page);
    const lastPage = Number(payload?.meta?.last_page ?? currentPage);

    if (currentPage >= lastPage || data.length === 0) {
      break;
    }

    page += 1;
  }

  return awards;
}

function pickAwardIcon(title) {
  const lower = title.toLowerCase();

  if (lower.includes("excellence") || lower.includes("champion")) {
    return "🏆";
  }

  if (lower.includes("design") || lower.includes("innovat")) {
    return "⚙️";
  }

  if (lower.includes("skills") || lower.includes("autonomous")) {
    return "🥇";
  }

  if (lower.includes("judg") || lower.includes("nominee")) {
    return "🎖️";
  }

  return "🤖";
}

function normalizeEvent(event, index, teamNumbers) {
  if (!event || typeof event !== "object" || Array.isArray(event)) {
    throw new Error(`Event ${index + 1} must be an object.`);
  }

  const date = formatDateRange(event.start, event.end);
  const name = typeof event.name === "string" ? event.name.trim() : "";
  const location = formatLocation(event.location);
  const status = toStatus(event.end);

  if (!date) {
    throw new Error(`Event ${index + 1} is missing a date.`);
  }

  if (!name) {
    throw new Error(`Event ${index + 1} is missing a name.`);
  }

  if (!allowedStatuses.has(status)) {
    throw new Error(
      `Event ${index + 1} has invalid status \"${status}\". Use upcoming, completed, or tbd.`,
    );
  }

  return {
    date,
    name,
    location,
    status,
    teams: sortUniqueTeamNumbers(Array.isArray(teamNumbers) ? teamNumbers : []),
    eventUrl: buildEventUrl(event),
  };
}

function normalizeTeam(team, index) {
  if (!team || typeof team !== "object" || Array.isArray(team)) {
    throw new Error(`Team ${index + 1} must be an object.`);
  }

  const id = Number.isInteger(team.id) ? team.id : null;
  const number = typeof team.number === "string" ? team.number.trim() : "";

  if (id === null || !number) {
    throw new Error(`Team ${index + 1} is missing id or number.`);
  }

  return {
    id,
    number,
    teamName: typeof team.team_name === "string" ? team.team_name.trim() : "",
    robotName:
      typeof team.robot_name === "string" ? team.robot_name.trim() : "",
    organization:
      typeof team.organization === "string" ? team.organization.trim() : "",
    grade: typeof team.grade === "string" ? team.grade.trim() : "",
    registered: Boolean(team.registered),
    location: {
      city:
        typeof team.location?.city === "string"
          ? team.location.city.trim()
          : "",
      region:
        typeof team.location?.region === "string"
          ? team.location.region.trim()
          : "",
      country:
        typeof team.location?.country === "string"
          ? team.location.country.trim()
          : "",
    },
  };
}

function getEventStartYear(event) {
  const parsedDate = Date.parse(event?.start ?? "");

  if (!Number.isFinite(parsedDate) || parsedDate <= 0) {
    return null;
  }

  return new Date(parsedDate).getUTCFullYear();
}

function createTeamStats({ yearsActive, teamsThisSeason, awardsWon }) {
  const safeYearsActive = Number.isInteger(yearsActive)
    ? Math.max(yearsActive, 1)
    : 1;
  const safeTeamsThisSeason = Number.isInteger(teamsThisSeason)
    ? Math.max(teamsThisSeason, 0)
    : 0;
  const safeAwardsWon = Number.isInteger(awardsWon)
    ? Math.max(awardsWon, 0)
    : 0;

  return [
    { value: `${safeYearsActive}+`, label: "Years Active" },
    { value: String(safeTeamsThisSeason), label: "Teams This Season" },
    { value: "100+", label: "Students Served" },
    { value: `${safeAwardsWon}+`, label: "Awards Won" },
    { value: "100%", label: "STEM Focused" },
  ];
}

async function main() {
  await loadDotEnvLocal();

  const token = process.env.ROBOTEVENTS_API_TOKEN;
  if (!token) {
    throw new Error(
      "Missing ROBOTEVENTS_API_TOKEN. Set it in the runtime environment.",
    );
  }

  const seasonIdRaw = process.env.ROBOTEVENTS_SEASON_ID?.trim();
  const seasonId = seasonIdRaw ? Number(seasonIdRaw) : null;

  if (seasonIdRaw && !Number.isInteger(seasonId)) {
    throw new Error("ROBOTEVENTS_SEASON_ID must be an integer when provided.");
  }

  const suffixDepthRaw = process.env.ROBOTEVENTS_TEAM_SUFFIX_DEPTH?.trim();
  const suffixDepth = suffixDepthRaw
    ? Number(suffixDepthRaw)
    : defaultSuffixDepth;

  if (!Number.isInteger(suffixDepth) || suffixDepth < 0 || suffixDepth > 2) {
    throw new Error(
      "ROBOTEVENTS_TEAM_SUFFIX_DEPTH must be an integer between 0 and 2.",
    );
  }

  const envPrefixList = parsePrefixList(process.env.ROBOTEVENTS_TEAM_PREFIXES);
  const legacyPrefix = process.env.ROBOTEVENTS_TEAM_PREFIX?.trim();
  const configPrefixes = Array.isArray(TEAM_NUMBER_PREFIXES)
    ? TEAM_NUMBER_PREFIXES.map((prefix) => String(prefix).trim()).filter(
        Boolean,
      )
    : [];

  const teamPrefixes = envPrefixList.length
    ? envPrefixList
    : legacyPrefix
      ? [legacyPrefix]
      : configPrefixes;

  if (teamPrefixes.length === 0) {
    throw new Error(
      "No team prefixes configured. Set TEAM_NUMBER_PREFIXES in src/config/club.js or ROBOTEVENTS_TEAM_PREFIXES in environment.",
    );
  }

  const teamCandidates = buildTeamNumberCandidates(teamPrefixes, suffixDepth);
  const myTeams = await fetchTeamsByNumbers(token, teamCandidates);

  if (myTeams.length === 0) {
    throw new Error(
      `No teams were found for prefixes [${teamPrefixes.join(", ")}] using suffix depth ${suffixDepth}.`,
    );
  }

  const teamIds = [
    ...new Set(myTeams.map((team) => team.id).filter(Number.isInteger)),
  ];

  if (teamIds.length === 0) {
    throw new Error("No valid team IDs were found for the matched teams.");
  }

  const normalizedTeams = myTeams
    .map(normalizeTeam)
    .sort((a, b) =>
      a.number.localeCompare(b.number, undefined, { numeric: true }),
    );

  const teamNumberById = new Map(
    normalizedTeams.map((team) => [team.id, team.number]),
  );
  const eventsById = new Map();
  const eventTeamNumbers = new Map();

  for (const teamId of teamIds) {
    const teamEvents = await fetchEventsForTeam(token, seasonId, teamId);
    const teamNumber = teamNumberById.get(teamId);

    for (const event of teamEvents) {
      if (!event || !Number.isInteger(event.id)) {
        continue;
      }

      if (!eventsById.has(event.id)) {
        eventsById.set(event.id, event);
      }

      if (!eventTeamNumbers.has(event.id)) {
        eventTeamNumbers.set(event.id, []);
      }

      if (teamNumber) {
        eventTeamNumbers.get(event.id).push(teamNumber);
      }
    }
  }

  const parsed = [...eventsById.values()];
  const eventById = new Map(parsed.map((event) => [event.id, event]));

  const normalized = parsed
    .sort((a, b) => {
      const aStart = Date.parse(a?.start ?? "");
      const bStart = Date.parse(b?.start ?? "");

      if (Number.isNaN(aStart) && Number.isNaN(bStart)) {
        return 0;
      }

      if (Number.isNaN(aStart)) {
        return 1;
      }

      if (Number.isNaN(bStart)) {
        return -1;
      }

      return aStart - bStart;
    })
    .map((event, index) =>
      normalizeEvent(event, index, eventTeamNumbers.get(event.id)),
    );

  const awards = [];
  for (const teamId of teamIds) {
    const teamAwards = await fetchAwardsForTeam(token, seasonId, teamId);
    awards.push(
      ...teamAwards.map((award) => ({
        ...award,
        teamId,
      })),
    );
  }

  let oldestCompetitionYear = null;
  for (const teamId of teamIds) {
    const allTeamEvents = await fetchEventsForTeam(token, null, teamId);

    for (const event of allTeamEvents) {
      const year = getEventStartYear(event);
      if (!year) {
        continue;
      }

      if (oldestCompetitionYear === null || year < oldestCompetitionYear) {
        oldestCompetitionYear = year;
      }
    }
  }

  const currentYear = new Date().getUTCFullYear();
  const yearsActive =
    oldestCompetitionYear === null
      ? 1
      : Math.max(1, currentYear - oldestCompetitionYear + 1);

  const allAwards = [];
  for (const teamId of teamIds) {
    const teamAwardsAllSeasons = await fetchAwardsForTeam(token, null, teamId);
    allAwards.push(
      ...teamAwardsAllSeasons.map((award) => ({
        ...award,
        teamId,
      })),
    );
  }

  const uniqueAwardsWon = new Set(
    allAwards.map((award, index) => {
      if (Number.isInteger(award?.id)) {
        return `${award.id}:${award.teamId}`;
      }

      const title = typeof award?.title === "string" ? award.title.trim() : "";
      const eventId = Number.isInteger(award?.event?.id)
        ? award.event.id
        : "na";
      return `${award.teamId}:${eventId}:${title}:${index}`;
    }),
  );

  const teamsThisSeason = normalizedTeams.filter(
    (team) => team.registered,
  ).length;
  const teamStats = createTeamStats({
    yearsActive,
    teamsThisSeason,
    awardsWon: uniqueAwardsWon.size,
  });

  const recentAccomplishments = awards
    .map((award) => {
      const title = typeof award?.title === "string" ? award.title.trim() : "";
      if (!title) {
        return null;
      }

      const teamNumber = teamNumberById.get(award.teamId) ?? "";
      const eventId = award?.event?.id;
      const event = Number.isInteger(eventId) ? eventById.get(eventId) : null;
      const eventName =
        typeof award?.event?.name === "string"
          ? award.event.name.trim()
          : "Event";
      const sortDate = Date.parse(event?.start ?? "") || 0;
      const year =
        Number.isFinite(sortDate) && sortDate > 0
          ? new Date(sortDate).getUTCFullYear()
          : "Recent";

      return {
        key: `${award.id}-${award.teamId}`,
        icon: pickAwardIcon(title),
        text: `${title} — ${eventName}${teamNumber ? ` (${teamNumber})` : ""}`,
        year,
        sortDate,
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.sortDate - a.sortDate)
    .slice(0, 30)
    .map(({ key, icon, text, year }) => ({ key, icon, text, year }));

  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(
    outputPath,
    `${JSON.stringify(normalized, null, 2)}\n`,
    "utf8",
  );
  await writeFile(
    teamsOutputPath,
    `${JSON.stringify(normalizedTeams, null, 2)}\n`,
    "utf8",
  );
  await writeFile(
    accomplishmentsOutputPath,
    `${JSON.stringify(recentAccomplishments, null, 2)}\n`,
    "utf8",
  );
  await writeFile(
    teamStatsOutputPath,
    `export default ${JSON.stringify(teamStats, null, 2)};\n`,
    "utf8",
  );

  console.log(
    `Generated ${path.relative(process.cwd(), outputPath)}, ${path.relative(process.cwd(), teamsOutputPath)}, ${path.relative(process.cwd(), accomplishmentsOutputPath)}, and ${path.relative(process.cwd(), teamStatsOutputPath)} from RobotEvents API (${normalized.length} events, ${recentAccomplishments.length} accomplishments across ${teamIds.length} teams, ${teamStats.find((stat) => stat.label === "Awards Won")?.value ?? "0"} awards, ${teamStats.find((stat) => stat.label === "Years Active")?.value ?? "1+"} active years).`,
  );

  console.log(
    `RobotEvents lowest x-ratelimit-remaining observed: ${rateLimitReportState.minRemainingSeen ?? "unknown"}.`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});

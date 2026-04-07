/**
 * Robot Events API v2 client
 *
 * Documentation: https://www.robotevents.com/api/v2
 *
 * Authentication: Set VITE_ROBOTEVENTS_API_KEY in your .env file.
 * Without an API key the endpoints still work but are heavily rate-limited.
 */

import { COMPETITION_CALENDAR_LINK } from '../config/club.js'

const BASE_URL = 'https://www.robotevents.com/api/v2'

// ---------------------------------------------------------------------------
// Low-level helpers
// ---------------------------------------------------------------------------

function buildHeaders() {
  const headers = { Accept: 'application/json' }
  const apiKey = import.meta.env.VITE_ROBOTEVENTS_API_KEY
  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`
  }
  return headers
}

/**
 * Perform a single GET request against the Robot Events API.
 * @param {string} endpoint  - Path after /api/v2, e.g. '/teams'
 * @param {Object} [params]  - Query parameters; arrays are serialised as key[]=v
 * @returns {Promise<Object>} Parsed JSON response body
 */
async function apiFetch(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`)

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach(v => url.searchParams.append(`${key}[]`, String(v)))
    } else if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value))
    }
  }

  const response = await fetch(url.toString(), { headers: buildHeaders() })

  if (!response.ok) {
    throw new Error(
      `Robot Events API error: ${response.status} ${response.statusText} (${url.toString()})`
    )
  }

  return response.json()
}

/**
 * Fetch every page of results for a paginated endpoint.
 * @param {string} endpoint
 * @param {Object} [params]
 * @returns {Promise<Object[]>} Concatenated array of all result objects
 */
async function fetchAllPages(endpoint, params = {}) {
  const results = []
  let page = 1
  let lastPage = 1

  do {
    const data = await apiFetch(endpoint, { ...params, page, per_page: 250 })
    results.push(...(data.data ?? []))
    lastPage = data.meta?.last_page ?? 1
    page++
  } while (page <= lastPage)

  return results
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Fetch all registered VRC teams whose numbers begin with any of the given
 * prefixes (e.g. '45434' matches '45434A', '45434B', etc.).
 *
 * @param {string[]} prefixes - Team number prefixes from TEAM_NUMBERS config
 * @returns {Promise<Object[]>} Array of Robot Events team objects
 */
export async function fetchTeams(prefixes) {
  const seen = new Set()
  const allTeams = []

  for (const prefix of prefixes) {
    const teams = await fetchAllPages('/teams', {
      number: prefix,
      registered: true,
      program: [1], // 1 = VEX Robotics Competition (VRC)
    })

    for (const team of teams) {
      // Only include teams whose number actually starts with the prefix and
      // de-duplicate across multiple prefix lookups.
      if (String(team.number).startsWith(prefix) && !seen.has(team.id)) {
        seen.add(team.id)
        allTeams.push(team)
      }
    }
  }

  return allTeams
}

/**
 * Fetch events for the supplied Robot Events team IDs.
 *
 * @param {number[]} teamIds  - Internal RE team IDs (team.id)
 * @param {Object}   [params] - Extra query parameters (e.g. season filters)
 * @returns {Promise<Object[]>} Array of Robot Events event objects
 */
export async function fetchTeamEvents(teamIds, params = {}) {
  if (teamIds.length === 0) return []

  return fetchAllPages('/events', {
    team: teamIds,
    program: [1], // VRC only
    ...params,
  })
}

/**
 * Return upcoming events for all teams matching the configured prefixes,
 * sorted ascending by start date.
 *
 * @param {string[]} prefixes - Team number prefixes from TEAM_NUMBERS config
 * @returns {Promise<Object[]>} Sorted array of Robot Events event objects
 */
export async function fetchUpcomingEvents(prefixes) {
  const teams = await fetchTeams(prefixes)
  const teamIds = teams.map(t => t.id)

  const events = await fetchTeamEvents(teamIds, {
    'start[gte]': new Date().toISOString().split('T')[0], // YYYY-MM-DD
  })

  // De-duplicate events (multiple team members attend the same event)
  const unique = new Map()
  for (const event of events) {
    if (!unique.has(event.id)) unique.set(event.id, event)
  }

  return [...unique.values()].sort(
    (a, b) => new Date(a.start) - new Date(b.start)
  )
}

// ---------------------------------------------------------------------------
// Normalisation helpers
// ---------------------------------------------------------------------------

/**
 * Format a start/end date pair into a human-readable string matching the
 * site's existing competition schedule style (e.g. "11/8/25" or "1/21–22/26").
 *
 * @param {Date} start
 * @param {Date} end
 * @returns {string}
 */
export function formatEventDate(start, end) {
  const sameDay = start.toDateString() === end.toDateString()
  const yy = String(start.getFullYear()).slice(-2)

  if (sameDay) {
    return `${start.getMonth() + 1}/${start.getDate()}/${yy}`
  }

  // Multi-day event – show a compact range
  const startPart = `${start.getMonth() + 1}/${start.getDate()}`
  const endYY = String(end.getFullYear()).slice(-2)

  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    // Same month: "1/21–22/26"
    return `${startPart}–${end.getDate()}/${endYY}`
  }

  // Different months: "11/29–12/1/25"
  return `${startPart}–${end.getMonth() + 1}/${end.getDate()}/${endYY}`
}

/**
 * Convert a Robot Events event object into the site's internal competition
 * entry format: { date, name, location, status, url }.
 *
 * @param {Object} event - Raw Robot Events event object
 * @returns {{ date: string, name: string, location: string, status: string, url: string }}
 */
export function normalizeEvent(event) {
  const start = new Date(event.start)
  // If the end value is a date-only string (no time component), treat it as
  // end-of-day to avoid marking events as "completed" for users whose local
  // day hasn't ended yet.
  const rawEnd = event.end ?? event.start
  const end = new Date(rawEnd)
  if (rawEnd && !String(rawEnd).includes('T')) {
    end.setHours(23, 59, 59, 999)
  }
  const now = new Date()

  let status = 'upcoming'
  if (end < now) {
    status = 'completed'
  }

  // Build a human-readable location string
  const loc = event.location ?? {}
  const locationParts = [loc.venue, loc.city, loc.region]
    .map(p => (p ?? '').trim())
    .filter(Boolean)
  const location = locationParts.join(', ')

  return {
    date: formatEventDate(start, end),
    name: event.name,
    location,
    status,
    url: event.sku
      ? `https://www.robotevents.com/robot-competitions/vex-robotics-competition/${event.sku}.html`
      : COMPETITION_CALENDAR_LINK,
  }
}

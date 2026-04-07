// Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/config/club.js
//
// ============================================================
//  CLUB CONFIGURATION FILE — Beavercreek Robotics Club
// ============================================================
//
// This is the central place for all values that describe the
// club and may change from season to season, year to year, or
// as board membership changes.
//
// HOW TO UPDATE:
//   - Edit the relevant value below and save.
//   - Run `npm run build` (or let CI build automatically) to
//     publish the change to the live site.
//   - No other files need to be touched for routine updates.
//
// For a full guide, see CONTENT.md at the repo root.
// ============================================================

// ── Club Identity ────────────────────────────────────────────
export const CLUB_NAME = 'Beavercreek Robotics Club'

/** Short tag shown next to the logo (e.g. "VEX Robotics") */
export const CLUB_TAGLINE = 'VEX Robotics Competition'

/** The competition program this club participates in */
export const COMPETITION_PROGRAM = 'VEX Robotics Competition'
export const COMPETITION_PROGRAM_SHORT = 'VRC'

/** Non-profit status note shown in the footer */
export const NONPROFIT_STATUS = 'Beavercreek Robotics Club is a registered 501(c)(3) nonprofit organization.'

// ── Contact & Location ───────────────────────────────────────
export const CONTACT_EMAIL = 'beavercreekhsroboticsclub@gmail.com'

/** mailing / meeting address */
export const ADDRESS_LINE1 = 'Beavercreek High School'
export const ADDRESS_LINE2 = '2660 Dayton-Xenia Rd'
export const ADDRESS_CITY_STATE_ZIP = 'Beavercreek, OH 45434'
export const ADDRESS_FULL = `${ADDRESS_LINE1}, ${ADDRESS_LINE2}, ${ADDRESS_CITY_STATE_ZIP}`

// ── Social Media (set to null or '' to hide a platform) ──────
export const SOCIAL_INSTAGRAM = '' // set to your Instagram URL to show the icon (e.g. 'https://www.instagram.com/beavercreekrobotics')
export const SOCIAL_FACEBOOK  = '' // set to your Facebook page URL, or leave blank to hide
export const SOCIAL_YOUTUBE   = '' // set to your YouTube channel URL, or leave blank to hide
export const SOCIAL_TWITTER   = '' // set to your Twitter/X URL, or leave blank to hide

// ── Season ──────────────────────────────────────────────────
/** Current competition year label, e.g. "2025–26" */
export const CURRENT_SEASON_YEAR = '2025–26'

/** Name of the current game/challenge */
export const CURRENT_GAME_NAME = 'Push Back'

/** Link to official game manual / reveal video */
export const CURRENT_GAME_LINK = 'https://content.vexrobotics.com/docs/25-26/v5rc-push-back/docs/Push-Back-1.0.pdf'

// ── Competition Schedule ─────────────────────────────────────
// Each entry: { date, name, location, status }
// status: 'upcoming' | 'completed' | 'tbd'
export const COMPETITION_SCHEDULE = [
  { date: '10/25/25',    name: 'North Union High School Qualifier',    location: '',         status: 'upcoming' },
  { date: '11/1/25',     name: 'North Union MS V5 Qualifier',           location: '',         status: 'upcoming' },
  { date: '11/8/25',     name: 'Dan Spak Memorial HS',                  location: '',         status: 'upcoming' },
  { date: '11/14–15/25', name: 'Smoky Mountain Signature Event',        location: '',         status: 'upcoming' },
  { date: '11/15/25',    name: 'King of the Hill HS',                   location: '',         status: 'upcoming' },
  { date: '11/21–22/25', name: 'Speedway Signature Event',              location: '',         status: 'upcoming' },
  { date: '12/6/25',     name: 'The Kennedy Group HS',                  location: '',         status: 'upcoming' },
  { date: '12/13/25',    name: 'Highland Blended / Loveland Blended',  location: '',         status: 'upcoming' },
  { date: '1/3/26',      name: 'Mt. Vernon HS',                         location: '',         status: 'upcoming' },
  { date: '1/10/26',     name: 'Picktown HS',                           location: '',         status: 'upcoming' },
  { date: '1/21–22/26',  name: 'Kalahari MS Signature Event',           location: '',         status: 'upcoming' },
  { date: '1/23–24/26',  name: 'Kalahari HS Signature Event',           location: '',         status: 'upcoming' },
  { date: '1/30–31/26',  name: 'Gateway Signature Event',               location: '',         status: 'upcoming' },
  { date: '2/7/26',      name: 'Washington Courthouse Blended',         location: '',         status: 'upcoming' },
  { date: '2/14/26',     name: 'The Kennedy Group 2 HS / Milford HS',  location: '',         status: 'upcoming' },
  { date: '2/21/26',     name: 'Showdown Peak / Southwest Oaks',       location: '',         status: 'upcoming' },
]

/** External link for full competition calendar */
export const COMPETITION_CALENDAR_LINK = 'https://www.robotevents.com'
export const COMPETITION_CALENDAR_LABEL = 'Robot Events — Full Schedule'

// ── Meeting Schedule ─────────────────────────────────────────
// Used on the Contact and For-Parents pages
export const MEETING_SCHEDULE = [
  {
    period: 'Competition Season (Fall–Spring)',
    days: 'Varies by event calendar',
    time: 'Check with team leads for current meeting dates',
  },
  {
    period: 'Off-Season (Summer)',
    days: 'Periodic workshops',
    time: 'Announced via team email / social media',
  },
]

// ── Board of Directors ────────────────────────────────────────
// Update these names each year during officer elections
export const BOARD = {
  president:       'Olivia Beal',
  vicePresident:   'Deanna Stevens',
  treasurer:       'Lea Pochet',
  sponsorship:     'Gina Woodard',
  logistics:       'Haisong Ye',
  registrar:       'Rosalind Robbins',
  communications:  'Nicole Seflers',
  campCoordinator: 'Deanna Stevens',
  leagueCoordinator: 'Kari Deger',
}

// ── School Advisors ───────────────────────────────────────────
export const SCHOOL_ADVISORS = {
  highSchool: 'Breck Woodard & Ellen Fifarek',
}

// ── Sponsorship Contact ───────────────────────────────────────
/** Name of the person handling sponsorship inquiries */
export const SPONSORSHIP_CONTACT_NAME = BOARD.sponsorship  // Gina Woodard

/** Email address for sponsorship inquiries (defaults to club email) */
export const SPONSORSHIP_CONTACT_EMAIL = CONTACT_EMAIL

// ── Sponsorship Tiers ─────────────────────────────────────────
// Adjust amounts and benefits as needed each season
export const SPONSORSHIP_TIERS = [
  {
    icon: '🥉',
    name: 'Bronze',
    amount: '$500+',
    highlight: false,
    cta: 'Become a Bronze Sponsor',
    benefits: [
      'Name and link on team website',
      'Thank-you post on social media',
      'Tax receipt provided',
      'Periodic team update emails',
    ],
  },
  {
    icon: '🥈',
    name: 'Silver',
    amount: '$1,000+',
    highlight: false,
    cta: 'Become a Silver Sponsor',
    benefits: [
      'All Bronze benefits',
      'Logo on competition robot',
      'Company banner at competitions',
      'Logo on team materials',
      'Personal thank-you from team',
    ],
  },
  {
    icon: '🥇',
    name: 'Gold',
    amount: '$2,500+',
    highlight: true,
    cta: 'Become a Gold Sponsor',
    benefits: [
      'All Silver benefits',
      'Logo on team shirts (worn at events)',
      'Feature in team newsletter',
      'Team visit / facility tour available',
      'Prominent website placement',
      'End-of-season impact report',
    ],
  },
  {
    icon: '💎',
    name: 'Platinum',
    amount: '$5,000+',
    highlight: false,
    cta: 'Become a Platinum Sponsor',
    benefits: [
      'All Gold benefits',
      'Largest logo placement on robot and shirts',
      'VIP experience at competitions',
      'Opportunity to address the team',
      'Dedicated social media spotlight',
      'Annual partner recognition plaque',
    ],
  },
]

// ── Team Statistics (shown on Home and other pages) ───────────
// Update these periodically to reflect current team achievements
export const TEAM_STATS = [
  { value: '10+', label: 'Years Active' },
  { value: '100+', label: 'Students Served' },
  { value: '30+', label: 'Awards Won' },
  { value: '100%', label: 'STEM Focused' },
]

// ── Footer copy ───────────────────────────────────────────────
export const FOOTER_DESCRIPTION =
  'Empowering the next generation of engineers through competitive robotics, ' +
  'hands-on STEM education, and real-world problem solving.'

export const COPYRIGHT_YEAR = new Date().getFullYear()

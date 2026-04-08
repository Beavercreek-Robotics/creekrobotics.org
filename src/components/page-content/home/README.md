# Home Page Section Components

This folder contains the section-level components that make up the home page content assembled by `src/components/page-content/HomePageContent.vue`.

## Files

### `HeroComponent.vue`
Renders the home page hero banner by configuring the shared `HeroSection` component with the home page headline, subtitle, and primary calls to action.

### `AboutComponent.vue`
Renders the "About Us / Who We Are" section, including the club overview copy, mission statement callout, and supporting image.

### `StatsComponent.vue`
Renders the home page team statistics band using `TEAM_STATS` from `src/config/club.js`.

### `AudienceComponent.vue`
Renders the "Who Are You?" audience card grid with links for parents, students, engineers, and sponsors.

### `SeasonComponent.vue`
Renders the season overview area, including:
- paginated competition schedule cards
- paginated recent accomplishments
- highlighted team numbers inside accomplishment text
- link to the full Robot Events calendar

### `CtaComponent.vue`
Renders the closing home page call-to-action section with links to contact the club or learn more.

## Notes

- Keep section-specific markup, logic, and scoped styles in the component that owns the section.
- Shared site-wide configuration values should continue to come from `src/config/club.js`.
- Generated Robot Events data is consumed from `src/generated/` where needed.

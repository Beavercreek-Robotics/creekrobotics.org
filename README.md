# creekrobotics.org

The official website for **Beavercreek Robotics — FRC Team 5**, built with [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/).

## Quick Start

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build

```bash
npm run build     # production build → ./dist/
npm run preview   # preview production build
```

## Project Structure

| Path | Description |
|------|-------------|
| `src/views/` | Page components (Home, Parents, Students, Engineers, Sponsors, Contact) |
| `src/components/` | Shared components (NavBar, Footer, HeroSection, CardGrid) |
| `src/router/index.js` | Vue Router configuration |
| `src/assets/images/` | Images and SVG assets |
| `src/style.css` | Global styles and CSS design tokens |

## Pages

| URL | Audience | File |
|-----|----------|------|
| `/` | Everyone | `src/views/HomeView.vue` |
| `/parents` | Parents enrolling students | `src/views/ForParentsView.vue` |
| `/students` | Students considering joining | `src/views/ForStudentsView.vue` |
| `/engineers` | Engineers/mentors | `src/views/ForEngineersView.vue` |
| `/sponsors` | Local businesses / sponsors | `src/views/ForSponsorsView.vue` |
| `/contact` | Everyone | `src/views/ContactView.vue` |

## Content Updates

See **[CONTENT.md](./CONTENT.md)** for a plain-English guide to updating text, images, competition schedules, sponsor tiers, and more — no coding knowledge required for most changes.

## Tech Stack

- [Vue 3](https://vuejs.org/) with Composition API (`<script setup>`)
- [Vite](https://vitejs.dev/) build tool
- [Vue Router 4](https://router.vuejs.org/)
- Inter font (Google Fonts)
- No additional CSS framework — custom CSS with design tokens

## Source Links

Every view and component contains a comment linking back to its source file on GitHub:
```
<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/views/HomeView.vue -->
```

## License

See [LICENSE](./LICENSE).

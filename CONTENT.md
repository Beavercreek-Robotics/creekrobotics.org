# Beavercreek Robotics Website — Content Update Guide

This document explains how to update the website content for each page. You do not need to know how to code to make most content updates — just edit the appropriate file in the `src/` directory.

**GitHub repository:** https://github.com/Beavercreek-Robotics/creekrobotics.org

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [How to Run & Build](#how-to-run--build)
3. [Updating Each Page](#updating-each-page)
   - [Home Page](#home-page)
   - [For Parents](#for-parents)
   - [For Students](#for-students)
   - [For Engineers / Mentors](#for-engineers--mentors)
   - [For Sponsors](#for-sponsors)
   - [Contact Page](#contact-page)
4. [Updating Components](#updating-components)
   - [Navigation Bar](#navigation-bar)
   - [Footer](#footer)
5. [Adding & Replacing Images](#adding--replacing-images)
6. [Changing Colors & Fonts](#changing-colors--fonts)
7. [Deployment](#deployment)

---

## Project Structure

```
creekrobotics.org/
├── public/
│   └── favicon.svg            ← Team icon shown in browser tab
├── src/
│   ├── assets/
│   │   └── images/            ← All images used across the site
│   │       ├── hero-robot.svg        (placeholder — replace with real photo)
│   │       ├── team-photo.svg        (placeholder — replace with real photo)
│   │       ├── competition.svg       (placeholder — replace with real photo)
│   │       └── stem-education.svg    (placeholder — replace with real photo)
│   ├── components/
│   │   ├── NavBar.vue         ← Top navigation bar (all pages)
│   │   ├── AppFooter.vue      ← Bottom footer (all pages)
│   │   ├── HeroSection.vue    ← Reusable hero/banner component
│   │   └── CardGrid.vue       ← Reusable card grid component
│   ├── router/
│   │   └── index.js           ← URL routing configuration
│   ├── views/
│   │   ├── HomeView.vue       ← Home / Landing page  (/)
│   │   ├── ForParentsView.vue ← For Parents page      (/parents)
│   │   ├── ForStudentsView.vue← For Students page     (/students)
│   │   ├── ForEngineersView.vue← For Engineers page   (/engineers)
│   │   ├── ForSponsorsView.vue← For Sponsors page     (/sponsors)
│   │   └── ContactView.vue    ← Contact page          (/contact)
│   ├── App.vue                ← Root app wrapper
│   ├── main.js                ← Application entry point
│   └── style.css              ← Global styles and design tokens
├── index.html                 ← HTML entry point
├── package.json               ← Dependencies
├── vite.config.js             ← Build configuration
├── CONTENT.md                 ← This file!
└── README.md                  ← Developer setup guide
```

---

## How to Run & Build

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or newer

### Development (live preview)
```bash
npm install       # only needed once
npm run dev       # start local dev server at http://localhost:5173
```

### Production Build
```bash
npm run build     # outputs to ./dist/
npm run preview   # preview the production build locally
```

---

## Updating Each Page

### Home Page
**File:** `src/views/HomeView.vue`
**URL:** `/`

#### Team statistics (the "20+ Years Active" block)
Find the `stats` array in the `<script setup>` section and update the values:
```js
const stats = [
  { value: '20+', label: 'Years Active' },    // ← update year count
  { value: '200+', label: 'Students Served' }, // ← update student count
  { value: '50+', label: 'Awards Won' },        // ← update award count
  { value: '100%', label: 'STEM Focused' },
]
```

#### Hero headline and subtitle
Find the `<HeroSection>` tag near the top of the `<template>` section:
```html
<HeroSection
  title="Building Tomorrow's Engineers Today"   ← change this
  subtitle="Beavercreek Robotics — FRC Team 5…" ← change this
  ...
/>
```

#### Competition schedule
Find the `<ul class="competition-list">` block and update the competition dates, names, and statuses.

#### Achievements list
Find `<ul class="achievement-list">` and update the list items.

#### About section text
Find the `<section class="section bg-white">` block and update the paragraph text.

---

### For Parents
**File:** `src/views/ForParentsView.vue`
**URL:** `/parents`

#### Enrollment steps
Find the `enrollmentSteps` array in `<script setup>`:
```js
const enrollmentSteps = [
  { step: '01', title: 'Attend an Info Night', description: '...' },
  ...
]
```
Update each step's `title` and `description`.

#### Meeting schedule
Find the schedule table in the `<template>` and update days, times, and descriptions.

#### Costs table
Find the `costs` array and update amounts and line items.

#### FAQ accordion
Find the `faqs` array and add, remove, or edit question/answer pairs:
```js
const faqs = [
  { q: 'Does my child need coding experience?', a: '...' },
  ...
]
```

---

### For Students
**File:** `src/views/ForStudentsView.vue`
**URL:** `/students`

#### Learning tracks
Find the `tracks` array and update the four tracks (Mechanical, Electrical, Software, Business):
```js
const tracks = [
  {
    icon: '⚙️',
    title: 'Mechanical Engineering',
    description: '...',
    skills: ['CAD Design', 'Machining', ...],
  },
  ...
]
```

#### Student testimonials
Find the `testimonials` array and update with real student quotes (use first name and graduation year only for privacy):
```js
const testimonials = [
  { quote: '...', name: 'Alex J.', year: "Class of '25", role: 'Lead Programmer' },
  ...
]
```

#### How to join steps
Find the `joinSteps` array and update the steps with current information (registration links, deadlines, etc.).

---

### For Engineers / Mentors
**File:** `src/views/ForEngineersView.vue`
**URL:** `/engineers`

#### Mentorship types
Find the `mentorTypes` array and update the types of mentorship available.

#### Time commitment details
Find the `commitments` array and update hours per week and descriptions.

#### Impact statistics
Find the `impactStats` array in `<script setup>` and update the numbers.

#### Mentor testimonials
Find the `mentorTestimonials` array and update with real mentor quotes.

---

### For Sponsors
**File:** `src/views/ForSponsorsView.vue`
**URL:** `/sponsors`

#### Sponsorship tiers
Find the `tiers` array and update amounts and benefits:
```js
const tiers = [
  {
    icon: '🥉',
    name: 'Bronze',
    amount: '$500+',   ← update minimum amount
    benefits: [
      'Name and link on team website',
      ...              ← add/remove benefits
    ],
  },
  ...
]
```

#### Current sponsors
The `<!-- Current Sponsors -->` section shows placeholder slots. Replace the placeholder grid with actual sponsor logo `<img>` tags wrapped in `<a>` links. Example:
```html
<div class="sponsors-grid">
  <a href="https://www.sponsorcompany.com" target="_blank" rel="noopener">
    <img src="../assets/images/sponsors/acme-logo.png" alt="Acme Engineering" />
  </a>
</div>
```
Place sponsor logos in `src/assets/images/sponsors/`.

#### Budget breakdown bars
Find the `budgetItems` array and update the percentages if your budget allocation changes.

---

### Contact Page
**File:** `src/views/ContactView.vue`
**URL:** `/contact`

#### Meeting location and hours
Find the contact info section and update:
- School address
- Meeting days and times
- Email address
- Phone number (if applicable)

#### Social media links
Find the social link `<a>` tags and replace `href="#"` with actual URLs.

---

## Updating Components

### Navigation Bar
**File:** `src/components/NavBar.vue`
**GitHub:** https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/components/NavBar.vue

To add a new page to the navigation, add a new `<RouterLink>` in the `.nav-links` div:
```html
<RouterLink to="/new-page" @click="closeMenu" class="nav-link">New Page</RouterLink>
```

To update the team name or tagline shown in the header, find `.brand-name` and `.brand-subtitle`:
```html
<span class="brand-name">Beavercreek Robotics</span>
<span class="brand-subtitle">FRC Team 5</span>
```

### Footer
**File:** `src/components/AppFooter.vue`
**GitHub:** https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/components/AppFooter.vue

#### Contact information
Find the `.footer-contact` section and update the address, email, and meeting times.

#### Social media links
Find the `.social-links` div and replace `href="#"` with actual URLs for each platform:
```html
<a href="https://www.facebook.com/beavercreekrobotics" class="social-link" ...>
```

#### Copyright year
Find `© 2024` near the bottom and update the year.

---

## Adding & Replacing Images

All images live in `src/assets/images/`. The current placeholder SVGs should be replaced with real team photos.

### Recommended image sizes
| Image | Recommended Size | Format |
|-------|-----------------|--------|
| Hero background | 1920×1080 px | JPG/WebP |
| Team photo | 1200×800 px | JPG/WebP |
| Robot photos | 800×600 px | JPG/WebP/PNG |
| Sponsor logos | 300×150 px | PNG (transparent bg) |

### How to replace a placeholder
1. Add your image file to `src/assets/images/` (e.g., `team-photo-2024.jpg`)
2. Find the `<img>` tag referencing the old placeholder:
   ```html
   <img src="../assets/images/team-photo.svg" alt="Team photo" />
   ```
3. Update the `src` and `alt` attributes:
   ```html
   <img src="../assets/images/team-photo-2024.jpg" alt="2024 Beavercreek Robotics team photo" />
   ```

### Best practices for alt text
- Describe what's in the image for accessibility
- Include the year and context: `"2024 Beavercreek Robotics team with their Crescendo robot"`
- Keep it under 125 characters

---

## Changing Colors & Fonts

All colors and fonts are defined as CSS variables in `src/style.css`. Change these to update the entire site's appearance at once.

```css
:root {
  --color-navy: #1a365d;      /* Primary dark blue */
  --color-red: #c53030;       /* Accent red */
  --color-gold: #d69e2e;      /* Highlight gold */
  --font-family: 'Inter', system-ui, sans-serif;
}
```

To use a different Google Font:
1. Update the `@import` at the top of `src/style.css`
2. Update the `--font-family` variable

---

## Deployment

After making content changes, build and deploy:

```bash
npm run build
```

The `dist/` folder contains the production-ready files. Upload its contents to your hosting provider (Netlify, Vercel, GitHub Pages, etc.).

### GitHub Pages deployment
If using GitHub Pages with a custom domain (`creekrobotics.org`), ensure a `CNAME` file containing `creekrobotics.org` is present in the `public/` directory.

### Netlify / Vercel
Both services can auto-deploy from the `main` branch. Connect your repository and set:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

---

*For technical questions, open an issue on [GitHub](https://github.com/Beavercreek-Robotics/creekrobotics.org/issues).*

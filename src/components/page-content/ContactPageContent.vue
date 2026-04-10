<template>
  <section class="section bg-light">
    <div class="container">
      <div class="row g-5 align-items-start">
        <div class="col-lg-7 contact-form-section">
          <h2>Send Us a Message</h2>
          <div class="divider divider-left"></div>
          <google-form-component />
        </div>

        <div class="col-lg-5 contact-info-section">
          <h2>Team Information</h2>
          <div class="divider divider-left"></div>

          <div class="info-cards">
            <div class="info-card" v-for="info in teamInfo" :key="info.title">
              <div class="info-card-icon">
                <component :is="info.iconComponent" />
              </div>
              <div>
                <h4>{{ info.title }}</h4>
                <p v-html="info.content"></p>
              </div>
            </div>
          </div>

          <div class="meeting-schedule">
            <h3>Meeting Schedule</h3>
            <div class="schedule-table">
              <div class="schedule-row" v-for="row in meetingSchedule" :key="row.period">
                <div class="schedule-period">{{ row.period }}</div>
                <div class="schedule-details">
                  <div class="schedule-days">{{ row.days }}</div>
                  <div class="schedule-time-info">{{ row.time }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="social-section">
            <h3>Find Us Online</h3>
            <div class="row g-3">
              <div class="col-sm-6" v-for="social in socialLinks" :key="social.label">
                <a :href="social.url" class="social-btn" target="_blank" rel="noopener noreferrer">
                  <span v-html="social.icon"></span>
                  {{ social.label }}
                </a>
              </div>
              <p v-if="!socialLinks.length" class="no-social mb-0">
                Social media links coming soon. Email us at
                <a :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  ADDRESS_CITY_STATE_ZIP,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  COMPETITION_CALENDAR_LABEL,
  COMPETITION_CALENDAR_LINK,
  CONTACT_EMAIL,
  MEETING_SCHEDULE,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
  SOCIAL_TWITTER,
  SOCIAL_YOUTUBE,
} from '../../config/club.js'
import GoogleFormComponent from './contact/GoogleFormComponent.vue'


const teamInfo = [
  {
    title: 'Our School',
    content: `${ADDRESS_LINE1}<br>${ADDRESS_LINE2}<br>${ADDRESS_CITY_STATE_ZIP}`,
    iconComponent: {
      template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`
    }
  },
  {
    title: 'Email Us',
    content: `<a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>`,
    iconComponent: {
      template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`
    }
  },
  {
    title: 'Competition Calendar',
    content: `<a href="${COMPETITION_CALENDAR_LINK}" target="_blank" rel="noopener noreferrer">${COMPETITION_CALENDAR_LABEL} →</a>`,
    iconComponent: {
      template: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`
    }
  },
]

const meetingSchedule = MEETING_SCHEDULE

const socialLinks = [
  { url: SOCIAL_INSTAGRAM, label: 'Instagram', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>` },
  { url: SOCIAL_FACEBOOK, label: 'Facebook', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>` },
  { url: SOCIAL_YOUTUBE, label: 'YouTube', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>` },
  { url: SOCIAL_TWITTER, label: 'Twitter / X', icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>` },
].filter((social) => social.url)
</script>

<style scoped>
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.info-card {
  display: flex;
  gap: 0.875rem;
  align-items: flex-start;
  background: var(--color-white);
  border-radius: var(--border-radius);
  padding: 1.1rem;
  box-shadow: var(--shadow-sm);
}

.info-card-icon {
  width: 36px;
  height: 36px;
  background: var(--color-navy);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--color-gold);
}

.info-card h4 {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-navy);
  margin-bottom: 0.2rem;
}

.info-card p {
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-gray-dark);
}

.info-card a {
  color: var(--color-navy);
  text-decoration: underline;
  font-weight: 500;
}

.meeting-schedule {
  margin-bottom: 2rem;
}

.meeting-schedule h3 {
  color: var(--color-navy);
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.schedule-table {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.schedule-row {
  background: var(--color-white);
  border-radius: var(--border-radius);
  padding: 0.875rem 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;
  box-shadow: var(--shadow-sm);
}

.schedule-period {
  font-size: 0.8rem;
  font-weight: 700;
  background: var(--color-navy);
  color: var(--color-gold);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  white-space: nowrap;
}

.schedule-days {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-dark);
}

.schedule-time-info {
  font-size: 0.8rem;
  color: var(--color-gray);
}

.social-section h3 {
  color: var(--color-navy);
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: var(--color-white);
  border: 1px solid var(--color-light-2);
  border-radius: var(--border-radius);
  padding: 0.7rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-dark);
  transition: all 0.2s ease;
  text-decoration: none;
  box-shadow: var(--shadow-sm);
}

.social-btn:hover {
  background: var(--color-navy);
  color: var(--color-white);
  border-color: var(--color-navy);
  transform: translateY(-1px);
}

.no-social {
  font-size: 0.875rem;
  color: var(--color-gray);
}

.no-social a {
  color: var(--color-navy);
  font-weight: 600;
}
</style>

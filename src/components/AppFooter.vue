<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/components/AppFooter.vue -->
<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="container">
        <div class="row g-4 g-xl-5">
          <!-- Brand column -->
          <div class="col-lg-5 col-md-6 footer-brand">
            <div class="brand-logo">
              <img :src="LOGO_SMALL" alt="Beavercreek Robotics Club logo" width="52" height="52" />
              <div>
                <p class="brand-name">{{ CLUB_NAME }}</p>
                <p class="brand-subtitle">{{ CLUB_TAGLINE }} | Beavercreek High School</p>
              </div>
            </div>
            <p class="brand-desc">{{ FOOTER_DESCRIPTION }}</p>
            <div class="social-links">
              <!-- Instagram (shown when URL is set) -->
              <a v-if="SOCIAL_INSTAGRAM" :href="SOCIAL_INSTAGRAM" class="social-link" aria-label="Instagram"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <!-- Facebook (shown when URL is set) -->
              <a v-if="SOCIAL_FACEBOOK" :href="SOCIAL_FACEBOOK" class="social-link" aria-label="Facebook"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <!-- YouTube (shown when URL is set) -->
              <a v-if="SOCIAL_YOUTUBE" :href="SOCIAL_YOUTUBE" class="social-link" aria-label="YouTube" target="_blank"
                rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path
                    d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
              <!-- Twitter/X (shown when URL is set) -->
              <a v-if="SOCIAL_TWITTER" :href="SOCIAL_TWITTER" class="social-link" aria-label="Twitter / X"
                target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="col-lg-2 col-md-6 footer-links">
            <h4 class="footer-heading">Quick Links</h4>
            <ul>
              <li>
                <RouterLink to="/parents">For Parents</RouterLink>
              </li>
              <li>
                <RouterLink to="/students">For Students</RouterLink>
              </li>
              <li>
                <RouterLink to="/engineers">For Engineers</RouterLink>
              </li>
              <li>
                <RouterLink to="/sponsors">For Sponsors</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact">Contact Us</RouterLink>
              </li>
            </ul>
          </div>

          <!-- About -->
          <div class="col-lg-2 col-md-6 footer-links">
            <h4 class="footer-heading">About</h4>
            <ul>
              <li>
                <RouterLink to="/students">What is VRC?</RouterLink>
              </li>
              <li><a href="https://www.vexrobotics.com/" target="_blank" rel="noopener noreferrer">VEX Robotics</a></li>
              <li>
                <RouterLink to="/sponsors">Support Our Team</RouterLink>
              </li>
              <li>
                <RouterLink to="/engineers">Become a Mentor</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact">Join the Team</RouterLink>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="col-lg-3 col-md-6 footer-contact">
            <h4 class="footer-heading">Contact</h4>
            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none"
                stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{{ ADDRESS_LINE1 }}<br>{{ ADDRESS_LINE2 }}<br>{{ ADDRESS_CITY_STATE_ZIP }}</span>
            </div>
            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none"
                stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span><a :href="`mailto:${CONTACT_EMAIL}`" class="footer-email">{{ CONTACT_EMAIL }}</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>© {{ COPYRIGHT_YEAR }} {{ CLUB_NAME }}. All rights reserved.</p>
        <p class="nonprofit-notice">{{ NONPROFIT_STATUS }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import {
  CLUB_NAME,
  CLUB_TAGLINE,
  FOOTER_DESCRIPTION,
  CONTACT_EMAIL,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  ADDRESS_CITY_STATE_ZIP,
  SOCIAL_INSTAGRAM,
  SOCIAL_FACEBOOK,
  SOCIAL_YOUTUBE,
  SOCIAL_TWITTER,
  NONPROFIT_STATUS,
  COPYRIGHT_YEAR,
} from '../config/club.js'
</script>
<style scoped>
.footer {
  background-color: var(--color-navy);
  color: rgba(255, 255, 255, 0.85);
}

.footer-main {
  padding: 4rem 0 2rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.brand-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-white);
}

.brand-subtitle {
  font-size: 0.75rem;
  color: var(--color-red);
  font-weight: 500;
  margin-top: 0.1rem;
}

.brand-desc {
  font-size: 0.9rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.75);
  transition: all 0.2s ease;
}

.social-link:hover {
  background-color: var(--color-red);
  color: var(--color-white);
  transform: translateY(-2px);
}

.footer-heading {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-red);
  margin-bottom: 1.25rem;
}

.footer-links ul {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-links a {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: var(--color-red);
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  gap: 0.6rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.5;
}

.contact-item svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-red);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
}

.footer-bottom .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  text-align: center;
}

.footer-bottom p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

.nonprofit-notice {
  font-size: 0.8rem !important;
  color: rgba(255, 255, 255, 0.4) !important;
}

.footer-email {
  color: var(--color-red);
  text-decoration: none;
}

.footer-email:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .footer-main {
    padding-top: 3rem;
  }
}

@media (max-width: 600px) {
  .footer-bottom .container {
    padding-top: 0.25rem;
  }
}
</style>

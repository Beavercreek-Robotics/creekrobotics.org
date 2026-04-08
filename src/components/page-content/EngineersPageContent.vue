<template>
  <div>
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title">Why Become a Mentor?</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Mentoring is one of the most rewarding things you can do with your expertise</p>
        <div class="row g-4">
          <div class="col-md-6 col-xl-3" v-for="reason in whyMentor" :key="reason.title">
            <div class="reason-card h-100">
              <div class="reason-icon">{{ reason.icon }}</div>
              <h3>{{ reason.title }}</h3>
              <p>{{ reason.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-navy">
      <div class="container">
        <h2 class="section-title text-white">Your Impact by the Numbers</h2>
        <div class="divider"></div>
        <div class="row g-0">
          <div class="col-6 col-lg-3" v-for="stat in impactStats" :key="stat.label">
            <div class="impact-stat h-100">
              <div class="impact-value">{{ stat.value }}</div>
              <div class="impact-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Mentorship Opportunities</h2>
        <div class="divider"></div>
        <p class="section-subtitle">We have a role for every background and availability level</p>
        <div class="row g-4">
          <div class="col-md-6" v-for="type in mentorTypes" :key="type.title">
            <div class="mentor-type-card h-100" :class="type.featured ? 'featured' : ''">
              <div class="mentor-type-header">
                <span class="mentor-icon">{{ type.icon }}</span>
                <div>
                  <h3>{{ type.title }}</h3>
                  <span class="mentor-commitment">{{ type.commitment }}</span>
                </div>
              </div>
              <p>{{ type.description }}</p>
              <ul class="mentor-skills">
                <li v-for="skill in type.skills" :key="skill">{{ skill }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-white">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6">
            <h2>Time Commitment</h2>
            <div class="divider divider-left"></div>
            <p>We understand you have a career and family. We work around your schedule and appreciate every hour you
              can give.</p>
            <div class="time-cards">
              <div class="time-card" v-for="period in timeCommitment" :key="period.period">
                <div class="time-period">{{ period.period }}</div>
                <div class="time-hours">{{ period.hours }}</div>
                <div class="time-desc">{{ period.description }}</div>
              </div>
            </div>
            <p class="time-note">Flexible arrangements are always available. Even occasional help is incredibly
              valuable.</p>
          </div>
          <div class="col-lg-6">
            <h2>Requirements</h2>
            <div class="divider divider-left"></div>
            <p>We take student safety seriously. All adult mentors must complete a brief background check and
              orientation.</p>
            <div class="requirements-list">
              <div class="req-item" v-for="req in requirements" :key="req.title">
                <div class="req-icon">{{ req.icon }}</div>
                <div>
                  <h4>{{ req.title }}</h4>
                  <p>{{ req.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container content-narrow">
        <h2 class="section-title">How to Get Started</h2>
        <div class="divider"></div>
        <div class="start-steps">
          <div class="start-step" v-for="(step, index) in allGetStartedSteps" :key="step.title">
            <div class="start-step-num">{{ index + 1 }}</div>
            <div class="start-step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
        <div class="start-cta">
          <RouterLink to="/contact" class="btn btn-primary btn-lg">Express Interest Today</RouterLink>
        </div>
      </div>
    </section>

    <section class="section bg-navy">
      <div class="container">
        <h2 class="section-title text-white">From Our Mentors</h2>
        <div class="divider"></div>
        <div class="row g-4">
          <div class="col-lg-6" v-for="quote in mentorTestimonials" :key="quote.author">
            <div class="mentor-quote h-100">
              <div class="quote-mark">&quot;</div>
              <p>{{ quote.text }}</p>
              <div class="mentor-author">
                <div class="mentor-avatar">{{ quote.initials }}</div>
                <div>
                  <div class="mentor-name">{{ quote.author }}</div>
                  <div class="mentor-role">{{ quote.role }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { CONTACT_EMAIL } from '../../config/club.js'
import { getStartedSteps, impactStats, mentorTestimonials, mentorTypes, requirements, timeCommitment, whyMentor } from '../../content/engineers.js'

const allGetStartedSteps = computed(() =>
  getStartedSteps.map((step, index) =>
    index === 0
      ? { ...step, desc: `Fill out our mentor interest form or send us an email at ${CONTACT_EMAIL}. Tell us a bit about your background and what you'd like to help with. We'll respond within 48 hours.` }
      : step
  )
)
</script>

<style scoped>
.reason-card {
  background: var(--color-light);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  text-align: center;
  transition: all 0.25s ease;
  border-top: 4px solid transparent;
}

.reason-card:hover {
  background: var(--color-white);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
  border-top-color: var(--color-gold);
}

.reason-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.reason-card h3 {
  color: var(--color-navy);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.reason-card p {
  font-size: 0.9rem;
}

.impact-stat {
  text-align: center;
  padding: 2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.impact-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
}

.impact-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  margin-top: 0.5rem;
}

.mentor-type-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: all 0.25s ease;
  border-left: 4px solid var(--color-light-2);
}

.mentor-type-card:hover {
  box-shadow: var(--shadow-lg);
  border-left-color: var(--color-navy);
}

.mentor-type-card.featured {
  border-left-color: var(--color-gold);
}

.mentor-type-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.mentor-icon {
  font-size: 2rem;
}

.mentor-type-header h3 {
  color: var(--color-navy);
  font-size: 1.1rem;
}

.mentor-commitment {
  display: inline-block;
  font-size: 0.75rem;
  color: var(--color-red);
  font-weight: 600;
  background: rgba(197, 48, 48, 0.08);
  padding: 0.15rem 0.6rem;
  border-radius: 20px;
  margin-top: 0.25rem;
}

.mentor-type-card>p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.mentor-skills {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.mentor-skills li {
  font-size: 0.85rem;
  color: var(--color-gray-dark);
  padding-left: 1rem;
  position: relative;
}

.mentor-skills li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-gold);
  font-weight: 700;
}

.time-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.time-card {
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding: 1rem 1.25rem;
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 0 1rem;
  align-items: center;
}

.time-period {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-navy);
}

.time-hours {
  background: var(--color-navy);
  color: var(--color-gold);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  white-space: nowrap;
}

.time-desc {
  font-size: 0.8rem;
  color: var(--color-gray);
}

.time-note {
  font-size: 0.85rem;
  color: var(--color-gray);
  font-style: italic;
}

.requirements-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.25rem;
}

.req-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.req-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.req-item h4 {
  color: var(--color-navy);
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.req-item p {
  font-size: 0.875rem;
}

.start-steps {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.start-step {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: var(--color-white);
  border-radius: var(--border-radius);
  padding: 1.25rem;
  box-shadow: var(--shadow-sm);
}

.start-step-num {
  width: 40px;
  height: 40px;
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.start-step-content h3 {
  color: var(--color-navy);
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.start-step-content p {
  font-size: 0.9rem;
}

.start-cta {
  text-align: center;
}

.mentor-quote {
  background: rgba(255, 255, 255, 0.07);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.quote-mark {
  font-size: 4rem;
  color: var(--color-gold);
  line-height: 0.5;
  margin-bottom: 1rem;
  font-family: Georgia, serif;
}

.mentor-quote p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.82);
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.mentor-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mentor-avatar {
  width: 40px;
  height: 40px;
  background: var(--color-gold);
  color: var(--color-navy);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.mentor-name {
  font-weight: 600;
  color: var(--color-white);
  font-size: 0.9rem;
}

.mentor-role {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}
</style>

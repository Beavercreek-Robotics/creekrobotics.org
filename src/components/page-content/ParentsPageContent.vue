<template>
  <div>
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title">How to Enroll Your Student</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Getting started is easy - we welcome all students grades 9-12</p>
        <div class="steps-list">
          <div class="step" v-for="(step, index) in allEnrollmentSteps" :key="step.title">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Schedule &amp; Time Commitment</h2>
        <div class="divider"></div>
        <p class="section-subtitle">We understand your student has a busy life - here&apos;s what to expect</p>
        <div class="row g-4">
          <div class="col-md-6 col-xl-4" v-for="period in scheduleItems" :key="period.title">
            <div class="schedule-card h-100">
              <div class="schedule-icon">{{ period.icon }}</div>
              <h3>{{ period.title }}</h3>
              <div class="schedule-time">{{ period.time }}</div>
              <p>{{ period.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-white">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6">
            <p class="label-tag">Safety First</p>
            <h2>Your Student&apos;s Safety Is Our Priority</h2>
            <div class="divider divider-left"></div>
            <p>We take student safety seriously. All activities are supervised by background-checked adult mentors who
              are trained in youth protection and safe equipment handling.</p>
            <ul class="check-list">
              <li v-for="item in safetyItems" :key="item">
                <span class="check-icon">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <p class="label-tag">Costs &amp; Financial Aid</p>
            <h2>No Student Turned Away</h2>
            <div class="divider divider-left"></div>
            <p>We believe every student deserves access to quality STEM education regardless of financial circumstances.
            </p>
            <div class="cost-card">
              <div class="cost-item">
                <span class="cost-label">Annual Student Fee</span>
                <span class="cost-value">Contact Us</span>
              </div>
              <div class="cost-item">
                <span class="cost-label">Scholarships &amp; Aid</span>
                <span class="cost-value available">Available</span>
              </div>
              <div class="cost-item">
                <span class="cost-label">Equipment &amp; Safety Gear</span>
                <span class="cost-value">Provided</span>
              </div>
            </div>
            <p class="cost-note">Contact us to discuss financial assistance. No student is ever turned away for
              financial reasons.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-navy">
      <div class="container">
        <h2 class="section-title text-white">What Your Student Will Gain</h2>
        <div class="divider"></div>
        <div class="row g-4">
          <div class="col-md-6 col-xl-4" v-for="gain in gains" :key="gain.title">
            <div class="gain-item h-100">
              <div class="gain-icon">{{ gain.icon }}</div>
              <h3>{{ gain.title }}</h3>
              <p>{{ gain.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container content-narrow">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="divider"></div>
        <div class="faq-list">
          <div class="faq-item" v-for="(item, index) in allFaqs" :key="item.question" @click="toggleFaq(index)"
            :class="{ open: openFaq === index }">
            <div class="faq-question">
              {{ item.question }}
              <span class="faq-arrow">{{ openFaq === index ? '▲' : '▼' }}</span>
            </div>
            <div v-show="openFaq === index" class="faq-answer">{{ item.answer }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { CONTACT_EMAIL, COMPETITION_PROGRAM_SHORT, MEETING_SCHEDULE } from '../../config/club.js'
import { enrollmentSteps, safetyItems, studentGains, faqs } from '../../content/parents.js'

const openFaq = ref(null)

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const scheduleItems = MEETING_SCHEDULE.map((meeting, index) => ({
  icon: ['🔨', '📚', '🏆'][index] || '📅',
  title: meeting.period.split(' (')[0],
  time: meeting.days,
  description: meeting.time,
}))

const allEnrollmentSteps = computed(() => [
  ...enrollmentSteps,
  {
    title: 'Competition Season Begins!',
    description: `The ${COMPETITION_PROGRAM_SHORT} competition season runs August through April. This is when the real fun starts - designing, building, programming, and testing a robot to compete at local and regional events.`
  },
])

const gains = computed(() =>
  studentGains.map((gain) =>
    gain.title === 'College Advantage'
      ? { ...gain, description: `${COMPETITION_PROGRAM_SHORT} participation stands out on college applications. Our alumni are accepted to top engineering programs nationwide.` }
      : gain
  )
)

const allFaqs = computed(() => [
  ...faqs,
  {
    question: 'Can I volunteer or help as a parent?',
    answer: `We love parent involvement! Parents can volunteer at competitions, help with transportation, provide meals, or even serve as mentors if they have relevant skills. Contact us at ${CONTACT_EMAIL} to learn about volunteer opportunities.`
  },
])
</script>

<style scoped>
.label-tag {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-red);
  margin-bottom: 0.5rem;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.step-number {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 800;
}

.step-content h3 {
  color: var(--color-navy);
  margin-bottom: 0.4rem;
  font-size: 1.1rem;
}

.step-content p {
  font-size: 0.95rem;
}

.schedule-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;
}

.schedule-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.schedule-card h3 {
  color: var(--color-navy);
  margin-bottom: 0.5rem;
}

.schedule-time {
  display: inline-block;
  background: var(--color-gold);
  color: var(--color-navy);
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  margin-bottom: 0.75rem;
}

.check-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1.25rem;
}

.check-list li {
  display: flex;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: var(--color-gray-dark);
}

.check-icon {
  color: var(--color-gold);
  font-weight: 800;
  flex-shrink: 0;
}

.cost-card {
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding: 1.25rem;
  margin: 1.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cost-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.cost-label {
  color: var(--color-gray-dark);
}

.cost-value {
  font-weight: 600;
  color: var(--color-navy);
}

.cost-value.available {
  color: #276749;
}

.cost-note {
  font-size: 0.85rem;
  color: var(--color-gray);
  font-style: italic;
}

.gain-item {
  background: rgba(255, 255, 255, 0.08);
  border-radius: var(--border-radius-lg);
  padding: 1.75rem;
  text-align: center;
}

.gain-icon {
  font-size: 2.25rem;
  margin-bottom: 0.75rem;
}

.gain-item h3 {
  color: var(--color-gold);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.gain-item p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.faq-item {
  border: 1px solid var(--color-light-2);
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  background: var(--color-white);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 1.25rem;
  font-weight: 600;
  color: var(--color-navy);
  font-size: 0.95rem;
}

.faq-item.open .faq-question {
  background: var(--color-navy);
  color: var(--color-white);
}

.faq-arrow {
  font-size: 0.7rem;
  flex-shrink: 0;
  margin-left: 1rem;
}

.faq-answer {
  padding: 1rem 1.25rem 1.25rem;
  font-size: 0.9rem;
  color: var(--color-gray-dark);
  line-height: 1.7;
  border-top: 1px solid var(--color-light-2);
}
</style>

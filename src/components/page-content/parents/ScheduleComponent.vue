<template>
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
</template>

<script setup>
import { MEETING_SCHEDULE } from '../../../config/club.js'

const scheduleItems = MEETING_SCHEDULE.map((meeting, index) => ({
  icon: ['🔨', '📚', '🏆'][index] || '📅',
  title: meeting.period.split(' (')[0],
  time: meeting.days,
  description: meeting.time,
}))
</script>

<style scoped>
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
</style>

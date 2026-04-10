<template>
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
</template>

<script setup>
import { computed } from 'vue'
import { COMPETITION_PROGRAM_SHORT } from '../../../config/club.js'
import { enrollmentSteps } from '../../../content/parents.js'

const allEnrollmentSteps = computed(() => [
  ...enrollmentSteps,
  {
    title: 'Competition Season Begins!',
    description: `The ${COMPETITION_PROGRAM_SHORT} competition season runs August through April. This is when the real fun starts - designing, building, programming, and testing a robot to compete at local and regional events.`
  },
])
</script>

<style scoped>
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
</style>

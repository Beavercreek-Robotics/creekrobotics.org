<template>
  <section class="section bg-white">
    <div class="container content-narrow">
      <h2 class="section-title">How to Join the Team</h2>
      <div class="divider"></div>
      <p class="section-subtitle">Getting started is easier than you think</p>
      <div class="join-steps">
        <div class="join-step" v-for="(step, index) in joinSteps" :key="step.title">
          <div class="join-step-num">{{ index + 1 }}</div>
          <div class="join-step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
      <div class="join-cta">
        <RouterLink to="/contact" class="btn btn-primary btn-lg">Ready to Join? Contact Us!</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { joinSteps } from '../../../content/students.js'
</script>

<style scoped>
.join-steps {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.join-step {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding: 1.25rem;
}

.join-step-num {
  width: 40px;
  height: 40px;
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.join-step-content h3 {
  color: var(--color-navy);
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.join-step-content p {
  font-size: 0.9rem;
}

.join-cta {
  text-align: center;
}
</style>

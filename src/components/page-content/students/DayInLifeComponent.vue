<template>
  <section class="section bg-light">
    <div class="container">
      <h2 class="section-title">Day in the Life</h2>
      <div class="divider"></div>
      <div class="row g-4">
        <div class="col-md-6 col-xl-4" v-for="scenario in dayInLife" :key="scenario.title">
          <div class="life-card h-100">
            <div class="life-icon">{{ scenario.icon }}</div>
            <h3>{{ scenario.title }}</h3>
            <ul class="life-list">
              <li v-for="item in scenario.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { dayInLife } from '../../../content/students.js'
</script>

<style scoped>
.life-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
}

.life-icon {
  font-size: 2.25rem;
  margin-bottom: 0.75rem;
}

.life-card h3 {
  color: var(--color-navy);
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.life-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.life-list li {
  font-size: 0.875rem;
  color: var(--color-gray-dark);
  padding-left: 1rem;
  position: relative;
}

.life-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-gold);
}
</style>

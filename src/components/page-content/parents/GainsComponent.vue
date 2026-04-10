<template>
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
</template>

<script setup>
import { computed } from 'vue'
import { COMPETITION_PROGRAM_SHORT } from '../../../config/club.js'
import { studentGains } from '../../../content/parents.js'

const gains = computed(() =>
  studentGains.map((gain) =>
    gain.title === 'College Advantage'
      ? { ...gain, description: `${COMPETITION_PROGRAM_SHORT} participation stands out on college applications. Our alumni are accepted to top engineering programs nationwide.` }
      : gain
  )
)
</script>

<style scoped>
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
</style>

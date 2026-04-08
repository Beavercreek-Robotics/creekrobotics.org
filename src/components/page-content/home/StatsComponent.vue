<template>
  <section class="section bg-navy stats-section">
    <div class="container">
      <div class="row g-0">
        <div class="col-6 col-lg" v-for="stat in TEAM_STATS" :key="stat.label">
          <div class="stat-item h-100">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { TEAM_STATS } from '../../../config/club.js'
</script>

<style scoped>
.stats-section {
  background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%);
}

.stat-item {
  text-align: center;
  padding: 2rem 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-value {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}
</style>

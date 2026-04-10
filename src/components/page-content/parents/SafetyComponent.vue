<template>
  <div class="col-lg-6">
    <div class="h-100">
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
  </div>
</template>

<script setup>
import { safetyItems } from '../../../content/parents.js'
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
</style>

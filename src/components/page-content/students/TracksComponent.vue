<template>
  <section class="section bg-light">
    <div class="container">
      <h2 class="section-title">What You'll Learn</h2>
      <div class="divider"></div>
      <p class="section-subtitle">Choose your track - or explore all of them!</p>
      <div class="row g-4">
        <div class="col-md-6 col-xl-3" v-for="track in tracks" :key="track.name">
          <div class="track-card h-100">
            <div class="track-icon">{{ track.icon }}</div>
            <h3>{{ track.name }}</h3>
            <p class="track-desc">{{ track.description }}</p>
            <ul class="track-skills">
              <li v-for="skill in track.skills" :key="skill">{{ skill }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { tracks } from '../../../content/students.js'
</script>

<style scoped>
.track-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem 1.5rem;
  box-shadow: var(--shadow);
  transition: all 0.25s ease;
  border-top: 4px solid transparent;
}

.track-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-top-color: var(--color-gold);
}

.track-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.track-card h3 {
  color: var(--color-navy);
  margin-bottom: 0.5rem;
}

.track-desc {
  font-size: 0.9rem;
  color: var(--color-gray);
  margin-bottom: 1rem;
}

.track-skills {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.track-skills li {
  font-size: 0.85rem;
  color: var(--color-gray-dark);
  padding-left: 1rem;
  position: relative;
}

.track-skills li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-gold);
  font-weight: 700;
}
</style>

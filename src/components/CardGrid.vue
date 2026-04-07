<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/components/CardGrid.vue -->
<template>
  <div class="card-grid" :class="`cols-${columns}`">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="card"
    >
      <div v-if="card.icon" class="card-icon">{{ card.icon }}</div>
      <h3 class="card-title">{{ card.title }}</h3>
      <p v-if="card.description" class="card-description">{{ card.description }}</p>
      <RouterLink v-if="card.link && card.linkText" :to="card.link" class="card-link btn btn-primary btn-sm">
        {{ card.linkText }}
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  cards: {
    type: Array,
    required: true
  },
  columns: {
    type: Number,
    default: 3
  }
})
</script>

<style scoped>
.card-grid {
  display: grid;
  gap: 1.5rem;
}

.cols-1 { grid-template-columns: 1fr; }
.cols-2 { grid-template-columns: repeat(2, 1fr); }
.cols-3 { grid-template-columns: repeat(3, 1fr); }
.cols-4 { grid-template-columns: repeat(4, 1fr); }

.card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem 1.75rem;
  box-shadow: var(--shadow);
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  border-top: 4px solid transparent;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
  border-top-color: var(--color-gold);
}

.card-icon {
  font-size: 2.5rem;
  line-height: 1;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-navy);
  margin: 0;
}

.card-description {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--color-gray);
  flex: 1;
  margin: 0;
}

.card-link {
  align-self: flex-start;
  margin-top: 0.5rem;
}

@media (max-width: 1024px) {
  .cols-4 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .cols-2,
  .cols-3,
  .cols-4 { grid-template-columns: 1fr; }
}
</style>

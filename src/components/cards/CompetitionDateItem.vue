<template>
  <li class="competition-item py-2">
    <a v-if="competition.eventUrl" :href="competition.eventUrl" target="_blank" rel="noopener noreferrer"
      class="comp-name-link">
      <h6 class="comp-name mb-1">{{ competition.name }}</h6>
    </a>
    <h6 v-else class="comp-name mb-1">{{ competition.name }}</h6>

    <div class="d-flex justify-content-between align-items-center flex-wrap gap-2">
      <div class="comp-meta d-flex align-items-center gap-2">
        <span class="comp-date">{{ competition.date }}</span>
        <span class="comp-status" :class="`status-${competition.status}`">{{ competition.status }}</span>
      </div>
      <div class="comp-teams">Teams: {{ teamsText }}</div>
    </div>
  </li>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  competition: {
    type: Object,
    required: true,
  },
})

const teamsText = computed(() =>
  props.competition.teams?.length ? props.competition.teams.join(', ') : 'TBD'
)
</script>

<style scoped>
.competition-item {
  font-size: 0.875rem;
  border-bottom: 1px solid var(--color-gray-light, #e2e8f0);
}

.competition-item:last-child {
  border-bottom: none;
}

.comp-name-link {
  text-decoration: none;
}

.comp-name-link:hover .comp-name {
  text-decoration: underline;
  color: var(--color-navy-light);
}

.comp-name {
  color: var(--color-navy);
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 0.25rem;
}

.comp-date {
  font-weight: 600;
  color: var(--color-gray-dark);
  font-size: 0.8rem;
  white-space: nowrap;
}

.comp-status {
  font-size: 0.66rem;
  font-weight: 600;
  padding: 0.1rem 0.38rem;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  line-height: 1.2;
  white-space: nowrap;
}

.comp-teams {
  color: var(--color-gray-dark);
  font-size: 0.78rem;
  white-space: nowrap;
}

.status-upcoming {
  background: #c6f6d5;
  color: #276749;
}

.status-tbd {
  background: #feebc8;
  color: #7b341e;
}

.status-completed {
  background: #bee3f8;
  color: #2a69ac;
}
</style>
<template>
  <section class="section bg-white">
    <div class="container">
      <h2 class="section-title">{{ CURRENT_SEASON_YEAR }} Season - &quot;{{ CURRENT_GAME_NAME }}&quot;</h2>
      <div class="divider"></div>
      <p class="section-subtitle">Follow our journey through the {{ COMPETITION_PROGRAM }} season</p>
      <div class="row g-4">
        <div class="col-xl-7">
          <div class="season-card h-100">
            <div class="season-card-header">
              <span class="season-badge">Schedule</span>
              <h3>Competition Dates</h3>
            </div>
            <ul class="competition-list">
              <CompetitionDateItem v-for="comp in visibleCompetitions" :key="`${comp.date}-${comp.name}`"
                :competition="comp" />
              <li v-if="visibleCompetitions.length === 0" class="comp-empty">
                No competition events are available right now.
              </li>
            </ul>
            <div v-if="totalCompetitionPages > 1" class="competition-pagination">
              <button type="button" class="pagination-btn" @click="goToPreviousPage" :disabled="!hasPreviousPage">
                Previous Page
              </button>
              <span class="pagination-label">Page {{ currentCompetitionPage + 1 }} of {{ totalCompetitionPages }}</span>
              <button type="button" class="pagination-btn" @click="goToNextPage" :disabled="!hasNextPage">
                Next Page
              </button>
            </div>
            <a :href="COMPETITION_CALENDAR_LINK" target="_blank" rel="noopener noreferrer" class="see-all-link">
              {{ COMPETITION_CALENDAR_LABEL }} →
            </a>
          </div>
        </div>
        <div class="col-xl-5">
          <div class="season-card h-100">
            <div class="season-card-header">
              <span class="season-badge season-badge-gold">Achievements</span>
              <h3>Recent Accomplishments</h3>
            </div>
            <ul class="achievement-list">
              <li v-for="item in visibleAccomplishments" :key="item.key">
                <span class="achievement-icon">{{ item.icon }}</span>
                <template v-for="(part, partIndex) in getAccomplishmentTextParts(item.text)"
                  :key="`${item.key}-${partIndex}`">
                  <span :class="{ 'achievement-team-number': isTeamNumberToken(part) }">{{ part }}</span>
                </template>
              </li>
              <li v-if="accomplishments.length === 0">No recent accomplishments available yet.</li>
            </ul>
            <div v-if="totalAccomplishmentPages > 1" class="competition-pagination">
              <button type="button" class="pagination-btn" @click="goToPreviousAccomplishmentPage"
                :disabled="!hasPreviousAccomplishmentPage">
                Previous Page
              </button>
              <span class="pagination-label">
                Page {{ currentAccomplishmentPage + 1 }} of {{ totalAccomplishmentPages }}
              </span>
              <button type="button" class="pagination-btn" @click="goToNextAccomplishmentPage"
                :disabled="!hasNextAccomplishmentPage">
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import CompetitionDateItem from '../../cards/CompetitionDateItem.vue'
import competitionSchedule from '../../../generated/competition-schedule.json'
import accomplishments from '../../../generated/recent-accomplishments.json'
import {
  COMPETITION_CALENDAR_LABEL,
  COMPETITION_CALENDAR_LINK,
  COMPETITION_PROGRAM,
  CURRENT_GAME_NAME,
  CURRENT_SEASON_YEAR,
} from '../../../config/club.js'

const competitionsPerPage = 5
const accomplishmentsPerPage = 5
const firstUpcomingCompetitionIndex = competitionSchedule.findIndex(
  (comp) => comp.status === 'upcoming' || comp.status === 'tbd'
)
const initialCompetitionPage =
  firstUpcomingCompetitionIndex === -1 ? 0 : Math.floor(firstUpcomingCompetitionIndex / competitionsPerPage)
const currentCompetitionPage = ref(initialCompetitionPage)
const currentAccomplishmentPage = ref(0)

const totalCompetitionPages = computed(() => Math.max(1, Math.ceil(competitionSchedule.length / competitionsPerPage)))

const visibleCompetitions = computed(() =>
  competitionSchedule.slice(
    currentCompetitionPage.value * competitionsPerPage,
    (currentCompetitionPage.value + 1) * competitionsPerPage
  )
)

const hasPreviousPage = computed(() => currentCompetitionPage.value > 0)
const hasNextPage = computed(() => currentCompetitionPage.value < totalCompetitionPages.value - 1)

const totalAccomplishmentPages = computed(() =>
  Math.max(1, Math.ceil(accomplishments.length / accomplishmentsPerPage))
)

const visibleAccomplishments = computed(() =>
  accomplishments.slice(
    currentAccomplishmentPage.value * accomplishmentsPerPage,
    (currentAccomplishmentPage.value + 1) * accomplishmentsPerPage
  )
)

const hasPreviousAccomplishmentPage = computed(() => currentAccomplishmentPage.value > 0)
const hasNextAccomplishmentPage = computed(
  () => currentAccomplishmentPage.value < totalAccomplishmentPages.value - 1
)
const accomplishmentTeamNumberPattern = /(\(\d+[A-Z0-9]*\))/g

const getAccomplishmentTextParts = (text) =>
  String(text ?? '')
    .split(accomplishmentTeamNumberPattern)
    .filter((part) => part.length > 0)

const isTeamNumberToken = (part) => /^\(\d+[A-Z0-9]*\)$/.test(part)

const goToPreviousPage = () => {
  if (hasPreviousPage.value) {
    currentCompetitionPage.value -= 1
  }
}

const goToNextPage = () => {
  if (hasNextPage.value) {
    currentCompetitionPage.value += 1
  }
}

const goToPreviousAccomplishmentPage = () => {
  if (hasPreviousAccomplishmentPage.value) {
    currentAccomplishmentPage.value -= 1
  }
}

const goToNextAccomplishmentPage = () => {
  if (hasNextAccomplishmentPage.value) {
    currentAccomplishmentPage.value += 1
  }
}
</script>

<style scoped>
.season-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--color-light-2);
}

.season-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.season-card-header h3 {
  font-size: 1rem;
  color: var(--color-navy);
}

.season-badge {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: var(--color-navy);
  color: var(--color-white);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  white-space: nowrap;
}

.season-badge-gold {
  background: var(--color-gold);
  color: var(--color-navy);
}

.competition-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.comp-empty {
  color: var(--color-gray-dark);
  font-style: italic;
}

.competition-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 0.85rem;
}

.pagination-btn {
  margin-top: 0.75rem;
  background: transparent;
  border: 1px solid var(--color-navy-light);
  color: var(--color-navy-light);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  cursor: pointer;
}

.pagination-btn:hover:not(:disabled) {
  background: rgba(26, 54, 93, 0.08);
}

.pagination-btn:disabled {
  opacity: 0.45;
  cursor: default;
}

.pagination-label {
  color: var(--color-gray-dark);
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.see-all-link {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--color-navy-light);
  font-weight: 600;
  text-decoration: none;
}

.see-all-link:hover {
  text-decoration: underline;
}

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.achievement-list li {
  font-size: 0.9rem;
  color: var(--color-gray-dark);
}

.achievement-icon {
  margin-right: 0.3rem;
}

.achievement-team-number {
  color: var(--color-navy);
  font-weight: 700;
  background: rgba(245, 167, 0, 0.2);
  border-radius: 4px;
  padding: 0.05rem 0.25rem;
}
</style>

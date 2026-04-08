<template>
  <div class="home">
    <HeroSection title="Building Tomorrow's Engineers Today"
      :subtitle="`${CLUB_NAME} empowers students through hands-on STEM experience, competitive robotics, and real-world engineering challenges in the ${COMPETITION_PROGRAM}.`"
      backgroundClass="hero-default" ctaText="Learn About Our Team" ctaLink="/students" secondaryCtaText="Join the Team"
      secondaryCtaLink="/contact" />

    <section class="section bg-white">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 about-content">
            <p class="section-label">About Us</p>
            <h2>Who We Are</h2>
            <div class="divider divider-left"></div>
            <p>{{ CLUB_NAME }} is a 501(c)(3) educational organization based at Beavercreek High School in Beavercreek,
              Ohio. We participate in the <strong>{{ COMPETITION_PROGRAM }}</strong>, inspiring students to pursue
              careers in science, technology, engineering, and mathematics.</p>
            <p class="mt-3">Our team is built on principles of collaboration, sportsmanship, and innovation - competing
              fiercely while treating others with dignity and respect. We believe that real-world engineering
              experience, combined with strong mentorship, prepares students not just for college, but for life.</p>
            <p class="mt-3 mission-statement"><em>"Our mission is to foster an interest in STEM among students via
                hands-on participation in the VEX Robotics Competition Program, enhancing teamwork, problem-solving, and
                technical skills."</em></p>
          </div>
          <div class="col-lg-6 d-none d-lg-flex justify-content-center about-image">
            <img src="../../assets/images/hero-robot.svg" alt="Beavercreek Robotics Team Robot" />
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-navy stats-section">
      <div class="container">
        <div class="row g-0">
          <div class="col-6 col-lg-3" v-for="stat in TEAM_STATS" :key="stat.label">
            <div class="stat-item h-100">
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Who Are You?</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Find out how you can get involved with Beavercreek Robotics</p>
        <div class="row g-4">
          <div class="col-md-6 col-xl-3" v-for="card in audienceCards" :key="card.title">
            <div class="audience-card h-100">
              <div class="audience-icon">{{ card.icon }}</div>
              <h3>{{ card.title }}</h3>
              <p>{{ card.description }}</p>
              <RouterLink :to="card.link" class="btn btn-primary">{{ card.cta }}</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

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
                <li v-if="visibleCompetitions.length === 0" class="comp-empty">No competition events are available right
                  now.</li>
              </ul>
              <div v-if="totalCompetitionPages > 1" class="competition-pagination">
                <button type="button" class="pagination-btn" @click="goToPreviousPage"
                  :disabled="!hasPreviousPage">Previous Page</button>
                <span class="pagination-label">Page {{ currentCompetitionPage + 1 }} of {{ totalCompetitionPages
                  }}</span>
                <button type="button" class="pagination-btn" @click="goToNextPage" :disabled="!hasNextPage">Next
                  Page</button>
              </div>
              <a :href="COMPETITION_CALENDAR_LINK" target="_blank" rel="noopener noreferrer" class="see-all-link">{{
                COMPETITION_CALENDAR_LABEL }} →</a>
            </div>
          </div>
          <div class="col-xl-5">
            <div class="season-card h-100">
              <div class="season-card-header">
                <span class="season-badge season-badge-gold">Achievements</span>
                <h3>Recent Accomplishments</h3>
              </div>
              <ul class="achievement-list">
                <li v-for="item in accomplishments.slice(0, 5)" :key="item.key">{{ item.icon }} {{ item.text }}</li>
                <li v-if="accomplishments.length === 0">No recent accomplishments available yet.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9">
            <div class="cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Whether you're a student wanting to join, a parent exploring options, an engineer ready to mentor, or a
                business looking to invest in the future - we'd love to hear from you.</p>
              <div class="cta-actions">
                <RouterLink to="/contact" class="btn btn-gold btn-lg">Contact Us Today</RouterLink>
                <RouterLink to="/students" class="btn btn-outline-white btn-lg">Learn More</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import HeroSection from '../HeroSection.vue'
import CompetitionDateItem from '../CompetitionDateItem.vue'
import competitionSchedule from '../../generated/competition-schedule.json'
import accomplishments from '../../generated/recent-accomplishments.json'
import {
  CLUB_NAME,
  COMPETITION_CALENDAR_LABEL,
  COMPETITION_CALENDAR_LINK,
  COMPETITION_PROGRAM,
  CURRENT_GAME_NAME,
  CURRENT_SEASON_YEAR,
  TEAM_STATS,
} from '../../config/club.js'

const competitionsPerPage = 5
const firstUpcomingCompetitionIndex = competitionSchedule.findIndex((comp) => comp.status === 'upcoming' || comp.status === 'tbd')
const initialCompetitionPage = firstUpcomingCompetitionIndex === -1 ? 0 : Math.floor(firstUpcomingCompetitionIndex / competitionsPerPage)
const currentCompetitionPage = ref(initialCompetitionPage)

const totalCompetitionPages = computed(() => Math.max(1, Math.ceil(competitionSchedule.length / competitionsPerPage)))

const visibleCompetitions = computed(() =>
  competitionSchedule.slice(
    currentCompetitionPage.value * competitionsPerPage,
    (currentCompetitionPage.value + 1) * competitionsPerPage
  )
)

const hasPreviousPage = computed(() => currentCompetitionPage.value > 0)
const hasNextPage = computed(() => currentCompetitionPage.value < totalCompetitionPages.value - 1)

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

const audienceCards = [
  {
    icon: '👨‍👩‍👧',
    title: 'Parents',
    description: `Learn how our program develops your student's skills, builds college-ready experience, and connects them to real STEM opportunities.`,
    link: '/parents',
    cta: 'Enroll Your Student',
  },
  {
    icon: '🎓',
    title: 'Students',
    description: `Want to build robots, write code, design mechanisms, or manage a team? There's a place for you here regardless of experience level.`,
    link: '/students',
    cta: 'Join Our Team',
  },
  {
    icon: '🔧',
    title: 'Engineers',
    description: `Share your technical expertise and help shape the next generation of engineers. Mentoring is one of the most rewarding experiences in your career.`,
    link: '/engineers',
    cta: 'Become a Mentor',
  },
  {
    icon: '🏢',
    title: 'Businesses',
    description: `Invest in your community's future workforce. Sponsoring ${CLUB_NAME} provides visibility, tax benefits, and direct impact on local youth.`,
    link: '/sponsors',
    cta: 'Sponsor Our Team',
  },
]
</script>

<style scoped>
.section-label {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-red);
  margin-bottom: 0.5rem;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.about-content h2 {
  color: var(--color-navy);
  margin-bottom: 0.25rem;
}

.about-content p {
  color: var(--color-gray-dark);
}

.mission-statement {
  color: var(--color-navy) !important;
  font-size: 1rem;
  background: rgba(26, 54, 93, 0.05);
  border-left: 4px solid var(--color-gold);
  padding: 1rem 1.25rem;
  border-radius: 0 8px 8px 0;
}

.about-image img {
  max-width: 360px;
  width: 100%;
  filter: drop-shadow(0 8px 24px rgba(26, 54, 93, 0.15));
}

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

.audience-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem 1.5rem;
  box-shadow: var(--shadow);
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
  border-top: 4px solid var(--color-light-2);
}

.audience-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
  border-top-color: var(--color-gold);
}

.audience-icon {
  font-size: 3rem;
}

.audience-card h3 {
  color: var(--color-navy);
  font-size: 1.2rem;
}

.audience-card p {
  font-size: 0.9rem;
  color: var(--color-gray);
  flex: 1;
}

.audience-card .btn {
  align-self: center;
  margin-top: 0.5rem;
}

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

.cta-section {
  background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-red) 100%);
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  color: var(--color-white);
  font-size: 2.25rem;
  margin-bottom: 1rem;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

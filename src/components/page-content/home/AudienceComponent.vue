<template>
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
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { CLUB_NAME } from '../../../config/club.js'

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
</style>

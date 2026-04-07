<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/views/HomeView.vue -->
<template>
  <div class="home">
    <!-- Hero -->
    <HeroSection
      title="Building Tomorrow's Engineers Today"
      subtitle="Beavercreek Robotics — FRC Team 5 empowers students through hands-on STEM experience, competitive robotics, and real-world engineering challenges."
      backgroundClass="hero-default"
      ctaText="Learn About Our Team"
      ctaLink="/students"
      secondaryCtaText="Join the Team"
      secondaryCtaLink="/contact"
    />

    <!-- About Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="about-grid">
          <div class="about-content">
            <p class="section-label">About Us</p>
            <h2>Who We Are</h2>
            <div class="divider divider-left"></div>
            <p>
              Beavercreek Robotics is FRC Team 5, one of the original FIRST Robotics Competition 
              teams. Based at Beavercreek High School in Beavercreek, Ohio, we've been inspiring 
              students to pursue careers in science, technology, engineering, and mathematics for 
              over two decades.
            </p>
            <p style="margin-top: 1rem;">
              Our team is built on the principles of <strong>Gracious Professionalism</strong> — 
              competing fiercely while treating others with dignity and respect. We believe that 
              real-world engineering experience, combined with strong mentorship, prepares students 
              not just for college, but for life.
            </p>
            <p style="margin-top: 1rem;" class="mission-statement">
              <em>"Our mission is to inspire students to become creative problem-solvers, collaborative 
              team members, and passionate lifelong learners."</em>
            </p>
          </div>
          <div class="about-image">
            <img src="../assets/images/hero-robot.svg" alt="Beavercreek Robotics Team Robot" />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section bg-navy stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item" v-for="stat in stats" :key="stat.label">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Audience Cards Section -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Who Are You?</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Find out how you can get involved with Beavercreek Robotics</p>
        <div class="audience-grid">
          <div class="audience-card" v-for="card in audienceCards" :key="card.title">
            <div class="audience-icon">{{ card.icon }}</div>
            <h3>{{ card.title }}</h3>
            <p>{{ card.description }}</p>
            <RouterLink :to="card.link" class="btn btn-primary">{{ card.cta }}</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Season Highlights -->
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title">2024 Season Highlights</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Follow our journey through the FIRST Robotics Competition season</p>
        <div class="season-grid">
          <div class="season-card">
            <div class="season-card-header">
              <span class="season-badge">Upcoming</span>
              <h3>Competition Schedule</h3>
            </div>
            <ul class="competition-list">
              <li>
                <span class="comp-date">March 6–8</span>
                <span class="comp-name">Ohio Valley Regional — Columbus, OH</span>
                <span class="comp-status status-upcoming">Upcoming</span>
              </li>
              <li>
                <span class="comp-date">March 20–22</span>
                <span class="comp-name">Lake Superior Regional — Duluth, MN</span>
                <span class="comp-status status-upcoming">Upcoming</span>
              </li>
              <li>
                <span class="comp-date">April 17–20</span>
                <span class="comp-name">FIRST Championship — Houston, TX</span>
                <span class="comp-status status-tbd">TBD</span>
              </li>
            </ul>
          </div>
          <div class="season-card">
            <div class="season-card-header">
              <span class="season-badge season-badge-gold">Achievements</span>
              <h3>Recent Accomplishments</h3>
            </div>
            <ul class="achievement-list">
              <li>🏆 Excellence in Engineering Award — 2023 Regional</li>
              <li>🥇 Autonomous Performance Award — 2023 District</li>
              <li>🤝 Gracious Professionalism Award — 2022 Regional</li>
              <li>🎖️ Judges' Award — 2022 Championship</li>
              <li>📚 Dean's List Nominee — 2024 Season</li>
            </ul>
          </div>
          <div class="season-card">
            <div class="season-card-header">
              <span class="season-badge season-badge-red">Build Season</span>
              <h3>This Year's Robot</h3>
            </div>
            <div class="robot-info">
              <img src="../assets/images/hero-robot.svg" alt="2024 Robot" class="robot-thumb" />
              <p>Our 2024 robot is designed to excel at the <strong>Crescendo</strong> challenge — launching notes into amplifiers and speakers, climbing the chain, and working in alliance with partner teams.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Whether you're a student wanting to join, a parent exploring options, an engineer ready to mentor, or a business looking to invest in the future — we'd love to hear from you.</p>
          <div class="cta-actions">
            <RouterLink to="/contact" class="btn btn-gold btn-lg">Contact Us Today</RouterLink>
            <RouterLink to="/students" class="btn btn-outline-white btn-lg">Learn More</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'

const stats = [
  { value: '20+', label: 'Years Active' },
  { value: '200+', label: 'Students Served' },
  { value: '50+', label: 'Awards Won' },
  { value: '100%', label: 'STEM Focused' },
]

const audienceCards = [
  {
    icon: '👨‍👩‍👧',
    title: 'Parents',
    description: 'Learn how our program develops your student\'s skills, builds college-ready experience, and connects them to real STEM opportunities.',
    link: '/parents',
    cta: 'Enroll Your Student',
  },
  {
    icon: '🎓',
    title: 'Students',
    description: 'Want to build robots, write code, design mechanisms, or manage a team? There\'s a place for you here regardless of experience level.',
    link: '/students',
    cta: 'Join Our Team',
  },
  {
    icon: '🔧',
    title: 'Engineers',
    description: 'Share your technical expertise and help shape the next generation of engineers. Mentoring is one of the most rewarding experiences in your career.',
    link: '/engineers',
    cta: 'Become a Mentor',
  },
  {
    icon: '🏢',
    title: 'Businesses',
    description: 'Invest in your community\'s future workforce. Sponsoring FRC Team 5 provides visibility, tax benefits, and direct impact on local youth.',
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

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
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

.about-image {
  display: flex;
  justify-content: center;
}

.about-image img {
  max-width: 360px;
  width: 100%;
  filter: drop-shadow(0 8px 24px rgba(26, 54, 93, 0.15));
}

/* Stats */
.stats-section {
  background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item:last-child {
  border-right: none;
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

/* Audience Cards */
.audience-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
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

/* Season Grid */
.season-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
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

.season-badge-gold { background: var(--color-gold); color: var(--color-navy); }
.season-badge-red { background: var(--color-red); }

.competition-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.competition-list li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.875rem;
}

.comp-date {
  font-weight: 600;
  color: var(--color-navy);
  white-space: nowrap;
}

.comp-name {
  color: var(--color-gray-dark);
}

.comp-status {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 20px;
  white-space: nowrap;
}

.status-upcoming { background: #c6f6d5; color: #276749; }
.status-tbd { background: #feebc8; color: #7b341e; }

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.achievement-list li {
  font-size: 0.9rem;
  color: var(--color-gray-dark);
}

.robot-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.robot-thumb {
  width: 100%;
  max-height: 140px;
  object-fit: contain;
}

.robot-info p {
  font-size: 0.875rem;
}

/* CTA Section */
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

@media (max-width: 1024px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .audience-grid { grid-template-columns: repeat(2, 1fr); }
  .season-grid { grid-template-columns: 1fr; }
  .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
  .stat-item:last-child { border-bottom: none; }
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-image { display: none; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .audience-grid { grid-template-columns: 1fr; }
  .competition-list li { grid-template-columns: 1fr; }
}
</style>

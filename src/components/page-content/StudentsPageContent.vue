<template>
  <div>
    <section class="section bg-white">
      <div class="container">
        <div class="row g-5 align-items-start">
          <div class="col-lg-8 frc-text">
            <p class="label-tag">About {{ COMPETITION_PROGRAM_SHORT }}</p>
            <h2>What Is the {{ COMPETITION_PROGRAM }}?</h2>
            <div class="divider divider-left"></div>
            <p>The {{ COMPETITION_PROGRAM }} (VRC) is one of the largest student robotics competitions in the world,
              with more than 20,000 teams across 50+ countries. Each August, a new game challenge is announced and teams
              have the entire season to design, build, and program their robot to compete.</p>
            <p class="mt-3">Teams compete in local qualifiers, signature events, and state championships, with the top
              teams earning spots at the VEX World Championship. The {{ CURRENT_SEASON_YEAR }} game is <strong>{{
                CURRENT_GAME_NAME }}</strong>.</p>
            <p class="mt-3">VRC is entirely student-driven - students build, program, and drive their robots themselves.
              Mentors guide and advise, but the hands are always the students'. This makes VRC one of the most powerful
              STEM educational experiences available.</p>
          </div>
          <div class="col-lg-4">
            <div class="frc-stats">
              <div class="frc-stat" v-for="stat in vrcStats" :key="stat.label">
                <div class="frc-stat-value">{{ stat.value }}</div>
                <div class="frc-stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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

    <section class="section bg-navy">
      <div class="container">
        <h2 class="section-title text-white">What Alumni Say</h2>
        <div class="divider"></div>
        <div class="row g-4">
          <div class="col-lg-4" v-for="quote in testimonials" :key="quote.author">
            <div class="testimonial-card h-100">
              <div class="quote-mark">&quot;</div>
              <p class="quote-text">{{ quote.text }}</p>
              <div class="quote-author">
                <div class="author-avatar">{{ quote.initials }}</div>
                <div>
                  <div class="author-name">{{ quote.author }}</div>
                  <div class="author-role">{{ quote.role }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-white">
      <div class="container content-narrow">
        <h2 class="section-title">How to Join the Team</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Getting started is easier than you think</p>
        <div class="join-steps">
          <div class="join-step" v-for="(step, index) in joinSteps" :key="step.title">
            <div class="join-step-num">{{ index + 1 }}</div>
            <div class="join-step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
        <div class="join-cta">
          <RouterLink to="/contact" class="btn btn-primary btn-lg">Ready to Join? Contact Us!</RouterLink>
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Day in the Life</h2>
        <div class="divider"></div>
        <div class="row g-4">
          <div class="col-md-6 col-xl-4" v-for="scenario in dayInLife" :key="scenario.title">
            <div class="life-card h-100">
              <div class="life-icon">{{ scenario.icon }}</div>
              <h3>{{ scenario.title }}</h3>
              <ul class="life-list">
                <li v-for="item in scenario.items" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title">Team Gallery</h2>
        <div class="divider"></div>
        <div class="row g-3">
          <div class="col-sm-6 col-lg-4" v-for="item in 6" :key="item">
            <div class="gallery-placeholder">
              <div class="gallery-inner">
                <span class="gallery-icon">📷</span>
                <p>Photos Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { COMPETITION_PROGRAM, COMPETITION_PROGRAM_SHORT, CURRENT_GAME_NAME, CURRENT_SEASON_YEAR } from '../../config/club.js'
import { dayInLife, joinSteps, testimonials, tracks, vrcStats } from '../../content/students.js'
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

.frc-text h2 {
  color: var(--color-navy);
}

.frc-text p {
  font-size: 0.975rem;
}

.frc-stats {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-shrink: 0;
}

.frc-stat {
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.5rem;
  text-align: center;
  min-width: 150px;
}

.frc-stat-value {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
}

.frc-stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.25rem;
}

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

.testimonial-card {
  background: rgba(255, 255, 255, 0.07);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.quote-mark {
  font-size: 4rem;
  color: var(--color-gold);
  line-height: 0.5;
  margin-bottom: 1rem;
  font-family: Georgia, serif;
}

.quote-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.82);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.quote-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
  width: 40px;
  height: 40px;
  background: var(--color-gold);
  color: var(--color-navy);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.author-name {
  font-weight: 600;
  color: var(--color-white);
  font-size: 0.9rem;
}

.author-role {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

.join-steps {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.join-step {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding: 1.25rem;
}

.join-step-num {
  width: 40px;
  height: 40px;
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.join-step-content h3 {
  color: var(--color-navy);
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.join-step-content p {
  font-size: 0.9rem;
}

.join-cta {
  text-align: center;
}

.life-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
}

.life-icon {
  font-size: 2.25rem;
  margin-bottom: 0.75rem;
}

.life-card h3 {
  color: var(--color-navy);
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.life-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.life-list li {
  font-size: 0.875rem;
  color: var(--color-gray-dark);
  padding-left: 1rem;
  position: relative;
}

.life-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-gold);
}

.gallery-placeholder {
  background: var(--color-light);
  border-radius: var(--border-radius);
  aspect-ratio: 4/3;
  border: 2px dashed var(--color-gray-light);
}

.gallery-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0.5rem;
}

.gallery-icon {
  font-size: 2rem;
  opacity: 0.5;
}

.gallery-inner p {
  font-size: 0.85rem;
  color: var(--color-gray);
}
</style>

<template>
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
</template>

<script setup>
import { COMPETITION_PROGRAM, COMPETITION_PROGRAM_SHORT, CURRENT_GAME_NAME, CURRENT_SEASON_YEAR } from '../../../config/club.js'
import { vrcStats } from '../../../content/students.js'
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
</style>

<template>
  <section class="section bg-white">
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6 about-content">
          <p class="section-label">About Us</p>
          <h2>Who We Are</h2>
          <div class="divider divider-left"></div>
          <p>
            {{ CLUB_NAME }} is a 501(c)(3) educational organization based at Beavercreek High School in Beavercreek,
            Ohio. We participate in the <strong>{{ COMPETITION_PROGRAM }}</strong>, inspiring students to pursue
            careers in science, technology, engineering, and mathematics.
          </p>
          <p class="mt-3">
            Our team is built on principles of collaboration, sportsmanship, and innovation - competing fiercely while
            treating others with dignity and respect. We believe that real-world engineering experience, combined with
            strong mentorship, prepares students not just for college, but for life.
          </p>
          <p class="mt-3 mission-statement">
            <em>
              "Our mission is to foster an interest in STEM among students via hands-on participation in the VEX
              Robotics Competition Program, enhancing teamwork, problem-solving, and technical skills."
            </em>
          </p>
        </div>
        <div class="col-lg-6 d-none d-lg-flex justify-content-center about-image">
          <img src="../../../assets/images/hero-robot.svg" alt="Beavercreek Robotics Team Robot" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CLUB_NAME, COMPETITION_PROGRAM } from '../../../config/club.js'
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
</style>

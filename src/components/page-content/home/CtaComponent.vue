<template>
  <section class="section cta-section">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>
              Whether you're a student wanting to join, a parent exploring options, an engineer ready to mentor, or a
              business looking to invest in the future - we'd love to hear from you.
            </p>
            <div class="cta-actions">
              <RouterLink to="/contact" class="btn btn-gold btn-lg">Contact Us Today</RouterLink>
              <RouterLink to="/students" class="btn btn-outline-white btn-lg">Learn More</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
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

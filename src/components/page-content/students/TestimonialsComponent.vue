<template>
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
</template>

<script setup>
import { testimonials } from '../../../content/students.js'
</script>

<style scoped>
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
</style>

<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/components/HeroSection.vue -->
<template>
  <section class="hero-section" :class="backgroundClass">
    <div class="hero-overlay"></div>
    <div class="hero-content container">
      <h1 class="hero-title">{{ title }}</h1>
      <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
      <div v-if="showCta && (ctaText || secondaryCtaText)" class="hero-actions">
        <RouterLink v-if="ctaText && ctaLink" :to="ctaLink" class="btn btn-gold btn-lg">
          {{ ctaText }}
        </RouterLink>
        <RouterLink v-if="secondaryCtaText && secondaryCtaLink" :to="secondaryCtaLink" class="btn btn-outline-white btn-lg">
          {{ secondaryCtaText }}
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  backgroundClass: {
    type: String,
    default: 'hero-default'
  },
  showCta: {
    type: Boolean,
    default: true
  },
  ctaText: {
    type: String,
    default: ''
  },
  ctaLink: {
    type: String,
    default: '/'
  },
  secondaryCtaText: {
    type: String,
    default: ''
  },
  secondaryCtaLink: {
    type: String,
    default: '/'
  }
})
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.92) 0%, rgba(232, 102, 26, 0.55) 100%);
  z-index: 1;
}

.hero-default {
  background: linear-gradient(135deg, var(--color-navy) 0%, #2e2e2e 50%, var(--color-red) 100%);
}

.hero-parents {
  background: linear-gradient(135deg, #1a1a1a 0%, #2e2e2e 60%, #2d6a4f 100%);
}

.hero-students {
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #e8661a 100%);
}

.hero-engineers {
  background: linear-gradient(135deg, #1a1a1a 0%, #2e2e2e 60%, #e8661a 100%);
}

.hero-sponsors {
  background: linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 60%, #e8661a 100%);
}

.hero-contact {
  background: linear-gradient(135deg, #1a1a1a 0%, #2e2e2e 100%);
}

/* Decorative pattern overlay */
.hero-default::before,
.hero-parents::before,
.hero-students::before,
.hero-engineers::before,
.hero-sponsors::before,
.hero-contact::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.04) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(232,102,26,0.15) 0%, transparent 40%);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-white);
  line-height: 1.15;
  margin-bottom: 1.25rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: rgba(255, 255, 255, 0.88);
  max-width: 680px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

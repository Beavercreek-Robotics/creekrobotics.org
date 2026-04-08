<template>
  <div class="engineers-page">
    <HeroSection
      title="Share Your Expertise. Shape the Future."
      subtitle="Your skills and experience can ignite a passion for engineering in the next generation. Become a mentor with Beavercreek Robotics Club and make a lasting impact."
      backgroundClass="hero-engineers"
      ctaText="Get Started as a Mentor"
      ctaLink="/contact"
      secondaryCtaText="Learn More"
      secondaryCtaLink="/engineers"
    />
    <EngineersPageContent />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import EngineersPageContent from '../components/page-content/EngineersPageContent.vue'
</script>

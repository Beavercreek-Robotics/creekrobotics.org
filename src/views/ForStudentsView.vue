<template>
  <div class="students-page">
    <HeroSection
      title="Build Robots. Change the World."
      subtitle="Join VRC and discover your passion for engineering, coding, design, or business - no experience needed, just curiosity and drive."
      backgroundClass="hero-students"
      ctaText="Apply to Join"
      ctaLink="/contact"
      secondaryCtaText="See What We Do"
      secondaryCtaLink="/students"
      :showCta="true"
    />
    <StudentsPageContent />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import StudentsPageContent from '../components/page-content/StudentsPageContent.vue'
</script>

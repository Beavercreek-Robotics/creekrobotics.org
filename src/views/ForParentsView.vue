<template>
  <div class="parents-page">
    <HeroSection
      title="Your Student's Future Starts Here"
      subtitle="Beavercreek Robotics provides students with the STEM education, leadership skills, and real-world experience that colleges and employers are looking for."
      backgroundClass="hero-parents"
      ctaText="Contact Us to Enroll"
      ctaLink="/contact"
      secondaryCtaText="Meet the Team"
      secondaryCtaLink="/students"
    />
    <ParentsPageContent />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ParentsPageContent from '../components/page-content/ParentsPageContent.vue'
</script>

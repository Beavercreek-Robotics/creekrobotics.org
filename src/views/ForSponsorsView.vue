<template>
  <div class="sponsors-page">
    <HeroSection
      title="Invest in the Next Generation of Engineers"
      subtitle="Your sponsorship of Beavercreek Robotics teams directly funds STEM education for Beavercreek students, builds your brand in the engineering community, and creates a lasting workforce pipeline for your business."
      backgroundClass="hero-sponsors"
      ctaText="Become a Sponsor"
      ctaLink="#sponsor-form"
      secondaryCtaText="View Tiers"
      secondaryCtaLink="#tiers"
    />
    <SponsorsPageContent />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import SponsorsPageContent from '../components/page-content/SponsorsPageContent.vue'
</script>

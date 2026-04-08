<template>
  <div class="contact-page">
    <HeroSection
      title="Get In Touch"
      subtitle="Whether you're a student, parent, engineer, or business - we'd love to hear from you. We respond to all inquiries within 2 business days."
      backgroundClass="hero-contact"
      :showCta="false"
    />
    <ContactPageContent />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import ContactPageContent from '../components/page-content/ContactPageContent.vue'
</script>

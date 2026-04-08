<template>
  <HeroSection title="Building Tomorrow's Engineers Today"
    :subtitle="`${CLUB_NAME} empowers students through hands-on STEM experience, competitive robotics, and real-world engineering challenges in the ${COMPETITION_PROGRAM}.`"
    backgroundClass="hero-default" ctaText="Learn About Our Team" ctaLink="/students" secondaryCtaText="Join the Team"
    secondaryCtaLink="/contact" />
</template>

<script setup>
import HeroSection from '../../HeroSection.vue'
import { CLUB_NAME, COMPETITION_PROGRAM } from '../../../config/club.js'
</script>

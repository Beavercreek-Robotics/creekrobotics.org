<template>
  <div>
    <EnrollmentComponent />
    <ScheduleComponent />
    <section class="section bg-white">
      <div class="container">
        <div class="row g-5">
          <SafetyComponent />
          <CostsComponent />
        </div>
      </div>
    </section>
    <GainsComponent />
    <FaqComponent />
  </div>
</template>

<script setup>
import EnrollmentComponent from './parents/EnrollmentComponent.vue'
import ScheduleComponent from './parents/ScheduleComponent.vue'
import SafetyComponent from './parents/SafetyComponent.vue'
import CostsComponent from './parents/CostsComponent.vue'
import GainsComponent from './parents/GainsComponent.vue'
import FaqComponent from './parents/FaqComponent.vue'
</script>

<template>
  <section class="section bg-light">
    <div class="container content-narrow">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div class="divider"></div>
      <div class="faq-list">
        <div class="faq-item" v-for="(item, index) in allFaqs" :key="item.question" @click="toggleFaq(index)"
          :class="{ open: openFaq === index }">
          <div class="faq-question">
            {{ item.question }}
            <span class="faq-arrow">{{ openFaq === index ? '▲' : '▼' }}</span>
          </div>
          <div v-show="openFaq === index" class="faq-answer">{{ item.answer }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { CONTACT_EMAIL } from '../../../config/club.js'
import { faqs } from '../../../content/parents.js'

const openFaq = ref(null)

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const allFaqs = computed(() => [
  ...faqs,
  {
    question: 'Can I volunteer or help as a parent?',
    answer: `We love parent involvement! Parents can volunteer at competitions, help with transportation, provide meals, or even serve as mentors if they have relevant skills. Contact us at ${CONTACT_EMAIL} to learn about volunteer opportunities.`
  },
])
</script>

<style scoped>
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.faq-item {
  border: 1px solid var(--color-light-2);
  border-radius: var(--border-radius);
  overflow: hidden;
  cursor: pointer;
  background: var(--color-white);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 1.25rem;
  font-weight: 600;
  color: var(--color-navy);
  font-size: 0.95rem;
}

.faq-item.open .faq-question {
  background: var(--color-navy);
  color: var(--color-white);
}

.faq-arrow {
  font-size: 0.7rem;
  flex-shrink: 0;
  margin-left: 1rem;
}

.faq-answer {
  padding: 1rem 1.25rem 1.25rem;
  font-size: 0.9rem;
  color: var(--color-gray-dark);
  line-height: 1.7;
  border-top: 1px solid var(--color-light-2);
}
</style>

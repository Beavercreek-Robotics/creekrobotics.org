<template>
  <form class="contact-form" @submit.prevent="handleSubmit">
    <div class="row g-4">
      <div class="col-md-6 form-group">
        <label class="form-label">Name *</label>
        <input v-model="form.name" type="text" class="form-control" required placeholder="Your full name" />
      </div>
      <div class="col-md-6 form-group">
        <label class="form-label">Email *</label>
        <input v-model="form.email" type="email" class="form-control" required placeholder="your@email.com" />
      </div>
    </div>

    <div class="row g-4">
      <div class="col-md-6 form-group">
        <label class="form-label">Phone (Optional)</label>
        <input v-model="form.phone" type="tel" class="form-control" placeholder="(555) 555-5555" />
      </div>
      <div class="col-md-6 form-group">
        <label class="form-label">I Am A...</label>
        <select v-model="form.role" class="form-control">
          <option value="">Select...</option>
          <option value="parent">Parent</option>
          <option value="student">Student</option>
          <option value="engineer">Engineer / Potential Mentor</option>
          <option value="sponsor">Business / Potential Sponsor</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label">Subject</label>
      <input v-model="form.subject" type="text" class="form-control" placeholder="What is this about?" />
    </div>

    <div class="form-group">
      <label class="form-label">Message *</label>
      <textarea v-model="form.message" class="form-control" rows="6" required
        placeholder="Tell us how we can help you..."></textarea>
    </div>

    <button type="submit" class="btn btn-primary btn-lg" :disabled="submitting">
      <span v-if="!submitting">Send Message</span>
      <span v-else class="loading-row">
        <svg class="spin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2">
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        Sending...
      </span>
    </button>

    <div v-if="submitted" class="success-message">
      <span class="success-icon">🎉</span>
      <div>
        <strong>Message sent!</strong>
        <p>Thanks for reaching out! We'll get back to you within 2 business days.</p>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', phone: '', role: '', subject: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  submitting.value = true
  await new Promise((resolve) => setTimeout(resolve, 1200))
  submitting.value = false
  submitted.value = true
  form.value = { name: '', email: '', phone: '', role: '', subject: '', message: '' }
  setTimeout(() => {
    submitted.value = false
  }, 8000)
}

</script>

<style scoped>
.contact-form-section h2,
.contact-info-section h2 {
  color: var(--color-navy);
  font-size: 1.6rem;
  margin-bottom: 0.25rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-label {
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-dark);
  margin-bottom: 0.25rem;
  display: block;
}

.loading-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spin {
  animation: spin 0.8s linear infinite;
}

.success-message {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: #f0fff4;
  border: 1px solid #c6f6d5;
  border-radius: var(--border-radius);
  padding: 1rem 1.25rem;
}

.success-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.success-message strong {
  display: block;
  color: #276749;
  margin-bottom: 0.25rem;
}

.success-message p {
  font-size: 0.875rem;
  color: #2d6a4f;
  margin: 0;
}
</style>
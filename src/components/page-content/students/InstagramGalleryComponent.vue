<template>
  <section class="section bg-white">
    <div class="container">
      <div class="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3 mb-4">
        <div>
          <h2 class="section-title mb-0">Team Gallery</h2>
          <div class="divider"></div>
          <p class="section-subtitle mb-0">Follow us on Instagram for build updates, events, and competition highlights.
          </p>
        </div>
        <a v-if="SOCIAL_INSTAGRAM" :href="SOCIAL_INSTAGRAM" target="_blank" rel="noopener noreferrer"
          class="btn btn-outline-primary">
          View Profile
        </a>
      </div>

      <div v-if="hasEmbeds" class="row g-4">
        <div class="col-md-6 col-xl-4" v-for="postUrl in instagramPostUrls" :key="postUrl">
          <blockquote class="instagram-media" :data-instgrm-permalink="postUrl" data-instgrm-version="14">
            <a :href="postUrl" target="_blank" rel="noopener noreferrer">Open Instagram post</a>
          </blockquote>
        </div>
      </div>

      <div v-else class="instagram-empty-state">
        <p class="mb-2">Instagram post embeds are not configured yet.</p>
        <p class="mb-0">Add post URLs in this component's instagramPostUrls array to enable embedded posts.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, nextTick, onMounted } from 'vue'
import { SOCIAL_INSTAGRAM } from '../../../config/club.js'

// Add full Instagram post or reel URLs here to render embeds.
const instagramPostUrls = [
  // 'https://www.instagram.com/p/POST_ID/',
]

const hasEmbeds = computed(() => instagramPostUrls.length > 0)

const loadInstagramEmbeds = async () => {
  if (!hasEmbeds.value) {
    return
  }

  await nextTick()

  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process()
    return
  }

  const existingScript = document.querySelector('script[data-instgrm-script="true"]')
  if (existingScript) {
    return
  }

  const script = document.createElement('script')
  script.src = 'https://www.instagram.com/embed.js'
  script.async = true
  script.defer = true
  script.setAttribute('data-instgrm-script', 'true')
  script.onload = () => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process()
    }
  }
  document.body.appendChild(script)
}

onMounted(loadInstagramEmbeds)
</script>

<style scoped>
.instagram-empty-state {
  background: var(--color-light);
  border: 2px dashed var(--color-gray-light);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  color: var(--color-gray-dark);
}
</style>

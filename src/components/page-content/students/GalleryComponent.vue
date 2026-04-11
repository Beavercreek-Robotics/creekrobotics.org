<template>
  <section class="section bg-white">
    <div class="container">
      <h2 class="section-title">Team Gallery</h2>
      <div class="divider"></div>
      <div class="row g-3">
        <div class="col-sm-6 col-lg-4" v-for="item in 6" :key="item">
          <div class="gallery-placeholder">
            <div class="gallery-inner">
              <span class="gallery-icon">📷</span>
              <p>Photos Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
.gallery-placeholder {
  background: var(--color-light);
  border-radius: var(--border-radius);
  aspect-ratio: 4/3;
  border: 2px dashed var(--color-gray-light);
}

.gallery-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0.5rem;
}

.gallery-icon {
  font-size: 2rem;
  opacity: 0.5;
}

.gallery-inner p {
  font-size: 0.85rem;
  color: var(--color-gray);
}
</style>

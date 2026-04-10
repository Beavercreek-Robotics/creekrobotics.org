<template>
  <div class="col-lg-6">
    <div class="h-100">
      <p class="label-tag">Costs &amp; Financial Aid</p>
      <h2>No Student Turned Away</h2>
      <div class="divider divider-left"></div>
      <p>We believe every student deserves access to quality STEM education regardless of financial circumstances.</p>
      <div class="cost-card">
        <div class="cost-item">
          <span class="cost-label">Annual Student Fee</span>
          <span class="cost-value">Contact Us</span>
        </div>
        <div class="cost-item">
          <span class="cost-label">Scholarships &amp; Aid</span>
          <span class="cost-value available">Available</span>
        </div>
        <div class="cost-item">
          <span class="cost-label">Equipment &amp; Safety Gear</span>
          <span class="cost-value">Provided</span>
        </div>
      </div>
      <p class="cost-note">Contact us to discuss financial assistance. No student is ever turned away for
        financial reasons.</p>
    </div>
  </div>
</template>

<style scoped>
.label-tag {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-red);
  margin-bottom: 0.5rem;
}

.cost-card {
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding: 1.25rem;
  margin: 1.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.cost-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.cost-label {
  color: var(--color-gray-dark);
}

.cost-value {
  font-weight: 600;
  color: var(--color-navy);
}

.cost-value.available {
  color: #276749;
}

.cost-note {
  font-size: 0.85rem;
  color: var(--color-gray);
  font-style: italic;
}
</style>

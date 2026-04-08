<template>
  <HomePageContent />
</template>

<script setup>
import HomePageContent from '../components/page-content/HomePageContent.vue'
</script>

<style scoped>
.section-label {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-red);
  margin-bottom: 0.5rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.about-content h2 {
  color: var(--color-navy);
  margin-bottom: 0.25rem;
}

.about-content p {
  color: var(--color-gray-dark);
}

.mission-statement {
  color: var(--color-dark) !important;
  font-size: 1rem;
  background: rgba(232, 102, 26, 0.06);
  border-left: 4px solid var(--color-red);
  padding: 1rem 1.25rem;
  border-radius: 0 8px 8px 0;
}

.about-image {
  display: flex;
  justify-content: center;
}

.about-image img {
  max-width: 360px;
  width: 100%;
  filter: drop-shadow(0 8px 24px rgba(232, 102, 26, 0.15));
}

/* Stats */
.stats-section {
  background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-light) 100%);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item:last-child {
  border-right: none;
}

.stat-value {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

/* Audience Cards */
.audience-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.audience-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem 1.5rem;
  box-shadow: var(--shadow);
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  text-align: center;
  border-top: 4px solid var(--color-light-2);
}

.audience-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
  border-top-color: var(--color-gold);
}

.audience-icon {
  font-size: 3rem;
}

.audience-card h3 {
  color: var(--color-navy);
  font-size: 1.2rem;
}

.audience-card p {
  font-size: 0.9rem;
  color: var(--color-gray);
  flex: 1;
}

.audience-card .btn {
  align-self: center;
  margin-top: 0.5rem;
}

/* Season Grid */
.season-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.season-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow);
  border: 1px solid var(--color-light-2);
}

.season-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.season-card-header h3 {
  font-size: 1rem;
  color: var(--color-navy);
}

.season-badge {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: var(--color-navy);
  color: var(--color-white);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  white-space: nowrap;
}

.season-badge-gold { background: var(--color-red); color: var(--color-white); }
.season-badge-red { background: var(--color-gray-dark); }

.competition-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.competition-list li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.875rem;
}

.comp-date {
  font-weight: 600;
  color: var(--color-navy);
  white-space: nowrap;
}

.comp-name {
  color: var(--color-gray-dark);
}

.comp-status {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 20px;
  white-space: nowrap;
}

.status-upcoming { background: #c6f6d5; color: #276749; }
.status-tbd { background: #feebc8; color: #7b341e; }
.status-completed { background: #bee3f8; color: #2a69ac; }

.see-all-link {
  display: inline-block;
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--color-red);
  font-weight: 600;
  text-decoration: none;
}

.see-all-link:hover {
  text-decoration: underline;
}

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.achievement-list li {
  font-size: 0.9rem;
  color: var(--color-gray-dark);
}

.robot-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.robot-thumb {
  width: 100%;
  max-height: 140px;
  object-fit: contain;
}

.robot-info p {
  font-size: 0.875rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--color-navy) 0%, var(--color-red) 100%);
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  color: var(--color-white);
  font-size: 2.25rem;
  margin-bottom: 1rem;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .audience-grid { grid-template-columns: repeat(2, 1fr); }
  .season-grid { grid-template-columns: 1fr; }
  .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
  .stat-item:last-child { border-bottom: none; }
}

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-image { display: none; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .audience-grid { grid-template-columns: 1fr; }
  .competition-list li { grid-template-columns: 1fr; }
}
</style>

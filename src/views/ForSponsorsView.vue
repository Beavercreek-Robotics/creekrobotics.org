<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/views/ForSponsorsView.vue -->
<template>
  <div class="sponsors-page">
    <HeroSection
      title="Invest in the Next Generation of Engineers"
      subtitle="Your sponsorship of FRC Team 5 directly funds STEM education for Beavercreek students, builds your brand in the engineering community, and creates a lasting workforce pipeline for your business."
      backgroundClass="hero-sponsors"
      ctaText="Become a Sponsor"
      ctaLink="#sponsor-form"
      secondaryCtaText="View Tiers"
      secondaryCtaLink="#tiers"
    />

    <!-- Why Sponsor -->
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title">Why Sponsor FRC Team 5?</h2>
        <div class="divider"></div>
        <div class="why-grid">
          <div class="why-card" v-for="reason in whySponsors" :key="reason.title">
            <div class="why-icon">{{ reason.icon }}</div>
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sponsorship Tiers -->
    <section id="tiers" class="section bg-light">
      <div class="container">
        <h2 class="section-title">Sponsorship Tiers</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Every level of support makes a real difference for our students</p>
        <div class="tiers-grid">
          <div
            class="tier-card"
            v-for="tier in tiers"
            :key="tier.name"
            :class="tier.highlight ? 'tier-featured' : ''"
          >
            <div v-if="tier.highlight" class="tier-badge">Most Popular</div>
            <div class="tier-icon">{{ tier.icon }}</div>
            <div class="tier-name">{{ tier.name }}</div>
            <div class="tier-amount">{{ tier.amount }}</div>
            <ul class="tier-benefits">
              <li v-for="benefit in tier.benefits" :key="benefit">
                <span class="benefit-check">✓</span>
                {{ benefit }}
              </li>
            </ul>
            <a href="#sponsor-form" class="btn" :class="tier.highlight ? 'btn-gold' : 'btn-outline'">
              {{ tier.cta }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Tax Benefits + Fund Usage -->
    <section class="section bg-white">
      <div class="container">
        <div class="info-grid">
          <div class="info-box">
            <h3>Tax Benefits</h3>
            <div class="divider divider-left"></div>
            <p>Beavercreek Robotics is a registered 501(c)(3) nonprofit organization. All contributions are tax-deductible to the fullest extent of the law.</p>
            <ul class="info-list">
              <li>✓ Full federal tax deduction available</li>
              <li>✓ Ohio state tax deduction available</li>
              <li>✓ Formal receipt provided for all donations</li>
              <li>✓ EIN provided for corporate donation matching</li>
              <li>✓ Many employers match FIRST donations</li>
            </ul>
            <p class="info-note">Consult your tax advisor for details specific to your situation.</p>
          </div>
          <div class="info-box">
            <h3>How Your Support Is Used</h3>
            <div class="divider divider-left"></div>
            <p>Every dollar is carefully managed to maximize impact for our students:</p>
            <div class="budget-bars">
              <div class="budget-item" v-for="item in budgetItems" :key="item.label">
                <div class="budget-label-row">
                  <span class="budget-label">{{ item.label }}</span>
                  <span class="budget-pct">{{ item.pct }}</span>
                </div>
                <div class="budget-bar-bg">
                  <div class="budget-bar" :style="{ width: item.pct, background: item.color }"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Sponsors -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Thank You to Our Supporters</h2>
        <div class="divider"></div>
        <p class="section-subtitle">We are grateful for the ongoing support of these organizations</p>
        <div class="sponsors-placeholder">
          <div class="sponsor-slot" v-for="i in 8" :key="i">
            <div class="sponsor-placeholder-inner">
              <span>Your Logo Here</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section id="sponsor-form" class="section bg-navy">
      <div class="container container-sm">
        <h2 class="section-title text-white">Interested in Sponsoring?</h2>
        <div class="divider"></div>
        <p class="section-subtitle" style="color: rgba(255,255,255,0.75);">Fill out the form below and we'll reach out within 2 business days</p>
        <form class="sponsor-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label text-white">Business / Organization Name *</label>
              <input v-model="form.business" type="text" class="form-control" required placeholder="Acme Engineering Inc."/>
            </div>
            <div class="form-group">
              <label class="form-label text-white">Contact Name *</label>
              <input v-model="form.contact" type="text" class="form-control" required placeholder="Jane Smith"/>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label text-white">Email Address *</label>
              <input v-model="form.email" type="email" class="form-control" required placeholder="jane@acme.com"/>
            </div>
            <div class="form-group">
              <label class="form-label text-white">Phone (Optional)</label>
              <input v-model="form.phone" type="tel" class="form-control" placeholder="(555) 555-5555"/>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label text-white">Sponsorship Level Interest</label>
            <select v-model="form.tier" class="form-control">
              <option value="">Select a tier...</option>
              <option value="bronze">Bronze ($500+)</option>
              <option value="silver">Silver ($1,000+)</option>
              <option value="gold">Gold ($2,500+)</option>
              <option value="platinum">Platinum ($5,000+)</option>
              <option value="custom">Custom / In-Kind</option>
              <option value="unknown">Not Sure Yet</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label text-white">Message</label>
            <textarea v-model="form.message" class="form-control" rows="4" placeholder="Tell us about your company, any questions you have, or how you'd like to get involved..."></textarea>
          </div>
          <button type="submit" class="btn btn-gold btn-lg" :disabled="submitting">
            {{ submitting ? 'Sending...' : 'Submit Interest Form' }}
          </button>
          <p v-if="submitted" class="form-success">Thank you! We'll be in touch soon. 🎉</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'

const form = ref({ business: '', contact: '', email: '', phone: '', tier: '', message: '' })
const submitting = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  submitting.value = true
  await new Promise(r => setTimeout(r, 1000))
  submitting.value = false
  submitted.value = true
  form.value = { business: '', contact: '', email: '', phone: '', tier: '', message: '' }
}

const whySponsors = [
  {
    icon: '🌟',
    title: 'Community Impact',
    description: 'Directly invest in the futures of Beavercreek students. Your sponsorship funds hands-on STEM education that shapes careers and lives.'
  },
  {
    icon: '📣',
    title: 'Brand Visibility',
    description: 'Your logo on our robot, team shirts, website, and competition banners reaches thousands of attendees, parents, and fellow STEM enthusiasts.'
  },
  {
    icon: '💸',
    title: 'Tax Deductible',
    description: 'As a 501(c)(3) nonprofit, all donations to Beavercreek Robotics are fully tax-deductible at the federal and Ohio state level.'
  },
  {
    icon: '👷',
    title: 'Workforce Pipeline',
    description: 'Today\'s sponsored students are tomorrow\'s engineers. Build relationships early with motivated, skilled candidates for your company.'
  },
]

const tiers = [
  {
    icon: '🥉',
    name: 'Bronze',
    amount: '$500+',
    highlight: false,
    cta: 'Become Bronze',
    benefits: [
      'Name and link on team website',
      'Thank-you post on social media',
      'Tax receipt provided',
      'Periodic team update emails',
    ],
  },
  {
    icon: '🥈',
    name: 'Silver',
    amount: '$1,000+',
    highlight: false,
    cta: 'Become Silver',
    benefits: [
      'All Bronze benefits',
      'Logo on competition robot',
      'Company banner at competitions',
      'Logo on team materials',
      'Personal thank-you from team',
    ],
  },
  {
    icon: '🥇',
    name: 'Gold',
    amount: '$2,500+',
    highlight: true,
    cta: 'Become Gold',
    benefits: [
      'All Silver benefits',
      'Logo on team shirts (worn at events)',
      'Feature in team newsletter',
      'Team visit / facility tour available',
      'Prominent website placement',
      'End-of-season impact report',
    ],
  },
  {
    icon: '💎',
    name: 'Platinum',
    amount: '$5,000+',
    highlight: false,
    cta: 'Become Platinum',
    benefits: [
      'All Gold benefits',
      'Largest logo placement on robot and shirts',
      'VIP experience at competitions',
      'Opportunity to address the team',
      'Dedicated social media spotlight',
      'Annual partner recognition plaque',
    ],
  },
]

const budgetItems = [
  { label: 'Robot Parts & Materials', pct: '40%', color: '#1a365d' },
  { label: 'Competition Registration Fees', pct: '25%', color: '#c53030' },
  { label: 'Travel & Lodging', pct: '20%', color: '#d69e2e' },
  { label: 'Training & Safety Equipment', pct: '10%', color: '#48bb78' },
  { label: 'Administrative & Insurance', pct: '5%', color: '#718096' },
]
</script>

<style scoped>
/* Why Grid */
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.why-card {
  background: var(--color-light);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  text-align: center;
  transition: all 0.25s ease;
}

.why-card:hover {
  background: var(--color-white);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.why-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.why-card h3 { color: var(--color-navy); font-size: 1rem; margin-bottom: 0.5rem; }
.why-card p { font-size: 0.9rem; }

/* Tiers */
.tiers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  align-items: start;
}

.tier-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem 1.5rem;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  position: relative;
  border-top: 4px solid var(--color-light-2);
  transition: all 0.25s ease;
}

.tier-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.tier-card.tier-featured {
  border-top-color: var(--color-gold);
  box-shadow: var(--shadow-md);
  transform: scale(1.02);
}

.tier-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--color-gold);
  color: var(--color-navy);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.2rem 0.75rem;
  border-radius: 20px;
  white-space: nowrap;
}

.tier-icon { font-size: 2.25rem; text-align: center; }
.tier-name { text-align: center; font-size: 1.1rem; font-weight: 700; color: var(--color-navy); }
.tier-amount { text-align: center; font-size: 1.75rem; font-weight: 800; color: var(--color-red); margin-bottom: 0.5rem; }

.tier-benefits {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;
  flex: 1;
}

.tier-benefits li {
  font-size: 0.875rem;
  color: var(--color-gray-dark);
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
}

.benefit-check { color: #276749; font-weight: 700; flex-shrink: 0; }

.tier-card .btn { text-align: center; width: 100%; }

/* Info Grid */
.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.info-box h3 { color: var(--color-navy); font-size: 1.4rem; margin-bottom: 0.25rem; }
.info-box > p { font-size: 0.95rem; margin-bottom: 1.25rem; }

.info-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.info-list li {
  font-size: 0.9rem;
  color: var(--color-gray-dark);
}

.info-note { font-size: 0.8rem; color: var(--color-gray); font-style: italic; }

/* Budget Bars */
.budget-bars {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.budget-label-row {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.3rem;
}

.budget-label { color: var(--color-gray-dark); font-weight: 500; }
.budget-pct { color: var(--color-navy); font-weight: 700; }

.budget-bar-bg {
  height: 10px;
  background: var(--color-light-2);
  border-radius: 5px;
  overflow: hidden;
}

.budget-bar {
  height: 100%;
  border-radius: 5px;
  transition: width 0.6s ease;
}

/* Sponsors Placeholder */
.sponsors-placeholder {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.sponsor-slot {
  aspect-ratio: 3/2;
  border: 2px dashed var(--color-gray-light);
  border-radius: var(--border-radius);
}

.sponsor-placeholder-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 0.8rem;
  color: var(--color-gray-light);
  font-style: italic;
}

/* Sponsor Form */
.sponsor-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-success {
  text-align: center;
  color: #68d391;
  font-weight: 600;
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .tiers-grid { grid-template-columns: repeat(2, 1fr); }
  .tier-card.tier-featured { transform: none; }
  .sponsors-placeholder { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .why-grid { grid-template-columns: 1fr; }
  .tiers-grid { grid-template-columns: 1fr; }
  .info-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}
</style>

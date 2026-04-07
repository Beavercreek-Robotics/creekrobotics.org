<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/views/ForEngineersView.vue -->
<template>
  <div class="engineers-page">
    <HeroSection
      title="Share Your Expertise. Shape the Future."
      subtitle="Your skills and experience can ignite a passion for engineering in the next generation. Become a mentor with FRC Team 5 and make a lasting impact."
      backgroundClass="hero-engineers"
      ctaText="Get Started as a Mentor"
      ctaLink="/contact"
      secondaryCtaText="Learn More"
      secondaryCtaLink="/engineers"
    />

    <!-- Why Mentor -->
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title">Why Become a Mentor?</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Mentoring is one of the most rewarding things you can do with your expertise</p>
        <div class="reasons-grid">
          <div class="reason-card" v-for="reason in whyMentor" :key="reason.title">
            <div class="reason-icon">{{ reason.icon }}</div>
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Stats -->
    <section class="section bg-navy">
      <div class="container">
        <h2 class="section-title text-white">Your Impact by the Numbers</h2>
        <div class="divider"></div>
        <div class="impact-stats">
          <div class="impact-stat" v-for="stat in impactStats" :key="stat.label">
            <div class="impact-value">{{ stat.value }}</div>
            <div class="impact-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mentor Types -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Mentorship Opportunities</h2>
        <div class="divider"></div>
        <p class="section-subtitle">We have a role for every background and availability level</p>
        <div class="mentor-types">
          <div class="mentor-type-card" v-for="type in mentorTypes" :key="type.title" :class="type.featured ? 'featured' : ''">
            <div class="mentor-type-header">
              <span class="mentor-icon">{{ type.icon }}</span>
              <div>
                <h3>{{ type.title }}</h3>
                <span class="mentor-commitment">{{ type.commitment }}</span>
              </div>
            </div>
            <p>{{ type.description }}</p>
            <ul class="mentor-skills">
              <li v-for="skill in type.skills" :key="skill">{{ skill }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Time Commitment -->
    <section class="section bg-white">
      <div class="container">
        <div class="time-grid">
          <div>
            <h2>Time Commitment</h2>
            <div class="divider divider-left"></div>
            <p>We understand you have a career and family. We work around your schedule and appreciate every hour you can give.</p>
            <div class="time-cards">
              <div class="time-card" v-for="period in timeCommitment" :key="period.period">
                <div class="time-period">{{ period.period }}</div>
                <div class="time-hours">{{ period.hours }}</div>
                <div class="time-desc">{{ period.description }}</div>
              </div>
            </div>
            <p class="time-note">Flexible arrangements are always available. Even occasional help is incredibly valuable.</p>
          </div>
          <div>
            <h2>Requirements</h2>
            <div class="divider divider-left"></div>
            <p>We take student safety seriously. All adult mentors must complete a brief background check and orientation.</p>
            <div class="requirements-list">
              <div class="req-item" v-for="req in requirements" :key="req.title">
                <div class="req-icon">{{ req.icon }}</div>
                <div>
                  <h4>{{ req.title }}</h4>
                  <p>{{ req.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Get Started -->
    <section class="section bg-light">
      <div class="container container-sm">
        <h2 class="section-title">How to Get Started</h2>
        <div class="divider"></div>
        <div class="start-steps">
          <div class="start-step" v-for="(step, i) in getStartedSteps" :key="i">
            <div class="start-step-num">{{ i + 1 }}</div>
            <div class="start-step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
        <div class="start-cta">
          <RouterLink to="/contact" class="btn btn-primary btn-lg">Express Interest Today</RouterLink>
        </div>
      </div>
    </section>

    <!-- Mentor Testimonials -->
    <section class="section bg-navy">
      <div class="container">
        <h2 class="section-title text-white">From Our Mentors</h2>
        <div class="divider"></div>
        <div class="mentor-testimonials">
          <div class="mentor-quote" v-for="quote in mentorTestimonials" :key="quote.author">
            <div class="quote-mark">"</div>
            <p>{{ quote.text }}</p>
            <div class="mentor-author">
              <div class="mentor-avatar">{{ quote.initials }}</div>
              <div>
                <div class="mentor-name">{{ quote.author }}</div>
                <div class="mentor-role">{{ quote.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'

const whyMentor = [
  {
    icon: '❤️',
    title: 'Give Back to Your Community',
    description: 'Make a tangible difference in the lives of young people in Beavercreek. Your knowledge and experience can change a student\'s trajectory and inspire a lifelong passion for engineering.'
  },
  {
    icon: '🚀',
    title: 'Stay Current With Technology',
    description: 'Working alongside students who are learning the latest tools and techniques keeps you sharp. Many mentors say they learn as much as they teach.'
  },
  {
    icon: '👑',
    title: 'Develop Leadership Skills',
    description: 'Teaching and guiding others strengthens your own skills in communication, project management, and leadership — all valuable in your professional career.'
  },
  {
    icon: '🌱',
    title: 'Build the Future Workforce',
    description: 'The students you mentor today will become the engineers, programmers, and business leaders of tomorrow. You\'re investing in the future of your industry.'
  },
]

const impactStats = [
  { value: '1:4', label: 'Mentor-to-Student Ratio' },
  { value: '90%', label: 'Alumni Pursue STEM Careers' },
  { value: '5+', label: 'Average Mentor Tenure (Years)' },
  { value: '100%', label: 'Of Mentors Recommend It' },
]

const mentorTypes = [
  {
    icon: '🔧',
    title: 'Technical Mentor',
    commitment: '8–15 hrs/week (Build Season)',
    description: 'Work hands-on with students to design, fabricate, program, or wire the robot. Share your engineering expertise and guide students through real challenges.',
    skills: ['Mechanical, electrical, or software engineering', 'CAD, programming, or electronics background', 'Experience with manufacturing or prototyping', 'Patience and enthusiasm for teaching'],
    featured: true,
  },
  {
    icon: '📊',
    title: 'Business Mentor',
    commitment: '3–8 hrs/week',
    description: 'Help students with grant writing, fundraising strategy, marketing, and team management. Non-engineers are just as valuable as technical mentors.',
    skills: ['Marketing, PR, or communications', 'Finance, accounting, or grant writing', 'Project management', 'Public speaking or presentation skills'],
    featured: false,
  },
  {
    icon: '🦺',
    title: 'Safety Mentor',
    commitment: '4–10 hrs/week (Build Season)',
    description: 'Ensure safe work practices in the lab, conduct safety training, and maintain OSHA compliance. A critical role that protects every student.',
    skills: ['Safety or EHS background preferred', 'OSHA knowledge helpful', 'Attention to detail', 'First aid certification a plus'],
    featured: false,
  },
  {
    icon: '🤝',
    title: 'Occasional Volunteer',
    commitment: 'As available',
    description: 'Can\'t commit weekly? Help at competitions, judge awards, give a career talk, or provide a facility tour. Every interaction matters to our students.',
    skills: ['Any professional background', 'Willingness to share your experience', 'Available for occasional events', 'No ongoing commitment required'],
    featured: false,
  },
]

const timeCommitment = [
  {
    period: 'Build Season (Jan–Apr)',
    hours: '5–15 hrs/week',
    description: 'Most intensive period. Meetings Tuesdays and Thursdays evenings plus weekends as competition approaches.'
  },
  {
    period: 'Off-Season (May–Dec)',
    hours: '2–5 hrs/week',
    description: 'Planning, training workshops, outreach events, and off-season competitions. Very flexible.'
  },
  {
    period: 'Competitions',
    hours: '2–3 weekends/year',
    description: 'Regional events (within Ohio) plus potential FIRST Championship in Houston, TX.'
  },
]

const requirements = [
  {
    icon: '✅',
    title: 'FIRST Background Check',
    description: 'Required for all adults working with minors. Process is simple and handled through FIRST Inspires online portal.'
  },
  {
    icon: '📋',
    title: 'Youth Protection Training',
    description: 'FIRST provides a free online youth protection training course. Takes about 30 minutes to complete.'
  },
  {
    icon: '🎯',
    title: 'Professional Background',
    description: 'Engineering, business, or other professional experience is preferred but not strictly required. Enthusiasm and reliability matter most.'
  },
]

const getStartedSteps = [
  {
    title: 'Contact Us to Express Interest',
    desc: 'Fill out our mentor interest form or send us an email. Tell us a bit about your background and what you\'d like to help with. We\'ll respond within 48 hours.'
  },
  {
    title: 'Complete Background Check Application',
    desc: 'We\'ll send you a link to the FIRST background check portal. The process is quick and confidential. Most results are returned within a few days.'
  },
  {
    title: 'Attend Orientation Meeting',
    desc: 'Come meet the team! We\'ll walk you through our operations, introduce you to students and other mentors, and help you find the right role for your skills and availability.'
  },
  {
    title: 'Join a Team!',
    desc: 'You\'re official! Start attending meetings, jump into a sub-team, and begin making a difference. Don\'t worry about knowing everything — learning together is part of the fun.'
  },
]

const mentorTestimonials = [
  {
    text: 'I\'ve been mentoring for 5 years and it\'s incredibly rewarding. Watching a freshman who couldn\'t use a drill become a senior who\'s leading our mechanical sub-team — that\'s something I\'ll treasure for the rest of my life. The team is professional, organized, and genuinely a pleasure to be part of.',
    author: 'Dave R.',
    role: 'Mechanical Engineer, 5-Year Mentor',
    initials: 'DR',
  },
  {
    text: 'These kids are brilliant. I came in thinking I\'d teach them Java, and within two months I was learning from them. Their energy and creativity keep me inspired. It\'s easily the best volunteer work I\'ve ever done, and it\'s made me a better engineer too.',
    author: 'Lisa M.',
    role: 'Software Engineer, 3-Year Mentor',
    initials: 'LM',
  },
]
</script>

<style scoped>
.reasons-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.reason-card {
  background: var(--color-light);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  text-align: center;
  transition: all 0.25s ease;
  border-top: 4px solid transparent;
}

.reason-card:hover {
  background: var(--color-white);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
  border-top-color: var(--color-gold);
}

.reason-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.reason-card h3 { color: var(--color-navy); font-size: 1rem; margin-bottom: 0.5rem; }
.reason-card p { font-size: 0.9rem; }

/* Impact stats */
.impact-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.impact-stat {
  text-align: center;
  padding: 2rem;
  border-right: 1px solid rgba(255,255,255,0.1);
}

.impact-stat:last-child { border-right: none; }
.impact-value { font-size: 2.5rem; font-weight: 800; color: var(--color-gold); line-height: 1; }
.impact-label { font-size: 0.9rem; color: rgba(255,255,255,0.75); margin-top: 0.5rem; }

/* Mentor Types */
.mentor-types {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.mentor-type-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: all 0.25s ease;
  border-left: 4px solid var(--color-light-2);
}

.mentor-type-card:hover {
  box-shadow: var(--shadow-lg);
  border-left-color: var(--color-navy);
}

.mentor-type-card.featured {
  border-left-color: var(--color-gold);
}

.mentor-type-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.mentor-icon { font-size: 2rem; }
.mentor-type-header h3 { color: var(--color-navy); font-size: 1.1rem; }

.mentor-commitment {
  display: inline-block;
  font-size: 0.75rem;
  color: var(--color-red);
  font-weight: 600;
  background: rgba(197,48,48,0.08);
  padding: 0.15rem 0.6rem;
  border-radius: 20px;
  margin-top: 0.25rem;
}

.mentor-type-card > p { font-size: 0.9rem; margin-bottom: 1rem; }

.mentor-skills {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.mentor-skills li {
  font-size: 0.85rem;
  color: var(--color-gray-dark);
  padding-left: 1rem;
  position: relative;
}

.mentor-skills li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-gold);
  font-weight: 700;
}

/* Time Grid */
.time-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.time-grid h2 { color: var(--color-navy); font-size: 1.6rem; }
.time-grid > div > p { font-size: 0.95rem; margin-bottom: 1.25rem; }

.time-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.time-card {
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding: 1rem 1.25rem;
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 0 1rem;
  align-items: center;
}

.time-period { font-size: 0.875rem; font-weight: 600; color: var(--color-navy); }
.time-hours {
  background: var(--color-navy);
  color: var(--color-gold);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  white-space: nowrap;
}
.time-desc { font-size: 0.8rem; color: var(--color-gray); }
.time-note { font-size: 0.85rem; color: var(--color-gray); font-style: italic; }

.requirements-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.25rem;
}

.req-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.req-icon { font-size: 1.5rem; flex-shrink: 0; }
.req-item h4 { color: var(--color-navy); font-size: 0.95rem; margin-bottom: 0.25rem; }
.req-item p { font-size: 0.875rem; }

/* Start Steps */
.start-steps {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.start-step {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: var(--color-white);
  border-radius: var(--border-radius);
  padding: 1.25rem;
  box-shadow: var(--shadow-sm);
}

.start-step-num {
  width: 40px;
  height: 40px;
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.start-step-content h3 { color: var(--color-navy); font-size: 1rem; margin-bottom: 0.3rem; }
.start-step-content p { font-size: 0.9rem; }
.start-cta { text-align: center; }

/* Mentor Testimonials */
.mentor-testimonials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.mentor-quote {
  background: rgba(255,255,255,0.07);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  border: 1px solid rgba(255,255,255,0.1);
}

.quote-mark {
  font-size: 4rem;
  color: var(--color-gold);
  line-height: 0.5;
  margin-bottom: 1rem;
  font-family: Georgia, serif;
}

.mentor-quote p {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.82);
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.7;
}

.mentor-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.mentor-avatar {
  width: 40px;
  height: 40px;
  background: var(--color-gold);
  color: var(--color-navy);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.mentor-name { font-weight: 600; color: var(--color-white); font-size: 0.9rem; }
.mentor-role { font-size: 0.8rem; color: rgba(255,255,255,0.6); }

@media (max-width: 1024px) {
  .reasons-grid { grid-template-columns: repeat(2, 1fr); }
  .impact-stats { grid-template-columns: repeat(2, 1fr); }
  .impact-stat { border-right: none; }
}

@media (max-width: 768px) {
  .reasons-grid { grid-template-columns: 1fr; }
  .mentor-types { grid-template-columns: 1fr; }
  .time-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .mentor-testimonials { grid-template-columns: 1fr; }
  .time-card { grid-template-columns: 1fr; gap: 0.25rem; }
}
</style>

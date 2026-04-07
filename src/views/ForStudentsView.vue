<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/views/ForStudentsView.vue -->
<template>
  <div class="students-page">
    <HeroSection
      title="Build Robots. Change the World."
      subtitle="Join FRC Team 5 and discover your passion for engineering, coding, design, or business — no experience needed, just curiosity and drive."
      backgroundClass="hero-students"
      ctaText="Apply to Join"
      ctaLink="/contact"
      secondaryCtaText="See What We Do"
      secondaryCtaLink="/students"
      :showCta="true"
    />

    <!-- What is FRC -->
    <section class="section bg-white">
      <div class="container">
        <div class="frc-intro">
          <div class="frc-text">
            <p class="label-tag">About FRC</p>
            <h2>What Is FIRST Robotics Competition?</h2>
            <div class="divider divider-left"></div>
            <p>
              FIRST Robotics Competition (FRC) is the ultimate sport for the mind. Each January, 
              over 3,700 teams around the world receive an identical game kit and six weeks to 
              design, build, and program a robot — from scratch.
            </p>
            <p style="margin-top: 1rem;">
              Teams compete in regional events where alliances of three robots work together to 
              score points, navigate obstacles, and outmaneuver opponents. The best teams earn 
              spots at the FIRST Championship — the Super Bowl of robotics.
            </p>
            <p style="margin-top: 1rem;">
              But FRC is about more than winning. It's about learning to work under pressure, 
              collaborate with a diverse team, and apply real engineering principles to solve 
              real problems — all while having an incredible time.
            </p>
          </div>
          <div class="frc-stats">
            <div class="frc-stat" v-for="stat in frcStats" :key="stat.label">
              <div class="frc-stat-value">{{ stat.value }}</div>
              <div class="frc-stat-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Learning Tracks -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">What You'll Learn</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Choose your track — or explore all of them!</p>
        <div class="tracks-grid">
          <div class="track-card" v-for="track in tracks" :key="track.name">
            <div class="track-icon">{{ track.icon }}</div>
            <h3>{{ track.name }}</h3>
            <p class="track-desc">{{ track.description }}</p>
            <ul class="track-skills">
              <li v-for="skill in track.skills" :key="skill">{{ skill }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section bg-navy">
      <div class="container">
        <h2 class="section-title text-white">What Alumni Say</h2>
        <div class="divider"></div>
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="quote in testimonials" :key="quote.author">
            <div class="quote-mark">"</div>
            <p class="quote-text">{{ quote.text }}</p>
            <div class="quote-author">
              <div class="author-avatar">{{ quote.initials }}</div>
              <div>
                <div class="author-name">{{ quote.author }}</div>
                <div class="author-role">{{ quote.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Join -->
    <section class="section bg-white">
      <div class="container container-sm">
        <h2 class="section-title">How to Join the Team</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Getting started is easier than you think</p>
        <div class="join-steps">
          <div class="join-step" v-for="(step, i) in joinSteps" :key="i">
            <div class="join-step-num">{{ i + 1 }}</div>
            <div class="join-step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.desc }}</p>
            </div>
          </div>
        </div>
        <div class="join-cta">
          <RouterLink to="/contact" class="btn btn-primary btn-lg">Ready to Join? Contact Us!</RouterLink>
        </div>
      </div>
    </section>

    <!-- Day in the Life -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Day in the Life</h2>
        <div class="divider"></div>
        <div class="life-grid">
          <div class="life-card" v-for="scenario in dayInLife" :key="scenario.title">
            <div class="life-icon">{{ scenario.icon }}</div>
            <h3>{{ scenario.title }}</h3>
            <ul class="life-list">
              <li v-for="item in scenario.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Placeholder -->
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title">Team Gallery</h2>
        <div class="divider"></div>
        <div class="gallery-grid">
          <div class="gallery-placeholder" v-for="i in 6" :key="i">
            <div class="gallery-inner">
              <span class="gallery-icon">📷</span>
              <p>Photos Coming Soon</p>
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

const frcStats = [
  { value: '6', label: 'Week Build Season' },
  { value: '3,700+', label: 'Teams Worldwide' },
  { value: '$80M+', label: 'FIRST Scholarships' },
  { value: '95%', label: 'Alumni in STEM Careers' },
]

const tracks = [
  {
    icon: '🔧',
    name: 'Mechanical Engineering',
    description: 'Design and build the physical robot — from drivetrain to game mechanisms.',
    skills: ['CAD design with SolidWorks / Fusion 360', 'Fabrication and machining', '3D printing and prototyping', 'Metal working and welding', 'Pneumatics systems'],
  },
  {
    icon: '💻',
    name: 'Programming',
    description: 'Write the code that brings the robot to life — from autonomous routines to teleoperated controls.',
    skills: ['Java and Python programming', 'WPILib robotics framework', 'PID control and sensor integration', 'Computer vision (OpenCV)', 'Git version control'],
  },
  {
    icon: '⚡',
    name: 'Electrical',
    description: 'Design and wire the robot\'s entire electrical system safely and reliably.',
    skills: ['Wiring and cable management', 'Motor controllers (REV, CTRE)', 'CAN bus and networking', 'Pneumatics controls', 'Electronics troubleshooting'],
  },
  {
    icon: '📊',
    name: 'Business & Media',
    description: 'Run the team like a business — marketing, fundraising, outreach, and documentation.',
    skills: ['Marketing and branding', 'Grant writing and fundraising', 'Social media management', 'Video production and editing', 'Presentation and public speaking'],
  },
]

const testimonials = [
  {
    text: 'Being on the robotics team was the best decision I made in high school. The skills I learned — both technical and interpersonal — set me apart at college and in my first job. I genuinely could not recommend it more.',
    author: 'Alex M.',
    role: 'Class of 2023 · Now studying Mechanical Engineering at Ohio State',
    initials: 'AM',
  },
  {
    text: 'I got my internship at an aerospace company specifically because of the experience and projects I had from FRC. My interviewer said my robotics background showed I could work in a real engineering environment. That\'s something no classroom could\'ve given me.',
    author: 'Sarah K.',
    role: 'Class of 2022 · Aerospace Engineering Intern at GE Aviation',
    initials: 'SK',
  },
  {
    text: 'I had zero experience and was honestly terrified when I showed up to my first meeting. But the mentors and older students were so welcoming and patient. Six months later I was writing autonomous code for our competition robot. Don\'t let fear stop you.',
    author: 'Jordan T.',
    role: 'Current Member · 11th Grade',
    initials: 'JT',
  },
]

const joinSteps = [
  {
    title: 'Talk to a Current Member or Mentor',
    desc: 'Reach out to anyone on the team! We\'re always happy to answer questions and share our experiences. You can also email us or reach out on social media.'
  },
  {
    title: 'Attend a Team Meeting',
    desc: 'Our meetings are open to prospective members. Come see what a typical day looks like, meet everyone, and get a feel for the team culture. No pressure, no commitment.'
  },
  {
    title: 'Complete Your Registration',
    desc: 'Fill out the student registration form and parental consent forms online. We\'ll also need your emergency contact information before you can participate in hands-on activities.'
  },
  {
    title: 'Show Up and Start Learning!',
    desc: 'Once you\'re registered, you\'re part of the team! Come to meetings, ask questions, try new things, and don\'t be afraid to make mistakes — that\'s how we all learn.'
  },
]

const dayInLife = [
  {
    icon: '🏗️',
    title: 'Build Season Meeting',
    items: [
      '6:00 PM — Team gathers, quick stand-up meeting',
      '6:15 PM — Sub-teams split off to work on robot',
      '7:30 PM — Progress check-in with lead mentors',
      '8:00 PM — Continue build, testing prototypes',
      '8:45 PM — Cleanup and next meeting planning',
      '9:00 PM — End of meeting',
    ],
  },
  {
    icon: '📖',
    title: 'Off-Season Workshop',
    items: [
      'New member orientation and safety training',
      'CAD and programming workshops',
      'Team-building and leadership activities',
      'Outreach events at local schools',
      'Off-season competitions for practice',
      'Planning and fundraising for next season',
    ],
  },
  {
    icon: '🏆',
    title: 'Competition Day',
    items: [
      'Pit setup and robot inspection at 7:00 AM',
      'Practice matches to tune robot settings',
      'Qualification matches throughout the day',
      'Alliance selection (playoff bracket)',
      'Elimination matches and awards ceremony',
      'Team dinner and celebration!',
    ],
  },
]
</script>

<style scoped>
.label-tag {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-red);
  margin-bottom: 0.5rem;
}

.frc-intro {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 4rem;
  align-items: start;
}

.frc-text h2 { color: var(--color-navy); }
.frc-text p { font-size: 0.975rem; }

.frc-stats {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-shrink: 0;
}

.frc-stat {
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.5rem;
  text-align: center;
  min-width: 150px;
}

.frc-stat-value {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--color-gold);
  line-height: 1;
}

.frc-stat-label {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  margin-top: 0.25rem;
}

/* Tracks */
.tracks-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.track-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem 1.5rem;
  box-shadow: var(--shadow);
  transition: all 0.25s ease;
  border-top: 4px solid transparent;
}

.track-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-top-color: var(--color-gold);
}

.track-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.track-card h3 { color: var(--color-navy); margin-bottom: 0.5rem; }
.track-desc { font-size: 0.9rem; color: var(--color-gray); margin-bottom: 1rem; }

.track-skills {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.track-skills li {
  font-size: 0.85rem;
  color: var(--color-gray-dark);
  padding-left: 1rem;
  position: relative;
}

.track-skills li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-gold);
  font-weight: 700;
}

/* Testimonials */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.testimonial-card {
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

.quote-text {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.82);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.quote-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.author-avatar {
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

.author-name {
  font-weight: 600;
  color: var(--color-white);
  font-size: 0.9rem;
}

.author-role {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.6);
}

/* Join Steps */
.join-steps {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.join-step {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: var(--color-light);
  border-radius: var(--border-radius);
  padding: 1.25rem;
}

.join-step-num {
  width: 40px;
  height: 40px;
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.join-step-content h3 { color: var(--color-navy); font-size: 1rem; margin-bottom: 0.3rem; }
.join-step-content p { font-size: 0.9rem; }

.join-cta { text-align: center; }

/* Day in Life */
.life-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.life-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
}

.life-icon { font-size: 2.25rem; margin-bottom: 0.75rem; }
.life-card h3 { color: var(--color-navy); margin-bottom: 1rem; font-size: 1.05rem; }

.life-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.life-list li {
  font-size: 0.875rem;
  color: var(--color-gray-dark);
  padding-left: 1rem;
  position: relative;
}

.life-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-gold);
}

/* Gallery */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

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

.gallery-icon { font-size: 2rem; opacity: 0.5; }
.gallery-inner p { font-size: 0.85rem; color: var(--color-gray); }

@media (max-width: 1024px) {
  .tracks-grid { grid-template-columns: repeat(2, 1fr); }
  .testimonials-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .frc-intro { grid-template-columns: 1fr; }
  .frc-stats { flex-direction: row; flex-wrap: wrap; }
  .frc-stat { flex: 1 1 120px; }
  .tracks-grid { grid-template-columns: 1fr; }
  .life-grid { grid-template-columns: 1fr; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>

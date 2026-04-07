<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/views/ForParentsView.vue -->
<template>
  <div class="parents-page">
    <HeroSection
      title="Your Student's Future Starts Here"
      subtitle="Beavercreek Robotics provides students with the STEM education, leadership skills, and real-world experience that colleges and employers are looking for."
      backgroundClass="hero-parents"
      ctaText="Contact Us to Enroll"
      ctaLink="/contact"
      secondaryCtaText="Meet the Team"
      secondaryCtaLink="/students"
    />

    <!-- Enrollment Steps -->
    <section class="section bg-white">
      <div class="container">
        <h2 class="section-title">How to Enroll Your Student</h2>
        <div class="divider"></div>
        <p class="section-subtitle">Getting started is easy — we welcome all students grades 9–12</p>
        <div class="steps-list">
          <div class="step" v-for="(step, i) in enrollmentSteps" :key="i">
            <div class="step-number">{{ i + 1 }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Schedule & Time Commitment -->
    <section class="section bg-light">
      <div class="container">
        <h2 class="section-title">Schedule &amp; Time Commitment</h2>
        <div class="divider"></div>
        <p class="section-subtitle">We understand your student has a busy life — here's what to expect</p>
        <div class="schedule-grid">
          <div class="schedule-card" v-for="period in scheduleItems" :key="period.title">
            <div class="schedule-icon">{{ period.icon }}</div>
            <h3>{{ period.title }}</h3>
            <div class="schedule-time">{{ period.time }}</div>
            <p>{{ period.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Safety Section -->
    <section class="section bg-white">
      <div class="container">
        <div class="two-col-grid">
          <div>
            <p class="label-tag">Safety First</p>
            <h2>Your Student's Safety Is Our Priority</h2>
            <div class="divider divider-left"></div>
            <p>We take student safety seriously. All activities are supervised by background-checked adult mentors who are trained in youth protection and safe equipment handling.</p>
            <ul class="check-list">
              <li v-for="item in safetyItems" :key="item">
                <span class="check-icon">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
          <div>
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
            <p class="cost-note">Contact us to discuss financial assistance. No student is ever turned away for financial reasons.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What Students Gain -->
    <section class="section bg-navy">
      <div class="container">
        <h2 class="section-title text-white">What Your Student Will Gain</h2>
        <div class="divider"></div>
        <div class="gains-grid">
          <div class="gain-item" v-for="gain in studentGains" :key="gain.title">
            <div class="gain-icon">{{ gain.icon }}</div>
            <h3>{{ gain.title }}</h3>
            <p>{{ gain.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section bg-light">
      <div class="container container-sm">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="divider"></div>
        <div class="faq-list">
          <div class="faq-item" v-for="(item, i) in faqs" :key="i" @click="toggleFaq(i)" :class="{ open: openFaq === i }">
            <div class="faq-question">
              {{ item.question }}
              <span class="faq-arrow">{{ openFaq === i ? '▲' : '▼' }}</span>
            </div>
            <div class="faq-answer" v-show="openFaq === i">{{ item.answer }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSection from '../components/HeroSection.vue'
import {
  CLUB_NAME,
  COMPETITION_PROGRAM,
  COMPETITION_PROGRAM_SHORT,
  CONTACT_EMAIL,
  MEETING_SCHEDULE,
} from '../config/club.js'

const openFaq = ref(null)
const toggleFaq = (i) => { openFaq.value = openFaq.value === i ? null : i }

const enrollmentSteps = [
  {
    title: 'Attend an Info Night',
    description: `Join us at one of our informational meetings held each fall. You'll meet current members, mentors, and get all your questions answered in a relaxed setting. No commitment required!`
  },
  {
    title: 'Complete Registration',
    description: 'Fill out our student registration form online and provide emergency contact information. We\'ll also need a signed parental consent form before your student can participate in hands-on activities.'
  },
  {
    title: 'Safety Training',
    description: 'All students complete mandatory safety training covering tool use, lab safety procedures, and emergency protocols. This is required before any hands-on work.'
  },
  {
    title: 'Meet the Team',
    description: 'Your student will meet their fellow team members and be connected with experienced mentors who share their interests — whether that\'s mechanical engineering, programming, business, or media.'
  },
  {
    title: 'Competition Season Begins!',
    description: `The ${COMPETITION_PROGRAM_SHORT} competition season runs August through April. This is when the real fun starts — designing, building, programming, and testing a robot to compete at local and regional events.`
  },
]

const scheduleItems = MEETING_SCHEDULE.map((m, i) => ({
  icon: ['🔨', '📚', '🏆'][i] || '📅',
  title: m.period.split(' (')[0],
  time: m.days,
  description: m.time,
}))

const safetyItems = [
  'Adult mentors present at all meetings',
  'Youth Protection Program compliance',
  'Safe equipment handling and PPE training',
  'Background-checked adult supervisors',
  'First aid certified team members on-site',
  'Clear code of conduct for all participants',
]

const studentGains = [
  {
    icon: '🔬',
    title: 'STEM Skills',
    description: `Real experience with robot design, programming, electronics, and manufacturing — skills that directly translate to college coursework and careers.`
  },
  {
    icon: '🤝',
    title: 'Teamwork & Leadership',
    description: 'Students learn to collaborate, communicate, and lead in high-pressure environments — exactly what colleges and employers value.'
  },
  {
    icon: '🎓',
    title: 'College Advantage',
    description: `${COMPETITION_PROGRAM_SHORT} participation stands out on college applications. Our alumni are accepted to top engineering programs nationwide.`
  },
  {
    icon: '💼',
    title: 'Industry Connections',
    description: 'Our mentors are working engineers and professionals who provide networking opportunities and career guidance.'
  },
  {
    icon: '💡',
    title: 'Problem Solving',
    description: 'Students tackle real engineering challenges with no textbook answer — building creativity, resilience, and critical thinking.'
  },
  {
    icon: '💰',
    title: 'Scholarship Opportunities',
    description: 'Robotics participation builds a strong portfolio that can support scholarship applications for college — both STEM-focused and general merit awards.'
  },
]

const faqs = [
  {
    question: 'What grade levels can participate?',
    answer: `Students in 9th through 12th grade are eligible to participate with ${CLUB_NAME}. We welcome students from Beavercreek High School.`
  },
  {
    question: 'Does my student need prior experience?',
    answer: 'Absolutely not! We teach everything from scratch. Whether your student has never touched a computer or already codes in Python, there\'s a perfect role for them. Our experienced mentors and returning students love helping newcomers get started.'
  },
  {
    question: 'How competitive is it to get on the team?',
    answer: 'We welcome everyone! Our team has roles for all interests and skill levels — engineering, programming, business, marketing, media, safety, and more. No one is turned away.'
  },
  {
    question: 'What if my student wants to stop participating?',
    answer: 'We completely understand that life is busy and interests change. There\'s no long-term obligation. We appreciate every contribution, big or small, and students are free to step back at any time without judgment.'
  },
  {
    question: 'How far away are competitions?',
    answer: 'Competitions are typically within Ohio and surrounding states. Major signature events may require overnight travel; we coordinate carpool and lodging assistance for families who need it.'
  },
  {
    question: 'Can I volunteer or help as a parent?',
    answer: `We love parent involvement! Parents can volunteer at competitions, help with transportation, provide meals, or even serve as mentors if they have relevant skills. Contact us at ${CONTACT_EMAIL} to learn about volunteer opportunities.`
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

/* Steps */
.steps-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.step {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.step-number {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: var(--color-navy);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 800;
}

.step-content h3 {
  color: var(--color-navy);
  margin-bottom: 0.4rem;
  font-size: 1.1rem;
}

.step-content p {
  font-size: 0.95rem;
}

/* Schedule */
.schedule-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.schedule-card {
  background: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
  text-align: center;
}

.schedule-icon { font-size: 2.5rem; margin-bottom: 1rem; }
.schedule-card h3 { color: var(--color-navy); margin-bottom: 0.5rem; }
.schedule-time {
  display: inline-block;
  background: var(--color-gold);
  color: var(--color-navy);
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  margin-bottom: 0.75rem;
}

/* Two col */
.two-col-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.two-col-grid h2 { color: var(--color-navy); font-size: 1.6rem; }

.check-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1.25rem;
}

.check-list li {
  display: flex;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: var(--color-gray-dark);
}

.check-icon {
  color: var(--color-gold);
  font-weight: 800;
  flex-shrink: 0;
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

.cost-label { color: var(--color-gray-dark); }
.cost-value { font-weight: 600; color: var(--color-navy); }
.cost-value.available { color: #276749; }
.cost-note { font-size: 0.85rem; color: var(--color-gray); font-style: italic; }

/* Gains */
.gains-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.gain-item {
  background: rgba(255,255,255,0.08);
  border-radius: var(--border-radius-lg);
  padding: 1.75rem;
  text-align: center;
}

.gain-icon { font-size: 2.25rem; margin-bottom: 0.75rem; }
.gain-item h3 { color: var(--color-gold); font-size: 1rem; margin-bottom: 0.5rem; }
.gain-item p { color: rgba(255,255,255,0.75); font-size: 0.9rem; }

/* FAQ */
.faq-list { display: flex; flex-direction: column; gap: 0.5rem; }

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

.faq-arrow { font-size: 0.7rem; flex-shrink: 0; margin-left: 1rem; }

.faq-answer {
  padding: 1rem 1.25rem 1.25rem;
  font-size: 0.9rem;
  color: var(--color-gray-dark);
  line-height: 1.7;
  border-top: 1px solid var(--color-light-2);
}

@media (max-width: 768px) {
  .schedule-grid { grid-template-columns: 1fr; }
  .two-col-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .gains-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .gains-grid { grid-template-columns: 1fr; }
}
</style>

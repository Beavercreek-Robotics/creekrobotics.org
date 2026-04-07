<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/components/NavBar.vue -->
<template>
  <nav class="navbar">
    <div class="nav-inner">
      <RouterLink to="/" class="brand-link" @click="closeMenu">
        <svg class="brand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
          <rect x="8" y="14" width="32" height="24" rx="5" fill="#d69e2e"/>
          <rect x="22" y="5" width="4" height="9" rx="2" fill="#d69e2e"/>
          <circle cx="24" cy="4" r="4" fill="#c53030"/>
          <rect x="13" y="20" width="8" height="7" rx="2" fill="#1a365d"/>
          <rect x="27" y="20" width="8" height="7" rx="2" fill="#1a365d"/>
          <circle cx="16" cy="22" r="2" fill="#ffffff" opacity="0.8"/>
          <circle cx="30" cy="22" r="2" fill="#ffffff" opacity="0.8"/>
          <rect x="15" y="30" width="18" height="4" rx="2" fill="#c53030"/>
          <rect x="19" y="30" width="2" height="4" fill="#d69e2e" opacity="0.6"/>
          <rect x="23" y="30" width="2" height="4" fill="#d69e2e" opacity="0.6"/>
          <rect x="27" y="30" width="2" height="4" fill="#d69e2e" opacity="0.6"/>
          <circle cx="8" cy="24" r="3" fill="#c53030"/>
          <circle cx="40" cy="24" r="3" fill="#c53030"/>
          <rect x="19" y="38" width="10" height="5" rx="2" fill="#d69e2e"/>
        </svg>
        <div class="brand-text">
          <span class="brand-name">{{ CLUB_NAME }}</span>
          <span class="brand-subtitle">{{ CLUB_TAGLINE }}</span>
        </div>
      </RouterLink>

      <div class="nav-links" :class="{ 'nav-open': menuOpen }">
        <RouterLink to="/" @click="closeMenu" class="nav-link">Home</RouterLink>
        <RouterLink to="/parents" @click="closeMenu" class="nav-link">For Parents</RouterLink>
        <RouterLink to="/students" @click="closeMenu" class="nav-link">For Students</RouterLink>
        <RouterLink to="/engineers" @click="closeMenu" class="nav-link">For Engineers</RouterLink>
        <RouterLink to="/sponsors" @click="closeMenu" class="nav-link">For Sponsors</RouterLink>
        <RouterLink to="/contact" @click="closeMenu" class="nav-link">Contact</RouterLink>
        <RouterLink to="/contact" class="btn-join" @click="closeMenu">Join Us</RouterLink>
      </div>

      <button class="hamburger" @click="toggleMenu" :class="{ open: menuOpen }" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { CLUB_NAME, CLUB_TAGLINE } from '../config/club.js'

const menuOpen = ref(false)
const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const closeMenu = () => { menuOpen.value = false }

const handleResize = () => {
  if (window.innerWidth > 900) closeMenu()
}

onMounted(() => window.addEventListener('resize', handleResize))
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--color-navy);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-icon {
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.brand-subtitle {
  font-size: 0.7rem;
  color: var(--color-gold);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--color-white);
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  color: var(--color-gold);
  background-color: rgba(214, 158, 46, 0.1);
}

.btn-join {
  display: inline-flex;
  align-items: center;
  background-color: var(--color-red);
  color: var(--color-white);
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;
  margin-left: 0.5rem;
  white-space: nowrap;
}

.btn-join:hover {
  background-color: #9b2c2c;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(197, 48, 48, 0.4);
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-white);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

@media (max-width: 900px) {
  .hamburger {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--color-navy);
    flex-direction: column;
    align-items: stretch;
    padding: 1rem 1.5rem 1.5rem;
    gap: 0.25rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  .nav-links.nav-open {
    display: flex;
  }

  .nav-link {
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }

  .btn-join {
    margin-left: 0;
    margin-top: 0.5rem;
    padding: 0.75rem 1rem;
    justify-content: center;
    font-size: 1rem;
  }
}
</style>

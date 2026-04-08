<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/components/NavBar.vue -->
<template>
  <nav class="navbar navbar-expand-lg site-navbar">
    <div class="container">
      <RouterLink to="/" class="navbar-brand brand-link" @click="closeMenu">
        <svg class="brand-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
          <rect x="8" y="14" width="32" height="24" rx="5" fill="#d69e2e" />
          <rect x="22" y="5" width="4" height="9" rx="2" fill="#d69e2e" />
          <circle cx="24" cy="4" r="4" fill="#c53030" />
          <rect x="13" y="20" width="8" height="7" rx="2" fill="#1a365d" />
          <rect x="27" y="20" width="8" height="7" rx="2" fill="#1a365d" />
          <circle cx="16" cy="22" r="2" fill="#ffffff" opacity="0.8" />
          <circle cx="30" cy="22" r="2" fill="#ffffff" opacity="0.8" />
          <rect x="15" y="30" width="18" height="4" rx="2" fill="#c53030" />
          <rect x="19" y="30" width="2" height="4" fill="#d69e2e" opacity="0.6" />
          <rect x="23" y="30" width="2" height="4" fill="#d69e2e" opacity="0.6" />
          <rect x="27" y="30" width="2" height="4" fill="#d69e2e" opacity="0.6" />
          <circle cx="8" cy="24" r="3" fill="#c53030" />
          <circle cx="40" cy="24" r="3" fill="#c53030" />
          <rect x="19" y="38" width="10" height="5" rx="2" fill="#d69e2e" />
        </svg>
        <div class="brand-text">
          <span class="brand-name">{{ CLUB_NAME }}</span>
          <span class="brand-subtitle">{{ CLUB_TAGLINE }}</span>
        </div>
      </RouterLink>

      <button class="navbar-toggler hamburger" type="button" @click="toggleMenu" :class="{ open: menuOpen }"
        aria-label="Toggle menu" :aria-expanded="menuOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="collapse navbar-collapse nav-links" :class="{ show: menuOpen }">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item">
            <RouterLink to="/" @click="closeMenu" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/parents" @click="closeMenu" class="nav-link">For Parents</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/students" @click="closeMenu" class="nav-link">For Students</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/engineers" @click="closeMenu" class="nav-link">For Engineers</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/sponsors" @click="closeMenu" class="nav-link">For Sponsors</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" @click="closeMenu" class="nav-link">Contact</RouterLink>
          </li>
          <li class="nav-item ms-lg-2 mt-3 mt-lg-0">
            <RouterLink to="/contact" class="btn-join" @click="closeMenu">Join Us</RouterLink>
          </li>
        </ul>
      </div>
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
.site-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--color-navy);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.site-navbar .container {
  height: 70px;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  flex-shrink: 0;
  margin-right: 1rem;
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
  justify-content: center;
  background-color: var(--color-red);
  color: var(--color-white);
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.btn-join:hover {
  background-color: #9b2c2c;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(197, 48, 48, 0.4);
}

.hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  padding: 0;
  box-shadow: none;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--color-white);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
  margin: 3px 0;
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
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--color-navy);
    padding: 1rem 1.5rem 1.5rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  .nav-links :deep(.navbar-nav) {
    align-items: stretch;
  }

  .nav-link {
    display: block;
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }

  .btn-join {
    padding: 0.75rem 1rem;
    font-size: 1rem;
    width: 100%;
  }
}
</style>

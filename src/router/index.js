// Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ForParentsView from '../views/ForParentsView.vue'
import ForStudentsView from '../views/ForStudentsView.vue'
import ForEngineersView from '../views/ForEngineersView.vue'
import ForSponsorsView from '../views/ForSponsorsView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/parents', component: ForParentsView },
  { path: '/students', component: ForStudentsView },
  { path: '/engineers', component: ForEngineersView },
  { path: '/sponsors', component: ForSponsorsView },
  { path: '/contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Resume from '../components/Resume.vue'
import MainPage from '../components/MainPage.vue'
import ResumeSecret from '../components/ResumeSecret.vue'

const routes = [
  { path: '/', component: Resume },  // Redirect root to main if desired
  { path: '/main', component: MainPage },
  { path: '/secret', component: ResumeSecret },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
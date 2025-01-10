import { createRouter, createWebHistory } from 'vue-router'
import Resume from '../components/Resume.vue'
import MainPage from '../components/MainPage.vue'

const routes = [
  { path: '/', component: Resume },  // Redirect root to main if desired
  { path: '/main', component: MainPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
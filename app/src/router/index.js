import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Statement from '../views/Statement.vue'
import Map from '../views/Map.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/statement',
    name: 'statement',
    component: Statement
  },
  {
    path: '/map',
    name: 'map',
    component: Map
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

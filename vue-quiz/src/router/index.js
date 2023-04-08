import { createRouter, createWebHistory } from 'vue-router'
import home_component from '../views/home_component.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home_component
    },
  ]
})

export default router

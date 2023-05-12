import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../views/HomeComponent.vue'
import LoginComponent from '../views/LoginComponent.vue'
import RegistrationComponent from '../views/RegistrationComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent 
    },

    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },

    {
      path: '/registration',
      name: 'registration',
      component: RegistrationComponent
    },


  ]
})

export default router

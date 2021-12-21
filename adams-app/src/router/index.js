import { createRouter, createWebHistory } from '@ionic/vue-router';

import Home from '@/views/Home.vue'

import Login from '@/views/Login.vue'

import Dashboard from '@/views/Dashboard.vue'

import Plan from '@/views/Plan.vue'

import Appointments from '@/views/Appointments.vue';

import Settings from '@/views/Settings.vue'
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/plan',
        name: 'Plan',
        component: Plan
      },
      {
        path: '/settings',
        name: 'Einstellungen',
        component: Settings,
      },
      {
        path: '/appointments',
        name: 'Termine',
        component: Appointments,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

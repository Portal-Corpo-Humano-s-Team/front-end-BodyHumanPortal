import { createRouter, createWebHistory } from 'vue-router'

// Layouts
import MainLayout from '@/layouts/MainLayout.vue'

// GENERAL
import HomeView from '../views/general/HomeView.vue'
import ContactView from '@/views/general/ContactView.vue'

// SYSTEMS
import BoneView from '@/views/systems/BoneView.vue'
import CirculatoryView from '@/views/systems/CirculatoryView.vue'
import DigestiveView from '@/views/systems/DigestiveView.vue'
import MuscleView from '@/views/systems/MuscleView.vue'
import NervousView from '@/views/systems/NervousView.vue'
import ReproductiveFemView from '@/views/systems/ReproductiveFemView.vue'
import ReproductiveMalView from '@/views/systems/ReproductiveMalView.vue'
import RespiratoryView from '@/views/systems/RespiratoryView.vue'
import UrinaryView from '@/views/systems/UrinaryView.vue'

// PROFILE
import DashboardView from '@/views/profile/DashboardView.vue'
import SegurityView from '@/views/profile/SegurityView.vue'
import SuportView from '@/views/profile/SuportView.vue'
import PageLoginSignUpView from '@/views/profile/PageLoginSignUpView.vue'
// AUTH
import authRoutes from './authRoutes'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: '/contato',
        name: 'contact',
        component: ContactView,
      },
      {
        path: 'entrar-Conta',
        component: PageLoginSignUpView,
      },
      {
        path: '/sistema/',
        name: 'systems',
        children: [
          {
            path: 'osseo',
            component: BoneView,
          },
          {
            path: 'cardiovascular',
            component: CirculatoryView,
          },
          {
            path: 'digestivo',
            component: DigestiveView,
          },
          {
            path: 'muscular',
            component: MuscleView,
          },
          {
            path: 'nervoso',
            component: NervousView,
          },
          {
            path: 'reprodutor-feminino',
            component: ReproductiveFemView,
          },
          {
            path: 'reprodutor-masculino',
            component: ReproductiveMalView,
          },
          {
            path: 'respiratorio',
            component: RespiratoryView,
          },
          {
            path: 'urinario',
            component: UrinaryView,
          },
        ],
      },
      {
        path: '/dashboard/',
        name: 'profile',
        component: DashboardView,
        children: [
          {
            path: 'seguranca',
            component: SegurityView,
          },
          {
            path: 'suporte',
            component: SuportView,
          },
        ],
      },
    ],
  },
  authRoutes,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

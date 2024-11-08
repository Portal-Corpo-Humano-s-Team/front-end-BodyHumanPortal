import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

// Cadastro
import CadastroView from '@/views/Cadastro/CadastroView.vue'
import LoginView from '@/views/Cadastro/LoginView.vue'

// Calculadora
import IMCView from '@/views/Calculadora/IMCView.vue'

// Dashboard
import DashboardView from '@/views/Dashboard/DashboardView.vue'
import SegurancaView from '@/views/Dashboard/SegurancaView.vue'
import SuporteView from '@/views/Dashboard/SuporteView.vue'

// Sobre
import SobreView from '@/views/Sobre/SobreView.vue'
import ContatoView from '@/views/Sobre/ContatoView.vue'
import FeedbackView from '@/views/Sobre/FeedbackView.vue'
import ReferenciasView from '@/views/Sobre/ReferenciasView.vue'

// Sistemas
import CardiovascularView from '../views/sistemas/CardiovascularView.vue'
import DigestorioView from '../views/sistemas/DigestorioView.vue'
import EsqueleticoView from '../views/sistemas/EsqueleticoView.vue'
import NervosoView from '../views/sistemas/NervosoView.vue'
import ReprodutorFemininoView from '../views/sistemas/Reprodutor-femininoView.vue'
import ReprodutorMasculinoView from '../views/sistemas/Reprodutor-masculinoView.vue'
import RespiratorioView from '../views/sistemas/RespiratorioView.vue'
import UrinarioView from '../views/sistemas/UrinarioView.vue'

// import authToken from '@/middleware/authToken.js'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/dashboard',
      name: 'minhaConta',
      component: DashboardView,
     // beforeEnter: authToken,
    }, // Protegida
    {
      path: '/seguranca',
      name: 'seguranca',
      component: SegurancaView,
     // beforeEnter: authToken,
    },
    {
      path: '/suporte',
      name: 'suporte',
      component: SuporteView,
     // beforeEnter: authToken,
    },
    { path: '/cadastro', name: 'cadastro', component: CadastroView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/sobre', name: 'sobre', component: SobreView },
    { path: '/contato', name: 'contato', component: ContatoView },
    { path: '/feedback', name: 'feedback', component: FeedbackView },
    {
      path: '/cardiovascular',
      name: 'cardiovascular',
      component: CardiovascularView,
    },
    { path: '/digestorio', name: 'digestorio', component: DigestorioView },
    { path: '/esqueletico', name: 'esqueletico', component: EsqueleticoView },
    { path: '/nervoso', name: 'nervoso', component: NervosoView },
    {
      path: '/reprodutor-feminino',
      name: 'reprodutor-feminino',
      component: ReprodutorFemininoView,
    },
    {
      path: '/reprodutor-masculino',
      name: 'reprodutor-masculino',
      component: ReprodutorMasculinoView,
    },
    {
      path: '/respiratorio',
      name: 'respiratorio',
      component: RespiratorioView,
    },
    { path: '/urinario', name: 'urinario', component: UrinarioView },
    { path: '/referencias', name: 'referencias', component: ReferenciasView },
    { path: '/imc', name: 'imc', component: IMCView },
  ],
})

export default router

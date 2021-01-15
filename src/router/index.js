import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import InputTablePage from '@/pages/InputTablePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/input-table',
    name: 'InputTable',
    component: InputTablePage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
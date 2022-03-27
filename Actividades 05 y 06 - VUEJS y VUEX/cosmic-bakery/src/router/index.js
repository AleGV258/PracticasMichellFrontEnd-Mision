import { createRouter, createWebHashHistory } from 'vue-router'
import SelectionView from '../views/SelectionView.vue'
import HomeView from '../views/HomeView.vue'
import PedidosView from '../views/PedidosView.vue'
import ConocenosView from '../views/ConocenosView.vue'
import TablasView from '../views/TablasView.vue'
import StockView from '../views/StockView.vue'


const routes = [
  {
    path: '/',
    name: 'selection',
    component: SelectionView
    // component: () => import('../views/SelectionView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
    // component: () => import('../views/HomeView.vue')
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: PedidosView
    // component: () => import('../views/PedidosView.vue')
  },
  {
    path: '/conocenos',
    name: 'conocenos',
    component: ConocenosView
    // component: () => import('../views/ConocenosView.vue')
  },
  {
    path: '/tablas',
    name: 'tablas',
    component: TablasView
    // component: () => import('../views/TablasView.vue')
  },
  {
    path: '/stock',
    name: 'stock',
    component: StockView
    // component: () => import('../views/StockView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

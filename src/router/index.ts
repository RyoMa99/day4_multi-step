import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/views/MultiStep/index.vue'),
    children: [
      {
        path: '',
        components: {
          1: () => import('@/components/Step1.vue'),
          2: () => import('@/components/Step2.vue'),
          3: () => import('@/components/Step3.vue')
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

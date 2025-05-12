import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/BaseSite.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/PageOne.vue'),
        name: 'home'
      },
      {
        path: 'single-components',
        component: () => import('../pages/SingleComponents.vue'),
        name: 'components'
      }
    ]
  }
]

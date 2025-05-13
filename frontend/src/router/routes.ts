import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/BaseSite.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/base_components/CardsPage.vue'),
        name: 'home'
      },
      {
        path: 'rating',
        component: () => import('../pages/base_components/RatingsPage.vue'),
        name: 'rating'
      },
      {
        path: 'youtube-player',
        component: () => import('../pages/youtube/IndexPage.vue'),
        name: 'youtube_player'
      },
      {
        path: 'single-components',
        component: () => import('../pages/base_components/CardsPage.vue'),
        name: 'components'
      },
      {
        path: 'floor',
        component: () => import('../pages/floor/IndexPage.vue'),
        name: 'floor'
      }
    ]
  }
]

import { createRouter, createWebHistory } from 'vue-router'
import filmPage from '../components/filmPage.vue'
import filmMenu from '../components/filmMenu.vue'
import favoriteFilms from '../components/favoriteFilms.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: filmMenu
    },
    {
      path: '/film/:id',
      name: 'filmDetails',
      component: filmPage
    },
    {
      path: '/favorites',
      name: 'favoriteFilms',
      component: favoriteFilms
    }
  ]
})

export default router

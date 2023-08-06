import { createRouter, createWebHistory } from 'vue-router'
import firstpage from '../views/firstpage.vue'
import secondpage from '../views/secondpage.vue'
import thirdpage from '../views/thirdpage.vue'
import fourthpage from '../views/fourthpage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: firstpage
    },
    {
      path: '/secondpage/',
      name: 'secondpage',
      component: secondpage
    },
    {
      path: '/thirdpage/',
      name: 'thirdpage',
      component: thirdpage
    },
    {
      path: '/fourthpage/',
      name: 'fourthpage',
      component: fourthpage
    },
  
  ]
})

export default router

import { createRouter, createWebHistory  } from 'vue-router'
import RatingSurvey from '@/components/RatingSurvey.vue'
import RatingResponse from '@/components/RatingResponse.vue'

const routes = [
  {
    path: '/',
    name: 'survey',
    component: RatingSurvey
  },
  {
    path: '/response',
    name: 'response',
    component: RatingResponse
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

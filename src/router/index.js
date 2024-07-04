import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPageView from '@/views/LandingPageView.vue'
import JobListingView from '@/views/JobListingView.vue'
import AddJobListerView from '@/views/AddJobListerView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPageView
  },
  {
    path: '/jobListings',
    name: 'jobListings',
    component: JobListingView
  },
  {
    path: "/addJobLister",
    name: "addJobLister",
    component: AddJobListerView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

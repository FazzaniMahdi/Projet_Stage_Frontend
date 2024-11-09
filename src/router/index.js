import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '@/views/Common/LandingPageView.vue'
import JobListingView from '@/views/Common/JobListingView.vue'
import AddJobListingView from '@/views/JobLister/AddJobListingrView.vue'
import DeleteJobListingView from '@/views/JobLister/DeleteJobListingView.vue'
import NotFoundView from '@/views/Common/NotFoundView.vue'
import UpdateJobListingView from '@/views/JobLister/UpdateJobListingView.vue'
import SignInView from '@/views/Authentication/SignInView.vue'
import SignUpView from '@/views/Authentication/SignUpView.vue'
import UserSettingsView from '@/views/Authentication/UserSettingsView.vue'
import SignOutView from '@/views/Authentication/SignOutView.vue'
import JobListingDetailsView from '@/views/Common/JobListingDetailsView.vue'
import ReportListingView from '@/views/JobHunter/ReportListingView.vue'
import JobApplicationView from '@/views/JobHunter/JobApplicationView.vue'
import MyListingsView from '@/views/JobLister/MyListingsView.vue'
import Test from '@/views/JobLister/test.vue'
import CandidateListView from '@/views/JobLister/CandidateListView.vue'
import ControlPanel from '@/views/Admin/ControlPanel.vue'
import DeleteUserView from '@/views/Admin/DeleteUserView.vue'
import UserDetailsView from '@/views/Admin/UserDetailsView.vue'
import ReportDetailsView from '@/views/Admin/ReportDetailsView.vue'
import DeleteReportView from '@/views/Admin/DeleteReportView.vue'

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
    path: '/jobListings/:searchTerm',
    name: 'jobListingsParams',
    component: JobListingView
  },
  {
    path: "/addJobListing",
    name: "addJobListing",
    component: AddJobListingView
  },
  {
    path: "/deleteJobListing/:jobListingId",
    name: "deleteJobListing",
    component: DeleteJobListingView
  },
  {
    path: "/updateJobListing/:jobListingId",
    name: "updateJobListing",
    component: UpdateJobListingView
  },
  {
    path: "/signIn",
    name: "signIn",
    component: SignInView
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUpView
  },
  {
    path: "/signOut",
    name: "signOut",
    component: SignOutView
  },
  {
    path: "/UserSettings",
    name: "UserSettingsView",
    component: UserSettingsView
  },
  {
    path: "/JobListing/:jobListingId",
    name: "jobListingDetails",
    component: JobListingDetailsView
  },
  {
    path: "/ReportListing/:jobListingId",
    name: "reportJobListing",
    component: ReportListingView
  },
  {
    path: "/Apply/:jobListingId",
    name: "applyForJob",
    component: JobApplicationView
  },
  {
    path: "/adminControlPanel",
    name: "adminControlPanel",
    component: ControlPanel
  },
  {
    path: "/myListings/:listerId",
    name: "listerListings",
    component: MyListingsView
  },
  {
    path: "/myListings/candidatesList",
    name: "candidatesList",
    component : CandidateListView
  },
  {
    path: "/adminControlPanel/inspectUser/:userId",
    name: "adminInspectUser",
    component: UserDetailsView
  },
  {
    path: "/adminControlPanel/deleteUser/:userId",
    name: "adminDeleteUser",
    component: DeleteUserView
  },
  {
    path: "/adminControlPanel/inspectListing/:jobListingId",
    name: "adminInspectListing",
    component: JobListingDetailsView
  },
  {
    path: "/adminControlPanel/deleteListing/:jobListingId",
    name: "admingDeleteListing",
    component: DeleteJobListingView
  },
  {
    path: "/adminControlPanel/inspectReport/:reportId",
    name: "adminInspectReport",
    component: ReportDetailsView
  },
  {
    path: "/adminControlPanel/deleteReport/:reportId",
    name: "adminDeleteReport",
    component: DeleteReportView
  },
  {
    path: "/test",
    name: "test",
    component: Test
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

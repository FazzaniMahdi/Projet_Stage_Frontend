<script setup>
  import NavBar from "./components/NavBar.vue"
  import Footer from "./components/Footer.vue"
  import { onMounted, ref } from "vue"
  import { useRouter, useRoute } from "vue-router"
  const user = ref()
  const router = useRouter();
  const route = useRoute();
  const token = ref("")
  const decodedToken = ref("")
  const isExpiredToken = ref(false)
  const isAdmin = ref(false)
  onMounted(() => {
        if(sessionStorage.getItem("currentUser")) {
            user.value = JSON.parse(sessionStorage.getItem("currentUser"))
            console.log(user.value)
            if(user.value.userType == 'Admin') {
                isAdmin.value = true
            }else {
                isAdmin.value = false
            }
        }else {
            isAdmin.value = false
        }
    })
  router.beforeEach(async (to, from) => {
    // the entire app can only have ONE beforeEach hook
    // it CANNOT have MORE THAN ONE
    // the second parameter is to avoid an infinite redirect loop
    // console.log(to.name+'\n'+from.name)
    
    token.value = sessionStorage.getItem('currentUserToken')
    if(token.value){
      decodedToken.value = JSON.parse(atob(token.value.split(".")[1]))
      if(decodedToken.value.exp*1000 < Date.now()) {
        isExpiredToken.value = true
      }else {
        isExpiredToken.value = false;
      }
    }else{
      isExpiredToken.value = false;
    }

    if (sessionStorage.getItem('currentUserToken')==null && to.name == 'UserSettingsView' && isExpiredToken) {
      return { name: 'signIn'}
    }
    if(sessionStorage.getItem('currentUserToken')==null && to.name == 'addJobListing' && isExpiredToken) {
      return {name: 'signIn'}
    }
    if(sessionStorage.getItem('currentUserToken')==null && to.name == 'updateJobListing' && isExpiredToken) {
      return {name: 'signIn'}
    }
    if(sessionStorage.getItem('currentUserToken')==null && to.name == 'reportJobListing' && isExpiredToken) {
      return {name: 'signIn'}
    }
    if(sessionStorage.getItem('currentUserToken')==null && to.name == 'applyForJob' && isExpiredToken) {
      return {name: 'signIn'}
    }
    if(sessionStorage.getItem('currentUserToken')==null && to.name == 'myListings' && isExpiredToken) {
      return {name: 'signIn'}
    }
    if(from.name == 'adminDeleteListing'){
      router.push('/adminControlPanel');
    }
})
</script>

<template>
  <NavBar :key="$route.fullPath"/>
  <!--this is where the component associated with the inserted route will render-->
  <RouterView :key="$route.fullPath"/>
  <Footer v-if="!isAdmin" :key="$route.fullPath" />
</template>

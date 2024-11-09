<script setup>
    import axios from 'axios';
    import { onMounted } from 'vue';
    import { ref } from "vue";
    import { useRoute } from 'vue-router'
    const route = useRoute();
    const listing = ref({})
    const listingId = route.params.jobListingId
    const lister = ref({})
    const loading = ref(true)
    onMounted(() => {
      axios.get(`https://localhost:7075/Api/JobListings/${listingId}`)
      .then(res => {
        listing.value=res.data
        axios.get(`https://localhost:7075/Api/Authentication/Users/${listing.value.jobsListerId}`)
        .then(res => {
          console.log(res.data)
          lister.value = res.data
          loading.value = false
        })
      })
    })

    const user = JSON.parse(sessionStorage.getItem('currentUser'));
</script>
<template>
  <div v-if="loading" class="d-flex justify-content-center align-items-center">
      <div class="spinner-border me-2" role="status">
          <span class="visually-hidden">Loading...</span>
      </div>
      <h1>Loading...</h1>
  </div>
  <div v-else>
  <h1 class="center">Job Application Form</h1>
  <!--<h1 v-if="lister.jobName != ''">Applying for: {{ listing.jobName }}</h1>-->
  <h1 v-if="lister.jListerName != ''">At: {{ lister.jListerName }}</h1>
  full name
  <input type="text" class="form-control" :value="user.jhFullName">
  E-mail
  <input type="text" class="form-control" :value="user.email">
  Address
  <input type="text" class="form-control" :value="user.address">
  City
  <input type="text" class="form-control" :value="user.city">
  Zip
  <input type="text" class="form-control" :value="user.postalCode">
  Telephone
  <input type="text" class="form-control" :value="user.phoneNumber">
  Start Date
  <input type="date" class="form-control" >
  Upload your Cv
  <input type="file" accept=".doc,.docx,.pdf,.png,.jpg,.jpeg"><br><br>
  <input type="submit" class="btn btn-primary" style="width: 100%;" value="submit">
</div>
</template>

<style scoped>
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
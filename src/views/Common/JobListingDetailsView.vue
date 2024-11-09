<script setup>
    import axios from "axios";
    import { onMounted, ref } from "vue";
    import { useRoute } from "vue-router";
    import moment from 'moment'

    const route = useRoute()
    const listingId = route.params.jobListingId
    const listing = ref({})
    const listerId = ref("")
    const offerLister = ref({})
    const currentUser = ref({})
    const loading = ref(true)
    onMounted(() => {
        if(sessionStorage.getItem('currentUser')){
            currentUser.value = JSON.parse(sessionStorage.getItem('currentUser'))
        }
        axios.get(`https://localhost:7075/Api/Joblistings/${listingId}`)
            .then(res => {
                listing.value = res.data
                listing.value.expirationDate = moment(listing.value.expirationDate).format('YYYY-MM-DD');
                listerId.value = res.data.jobsListerId
                if(listerId.value)
                {
                    axios.get(`https://localhost:7075/Api/Authentication/Users/${listerId.value}`)
                    .then(response => {
                        offerLister.value = response.data
                        loading.value = false 
                    })
                }
        }).catch(err => console.log(err));
    }) 
</script>
<template>
    <div v-if="loading" class="d-flex justify-content-center align-items-center">
        <div class="spinner-border me-2" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <h1>Loading...</h1>
    </div>
    <div v-else>
    <button class="btn btn-outline-primary" @click="$router.back()">go back</button>
    <div class="mb-3">
        <label class="form-label">Position Name</label>
        <input type="Text" class="form-control" v-model="listing.jobName" readonly>
    </div>
    <div class="mb-3">
        <label class="form-label">Description</label>
        <input type="Text" class="form-control" v-model="listing.jobDescription" readonly>
    </div>
    <div class="mb-3">
        <label class="form-label">Expiration date</label>
        <input type="date" class="form-control" v-model="listing.expirationDate" readonly>
    </div>
    <div class="mb-3">
        <label class="form-label">Location</label>
        <input type="text" class="form-control" v-model="listing.jobLocation" readonly>
    </div>
    <label class="form-label">Requirements</label>
    <div class="mb-3" v-for="requirement in listing.jobRequirements" :key="requirement">
        <ul>
            <li>{{ requirement }}</li>
        </ul>
    </div>
    <label class="form-label">Missions</label>
    <div class="mb-3" v-for="mission in listing.missions" :key="mission">
        <ul>
            <li>{{ mission }}</li>
        </ul>
    </div>
    <div class="mb-3">
        <label class="form-label">Type</label>
        <input type="text" class="form-control" v-model="listing.jobType" readonly>
    </div>
    <div class="mb-3">
        <label class="form-label">Positions available</label>
        <input type="text" class="form-control" v-model="listing.jobPositionsAvailable" readonly>
    </div>
    <div class="mb-3">
        <!--make this into a link which goes to the details of a user-->
        <label class="form-label">Job Lister</label>
        <input type="text" class="form-control" v-model="offerLister.userName" readonly>
    </div>
    <RouterLink v-if="listing.jobPositionsAvailable>0 && currentUser.userType=='Hunter'" class="btn btn-outline-primary" style="width: 100%;" :to="`/Apply/${listing.jobId}`">Apply</RouterLink>
    <div class="mb-3" v-if="currentUser">
        <!--
            The width is a temporary solution
            there's nothing more permanenet than a temporary solution
        -->
        <RouterLink v-if="currentUser.userType == 'Lister' && offerLister.id == currentUser.id" :to="`/updateJobListing/${listing.jobId}`" class="btn btn-outline-warning" style="width: 100%;">Modify</RouterLink>
        <RouterLink v-if="currentUser.userType == 'Lister' && offerLister.id == currentUser.id" :to="`/deleteJobListing/${listing.jobId}`" class="btn btn-outline-danger" style="width: 100%;">Delete</RouterLink>
    </div>
</div>
</template>
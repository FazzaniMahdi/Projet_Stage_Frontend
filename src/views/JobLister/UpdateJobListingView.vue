<script setup>
    import axios from 'axios'
    import { onMounted,ref } from 'vue'
    import { useRoute,useRouter } from 'vue-router'
    import moment from 'moment'
    const route = useRoute()
    const router = useRouter()
    const jobListing = ref({})
    const jobId = route.params.jobListingId
    const JobsLister = ref({})
    
    const requirements = ref([])
    const missions = ref([])
    onMounted(() => {
        // Gettings the user in question
        // why? why did i write this ????
        // good point past me, what the fuck did past (past) me write this for???
        JobsLister.value = sessionStorage.getItem('currentUser')
        // Gettings the corresponding job listing
        axios.get(`https://localhost:7075/api/jobListings/${jobId}`)
        .then(response => {
            jobListing.value = response.data;
            jobListing.value.expirationDate = moment(jobListing.value.expirationDate).format('YYYY-MM-DD');
        })
        .catch(error => console.log(`this machine hates you, reason: ${error}`))
    })
    
    function AddMission(event) {
        missions.value.push(event.target.value)
    }
    function AddRequirement(event) {
        requirements.value.push(event.target.value)
    }
    function UpdateData() {
        console.log(missions.value)
        console.log(requirements.value)
        axios.put(`https://localhost:7075/api/jobListings/${jobId}`, 
        {
            "JobName": jobListing.value.jobName,
            "JobDescription": jobListing.value.jobDescription,
            "ExpirationDate": jobListing.value.expirationDate,
            "JobRequirements": requirements.value,
            "Missions": missions.value,
            "JobLocation": jobListing.value.jobLocation,
            "JobHourlyPay": jobListing.value.jobHourlyPay,
            "JobType": jobListing.value.jobType,
            "JobPositionsAvailable": jobListing.value.jobPositionsAvailable
        },
        {
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem('currentUserToken')}`
            }
        })
        .then(res => 
        {
            console.log(res.data)
            router.push('/jobListings')
        })
        .catch(err => console.log(err))
    }

</script>

<template>
    <h1>Updating JobListing {{ jobListing.jobId }}</h1>
    <form @submit.prevent="UpdateData">
        <div class="mb-3">
            <label for="jobsName" class="form-label">Job Name</label>
            <input type="Text" class="form-control" id="jobsName" v-model="jobListing.jobName" placeholder="name example">
        </div>
        <div class="mb-3">
            <label for="jobsDesc" class="form-label">Job's Description</label>
            <input type="Text" class="form-control" id="jobsDesc" v-model="jobListing.jobDescription" placeholder="description example">
        </div>
        <div class="mb-3">
            <label for="jobsExpDat" class="form-label">Expiration Date</label>
            <input type="date" class="form-control" id="jobsExpDat" v-model="jobListing.expirationDate" placeholder="Expiration date">
        </div>
        <div class="mb-3">
            <label for="jobsLoc" class="form-label">Job's Location</label>
            <input type="Text" class="form-control" id="jobsLoc" v-model="jobListing.jobLocation" placeholder="location example">
        </div>
        <label for="jobsRequirements" class="form-label">Job's Requirements</label>
        <div class="mb-3" v-for="requirement in jobListing.jobRequirements" :key="requirement">
            <input type="Text" class="form-control" id="jobsRequirements" :value="requirement" placeholder="Requirements example" @change="AddRequirement">
        </div>
        <label for="jobsMissions" class="form-label">Job's Missions</label>
        <div class="mb-3" v-for="mission in jobListing.missions" :key="mission">
            <input type="Text" class="form-control" id="jobsMissions" :value="mission" placeholder="Missions example" @change="AddMission">
        </div>
        <div class="mb-3">
            <label for="jobsTyp" class="form-label">Job Type</label>
            <input type="Text" class="form-control" id="jobsTyp" v-model="jobListing.jobType" placeholder="Job type example">
        </div>
        <div class="mb-3">
            <label for="jobsHrPay" class="form-label">Job's Hourly Pay</label>
            <input type="Text" class="form-control" id="jobsHrPay" v-model="jobListing.jobHourlyPay" placeholder="Hourly pay example">
        </div>
        <div class="mb-3">
            <label for="jobsNbPosAvb" class="form-label">Numbre Of Positions Available</label>
            <input type="Text" class="form-control" id="jobsNbPosAvb" v-model="jobListing.jobPositionsAvailable" placeholder="Number Of Positions Available Example">
        </div>
        
        <button type="submit" class="btn btn-outline-primary" style="width:100%;">submit</button>
    </form>
</template>
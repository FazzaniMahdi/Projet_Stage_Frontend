<script setup>
    import axios from 'axios';
    import { ref, watch } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const JobName = ref("")
    const JobDescription = ref("")
    const ExpirationDate = ref(new Date().toLocaleDateString('en-CA'))
    const JobLocation = ref("")
    const Missions = ref([])
    const JobRequirements = ref([])
    const JobType = ref("")
    const JobHourlyPay = ref(0)
    const JobPositionsAvailable = ref(0)
    const JobsListerId = ref("")

    const NbMissions = ref(0)
    const NbRequirements = ref(0)

    watch(
        // watch these values inside the array
        () => []
        // the values inside this array are the mutations of the other array elements
        // which can then be used in the anonymous function
        ,([]) => {}
    )

    function postData() {
        if(sessionStorage.getItem('currentUserToken'))
            JobsListerId.value = JSON.parse(sessionStorage.getItem('currentUser')).id;
        axios.post("https://localhost:7075/Api/JobListings/MakeListing",
        {
            "JobName": JobName.value,
            "JobDescription": JobDescription.value,
            "ExpirationDate": ExpirationDate.value,
            "JobRequirements": JobRequirements.value,
            "Missions":Missions.value,
            "JobLocation": JobLocation.value,
            "JobType": JobType.value,
            "JobHourlyPay": JobHourlyPay.value,
            "JobPositionsAvailable": JobPositionsAvailable.value,
            "jobsListerId": JobsListerId.value
        },
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('currentUserToken')}`
            }
        }
        ).then(response => 
        {
            console.log (response.data)
            router.push(`/jobListings`)
        }).catch(error => console.log(error))
    }

    function AddMission(event) {
        Missions.value.push(event.target.value)
    }
    function AddRequirement(event) {
        JobRequirements.value.push(event.target.value)
    }

</script>
<template>
    <form @submit.prevent="postData">
        <div class="mb-3">
            <label for="jobsName" class="form-label">Job Name</label>
            <input type="Text" class="form-control" id="jobsName" v-model="JobName" placeholder="name example">
        </div>
        <div class="mb-3">
            <label for="jobsDesc" class="form-label">Job's Description</label>
            <input type="Text" class="form-control" id="jobsDesc" v-model="JobDescription" placeholder="description example">
        </div>
        <div class="mb-3">
            <label for="jobsExpDat" class="form-label">Expiration Date</label>
            <input type="date" class="form-control" id="jobsExpDat" v-model="ExpirationDate" placeholder="Expiration date">
        </div>
        <div class="mb-3">
            <label for="jobsLoc" class="form-label">Job's Location</label>
            <input type="Text" class="form-control" id="jobsLoc" v-model="JobLocation" placeholder="location example">
        </div>
        <div class="mb-3">
            <label for="nbMissions" class="form-label">How many missions do you require for this job</label>
            <input type="text" class="form-control" id="nbmissions" v-model.number="NbMissions">
        </div>
        <div class="mb-3" v-for="i in NbMissions" :key="i">
            <label for="jobsMissions" class="form-label">Mission #{{i}}</label>
            <input type="Text" class="form-control" id="jobsMissions" @change="AddMission" placeholder="Missions example">
        </div>
        <div class="mb-3">
            <label for="nbMissions" class="form-label">How many requirements does your job have</label>
            <input type="text" class="form-control" id="nbmissions" v-model.number="NbRequirements">
        </div>
        <div class="mb-3" v-for="i in NbRequirements" :key="i">
            <label for="jobsRequirements" class="form-label">Requirement #{{ i }}</label>
            <input type="Text" class="form-control" id="jobsRequirements" @change="AddRequirement" placeholder="Requirements example">
        </div>
        <div class="mb-3">
            <label for="jobsTyp" class="form-label">Job Type</label>
            <input type="Text" class="form-control" id="jobsTyp" v-model="JobType" placeholder="Job type example">
        </div>
        <div class="mb-3">
            <label for="jobsHrPay" class="form-label">Job's Hourly Pay</label>
            <input type="Text" class="form-control" id="jobsHrPay" v-model="JobHourlyPay" placeholder="Hourly pay example">
        </div>
        <div class="mb-3">
            <label for="jobsNbPosAvb" class="form-label">Numbre Of Positions Available</label>
            <input type="Text" class="form-control" id="jobsNbPosAvb" v-model="JobPositionsAvailable" placeholder="Number Of Positions Available Example">
        </div>
        <button type="submit" class="btn btn-outline-primary" style="width: 100%;">Post listing</button>
    </form>
</template>
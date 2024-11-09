<script setup>
    import { ref } from "vue"
    import { useRouter } from "vue-router";
    import axios, { Axios } from "axios";
    const userData = ref()
    const userListings = ref({})
    const router = useRouter()
    userData.value = JSON.parse(sessionStorage.getItem('currentUser'))
    if(userData.value){
        axios.get(`https://localhost:7075/Api/JobListings/myListings/${userData.value.id}`,
        {
            headers:{
                Authorization: `Bearer ${sessionStorage.getItem('currentUserToken')}`
            }
        })
        .then(res=> {
            console.log(res.data)
            console.log(res.status)
            userListings.value = res.data
        }).catch(err =>{
            console.log(err)
            if(err.response.status == 401) {
                router.push("/signIn")
                sessionStorage.removeItem("currentUser")
                sessionStorage.removeItem("currentUserToken")
            }
        })
    }else {
        router.push("/signIn")
        sessionStorage.removeItem("currentUser")
        sessionStorage.removeItem("currentUserToken")
    }
</script>
<template>
    <table class="table">
        <thead>
            <tr>
                <th>Position</th>
                <th>Job Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="listing in userListings" :key="listing">
                <td>{{ listing.jobName }}</td>
                <td>{{ listing.jobDescription }}</td>
                <RouterLink :to="`/JobListing/${listing.jobId}`" class="btn btn-success">details</RouterLink>
                <RouterLink :to="`/myListings/candidatesList`" class="btn btn-success">Candidates list</RouterLink>
            </tr>
        </tbody>
    </table>
    
</template>
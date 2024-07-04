<script>
    import axios from 'axios';
    import { onMounted } from 'vue';
    export default {
        name : 'JobListingView',
        data:() => ({
            jobListings: []
        }),
        mounted() {
            axios.get("https://localhost:7075/api/jobListings")
                .then((response) => {this.jobListings = response.data})
                .then((response) => console.log(this.jobListings))
                .catch(error => console.log("pain time (again): ",error));
            }
        }
    
</script>
<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">JobId</th>
                <th scope="col">JobName</th>
                <th scope="col">JobDescription</th>
                <th scope="col">JobLocation</th>
                <th scope="col">JobLister</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="job" v-for="job in jobListings">
                <td>
                    <p v-if="job.jobId">{{ job.jobId }}</p>
                    <p v-else>null</p>
                </td>
                <td>
                    <p v-if="job.jobName">{{ job.jobName }}</p>
                    <p v-else>null</p>
                </td>
                <td>
                    <p v-if="job.jobDescription">{{ job.jobDescription }}</p>
                    <p v-else>null</p>
                </td>
                <td>
                    <p v-if="job.jobLocation">{{ job.jobLocation }}</p>
                    <p v-else>null</p>
                </td>
                <td>
                    <p v-if="job.jobsLister">{{ job.jobsLister }}</p>
                    <p v-else>null</p>
                </td>
            </tr>
        </tbody>
    </table>
    <br>
</template>
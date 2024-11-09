<script setup>
    import axios from 'axios';
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';
    import moment from 'moment';
    const route = useRoute()
    const reportId = route.params.reportId
    const report = ref({})
    axios.get(`https://localhost:7075/Api/Reports/${reportId}`)
    .then(res=> {
        console.log(res)
        report.value = res.data
        report.value.reportDate = moment(report.value.reportDate).format('YYYY-MM-DD');
    })
    .catch(err => {
        console.log(err)
    })
</script>
<template>
    <button class="btn btn-outline-primary" @click="$router.back()">go back</button>
    <h1>Report info</h1>
    <form>
        <div class="mb-3">
            <label class="form-label">Job Listing Id</label>
            <input type="Text" class="form-control" v-model="report.jobListingId" readonly>
        </div>
        <div class="mb-3">
            <label class="form-label">Reporter Id</label>
            <input type="text" class="form-control" v-model="report.userId" readonly>
        </div>
        <label class="form-label">Report Reasons</label>
        <div class="mb-3" v-for="reason in report.reasons" :key="reason">
            <ul>
                <li>{{ reason }}</li>
            </ul>
        </div>
        <div class="mb-3">
            <label class="form-label">Additional Info</label>
            <input type="text" class="form-control" v-model="report.additionalInfo">
        </div>
        <div class="mb-3">
            <label class="form-label">Report Date</label>
            <input type="date" class="form-control" v-model="report.reportDate">
        </div>
    </form>
</template>
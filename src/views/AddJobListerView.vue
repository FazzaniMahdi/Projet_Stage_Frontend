<script>
    import axios from 'axios';
    export default {
        name: "AddJobListerView",
        data() {
            return{
                jobsName: "",
                jobsDesc: "",
                //this is an example of the binding in two ways
                //v-bind => one way
                //v-model => two ways
                //if this changes the input's value will
                //and vice versa
                //although this will NOT change
                jobsExpDat: new Date().toLocaleDateString('en-CA'),
                jobsLoc : "",
                jobsMissions: "",
                jobsRequirements: "",
                jobsTyp: "",
                jobsHrPay: "",
                jobsNbPosAvb: "",
                jobsLstr: ""
            }
        },
        methods: {
            postData() {
                axios.post(
                    "https://localhost:7075/api/jobListings",
                    {
                        "jobName": this.jobsName,
                        "jobDescription": this.jobsDesc,
                        "expirationDate": this.jobsExpDat,
                        "jobRequirements": this.jobsRequirements,
                        "missions": this.jobsMissions,
                        "jobLocation": this.jobsLoc,
                        "jobHourlyPay": this.jobsHrPay,
                        "jobType": this.jobsTyp,
                        "jobPositionsAvailable": this.jobsNbPosAvb,
                        "jobsLister": this.jobsLstr
                    }
                ).then(response => console.log(response.data))
                .catch(error => console.log(error))
            }
        }
    }
</script>
<template>
    <form @submit.prevent="postData">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Job Name</label>
            <input type="Text" class="form-control" id="exampleFormControlInput1" v-model="jobsName" placeholder="name example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Job's Description</label>
            <input type="Text" class="form-control" id="exampleFormControlInput1" v-model="jobsDesc" placeholder="description example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Expiration Date</label>
            <input type="date" class="form-control" id="exampleFormControlInput1" v-model="jobsExpDat" placeholder="Expiration date">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Job's Location</label>
            <input type="Text" class="form-control" id="exampleFormControlInput1" v-model="jobsLoc" placeholder="location example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Job's Missions</label>
            <input type="Text" class="form-control" id="exampleFormControlInput1" v-model="jobsMissions" placeholder="Missions example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Job's Requirements</label>
            <input type="Text" class="form-control" id="exampleFormControlInput1" v-model="jobsRequirements" placeholder="Requirements example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Job Type</label>
            <input type="Text" class="form-control" id="exampleFormControlInput1" v-model="jobsTyp" placeholder="Job type example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Job's Hourly Pay</label>
            <input type="Text" class="form-control" id="exampleFormControlInput1" v-model="jobsHrPay" placeholder="Hourly pay example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Numbre Of Positions Available</label>
            <input type="Text" class="form-control" id="exampleFormControlInput1" v-model="jobsNbPosAvb" placeholder="Number Of Positions Available Example">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Job's Lister</label>
            <input type="Text" class="form-control" id="exampleFormControlInput1" v-model="jobsLstr" placeholder="This Should Be Made Into A Select">
        </div>
        <button type="submit" class="btn btn-outline-primary">submit</button>
    </form>
</template>
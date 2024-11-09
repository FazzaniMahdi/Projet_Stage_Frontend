<script setup>
    import { useRoute } from "vue-router";
    import { ref } from 'vue'
    import axios from "axios";
import router from "@/router";

    const route = useRoute();
    const listingToReport = ref("")
    const reasons = ref([])
    const user = ref({})
    const additionalInfo = ref("")
    const offensiveChecked = ref(false)
    const innacurateChecked = ref(false)
    const spamChecked = ref(false)
    const fakeJobChecked = ref(false)
    const adChecked = ref(false)
    const otherChecked = ref(false)
    listingToReport.value = route.params.jobListingId
    user.value = JSON.parse(sessionStorage.getItem("currentUser"))
    
    function makeReport() {
        console.log(reasons.value)
        axios.post("https://localhost:7075/Api/Reports/MakeReport", {
            "jobListingId": listingToReport.value,
            "userId": (user.value).id,
            "reasons": reasons.value,
            "additionalInfo": additionalInfo.value,
            "reportDate": "2024-10-04T12:20:22.4940609",
            "status": "pending"
        },
        {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('currentUserToken')}`
            }
        }).then(res => {
            console.log(res)
        }).catch(err => console.log("an error has occured: "+err))

        router.go(-1)
    }

    function addReason(reason) {
        if(offensiveChecked) {
            if(!reasons.value.includes(reason)) {
                reasons.value.push(reason)
            }
        }
        else {
            const index = reasons.value.indexOf(reason);
            if (index !== -1) {
                reasons.value.splice(index, 1);
            }
        }

        if(innacurateChecked) {
            if(!reasons.value.includes(reason)) {
                reasons.value.push(reason)
            }
        }
        else {
            const index = reasons.value.indexOf(reason);
            if (index !== -1) {
                reasons.value.splice(index, 1);
            }
        }

        if(spamChecked) {
            if(!reasons.value.includes(reason)) {
                reasons.value.push(reason)
            }
        }
        else {
            const index = reasons.value.indexOf(reason);
            if (index !== -1) {
                reasons.value.splice(index, 1);
            }
        }

        if(fakeJobChecked) {
            if(!reasons.value.includes(reason)) {
                reasons.value.push(reason)
            }
        }
        else {
            const index = reasons.value.indexOf(reason);
            if (index !== -1) {
                reasons.value.splice(index, 1);
            }
        }

        if(adChecked) {
            if(!reasons.value.includes(reason)) {
                reasons.value.push(reason)
            }
        }
        else {
            const index = reasons.value.indexOf(reason);
            if (index !== -1) {
                reasons.value.splice(index, 1);
            }
        }

        if(otherChecked) {
            if(!reasons.value.includes(reason)) {
                reasons.value.push(reason)
            }
        }
        else {
            const index = reasons.value.indexOf(reason);
            if (index !== -1) {
                reasons.value.splice(index, 1);
            }
        }
    }
</script>
<template>
    <!--WIP-->
    <form @submit.prevent="makeReport()">
        <h1>What are you reporting</h1>
        <div class="container text-center">
            <div class="row row-cols-2">
                <div class="col">
                    <div class="form-control">
                        <input class="form-check-input" type="checkbox" value="" v-model="offensiveChecked" id="Offensive or Discriminatory" @click="addReason('Offensive or Discriminatory')">
                        <label class="form-check-label" for="Offensive or Discriminatory">
                            Offensive or Discriminatory
                        </label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-control">
                        <input class="form-check-input" type="checkbox" value="" id="Fake Job" @click="addReason('Fake Job')">
                        <label class="form-check-label" for="Fake Job">
                            Fake Job
                        </label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-control">
                        <input class="form-check-input" type="checkbox" value="" id="Inaccurate" @click="addReason('Inaccurate')">
                        <label class="form-check-label" for="Inaccurate">
                            Inaccurate
                        </label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-control">
                        <input class="form-check-input" type="checkbox" value="" id="Advertisement" @click="addReason('Advertisement')">
                        <label class="form-check-label" for="Advertisement">
                            Advertisement
                        </label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-control">
                        <input class="form-check-input" type="checkbox" value="" id="Spam" @click="addReason('Spam')">
                        <label class="form-check-label" for="Spam">
                            Spam
                        </label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-control">
                        <input class="form-check-input" type="checkbox" value="" id="Other" @click="addReason('Other')">
                        <label class="form-check-label" for="Other">
                            Other
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label for="reportDetails" class="form-label"><h1>Tell us in more detail about the issue</h1></label>
            <textarea class="form-control" id="reportDetails" rows="3" v-model="additionalInfo"></textarea>
        </div>

        <button class="btn btn-outline-primary">submit</button>
    </form>
</template>
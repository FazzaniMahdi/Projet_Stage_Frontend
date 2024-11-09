<script setup>
    import axios from 'axios';
    import { useRoute } from 'vue-router';
    import { onMounted, reactive, ref,watch } from 'vue';
    import SearchBar from '../../components/SearchBar.vue';
    
    import moment from 'moment'

    const route = useRoute()
    const params = route.params;

    const resultsNumber = ref(-1)
    const loading = ref(false)
    const sortBy = ref("date")
    const jobListings = reactive({})
    const jobListings1 = ref({})
    const currentUserRole = ref("")
    const currentUserId = ref("")
    onMounted(() => {
        loading.value = true
        axios.get("https://localhost:7075/api/jobListings/List")
        .then(
            (response) => {
                for(let i=0; i < Object.keys(response.data).length; i++){
                    response.data[i].expirationDate = moment(response.expirationDate).format('YYYY-MM-DD');
                    response.data[i].dateAdded = moment(response.dateAdded).format('YYYY-MM-DD');
                }
                jobListings1.value = response.data
                //console.log(Object.keys(response).length)
                Object.assign(jobListings, response.data)
                loading.value = !loading.value
            }
        )
        .catch(error => console.log("error while fetching listings\n reason: ",error));

        if(sessionStorage.getItem('currentUser')) {
            currentUserId.value = JSON.parse(sessionStorage.getItem('currentUser')).id
            currentUserRole.value = JSON.parse(sessionStorage.getItem('currentUser')).userType
        }
        if(params.searchTerm){
            loading.value = true
            axios.get(`https://localhost:7075/Api/JobListings/${params.searchTerm}`)
            .then(res => {
                Object.assign(jobListings, res.data)
                loading.value = !loading.value
                jobListings1.value= res.data
                loading.value = !loading.value
                resultsNumber.value = jobListings1.value.length
            }).catch(error => console.log("error while fetching search results\n reason: ", error))
        }

    })

    function getCurrentUser() {
        return JSON.parse(sessionStorage.getItem('currentUser'));
    }

    function truncateDescription(description) {
        let result = description.substring(0,50);
        if(!result.includes(description)) {
            result = result + "...";
        } 
        return result;
    }
    
</script>
<template>
    <SearchBar />
    <div class="container-fluid">
        <div v-if="loading" class="d-flex justify-content-center align-items-center">
            <div class="spinner-border me-2" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <h1>Loading...</h1>
        </div>

            <div v-else class="row">
            <div class="col-sm-2">
                <h4>Filter by most popular tags</h4><br>
                <input type="checkbox" name="filterOption" />Data Science<br>
                <input type="checkbox" name="filterOption" />Ai Engineering<br>
                <input type="checkbox" name="filterOption" />Management<br>
                <input type="checkbox" name="filterOption" />Web Dev<br>
                <input type="checkbox" name="filterOption" />Internship<br>
                <hr>
                <label for="typeEmploi">Job Type: </label>
                <select class="form-select-xsm" id="typeEmploi">
                    <option>CDD</option>
                    <option>CDI</option>
                </select>
                <br>

                <label for="location">Job Location</label>
                <select class="form-select-xsm" id="location">
                    <option>Tunis</option>
                </select>
            </div>
            <div class="col">
                <div>
                    <label for="sortCriteria">trier par: </label>
                    <select class="form-select-sm" id="sortCriteria" v-model="sortBy">
                        <option value="date">Date de soumission</option>
                        <option value="salaire">Salaire</option>
                        <option value="heures">Heures par semaine</option>
                    </select>
                </div>
                <hr>
                <div v-if="resultsNumber>0">
                    <h3 class="center" v-if="params.searchTerm">Search results for {{ params.searchTerm }}</h3>
                </div>
                <div v-if="resultsNumber==0">
                    <h3 class="center">No search results for {{ params.searchTerm }}</h3>
                </div>
                <div class="card" v-for="job in jobListings1" :key="job.jobId">
                    <div class="card-header" style="font-size: 30px">
                        {{ job.jobName }}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><img src="@/assets/images/schedule.png" height="20px" length="20px">{{ job.dateAdded }}</h5>
                        <!--todo make this inside the details view-->
                        <h5 v-if="getCurrentUser()" class="card-title">{{ job.jobDescription }}<span class="float-end"><RouterLink class="btn btn-outline-danger" :to="`/ReportListing/${job.jobId}`"><i class="bi bi-exclamation-diamond-fill"></i>report</RouterLink></span></h5>
                        <h5 class="card-text"><img src="@/assets/images/location.png" height="20px" length="20px">{{ job.jobLocation }}</h5>
                        <h5 class="card-text"><img src="@/assets/images/clockmoney.png" height="20px" length="20px">{{ job.jobHourlyPay }}dt/hr</h5>
                        <p class="card-text">{{ truncateDescription(job.jobDescription) }}</p>
                        <RouterLink :to="`/JobListing/${job.jobId}`" class="btn btn-outline-primary">View details</RouterLink>
                    </div>
                </div>
                
                <nav aria-label="Page navigation example" class="center" v-if="jobListings1.length>0">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
                

                <!-- !this is the worse version of the "good" code
                    <span  v-if="Object.keys(jobListings).length > 0">
                    <div class="card" v-for="job in jobListings" :key="job.jobId">
                        <div class="card-header">
                            {{ job.jobName }}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ job.jobDescription }}<span class="float-end"><RouterLink class="btn btn-outline-danger" :to="`/ReportListing/${job.jobId}`"><i class="bi bi-exclamation-diamond-fill"></i>report</RouterLink></span></h5>
                            <p class="card-text">{{ job.jobHourlyPay }}dt/hr</p>
                            <RouterLink :to="`/JobListing/${job.jobId}`" class="btn btn-outline-primary">View details</RouterLink>
                        </div>
                    </div>
                </span>
                <span v-else>
                    <div class="full-page">
                    <div class="content">
                        <h1>No listings found.</h1>
                        <p>There are currently no listings to display.</p>
                        <p>if you are a lister and looking to post your own offer <RouterLink to="/addjoblisting">press here</RouterLink></p>
                    </div>
                    </div>
                </span>
                <span v-if="searchResults.length > 0">
                    <div class="card" v-for="job in searchResults" :key="job.jobId">
                        <div class="card-header">
                            {{ job.jobName }}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{ job.jobDescription }}<span class="float-end"><RouterLink class="btn btn-outline-danger" :to="`/ReportListing/${job.jobId}`"><i class="bi bi-exclamation-diamond-fill"></i>report</RouterLink></span></h5>
                            <p class="card-text">{{ job.jobHourlyPay }}dt/hr</p>
                            <RouterLink :to="`/JobListing/${job.jobId}`" class="btn btn-outline-primary">View details</RouterLink>
                        </div>
                    </div>
                </span>
                <span v-if="searchResults.length == 0 && params.searchTerm">
                    <div class="content">
                        <h1>No results for your query.</h1>
                        <p>Try another one and maybe provide correct info my dude.</p>
                    </div>
                </span> -->
            </div>
        </div>
    </div>
</template>
<style scoped>
.full-page {
  height: 50vh; /* Set the component height to 100% of the viewport height */
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
}
.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
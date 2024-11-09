<script setup>
    import {ref} from "vue";
    import router from '@/router';
    const searchTerm1 = ref("")
    const searchTerm2 = ref("")
    function Search() {
        if(searchTerm1.value!="" || searchTerm2.value!="")
        router.push({name: "jobListingsParams", params: {searchTerm: searchTerm1.value}})
    }
</script>
<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="row">
                    <input type="text" class="form-control" v-model="searchTerm1" placeholder="post title, job description...">
                </div>
            </div>
            <div class="col">
                <div class="row">
                    <input type="text" class="form-control" v-model="searchTerm2" placeholder= "City, State, Zip Code">
                </div>
            </div>
        </div>
        <div class="row">
            <button type="button" class="btn btn-outline-success" @click="Search">Search</button>
        </div>
    </div>    
</template>

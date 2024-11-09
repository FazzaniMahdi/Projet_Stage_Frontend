<script setup>
    import axios from 'axios';
    import { useRoute } from 'vue-router';
    import { ref } from 'vue';
    const route = useRoute()
    const userId = route.params.userId
    const userData = ref({})
    axios.get(`https://localhost:7075/Api/Authentication/Users/${userId}`)
    .then(res => {
        console.log(res);
        userData.value = res.data
    })
    .catch(err => {
        console.log(err);
    })
</script>
<template>
    <!--This is a placeholder for what is to come-->
    <button class="btn btn-outline-primary" @click="$router.back()">go back</button>
    <h1>User info</h1>
    <form>
        <div class="mb-3"></div>
        <img :src="userData.profilePhoto">
        <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="Text" class="form-control" v-model="userData.email" readonly>
        </div>
        <div class="mb-3">
            <label class="form-label">UserName</label>
            <input type="text" class="form-control" v-model="userData.userName" readonly>
        </div>
        <div class="mb-3"  v-if="userData.userType == 'Hunter' && userData.jhFullName != ''">
            <label class="form-label">JobHunterFullName</label>
            <input type="text" class="form-control" v-model="userData.jhFullName" readonly>
        </div>
        <div class="mb-3"  v-if="userData.userType == 'Hunter' && userData.jhResume != ''">
            <label class="form-label">JobHunterResume</label>
            <input type="text" class="form-control" v-model="userData.jhResume" readonly>
        </div>
        <div class="mb-3"  v-if="userData.userType == 'Lister' && userData.jListerName != ''">
            <label class="form-label">JobListerName</label>
            <input type="text" class="form-control" v-model="userData.jListerName" readonly>
        </div>
        <div class="mb-3"  v-if="userData.userType == 'Lister' && userData.jListerWebsite != ''">
            <label class="form-label">JobListerWebsite</label>
            <input type="text" class="form-control" v-model="userData.jlWebsite" readonly>
        </div>
        <div class="mb-3">
            <label class="form-label">AccountType</label>
            <input type="text" class="form-control" v-model="userData.userType">
        </div>
        <div class="mb-3" v-if="userData.userType == 'Lister'">
            <RouterLink :to="`/myListings/${userData.id}`" class="btn btn-outline-warning" style="width: 100%;">MyListings</RouterLink>
        </div>
    </form>
</template>
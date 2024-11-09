<script setup>
    const userData = JSON.parse(sessionStorage.getItem('currentUser'));
    console.log(userData)
</script>
<template>
    <!--This is a placeholder for what is to come-->
    <h1>User info</h1>
    <form>
        <div class="mb-3"></div>
        <img :src="userData.profilePhoto">
        <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="Text" class="form-control" v-model="userData.email" readonly>
        </div>
        <div class="mb-3">
            <label class="form-label">Username</label>
            <input type="text" class="form-control" v-model="userData.userName" readonly>
        </div>
        <div class="mb-3"  v-if="userData.userType == 'Hunter' && userData.jhFullName != ''">
            <label class="form-label">Job Hunter's Full Name</label>
            <input type="text" class="form-control" v-model="userData.jhFullName" readonly>
        </div>
        <div class="mb-3"  v-if="userData.userType == 'Hunter' && userData.jhResume != ''">
            <label class="form-label">Job Hunter's Resume</label>
            <input type="text" class="form-control" v-model="userData.jhResume" readonly>
        </div>
        <div class="mb-3"  v-if="userData.userType == 'Lister' && userData.jListerName != ''">
            <label class="form-label">Job's Lister Name</label>
            <input type="text" class="form-control" v-model="userData.jListerName" readonly>
        </div>
        <div class="mb-3"  v-if="userData.userType == 'Lister' && userData.jListerWebsite != ''">
            <label class="form-label">Job's Lister Website</label>
            <input type="text" class="form-control" v-model="userData.jlWebsite" readonly>
        </div>
        <div class="mb-3">
            <label class="form-label">Account Type</label>
            <input type="text" class="form-control" v-model="userData.userType">
        </div>
        <div class="mb-3" v-if="userData.userType == 'Lister'">
            <RouterLink :to="`/myListings/${userData.id}`" class="btn btn-outline-warning" style="width: 100%;">MyListings</RouterLink>
        </div>
    </form>
</template>
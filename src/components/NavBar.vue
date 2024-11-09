<script setup>
    import { onMounted, ref } from 'vue';
    const user= ref({})
    const isAdmin = ref(false)
    const isLister = ref(false)
    function getUserToken() {
        return sessionStorage.getItem('currentUserToken');
    }

    onMounted(() => {
        if(sessionStorage.getItem("currentUser")) {
            user.value = JSON.parse(sessionStorage.getItem("currentUser"))
            console.log(user.value)
            if(user.value.userType == 'Admin') {
                isAdmin.value = true
            }else {
                isAdmin.value = false
            }
            if(user.value.userType == 'Lister') {
                isLister.value = true
            }else {
                isLister.value = false;
            }
        }else {
            isAdmin.value = false
        }
    })
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-secondary">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/" v-if="!isAdmin">
                <img src="@/assets/images/shuffle.png" width="30" height="30" class="d-inline-block align-top" alt="logo"><span style="text-decoration: underline;">ShuffleJob</span>
            </RouterLink>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!--literally changed the me-auto to ms-auto (s is for start which makes no sense but it works)-->
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                    <li class="nav-item" v-if="!isAdmin">
                        <RouterLink class="nav-link active" aria-current="page" to="/jobListings">Job Listings</RouterLink>
                    </li>
                    <li class="nav-item" v-if="isLister">
                        <RouterLink class="nav-link active" aria-current="page" to="/addJobListing">Add JobListing</RouterLink>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ml-auto">
                    <li class="nav-item" v-if="getUserToken()==null">
                        <RouterLink class="nav-link active" aria-current="page" to="/signIn">signIn</RouterLink>
                    </li>
                    <li class="nav-item" v-if="getUserToken()==null">
                        <RouterLink class="nav-link active" aria-current="page" to="/signUp">signUp</RouterLink>
                    </li>
                    <li class="nav-item" v-if="getUserToken()!=null && !isAdmin">
                        <RouterLink class="nav-link active" aria-current="page" to="/UserSettings">Profile</RouterLink>
                    </li>
                    <li class="nav-item" v-if="getUserToken()!=null">
                        <RouterLink class="nav-link active" aria-current="page" to="/signOut">signOut</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
</template>
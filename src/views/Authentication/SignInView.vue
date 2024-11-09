<script setup>
    import router from '@/router'
    import axios from 'axios'
    import { ref } from 'vue'
    
    const userName = ref("")
    const pwd = ref("")
    const rememberMe = ref(false);
    const token = ref("")
    const errorMessage = ref("");

    function authenticate() {
        axios.post("https://localhost:7075/Api/Authentication/SignIn", {
            "userName": userName.value,
            "password": pwd.value,
            "rememberMe": rememberMe.value
        }) .then(res => 
        {
            token.value = res.data.token;
            sessionStorage.setItem('currentUserToken', token.value)
            if(sessionStorage.getItem('currentUserToken')) {
                axios.get("https://localhost:7075/Api/Authentication/UserInfo",
                {
                    headers: {
                        Authorization : `Bearer ${sessionStorage.getItem('currentUserToken')}`
                    }
                }).then(response => {
                    console.log(response.data.user)
                    sessionStorage.setItem('currentUser', JSON.stringify(response.data.user));
                })
                .catch(err => 
                {
                    console.log(err)
                })
            }
            if(userName.value=="admin") {
                router.push("/adminControlPanel")
            }
            if(userName.value!="admin"){
                router.push("/")
            }
        })
        .catch(error => {
            console.log(error)
            errorMessage.value = error.response.data;
        })

    }

</script>
<template>
    <form @submit.prevent="authenticate">
        <div class="mb-3">
            <label for="userName" class="form-label">userName</label>
            <input type="Text" aria-describedby="userNameHelpBlock" :class="['form-control', errorMessage=='that user does not exist' ? 'is-invalid' : '']" id="userName" v-model="userName">
            <div id="userNameHelpBlock" class="form-text" v-if="errorMessage=='that user does not exist'">
                UserName is either incorrect or inexistant.
            </div>
        </div>
        <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input type="password" aria-describedby="passwordHelpBlock" :class="['form-control', errorMessage=='Wrong Password' || errorMessage == 'that user does not exist'? 'is-invalid' : '']" id="Password" v-model="pwd">
            <div id="passwordHelpBlock" class="form-text" v-if="errorMessage=='that user does not exist' || errorMessage=='Wrong Password'">
                Password is either invalid or is not associated with any account.
            </div>
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" v-model="rememberMe" id="rememberMe">
            <label class="form-check-label" for="rememberMe">Remember Me</label>
        </div>
        <button type="submit" class="btn btn-outline-primary">sign in</button>
    </form>
</template>
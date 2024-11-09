<script>
    import axios from 'axios'
    import { ref } from 'vue'
    export default {
        name: "SignUpView",
        setup() {
            const email = ref("")
            const password = ref("")
            const confirmPassword = ref("")
            const userType = ref("Hunter")
            const userName = ref("")
            const JListerWebsite= ref("")
            const JListerName= ref("")
            const City= ref("")
            const ZipCode= ref("")
            const Address= ref("")
            return {
                email,
                password,
                userType,
                userName,
                confirmPassword,
                JListerWebsite,
                JListerName,
                City,
                ZipCode,
                Address
            }
        },
        methods: {
            SignUp() {
                if(this.password == this.confirmPassword) {
                    axios.post("https://localhost:7075/api/Authentication/SignUp",{
                        "email": this.email,
                        "password": this.password,
                        "userType": this.userType,
                        "userName": this.userName
                    })
                    .then(res => {
                        this.$router.push("/signIn")
                    })
                    .catch(err => {
                        console.log(err)
                        if(err.response.status) {
                            console.log(err.response.data)
                            
                        }
                    });
                }
                else{
                    console.log(`Password mismatch: ${this.password} ${this.confirmPassword}`);
                }
            }
        }
        
    }
</script>

<template>
    <form @submit.prevent="SignUp">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="Text" id="email" class="form-control" v-model="email" placeholder="user@gmail.com">
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="Text" id="password" class="form-control" v-model="password">
        </div>
        <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirm Password</label>
            <input type="Text" id="confirmPassword" class="form-control" v-model="confirmPassword">
        </div>
        <div class="mb-3">
            <label for="userName" class="form-label">User Name</label>
            <input type="Text" id="userName" class="form-control" v-model="userName" placeholder="ShareHolder80">
        </div>
        <div class="mb-3">
            <label for="useType" class="form-label">User Type</label>
            <select class="form-select" aria-label="Default select example" id="useType" v-model="userType">
                <option value="Hunter">Job Hunter</option>
                <option value="Lister">Job Lister</option>
                <option value="Admin">Admin</option>
            </select>
        </div>

        <div class="mb-3" v-if="userType == 'Hunter'">
            
        </div>
        <div class="mb-3" v-if="userType == 'Lister'">
            <lable for="webSite" class="form-label">Web Site</lable>
            <input type="text" id="webSite" class="form-control" v-model="JListerWebsite" placeholder="https://test.com">
        </div>
        <div class="mb-3" v-if="userType == 'Lister'">
            <lable for="jlName" class="form-label">Lister Name</lable>
            <input type="text" id="jlName" class="form-control" v-model="JListerName">
        </div>
        <div class="mb-3">
            <lable for="userCity" class="form-label">City</lable>
            <input type="text" id="userCity" class="form-control" v-model="City">
        </div>
        <div class="mb-3">
            <lable for="adr" class="form-label">Address</lable>
            <input type="text" id="adr" class="form-control" v-model="Address">
        </div>
        <div class="mb-3">
            <lable for="zip" class="form-label">Zip Code</lable>
            <input type="text" id="zip" class="form-control" v-model="ZipCode">
        </div>
        
        <button type="submit" class="btn btn-outline-primary">Sign Up</button>
        <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      Hello, world! This is a toast message.
    </div>
    <button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
    </form>
</template>
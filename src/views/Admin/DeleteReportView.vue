<script setup>
    import axios from 'axios'
    import { useRoute } from 'vue-router'
    import router from '@/router'
    
    const route = useRoute();
    const reportId = route.params.reportId;

    function deleteReport() {
        console.log(reportId)
        axios.delete(`https://localhost:7075/Api/Reports/${reportId}`,
            {
                headers: {
                    Authorization : sessionStorage.getItem('currentUserToken')
                }
            }
        )
        .then(response => 
        {
            console.log(response.data)
            router.push(`/adminControlPanel`)
        })
        .catch(err => console.log(err));
    }
</script>
<template>
    <div class="container mt-5">
    <h1>Are you sure you want to Delete this Report?</h1>
    <div class="row mt-4">
      <div class="col-6">
        <button class="btn btn-outline-primary btn-block" @click="deleteReport">Confirm</button>
      </div>
      <div class="col-6">
        <button class="btn btn-outline-danger btn-block" @click="$router.go(-1)">Cancel</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  text-align: center;
}

.btn-block {
  width: 100%;
}
</style>
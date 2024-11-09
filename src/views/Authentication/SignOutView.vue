<script setup>
  function clearUser() {
    sessionStorage.removeItem('currentUserToken');
    sessionStorage.removeItem('currentUser');
  }
</script>

<template>
    <div class="container mt-5">
    <h1>Are you sure you want to sign out?</h1>
    <div class="row mt-4">
      <div class="col-6">
        <button class="btn btn-outline-primary btn-block" @click="clearUser();$router.push('/')">Confirm</button>
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
<script setup>
    import SearchBar from '../../components/SearchBar.vue'
</script>

<template>
    <SearchBar />
    <div class="center">
        <p>ShuffleJob helps you get the job of your dreams or gather a team of competent people</p><br>
        <p>ShuffleJob is available in <RouterLink to="/">English</RouterLink>.</p>
    </div>
</template>

<style scoped>
.center {
    display: flex;
    flex-direction: column; /* Ensures content is stacked vertically */
    justify-content: center;
    align-items: center;
    text-align: center; /* Centers text horizontally */
}
</style>

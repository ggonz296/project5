<script setup>
    import MainCardSingle from './MainCardSingle.vue'
</script>

<template>
    <!--Change the number of cards-->
    <MainCardSingle v-for="card in 10" :key="card"></MainCardSingle>
</template>
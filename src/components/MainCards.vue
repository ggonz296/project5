<script setup>
import MainCardSingle from './MainCardSingle.vue'
    //Add more single cards later
</script>

<template>
    <!--Change the number of cards-->
    <div class="grid grid-cols-5 gap-10 p-10">
        <MainCardSingle v-for="card in 10" :key="card"></MainCardSingle>
    </div>
</template>
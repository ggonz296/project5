<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <!--When user clicks on card link, it will display this-->
    <!--Could potentially send in other user information-->
    <div class="text-center">
        <h1 class="font-bold">{{route.params.id}}</h1>
        <p class="text-lg">Job Title: {{ route.query.jobtitle }}</p>
        <p class="mb-3 font-normal text-gray-800">Email: {{ route.query.email }}</p>
        <p class="mb-3 font-normal text-gray-800">Phone: {{ route.query.phone }}</p>
        <p class="mb-3 font-normal text-gray-800">Bio: {{ route.query.bio }}</p>
    </div>
</template>
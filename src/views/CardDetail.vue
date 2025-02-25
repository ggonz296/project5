<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <!--When user clicks on card link, it will display this-->
    <!--Could potentially send in other user information-->
    {{route.params.id}}
</template>
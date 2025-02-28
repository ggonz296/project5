<script setup>
import { ref } from 'vue'
import MainCards from '@/components/MainCards.vue'
import MainPagination from '@/components/MainPagination.vue'
import SecondCards from '@/components/SecondCards.vue';
</script>

<template>
  <MainCards></MainCards>
  <SecondCards></SecondCards>
  <MainPagination></MainPagination>
</template>

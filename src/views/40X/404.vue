<script setup>
import { useRoute } from 'vue-router'
let route = useRoute();
</script>

<template>
  404   {{route.fullPath}}

</template>

<style scoped>

</style>

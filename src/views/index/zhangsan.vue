<script setup>
import { useRoute } from 'vue-router'
let route = useRoute();

console.info(route)
console.info(222)
</script>

<template>
  9999999999999    {{route.fullPath}}
</template>

<style scoped>

</style>

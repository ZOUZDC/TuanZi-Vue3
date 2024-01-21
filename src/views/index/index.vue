<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
let route = useRoute();
console.info(route)
console.info(11111)
let xxx =ref("")
</script>

<template>
  111111111111111   {{route.fullPath}}

  <div>
    <el-input  v-model="xxx"></el-input>

  </div>

</template>

<style scoped>

</style>

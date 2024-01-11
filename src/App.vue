<script setup>
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>


  <router-link to="/">Go to Home</router-link>
  <br>
  <router-link to="/about">Go to About</router-link>

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<style scoped>

</style>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { useCounterStore } from './stores/counter'
const store = useCounterStore()
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <button type="button" @click="()=>{store.increment()}">count is {{ useCounterStore().doubleCount }}</button>
  <button type="button" @click="()=>{store.increment()}">count is {{ store.getCount }}</button>
  <HelloWorld msg="Vite + Vue" />
  <router-link to="/">Go to Home</router-link>
  <br>
  <router-link to="/about">Go to About</router-link>

  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

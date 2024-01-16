<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="common-layout g-100vwh">
<!--左,右上,右下布局-->
    <el-container class="g-100vwh">
      <el-aside width="200px" class="a">Aside</el-aside>
      <el-container>
        <el-header class="b" >Header</el-header>
        <el-main class="c">Main</el-main>
      </el-container>
    </el-container>
<!--    上,下左,下右布局-->
<!--    <el-container  class="g-100vwh">
      <el-header class="b">Header</el-header>
      <el-container>
        <el-aside width="200px" class="c">Aside</el-aside>
        <el-main class="a">Main</el-main>
      </el-container>
    </el-container>-->
<!--上,下布局-->
<!--    <el-container  class="g-100vwh">
      <el-header class="b">Header</el-header>
      <el-main class="a">Main</el-main>
    </el-container>-->
  </div>
</template>

<style scoped>
.common-layout{
  width: 100vw;
  height: 100vh;
}
.a{
  background-color: #535bf2;
}
.b{
  background-color: #c8f134;
}
.c{
 background-color: aquamarine;
}
</style>

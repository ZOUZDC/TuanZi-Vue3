<script setup>

import Logo from './../components/Logo'
import LeftMenu from './../components/LeftMenu'
</script>
<template>
  <!--左,右上,右下布局-->
  <el-container class="tz-g-100wh">
    <el-aside width="200px" class="a">
      <!--图标-->
      <Logo class="tz-g-100w"/>
      <!--菜单      -->
      <LeftMenu class="tz-g-100w"/>
    </el-aside>
    <el-container>
      <el-header class="b">Header</el-header>
      <el-main class="c">Main</el-main>
    </el-container>
  </el-container>
</template>


<style scoped>

</style>

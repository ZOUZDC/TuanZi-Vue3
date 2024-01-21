<script setup>

import Logo from './../components/Logo'
import LeftMenu from './../components/LeftMenu'

import { useTzLayout } from '@/stores'
const tzLayout = useTzLayout()
</script>
<template>
  <!--左,右上,右下布局-->
  <el-container class="tz-g-100wh left1right2">
    <el-aside width="200px" >
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
/deep/ .left1right2 > Logo {
 height: var(--el-header-height);
}
</style>

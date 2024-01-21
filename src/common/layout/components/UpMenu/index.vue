<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
      :default-active="activeIndex"
      router
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="/index">首页</el-menu-item>
    <el-sub-menu index="/curd">
      <template #title>增删改查</template>
      <el-menu-item index="/curd/list">列表</el-menu-item>
      <el-menu-item index="/curd/update">item two</el-menu-item>
    </el-sub-menu>

    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>

</template>
<style scoped>

</style>



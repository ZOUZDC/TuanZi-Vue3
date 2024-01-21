<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {ref} from 'vue'

const isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <div class="left-menu">
    <el-menu
        :default-active="2"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
    >
      <el-sub-menu >
        <template #title> <el-icon> <location/> </el-icon> <span>Navigator One</span> </template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>


    </el-menu>

    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
  </div>

</template>
<style scoped>
.left-menu {
  height: calc( 100% - 60px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>


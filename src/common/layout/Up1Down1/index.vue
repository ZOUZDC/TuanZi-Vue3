<script setup>
import UpMenu from './../components/UpMenu'
</script>

<template>
  <!--上,下布局-->
      <el-container  class="tz-g-100wh up1down1">
        <el-header >
            <UpMenu/>
        </el-header>
        <el-main >
          <router-view></router-view>
        </el-main>
      </el-container>
</template>

<style scoped>
.el-header {
  --el-header-padding: 0;
  --el-header-height: 50px;
  /*光标*/
  caret-color: transparent;
}
.el-menu--horizontal{
  --el-menu-horizontal-height:50px
}
.el-main {
  --el-main-padding: 10px;
}


</style>

<script setup>
import AsideMenu from '@/components/aside-menu/AsideMenu.vue';
import AreaMain from '@/components/area-main/AreaMain.vue'
</script>

<template>
    <el-container>
      <el-aside width="300px">
        <AsideMenu />
      </el-aside>
      <el-container>
        <el-main>
          <AreaMain />
        </el-main>
      </el-container>
    </el-container>
</template>

<style scoped>
.el-container {
  width: 80%;
  height: 100%;
  margin: 0 auto;
  color: aliceblue;
}
.el-aside,
.el-main{
  border: 1px solid white;
}
</style>

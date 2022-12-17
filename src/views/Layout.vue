<script setup></script>

<template>
    <el-container>
      <el-aside width="300px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
</template>

<style scoped>
.el-container {
  width: 100%;
  height: 100%;
  color: aliceblue;
  border: 1px solid white;
}
.el-aside,
.el-header,
.el-main{
  border: 1px solid white;
}
</style>

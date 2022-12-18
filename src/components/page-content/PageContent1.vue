<script setup>
import TodoItem from '../area-main/cpns/TodoItem.vue';
</script>

<template>
  <div class="page-content1">
    <div class="header mb-3 pb-3">
      <div class="title flex items-center justify-between">
        <div>
          <span>星期一</span>
          <span class="ml-3">1</span>
        </div>
        <div>
          <span class="mr-3">
            <el-icon size="20"><Unlock /></el-icon>
          </span>
          <span>
            <el-icon size="20"><Delete /></el-icon>
          </span>
        </div>
      </div>
      <div class="input flex items-center mt-3">
        <span class="mt-1"><el-icon><Plus /></el-icon></span>
        <span class="ml-3">请输入</span>
      </div>
    </div>
    <div class="content">
      <template v-for="item in 4" :key="item">
        <TodoItem >
          <span>待办事项{{ item}}</span>
        </TodoItem>
      </template>
    </div>
  </div>
</template>

<style scoped>
.header {
  border-bottom: 1px solid white;
}
.content div {
  border: 1xp solid white;
}
</style>

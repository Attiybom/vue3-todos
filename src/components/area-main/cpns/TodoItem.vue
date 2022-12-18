<script setup></script>

<template>
  <div class="todo-item p-3 flex items-center justify-between">
    <slot></slot>
    <span>
      <el-icon size="20"><Delete /></el-icon>
    </span>
  </div>
</template>

<style scoped>
.todo-item {
  border: 1px solid white;
}
</style>

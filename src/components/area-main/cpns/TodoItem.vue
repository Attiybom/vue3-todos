<script setup>
const emit = defineEmits(["deleteClick"])
// 处理删除事项
function handleDeleteClick() {
  emit('deleteClick')
}
</script>

<template>
  <div class="todo-item p-3 flex items-center justify-between">
    <slot></slot>
    <span @click="handleDeleteClick">
      <el-icon size="20"><Delete /></el-icon>
    </span>
  </div>
</template>

<style scoped>
.todo-item {
  border: 1px solid white;
}
</style>

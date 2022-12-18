<script setup>
import { ref, reactive, computed } from "vue";
import useTitleStore from "@/store";
// import TodoItem from '../area-main/cpns/TodoItem.vue';
const titleStore = useTitleStore();
const { titleList } = titleStore;
const props = defineProps({
  headerTitle: {
    type: String,
    default: "星期一",
  },
});

let list = reactive([
  { title: "待办事项1", completed: false },
  { title: "待办事项2", completed: true },
  { title: "待办事项3", completed: true },
  { title: "待办事项4", completed: false },
]);

// 任务计数
const count = computed(() => {
  let completedNum = 0;
  for (const item of list) {
    if (item.completed === false) {
      completedNum++;
    }
  }
  return completedNum;
});
titleList[0].count = count

// 回车点击新增
const num = ref(4);
function handleCreateItem() {
  num.value++;
}
// function handleDeleteItem() {
//   num.value--
// }
//

const listData = ref();
function handleChange() {
  list.push({
    title: listData.value,
    completed: false,
  });
  listData.value = "";
}
function handleDelete(title) {
  const deleteItemIndex = list.findIndex((item) => item.title === title);
  list.splice(deleteItemIndex, 1);
}

// 全选
const isAllSelect = ref(false);
function handleAllSelect() {
  if (isAllSelect.value === false) {
    for (const item of list) {
      item.completed = true;
    }
    isAllSelect.value = true;
  } else {
    isAllSelect.value = false;
  }
}

function handleAllDelete() {
  list.splice(0);
}
</script>

<template>
  <div class="page-content1">
    <!-- 头部 -->
    <div class="header mb-3 pb-3">
      <div class="title flex items-center justify-between">
        <div>
          <span>{{ props.headerTitle }}</span>
          <span class="ml-3">{{ count }}</span>
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
      <div class="input flex items-center mt-3" @click="handleCreateItem">
        <span class="mt-1"
          ><el-icon><Plus /></el-icon
        ></span>
        <el-input
          v-model="listData"
          placeholder="请输入新增待办事项"
          clearable
          @change="handleChange"
        ></el-input>
      </div>
    </div>

    <!-- 内容 -->
    <div class="content">
      <!-- 标题栏 -->
      <div class="flex items-center justify-between">
        <div @click="handleAllSelect">
          <el-icon>
            <component :is="isAllSelect ? 'Check' : 'FullScreen'"></component>
          </el-icon>
        </div>
        <div>待办事项标题</div>
        <div @click="handleAllDelete">
          <el-icon size="20"><Delete /></el-icon>
        </div>
      </div>
      <!-- 待办事项列表 -->
      <template v-for="item in list" :key="item">
        <div class="flex items-center justify-between">
          <div @click="item.completed = !item.completed">
            <el-icon>
              <component
                :is="item.completed ? 'Check' : 'FullScreen'"
              ></component>
            </el-icon>
          </div>
          <div :class="{ isCompleted: item.completed }" class="p-3">
            {{ item.title }}
          </div>
          <div @click="handleDelete(item.title)">
            <el-icon size="20"><Delete /></el-icon>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.header {
  border-bottom: 1px solid white;
}
.isCompleted {
  @apply line-through text-gray-400;
}
.content div {
  border: 1xp solid white;
}
</style>

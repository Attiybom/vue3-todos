<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"
const listData = [
  //模拟数据
  { title: "星期一", count: 1, locked: true },
  { title: "星期二", count: 2, locked: true },
  {
    title: "星期三",
    count: 3,
    locked: false,
  },
];

// const isActive = ref(false);
const currentItem = ref(0);
const router = useRouter();
function handleTitleClick(index) {
  currentItem.value = index;
  router.push(`/home/pageContent${index+1}`)
}
</script>

<template>
  <div class="aside-menu">
    <template v-for="(item, index) in listData" :key="item.title">
      <div
        class="list flex items-center justify-between p-3"
        :class="{ active: currentItem === index }"
        @click="handleTitleClick(index)"
      >
        <div class="flex items-center">
          <span class="mt-1">
            <el-icon size="20">
              <component :is="item.locked ? 'Lock' : 'Unlock'">
                <Lock />
              </component>
            </el-icon>
          </span>
          <span class="title ml-3 mb-1 text-xl">{{ item.title }}</span>
        </div>
        <span class="count">{{ item.count }}</span>
      </div>
    </template>

    <div class="addBtn flex items-center text-sky-500 p-3">
      <el-icon><Plus /></el-icon>
      <span class="text-xl ml-4">新增</span>
    </div>
  </div>
</template>

<style scoped>
.list {
  border-bottom: 1px solid white;
}
.list:hover {
  @apply bg-white rounded text-orange-400;
  cursor: pointer;
}

.active {
  @apply bg-white rounded text-orange-400;
}

.addBtn {
  border-bottom: 1px solid white;
}
.addBtn:hover {
  @apply bg-white rounded;
  cursor: pointer;
}
</style>

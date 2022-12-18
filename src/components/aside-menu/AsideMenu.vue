<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import useTitleStore from "@/store/index"

const titleStore = useTitleStore()
const { titleList } = titleStore;
const titleData = reactive(titleList);

// 点击title
// const isActive = ref(false);
const currentItem = ref(0);
const router = useRouter();
function handleTitleClick(index) {
  currentItem.value = index;
  router.push(`/home/pageContent${index + 1}`);
}

// 新增click
function handleCreateClick() {
  console.log("createClick");
  titleList.push({
    title: "新增测试",
    count: 0,
    locked: false,
  });
}
</script>

<template>
  <div class="aside-menu">
    <template v-for="(item, index) in titleData" :key="item.title">
      <div
        class="list flex items-center justify-between p-3"
        :class="{ active: currentItem === index }"
        @click="handleTitleClick(index)"
      >
        <div class="flex items-center">
          <span class="mt-1">
            <el-icon size="15">
              <component :is="item.locked ? 'Lock' : 'More'">
                <!-- <Lock /> -->
              </component>
            </el-icon>
          </span>
          <span class="title ml-3 mb-1 text-xl">{{ item.title }}</span>
        </div>
        <span class="count">{{ item.count }}</span>
      </div>
    </template>

    <div
      class="addBtn flex items-center text-sky-500 p-3"
      @click="handleCreateClick"
    >
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

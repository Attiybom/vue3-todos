import { defineStore } from "pinia"

const useTitleStore = defineStore('title', {
  state: () => ({
    titleList: [
      //模拟数据
      { title: "星期一", count: 1, locked: false },
      { title: "星期二", count: 2, locked: false },
      {
        title: "星期三",
        count: 3,
        locked: true,
      },
    ]
  }),
})

export default useTitleStore

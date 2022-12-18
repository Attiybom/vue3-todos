import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home/pageContent1",
    },
    {
      path: "/home",
      component: () => import("../views/Layout.vue"),
      children: [
        {
          path: "pageContent1",
          component: () =>
            import("../components/page-content/PageContent1.vue"),
        },
        {
          path: "pageContent2",
          component: () =>
            import("../components/page-content/PageContent2.vue"),
        },
        {
          path: "pageContent3",
          component: () =>
            import("../components/page-content/PageContent3.vue"),
        },
      ],
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "default",
    component: () => import("@/layouts/default.vue"),
    children: [
      // home page
      {
        path: "/",
        name: "home",
        component: () => import("@/views/Clients/clients.vue"),
      },

      // all clients page
      {
        path: "/clients",
        name: "clients",
        component: () => import("@/views/Clients/clients.vue"),
      },

      // add client page
      {
        path: "/add_clients",
        name: "add_clients",
        component: () => import("@/views/Clients/Components/Create.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Generation from "../views/Generation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/generation/:id",
    name: "Generation",
    component: Generation,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

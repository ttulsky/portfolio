import { createRouter, createWebHistory } from "vue-router";

import About from "../views/About/index.vue";
import Contact from "../views/Contact/index.vue";
import Projects from "../views/Projects/index.vue";
import Home from "../views/Home/index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // This will assign the routes array to the router
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;

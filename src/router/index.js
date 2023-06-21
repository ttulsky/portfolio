import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Projects from "../views/Projects.vue";

const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/Projects",
    name: "projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

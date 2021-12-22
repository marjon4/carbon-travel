import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
//import Form from "../views/Form";
import Result from "../views/Result";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/result",
    name: "Result",
    component: Result,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

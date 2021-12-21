import { createRouter, createWebHistory } from "vue-router";
import Form from "../views/Form";
import Result from "../views/Result";

const routes = [
  {
    path: "/form",
    name: "Form",
    component: Form
  },
  {
    path: "/result",
    name: "Result",
    component: Result
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
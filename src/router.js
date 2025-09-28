import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";

const routes = [{ path: "/", component: LandingPage }];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

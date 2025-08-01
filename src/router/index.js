import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TestView from '../views/TestView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'Test',
    component: TestView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

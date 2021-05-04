import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Kursus1 from '../views/Kursus1.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/kursus1',
    name: 'Kursus1',
    component: Kursus1,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

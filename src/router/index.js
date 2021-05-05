import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Kursus1 from '../views/Kursus1.vue';
import Kursus2 from '../views/Kursus2.vue';

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
  {
    path: '/kursus2',
    name: 'Kursus2',
    component: Kursus2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

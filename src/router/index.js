import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Kursus1 from '../views/Kursus1.vue';
import Kursus2 from '../views/Kursus2.vue';
import Kursus3 from '../views/Kursus3.vue';
import Kursus4 from '../views/Kursus4.vue';
import Kursus5 from '../views/Kursus5.vue';
import Kursus6 from '../views/Kursus6.vue';
import Kursus7 from '../views/Kursus7.vue';
import Kursus8 from '../views/Kursus8.vue';
import Kursus9 from '../views/Kursus9.vue';
import Kursus10 from '../views/Kursus10.vue';
import Kursus11 from '../views/Kursus11.vue';
import Kursus12 from '../views/Kursus12.vue';
import Kursus13 from '../views/Kursus13.vue';
import Kursus14 from '../views/Kursus14.vue';
import NotFound from '../views/NotFound.vue';

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
  {
    path: '/kursus3',
    name: 'Kursus3',
    component: Kursus3,
  },
  {
    path: '/kursus4',
    name: 'Kursus4',
    component: Kursus4,
  },
  {
    path: '/kursus5',
    name: 'Kursus5',
    component: Kursus5,
  },
  {
    path: '/kursus6',
    name: 'Kursus6',
    component: Kursus6,
  },
  {
    path: '/kursus7',
    name: 'Kursus7',
    component: Kursus7,
  },
  {
    path: '/kursus8',
    name: 'Kursus8',
    component: Kursus8,
  },
  {
    path: '/kursus9',
    name: 'Kursus9',
    component: Kursus9,
  },
  {
    path: '/kursus10',
    name: 'Kursus10',
    component: Kursus10,
  },
  {
    path: '/kursus11',
    name: 'Kursus11',
    component: Kursus11,
  },
  {
    path: '/kursus12',
    name: 'Kursus12',
    component: Kursus12,
  },
  {
    path: '/kursus13',
    name: 'Kursus13',
    component: Kursus13,
  },
  {
    path: '/kursus14',
    name: 'Kursus14',
    component: Kursus14,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// OK I have absolutely NO idea why this work ONLY when
// calling typesetPromise and then typeset() AGAIN
// TODO future me: please find a fix for this
router.afterEach(() => {
  window.MathJax.typesetPromise()
    .then(() => window.MathJax.typeset());
});

export default router;

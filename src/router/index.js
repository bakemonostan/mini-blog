import Home from '@/views/Home.vue';
import Practice from '@/views/Practice';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/practice',
    name: 'practice',
    component: Practice,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


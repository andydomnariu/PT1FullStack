import { createRouter, createWebHistory } from 'vue-router';
import WeatherDisplay from '../views/WeatherDisplay.vue';
import UserLogin from '../components/UserLogin.vue';

const isAuthenticated = () => localStorage.getItem('authenticated') === 'true';

const routes = [
  {
    path: '/',
    redirect: () => {
      return isAuthenticated() ? '/weather-display' : '/login';
    }
  },
  {
    path: '/login',
    component: UserLogin
  },
  {
    path: '/weather-display',
    component: WeatherDisplay,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

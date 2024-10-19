import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ConversationIndexPage from '../components/ConversationIndexPage.vue'; 
import store from '../store'; 

const routes = [
  { path: '/', component: HomePage },
  { 
    path: '/conversations', 
    component: ConversationIndexPage,
    beforeEnter: (to, from, next) => {
      const user = store.getters.user; 
      if (user) {
        next(); 
      } else {
        next({ path: '/' });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

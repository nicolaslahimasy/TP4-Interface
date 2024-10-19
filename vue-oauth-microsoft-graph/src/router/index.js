import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ConversationIndexPage from '../components/ConversationIndexPage.vue'; 
import store from '../store'; 
import ConversationShowPage from '@/components/ConversationShowPage.vue';

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
    {
      path: '/conversations/:id', // Define the route with a parameter
      component: ConversationShowPage, // Use the new component
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;
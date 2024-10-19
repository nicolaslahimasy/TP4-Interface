import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ConversationIndexPage from '../components/ConversationIndexPage.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/conversations',
    name: 'Conversations',
    component: ConversationIndexPage, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

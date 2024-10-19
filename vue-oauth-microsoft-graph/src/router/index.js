import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import ConversationIndexPage from '../components/ConversationIndexPage.vue'; // Make sure this path is correct

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/conversations',
    name: 'Conversations',
    component: ConversationIndexPage, // This should point to your ConversationIndexPage component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

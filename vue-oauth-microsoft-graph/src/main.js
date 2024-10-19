import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Ensure this path points to your store
import router from './router'; // Import the router

// Create the Vue app and use the store
const app = createApp(App);

// Register the Vuex store
app.use(store);
app.use(router); // Use the router

// Mount the app
app.mount('#app');

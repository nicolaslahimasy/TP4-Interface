import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Ensure this path points to your store

// Create the Vue app and use the store
const app = createApp(App);

// Register the Vuex store
app.use(store);

// Mount the app
app.mount('#app');

<template>
  <div>
    <!-- Header -->
    <nav class="navbar">
      <ul class="navbar-left">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li v-if="isAuthenticated">
          <router-link to="/conversations">Conversations</router-link>
        </li>
      </ul>
      <ul class="navbar-right">
        <li v-if="!isAuthenticated">
          <SignInButton @update-user="updateUser" />
        </li>
        <li v-else>
          <span>Welcome, {{ user.email }}</span>
        </li>
      </ul>
    </nav>

    <main class="main-content">
      <slot></slot> <!-- This will display the routed content -->
    </main>

    <!-- Footer -->
    <div class="footer-content">
      <p class="footer-text">
        This work is protected by international laws | C 2021 | thomas-veillard.fr
      </p>
    </div>
  </div>
</template>

<script>
import SignInButton from './SignInButton.vue'; 

export default {
  components: {
    SignInButton,
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.user !== null;
    },
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    updateUser(user) {
      this.$store.commit('setUser', user); // Use Vuex mutation to set the user
    }
  },
};
</script>

<style scoped>
.navbar {
  background-color: #42b983;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.navbar-left {
  justify-content: flex-start;
}

.navbar-right {
  justify-content: flex-end;
  color: white;
}

li {
  display: inline;
}

a {
  color: white;
  text-decoration: none;
  padding: 10px 25px;
  font-size: 18px;
}

a:hover {
  background-color: #2c8a65;
  border-radius: 5px;
}

.main-content {
  padding: 20px;
  min-height: calc(100vh - 150px);
}

.footer-content {
  padding: 10px;
  color: azure;
  background-color: black;
}

.footer-text {
  display: grid;
  justify-items: center;
}
</style>

<template>
  <div>
    <!-- Header -->
    <nav class="navbar">
      <ul class="navbar-left">
        <li>
          <a href="#" @click.prevent="goHome">Home</a>
        </li>
      </ul>
      <ul class="navbar-right">
        <li v-if="!user">
          <SignInButton @update-user="updateUser" />
        </li>
        <li v-else>
          <span>Welcome, {{ user.email }}</span>
        </li>
      </ul>
    </nav>

    <main class="main-content">
      <!-- Pass user as a prop to HomePage -->
      <HomePage :user="user" />
    </main>

    <!-- Footer -->
    <div class="footer-content">
      <p class="footer-text">
        This work is protected by international laws | C 2021 |
        thomas-veillard.fr
      </p>
    </div>
  </div>
</template>

<script>
import SignInButton from './SignInButton.vue'; // Import SignInButton
import HomePage from './HomePage.vue'; // Import HomePage

export default {
  components: {
    SignInButton,
    HomePage, // Register HomePage
  },
  data() {
    return {
      user: null, // Store the user state here
    };
  },
  methods: {
    goHome() {
      console.log("Going home...");
    },
    updateUser(user) {
      this.user = user;
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
  color:white
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

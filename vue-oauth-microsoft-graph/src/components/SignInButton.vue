<template>
  <button v-if="!isLoggedIn" @click="signIn" :disabled="isLoading">
    <span v-if="isLoading">Connecting...</span>
    <span v-else>Sign In</span>
  </button>
</template>

<script>
import { signInAndGetUser } from '../lib/microsoftGraph.js';
import { mapMutations } from 'vuex';

export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.user !== null; // Check if user is logged in
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapMutations(['setUser']),
    async signIn() {
      this.isLoading = true;
      try {
        const user = await signInAndGetUser();
        console.log("User logged in:", user);
        this.setUser(user);
      } catch (error) {
        console.error("Login error:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>



  <style scoped>
  button {
    background-color: #fff;
    color: #42b983;
    border: 2px solid #42b983;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
  
  button:hover:not(:disabled) {
    background-color: #42b983;
    color: white;
  }
  
  div {
    font-size: 16px;
    color: #42b983;
    margin-top: 10px;
  }
  </style>
  
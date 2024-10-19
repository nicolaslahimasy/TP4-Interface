<template>
    <div>
      <button v-if="!user" @click="signIn" :disabled="isLoading">
        <span v-if="isLoading">Connecting...</span>
        <span v-else>Sign In</span>
      </button>
      <div v-else>
        Logged in as: {{ user.email }}
      </div>
    </div>
  </template>
  
  <script>
  import { signInAndGetUser, getActiveAccount } from '../lib/microsoftGraph.js';
  
  export default {
    props: {
      user: Object, 
    },
    data() {
      return {
        isLoading: false,
      };
    },
    methods: {
      async signIn() {
        this.isLoading = true;
        try {
          const user = await signInAndGetUser();
          this.$emit('update-user', user); 
          console.log('User logged in:', user);
        } catch (error) {
          console.error('Login error:', error);
        } finally {
          this.isLoading = false;
        }
      },
    },
    async mounted() {
      const user = await getActiveAccount();
      if (user) {
        this.$emit('update-user', user); 
      }
    }
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
  
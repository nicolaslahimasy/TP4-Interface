<template>
    <div classname="conversations-content">
      <h1>Conversations</h1>
      <ul>
        <li>
          <BaseButton @click="goToConversation(1)">Conversation 1</BaseButton>
        </li>
        <li>
          <BaseButton @click="goToConversation(2)">Conversation 2</BaseButton>
        </li>
        <!-- Add more buttons as needed -->
      </ul>
    </div>
  </template>
  
  <script>
  import BaseButton from './BaseButton.vue'; // Import the BaseButton component
  
  export default {
    components: {
      BaseButton,
    },
    methods: {
      goToConversation(id) {
        this.$router.push({ path: `/conversations/${id}` }); // Navigate to the conversation page
      },
    },
  };
  </script>
  
  <style scoped>
  ul{
    display: flex;
    gap : 15px;
    list-style:none;
  }
  </style>
  
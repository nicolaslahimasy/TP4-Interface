<template>
    <div>
      <h1>Conversation ID: {{ conversationId }}</h1>
      <p>This is the content for conversation ID {{ conversationId }}</p>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      conversationId() {
    
        return this.$route.params.id;
      },
    },
  };
  </script>
  

  
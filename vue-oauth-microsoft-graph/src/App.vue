<template>
  
  <BaseLayout >
  <HomePage />
  </BaseLayout>
</template>

<script>
import HomePage from './components/HomePage.vue'
import BaseLayout from './components/BaseLayout.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    BaseLayout,
  }
}
</script>
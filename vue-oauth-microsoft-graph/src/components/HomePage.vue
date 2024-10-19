<template>
  <div class="homepage-content">
    <h1>Here comes the content of HomePage.</h1>
    

    <div v-if="user">
      <p>Signed in as {{ user.email }}</p>
    </div>
    

    <BaseButton color="primary" :isDisabled="false">
      BaseButton
    </BaseButton>

    <BaseButton color="warn" :isDisabled="true">
      BaseButton disabled
    </BaseButton>

    <BaseButton color="warn" :isDisabled="false">
      BaseButton with color props
    </BaseButton>

    <BaseButton color="danger" :isDisabled="false">
      BaseButton with color props
    </BaseButton>

    <AsyncButton color="primary" @click="handleAsyncButtonClick">
      Disabled and animated for 2 seconds if clicked
    </AsyncButton>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'; 
import BaseButton from './BaseButton.vue';
import AsyncButton from './AsyncBaseButton.vue';

export default {
  components: {
    BaseButton,
    AsyncButton,
  },
  computed: {
    ...mapGetters(['user']), 
  },
  methods: {
    handleAsyncButtonClick() {
      console.log('AsyncButton clicked!');
    },
  },
};
</script>

<style scoped>
.homepage-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}
</style>

<template>
  <BaseButton
    :disabled="isPending"
    :style="buttonStyles"
    :color="color"
    @click.stop.prevent="handleClick"
  >
    <example-icon
      v-if="isPending"
      pulse
    />
    <slot />
  </BaseButton>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'AsyncButton',
  components: {
    BaseButton,
  },
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: 'primary',
    }
  },  

  data() {
    return {
      isPending: false,
      numberOfClicks: 0
    }
  }, 

  computed: {
    buttonStyles() {
      return {
        cursor: this.isPending ? 'not-allowed' : 'pointer',  
      };
    }
  },

  methods: {
    async handleClick() {
      const originalOnClick = /** @type {() => Promise<void>} */ (this.$attrs.click || (() => Promise.resolve()));
      this.isPending = true;

      this.numberOfClicks += 1;


      const disableTime = 2000 + this.numberOfClicks * 1000; 
      console.log('Disable time:', disableTime);

      originalOnClick()
        .finally(() => {
          setTimeout(() => {
            this.isPending = false;
          }, disableTime); 
        });

      this.$emit('click');
    }
  }
};  
</script>

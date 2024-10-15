<template>
  <button
    class="base-btn"
    :style="buttonStyles"
    :disabled="isDisabled"
  >
    <slot /> 
  </button>
</template>

<script>
const colorPalette = {
  primary: { bg: '#42b983', hoverBg: '#4cce93', focusBorder: '#47b696' },
  warn: { bg: '#ff5722', hoverBg: '#ff7043', focusBorder: '#ff8a65' },
  danger: { bg: '#e53935', hoverBg: '#ef5350', focusBorder: '#e57373' },
};

export default {
  props: {
    color: {
      type: String,
      default: 'primary',
      validator(value) {
        return ['primary', 'warn', 'danger'].includes(value);
      },
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonStyles() {
      const palette = colorPalette[this.color] || colorPalette.primary;
      return {
        backgroundColor: this.isDisabled ? '#cccccc' : palette.bg,
        cursor: this.isDisabled ? 'not-allowed' : 'pointer',
        opacity: this.isDisabled ? 0.6 : 1,
      };
    },
  },
};
</script>

<style scoped>
.base-btn {
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  width: 150px;
  transition: all 0.2s ease-in-out;
}

.base-btn:hover {
  transform: scale(1.1);
  transition: all 0.1s ease-in-out;
}

.base-btn:focus {
  outline: none;
  color: black;
}
</style>

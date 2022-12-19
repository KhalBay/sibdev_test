<template>
  <button :class="{'w-100': props.autoWidth, 'tonal': props.tonal}" type="submit" @click.prevent :disabled="props.disabled">
    <slot/>
  </button>
</template>

<script setup>
import {defineProps} from "vue";

const props = defineProps({
  autoWidth: Boolean,
  tonal: Boolean,
  disabled: Boolean,
})
</script>

<style scoped>
button {
  display: block;
  box-sizing: border-box;
  width: 136px;
  height: auto;
  padding: 13px 20px;
  background: var(--color-blue);
  border-radius: 5px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
  border: 1px solid var(--color-blue);
  margin: 0 auto;
  cursor: pointer;
  outline: none;
}

button.tonal {
  color: var(--color-blue);
  background: white;
}

button.w-100 {
  width: 100%;
}

button:hover, button:focus-visible {
  opacity: .7;
}

button:disabled {
  background: #FF0000;
  border: 1px solid #FF0000;
  opacity: .4;
}
</style>
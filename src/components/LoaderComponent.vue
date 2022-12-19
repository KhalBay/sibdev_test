<template>
  <div :class="{'loader': props.active, 'w-100': true}">
    <slot/>
  </div>
</template>

<script setup>

const props = defineProps({
  active: Boolean,
})
</script>

<style>
body:has(.loader)::after {
  z-index: 4;
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #75C7FF;
  opacity: .4;
}

body:has(.loader)::before {
  z-index: 5;
  content: '';
  position: absolute;
  top: 50%;
  left: 49%;
  height: 50px;
  width: 50px;
  border-left: 3px solid var(--color-blue);
  border-bottom: 3px solid var(--color-blue);
  border-right: 3px solid var(--color-blue);
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: loader 1s linear infinite;
}

@keyframes loader {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>

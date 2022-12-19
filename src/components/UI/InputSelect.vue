<template>
  <div class="select-wrap">
    <label v-if="props.label">{{ props.label }}</label>
    <select :value="modelValue" :class="`mb-${props.mb}`" @change="updateInput">
      <slot/>
    </select>
  </div>
</template>

<script setup>
import {defineEmits, defineProps} from "vue";

const props = defineProps({
  label: String,
  mb: String,
  modelValue: String
});

const emits = defineEmits(['update:modelValue'])

const updateInput = (event) => {
  emits('update:modelValue', event.target.value)
}
</script>

<style scoped>
label {
  font-size: 16px;
  line-height: 22px;
  color: rgba(23, 23, 25, 0.3);
}

select {
  width: 100%;
  height: auto;
  padding: 12px 15px;
  border: 1px solid rgba(23, 23, 25, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
  background: white;
  font-size: 20px;
  line-height: 24px;
  color: #272727;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

select:focus-visible {
  outline: none;
  border: 1px solid #1390E5;
  background: rgba(197, 228, 249, 0.3);
}

.select-wrap {
  position: relative;
}

.select-wrap::before {
  z-index: 2;
  content: '';
  background: url(/src/assets/img/select-arrow.svg) no-repeat center;
  position: absolute;
  top: 48px;
  right: 15px;
  width: 10px;
  height: 5px;
}
</style>
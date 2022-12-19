<template>
  <label v-if="props.label">{{ label }}</label>
  <div class="input-wrap" :class="`mb-${props.mb}`">
    <input class="input-range"
           :value="modelValue"
           type="range"
           name="maxResults"
           :min="props.min"
           :max="props.max"
           :step="props.step"
           @change="updateInput"
    >
    <slot/>
  </div>
</template>

<script setup>
import {defineEmits, defineProps} from "vue";

const props = defineProps({
  label: String,
  mb: String,
  min: Number,
  max: Number,
  modelValue: Number,
  step: Number,
  disabled: Boolean,
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

.input-wrap {
  display: flex;
  gap: 20px;
}

.input-range {
  width: 310px;
  height: auto;
  padding: 15px;
  border-radius: 3px;
  flex-shrink: 0;
}
</style>
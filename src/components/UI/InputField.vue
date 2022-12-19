<template>
  <label v-if="props.label" :class="{'required': props.required}">{{ props.label }}</label>
  <div :class="{'textCenter': props.textCenter}">
    <input :value="modelValue" :type="props.type" :class="`mb-${props.mb}`" @input="updateInput" :disabled="props.disabled" :placeholder="props.placeholder"/>
    <div :class="{'btn-in-input': true, hide: props.eye}" v-if="props.label === 'Пароль'" @click="showPass"></div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

const props = defineProps({
  label: String,
  type: String,
  eye: Boolean,
  mb: String,
  modelValue: String,
  disabled: Boolean,
  placeholder: String,
  required: Boolean,
  textCenter: Boolean,
});

const emits = defineEmits(['update:modelValue', 'showPass'])

const updateInput = (event) => {
  emits('update:modelValue', event.target.value)
}

const showPass = () => {
  emits('showPass')
}
</script>

<style scoped>
label {
  font-size: 16px;
  line-height: 22px;
  color: rgba(23, 23, 25, 0.3);
}

label.required {
  padding: 0 0 0 12px;
  position: relative;
}

label.required::before {
  content: '*';
  position: absolute;
  top: 0;
  left: 0;
  font-size: 18px;
  color: #FF0000;
}

div {
  position: relative;
}

.textCenter input {
  text-align: center;
}

input {
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
}

input:focus-visible {
  outline: none;
  border: 1px solid #1390E5;
  background: rgba(197, 228, 249, 0.3);
}

input:disabled {
  background: #FAFAFA;
}

.btn-in-input {
  width: 24px;
  height: 24px;
  position: absolute;
  cursor: pointer;
  top: 12px;
  right: 15px;
  background: url("@/assets/img/eye.svg");
  filter: grayscale(1);
  opacity: 0.5;
}

.btn-in-input.hide {
  background: url("@/assets/img/eye-off.svg");
}

input:focus-visible + .btn-in-input {
  filter: grayscale(0);
  opacity: 1;
}
</style>
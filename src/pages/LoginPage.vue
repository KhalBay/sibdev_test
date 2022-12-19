<template>
  <section class="login">
    <img src="@/assets/img/logo.svg" alt="Логотип" class="login__logo">
    <h3 class="login__title">Вход</h3>
    <form class="login__form">
      <InputField v-model="form.login" label="Логин" type="text" mb="1"/>
      <InputField
          v-if="hidePassword"
          v-model="form.password"
          label="Пароль"
          type="password"
          mb="2"
          :eye="hidePassword"
          @showPass="changeView"
      />
      <InputField
          v-else
          v-model="form.password"
          label="Пароль"
          type="text"
          mb="2"
          :eye="hidePassword"
          @showPass="changeView"
      />
      <InputButton @click="authStore.login(form)">Войти</InputButton>
    </form>
  </section>
</template>

<script setup>
import InputField from "@/components/UI/InputField.vue";
import InputButton from "@/components/UI/InputButton.vue";
import {useAuthStore} from "@/store/auth";
import {onMounted, reactive, ref} from "vue";

const authStore = useAuthStore()

const hidePassword = ref(true)
const changeView = () => {
  hidePassword.value = !hidePassword.value
}

const form = reactive({
  login: '',
  password: '',
})

onMounted(authStore.checkAuth)
</script>

<style scoped>
.login {
  width: 520px;
  height: 510px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid rgba(39, 39, 39, 0.1);
  border-radius: 10px;
  padding: 40px 88px 60px;
  justify-content: space-between;
  align-items: center;
}

.login__logo {
  width: 88px;
  height: 88px;
  object-fit: contain;
}

.login__title {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #000000
}
</style>
<template>
  <header>
    <div class="b-cont">
      <img src="@/assets/img/logo.svg" class="logo">
      <nav>
          <RouterLink :to="{name: 'search'}" class="nav-link" active-class="nav-link__active">Поиск</RouterLink>
          <RouterLink :to="{name: 'favorite'}" v-if="authStore.user.querys.length" class="nav-link" active-class="nav-link__active">Избранное</RouterLink>
      </nav>
      <button @click="authStore.logout()">Выйти</button>
    </div>
  </header>
</template>

<script setup>
import {useAuthStore} from "@/store/auth";

const authStore = useAuthStore()
</script>

<style scoped>
  header {
    position: absolute;
    top: 0;
    z-index: 2;
    background: #FFFFFF;
    width: 100%;
    height: auto;
    padding: 16px 0;
  }

  header .b-cont {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header .logo {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }

  header nav {
    display: flex;
    gap: 40px;
    flex: 1;
    margin: 0 55px;
  }

  header .nav-link {
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: rgba(39, 39, 39, 0.3);
    position: relative;
  }

  header .nav-link__active {
    color: var(--color-blue);
  }

  header .nav-link__active::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--color-blue);
    top: 53px;
  }

  header button {
    border: none;
    background: none;
    outline: none;
    font-size: 18px;
    line-height: 28px;
    color: var(--color-blue);
    cursor: pointer;
  }
</style>
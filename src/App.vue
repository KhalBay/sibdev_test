<template>
  <HeaderComponent v-if="authStore.isAuth"/>

  <main>
    <RouterView/>
  </main>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue"
import {useAuthStore} from "@/store/auth";

const  authStore = useAuthStore()

</script>


<style scoped>


@media (min-width: 1024px) {

}
</style>

<template>
  <LoaderComponent :active="searchStore.loading">
    <div v-if="searchStore.searchQuery" class="layout-top">
      <h1>Поиск видео</h1>
      <SearchInput :search-value="searchStore.searchQuery" btnFavorite/>
      <div class="wrapper">
        <h3 class="total-info">
          Видео по запросу <p>«{{searchStore.searchQuery}}»</p><span>{{searchStore.result.pageInfo?.totalResults}}</span>
        </h3>
        <div class="display-view">
          <div :class="{'display-view__item': true, 'active': isList}" @click="isList = !isList">
            <img src="@/assets/img/ico-list.svg">
          </div>
          <div :class="{'display-view__item': true, 'active': !isList}" @click="isList = !isList">
            <img src="@/assets/img/ico-card.svg">
          </div>
        </div>
      </div>

      <VideoList :isList="isList"/>
    </div>
    <div v-else>
      <h1>Поиск видео</h1>
      <SearchInput/>
    </div>
  </LoaderComponent>

  <ModalWindow>
    <FormModal :isEdit="false"/>
  </ModalWindow>
</template>

<script setup>
import SearchInput from "@/components/SearchInput.vue";
import LoaderComponent from "@/components/LoaderComponent.vue";
import VideoList from "@/components/VideoList.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import FormModal from "@/components/FormModal.vue";
import {onMounted, ref} from "vue";
import {useAuthStore} from "@/store/auth";
import {useSearchStore} from "@/store/search";

const isList = ref(false)
const authStore = useAuthStore()
const searchStore = useSearchStore()

onMounted(authStore.checkAuth)
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 36px;
  line-height: 52px;
  margin: 0 0 40px 0;
}

.layout-top {
  padding: 40px 0 0 0;
}

.layout-top h1 {
  text-align: left;
  margin: 0 0 12px 0;
}

.layout-top .wrapper {
  display: flex;
  justify-content: space-between;
  margin: 40px 0 20px 0;
}

.layout-top .total-info {
  font-size: 16px;
  line-height: 24px;
  color: #272727;
}

.layout-top .total-info p {
  display: inline;
  font-weight: 600;
  margin: 0 15px 0 0;
}

.layout-top .total-info span {
  font-size: 16px;
  line-height: 24px;
  color: rgba(23, 23, 25, 0.3);
}

.layout-top .display-view {
  display: flex;
  gap: 15px;
}

.layout-top .display-view__item {
  cursor: pointer;
  opacity: .5;
}

.layout-top .display-view__item.active {
  opacity: 1;
}
</style>
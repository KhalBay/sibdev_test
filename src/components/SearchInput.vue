<template>
  <div :class="{'search-input': true, 'w-100': props.searchValue}">
    <input v-model="search" type="text" placeholder="Что хотите посмотреть?">
    <InputButton @click="searchStore.searchFetch(search)">Найти</InputButton>
    <div v-if="props.btnFavorite" class="heart" @click="dataStore.callModal()">
      <div v-if="dataStore.isSaved" class="saved">
        Поиск сохранён в разделе «Избранное»
        <router-link to="/favorite" class="link" @click.stop>Перейти в избранное</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import InputButton from "@/components/UI/InputButton.vue";
import {ref, defineProps, onMounted} from "vue";
import {useSearchStore} from "@/store/search";
import {useDataStore} from "@/store/data";

const searchStore = useSearchStore()
const dataStore = useDataStore()

const props = defineProps({
  searchValue: String,
  btnFavorite: Boolean,
})

const search = ref('')


onMounted(() => {
  if (props.searchValue) {
    search.value = props.searchValue
  }
})
</script>

<style scoped>
.search-input {
  display: flex;
  width: 686px;
  height: 52px;
  margin: 0 auto;
  position: relative;
}
.search-input.w-100 {
  width: 100%;
}

.search-input input {
  flex: 1;
  border: 1px solid rgba(23, 23, 25, 0.2);
  border-right: none;
  border-radius: 10px 0 0 10px;
  background: #FFFFFF;
  padding: 14px 15px;
  outline: none;
  font-size: 20px;
  line-height: 24px;
  color: #272727;
}

.search-input input::placeholder {
  font-size: 20px;
  line-height: 24px;
  color: #272727;
  opacity: 0.3;
}

.search-input input:focus-visible {
  border: 1px solid var(--color-blue);
  background: rgba(197, 228, 249, 0.3);
}

.search-input button {
  border-radius: 0 10px 10px 0;
}

.heart {
  position: absolute;
  top: 14px;
  right: 151px;
  width: 24px;
  height: 24px;
  background: url("@/assets/img/heart.svg") no-repeat center;
  cursor: pointer;
}

.heart .saved {
  position: absolute;
  width: 220px;
  height: 117px;
  top: 37px;
  left: -114px;
  background: white;
  z-index: 3;
  cursor: pointer;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  padding: 15px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(39, 39, 39, 0.5);
}

.heart .saved .link {
  margin: 15px 0 0 0;
  color: var(--color-blue);
  text-decoration: none;
  display: block;
}
</style>
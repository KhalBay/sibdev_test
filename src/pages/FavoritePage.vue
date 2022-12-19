<template>
  <div class="layout-top w-100">
    <h2>Избранное</h2>
    <div class="query-wrap">
      <div class="query-item" v-for="query in authStore.user.querys" :key="query.id" @click="startQuery(query)">
        {{query.title}}
        <div class="button-block">
          <button class="btn-change" @click.stop="changeQuery(query)">
            Изменить
          </button>
          <button class="btn-del" @click.stop="deleteQuery(query)">
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>

  <ModalWindow>
    <FormModal :isEdit="true" :query="query"/>
  </ModalWindow>
</template>

<script setup>
import router from "@/router";
import ModalWindow from "@/components/ModalWindow.vue";
import FormModal from "@/components/FormModal.vue";
import {onMounted, ref} from "vue";
import {useAuthStore} from "@/store/auth";
import {useSearchStore} from "@/store/search";
import {useDataStore} from "@/store/data";

const authStore = useAuthStore()
const searchStore = useSearchStore()
const dataStore = useDataStore()

const query = ref({})

const startQuery = (params) => {
  searchStore.formSearchVideo.maxResults = params.maxResults
  if (params.order.length !== 0) {
    searchStore.formSearchVideo.order = params.order
  }
  searchStore.searchFetch(params.q)
  router.push({name: 'search'})
  searchStore.formSearchVideo.maxResults = 12
  searchStore.formSearchVideo.order = 'relevance'
}

const changeQuery = (params) => {
  query.value = params
  dataStore.callModal()
}

const deleteQuery = (query) => {
  authStore.user.querys = authStore.user.querys.filter(el => el.id !== query.id)
  searchStore.saveQuery()
}

onMounted(() => {
  authStore.checkAuth()
  dataStore.isSaved = false
})
</script>

<style scoped>
.layout-top {
  padding: 40px 0 0 0;
}

.layout-top h2 {
  font-size: 28px;
  line-height: 40px;
  color: #000000;
  margin: 0 0 40px 0;
  text-align: left;
}

.query-wrap {
  background: white;
  border-radius: 10px;
}

.query-item {
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  border-bottom: 1px solid #F1F1F1;
  cursor: pointer;
  box-sizing: border-box;
}

.query-item:hover {
  background-color: #d8d8d8;
  border-bottom: 1px solid white;
}

.query-item:first-child {
  border-radius: 10px 10px 0 0;
}

.query-item:last-child {
  border-radius: 0 0 10px 10px;
  border-bottom: none;
}

.button-block {
  opacity: 0;
  pointer-events: none;
}

.query-item:hover .button-block {
  display: flex;
  gap: 30px;
  opacity: 1;
  pointer-events: auto;
}

.btn-change, .btn-del {
  font-size: 14px;
  line-height: 20px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  z-index: 3;
}

.btn-change {
  color: var(--color-blue);
}

.btn-del {
  color: #FF0000;
}
</style>
<template>
  <form class="modal-form">
    <h3>{{ props.isEdit ? 'Изменить запрос' : 'Сохранить запрос' }}</h3>

    <InputField v-model="form.q" label="Запрос" :disabled="!props.isEdit" :placeholder="searchStore.searchQuery" mb="1"/>

    <InputField v-model="form.title" label="Название" placeholder="Укажите название" mb="1" required @update:modelValue="validateTitle"/>

    <InputSelect v-model="form.order" label="Сортировать по" mb="1">
      <option value="date">Дате</option>
      <option value="rating">Рейтингу</option>
      <option value="relevance">Релевантности</option>
      <option value="title">Названию</option>
      <option value="viewCount">Количеству просмотров</option>
    </InputSelect>

    <InputRange label="Максимальное количество" min="1" max="50" step="1" v-model="form.maxResults" mb="1">
      <InputField v-model="form.maxResults" text-center @update:modelValue="validateMaxResults"/>
    </InputRange>

    <div class="button-block">
      <InputButton tonal auto-width @click="dataStore.callModal()">Не сохранять</InputButton>
      <InputButton auto-width @click="saveQuery" :disabled="invalid">{{ props.isEdit ? 'Изменить' : 'Сохранить' }}</InputButton>
    </div>

  </form>
</template>

<script setup>
import InputField from "@/components/UI/InputField.vue";
import InputButton from "@/components/UI/InputButton.vue";
import InputSelect from "@/components/UI/InputSelect.vue";
import InputRange from "@/components/UI/InputRange.vue";
import {defineProps, onMounted, ref, watch} from "vue";
import {useDataStore} from "@/store/data";
import {useSearchStore} from "@/store/search";
import {useAuthStore} from "@/store/auth";

const props = defineProps({
  isEdit: Boolean,
  query: Object,
})

const authStore = useAuthStore()
const dataStore = useDataStore()
const searchStore = useSearchStore()
const invalid = ref(true)

const form = ref({
  id: '',
  q: searchStore.searchQuery,
  title: '',
  order: '',
  maxResults: 12,
})

const validateMaxResults = () => {
  return form.value.maxResults < 51 ? invalid.value = false : invalid.value = true
}

const validateTitle = () => {
  return form.value.title.length > 1 ? invalid.value = false : invalid.value = true
}

const saveQuery = () => {
  if (props.isEdit) {
    authStore.user.querys.forEach(el => {
      if (el.id === props.query.id) {
        el.maxResults = form.value.maxResults
        el.order = form.value.order
        el.title = form.value.title
        el.q = form.value.q
      }
    })
    searchStore.saveQuery()
  } else {
    form.value.id = Date.now()
    searchStore.saveQuery(form.value)
    dataStore.isSaved = true
  }
  dataStore.callModal()

  form.value.title = ''
  form.value.order = ''
  form.value.maxResults = 12
}

watch(() => searchStore.searchQuery, () => {
  form.value.q = searchStore.searchQuery
})

watch(() => props.query, () => {
    form.value.q = props.query.q
    form.value.title = props.query.title
    form.value.order = props.query.order
    form.value.maxResults = props.query.maxResults
})

onMounted(() => {
  props.isEdit ? invalid.value = false : invalid.value = true
})
</script>

<style>
.modal-form {
  display: flex;
  flex-direction: column;
}

.modal-form h3 {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #000000;
  margin: 0 0 36px 0;
}

.modal-form label {
  color: #272727;
}

.modal-form  .button-block {
  display: flex;
  gap: 10px;
}
</style>
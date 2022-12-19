<template>
  <div :class="{'card-wrap': true, 'list': props.isList}">
    <VideoItem v-for="card in searchStore.result.items" :key="card.id.videoId" :info="card" :isList="props.isList"/>
  </div>
</template>

<script setup>
import VideoItem from "@/components/VideoItem.vue";
import {defineProps} from "vue";
import {useSearchStore} from "@/store/search";

const props = defineProps({
  isList: Boolean,
})
const searchStore = useSearchStore();
</script>

<style scoped>
.card-wrap {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0 0 50px 0;
  justify-content: space-between;
}
.card-wrap.list {
  flex-direction: column;
}
</style>
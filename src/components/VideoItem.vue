<template>
  <a :href='`https://www.youtube.com/embed/${props.info.id.videoId}`' target="_blank" :class="{'card': true, 'list': props.isList}">
    <img :src="props.info.snippet.thumbnails.medium.url">
    <div class="card-text">
      <div class="card-text__title">{{ props.info.snippet.title }}</div>
      <div class="card-text__desc">{{ props.info.snippet.description }}</div>
      <div class="card-text__count-view">{{ countView() }}</div>
    </div>
  </a>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  info: Object,
  isList: Boolean,
})

const countView = () => {
  switch (true) {
    case (props.info.statistics.viewCount > 1000000) :
      return `${(props.info.statistics.viewCount/1000000).toFixed(3)} млн просмотров`
    case (props.info.statistics.viewCount > 1000) :
      return `${(props.info.statistics.viewCount/1000).toFixed(3)} тыс просмотров`
    default :
      return `${props.info.statistics.viewCount} просмотров`
  }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 245px;
  height: auto;
  text-decoration: none;
}

.card img {
  height: 137px;
  margin: 0 0 8px 0;
}

.card-text__title {
  width: 100%;
  height: 32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #272727;
  text-overflow: ellipsis;
  overflow: hidden;
  margin: 0 0 8px 0;
}

.card-text__desc {
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  color: rgba(23, 23, 25, 0.3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-text__count-view {
  width: 100%;
  font-size: 16px;
  line-height: 20px;
  color: rgba(23, 23, 25, 0.3);
}


.card.list {
  flex-direction: row;
  width: 700px;
  height: 90px;
  gap: 20px;
}

.card.list img {
  width: 100%;
  height: 100%;
  margin: 0;
}

.card.list .card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.card.list .card-text__title,
.card.list .card-text__desc {
  width: 510px;
}

</style>
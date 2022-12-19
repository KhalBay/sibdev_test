<template>
  <div v-show="dataStore.isModal" class="modal" @click="dataStore.callModal()">
    <div class="modal-content" @click.stop>
      <slot/>
    </div>
  </div>
</template>

<script setup>
import {useDataStore} from "@/store/data";

const dataStore = useDataStore()
</script>

<style>
.modal {
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  background: rgba(117, 199, 255, 0.40);
}

.modal-content {
  opacity: 1;
  margin: auto;
  width: 510px;
  height: auto;
  background: #FFFFFF;
  box-shadow: 0px 10px 50px rgba(19, 144, 229, 0.8);
  border-radius: 10px;
  padding: 36px 40px;
}
</style>
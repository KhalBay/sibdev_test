import { defineStore } from 'pinia'
import {ref} from "vue";

export const useDataStore = defineStore('data', () => {
    const isModal = ref(false)
    const isSaved = ref(false)

    const callModal = () => {
        isModal.value = !isModal.value
    }

    return { isModal, callModal, isSaved }
})
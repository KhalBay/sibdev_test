import axios from "axios";
import { defineStore } from 'pinia'
import {ref} from "vue";
import {useAuthStore} from "@/store/auth";

export const useSearchStore = defineStore('search', () => {
    const authStore = useAuthStore()

    const loading = ref(false)
    const searchQuery = ref('')
    const video = ref({})
    const statistic = ref({})
    const result = ref({})
    const allVideoIds = ref('')

    const formSearchVideo = ref({
        q: '',
        part: 'snippet',
        maxResults: 12,
        order: 'relevance',
        type: 'video',
        key: 'AIzaSyAF1gKK4nN9ZvtV6sI81cpltkpnVuJcZ0Y',
    })
    const formSearchStat = ref({
        part: 'statistics',
        id: '',
        key: 'AIzaSyAF1gKK4nN9ZvtV6sI81cpltkpnVuJcZ0Y',
    })

    const getVideoIds = () => { // собираем id-шники для запроса статистики
        video.value.items.forEach(el => {
            allVideoIds.value += el.id.videoId + ','
        })
    }
    const addStatistic = () => { //Добавляем из запроса статистику в общий результат
        let i;
        for (i = 0; i < video.value.items.length; i++) {
            result.value.items[i].statistics = statistic.value.items[i].statistics
        }
    }

    const searchFetch = async (searchString) => {
        loading.value = true
        searchQuery.value = searchString
        formSearchVideo.value.q = searchQuery.value
        const params = new URLSearchParams(formSearchVideo.value).toString()

        await axios // Поисковой запрос
            .get(`https://www.googleapis.com/youtube/v3/search?${params}`)
            .then(response => {
                video.value = response.data
            })
            .catch(error => {
                console.log(error)
            })

        getVideoIds() // Получаем все ИД видео
        formSearchStat.value.id = allVideoIds.value.slice(0, -1)
        const paramsForStat = new URLSearchParams(formSearchStat.value).toString()

        await axios // Статистический запрос
            .get(`https://www.googleapis.com/youtube/v3/videos?${paramsForStat}`)
            .then(response => {
                statistic.value = response.data
            })
            .catch(error => {
                console.log(error)
            })

        result.value = video.value
        addStatistic()

        loading.value = false
    }

    const saveQuery = (formData) => {
        const key = authStore.user.token
        if (formData) {
            authStore.user.querys.push(formData)
        }
        localStorage.setItem(key, JSON.stringify(authStore.user.querys))
    }

    return { loading, searchFetch, result, searchQuery, saveQuery, formSearchVideo }
})
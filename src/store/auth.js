import { defineStore } from 'pinia'
import {ref} from "vue";
import router from "@/router";
import {useSearchStore} from "@/store/search";

export const useAuthStore = defineStore('auth', () => {
    const searchStore = useSearchStore()

    const isAuth = ref(false)
    const user = ref({
        login: '',
        password : '',
        token: '',
        querys: [],
    })

    const login = (formData) => {
        if (formData) {
            const key = formData.login + formData.password
            // Не самое лучшее решение хранить пароль в ключе, но это самое первое что пришло в голову :D
            if (localStorage.getItem(key)) { //Если уже есть пользователь то выполнить вход
                user.value = JSON.parse(localStorage.getItem(key))
            } else {
                user.value = formData
                user.value.token = Date.now()
                user.value.querys = []
                localStorage.setItem(key, JSON.stringify(user.value))
            }
            localStorage.setItem('auth', JSON.stringify(user.value))
            isAuth.value = true
            if (router.currentRoute.value.name === 'login') {
                router.push({name: 'search'})
            }
        }
    }

    const checkAuth = () => { // При перезагрузке оставаться в системе
        if (localStorage.getItem('auth')) {
            login(JSON.parse(localStorage.getItem('auth')))
        }

        if (localStorage.getItem(user.value.token)) { // Записать запросы в стейт
            user.value.querys = JSON.parse(localStorage.getItem(user.value.token))
        }
    }

    const logout = () => {
        localStorage.removeItem('auth')
        isAuth.value = false
        user.value = {}
        searchStore.result = {}
        searchStore.searchQuery = ''
        router.push({name: 'login'})
    }

    return { isAuth, user, login, checkAuth, logout }
})
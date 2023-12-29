import { defineStore } from 'pinia';

export const useJobStore = defineStore('jobStore', () => {
    const vacancies = ref([])
    function addId(arg) {
        vacancies.value = [...vacancies.value, arg]
    }
    return { vacancies, addId }
})
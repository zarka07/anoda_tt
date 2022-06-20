import { defineStore } from 'pinia';

export const infoAboutStatesStore = defineStore('store', {
    state: () => {
        return {
            newState: {},
            viewedStates: JSON.parse(localStorage.getItem('viewedStates'))||[],
            loading: false,
        }
    },
    actions: {
        showLoader() {
            this.loading = true
        },
        hideLoader() {
            this.loading = false
        }
    }
})
import { defineStore } from 'pinia';

export const infoAboutStatesStore = defineStore('store', {
    state: () => {
        return {
            
            newState: {},
            viewedStatesHashs: [],
            loading: false,
            hash: '',

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
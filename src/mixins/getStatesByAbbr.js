import axios from 'axios'
import { infoAboutStatesStore } from '@/stores/infoAboutStatesStore';
export default {
    setup() {
        const stateStore = infoAboutStatesStore()
        return {
            stateStore,
        }
    },
    methods: {
        async showInfo(path) {
            this.stateStore.showLoader()
            let newState = await this.get(path)
            this.stateStore.newState = newState
            this.stateStore.newHash = newState.hash
            //console.log(newState)
            if (newState) {
                this.saveState()
            }
            else {
                this.showInfo(path)
            }
        },
        async get(path, cb = null) {
            return await axios
                .get(process.env.VUE_APP_API_CURRENT_SINGLE_STATE_ENDPOINT_URL + path)
                .then(res => cb != null ? cb(res.data) : res.data)
                .catch((err) => console.log(err))
                .finally(() => {
                    this.stateStore.hideLoader()
                })
        },
        saveState() {
            const parsed = JSON.stringify(this.stateStore.newState)
            if(localStorage.getItem('viewedStates')){
                this.stateStore.viewedStates = JSON.parse(localStorage.getItem('viewedStates'))
            }
            this.stateStore.viewedStates.push(parsed)
            localStorage.setItem('viewedStates', JSON.stringify(this.stateStore.viewedStates))
        }
    },

}
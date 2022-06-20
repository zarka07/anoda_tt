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
            //let newHash = newState.hash
            this.stateStore.newState = newState
            //console.log(newState)
            //if (hash) {
                //this.stateStore.viewedStates.push(_info)
                // this.stateStore.newState = null
                // this.saveState()
            //}
            //else {
             //   this.showInfo(path)
            //}
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
        // saveState() {
        //     const parsed = JSON.stringify(this.stateStore.viewedStates)
        //     localStorage.setItem('viewedStates', parsed)
        // }
    },

}
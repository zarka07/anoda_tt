import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(router).use(createPinia()).mount('#app')


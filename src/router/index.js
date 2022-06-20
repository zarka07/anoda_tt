import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue';

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  },
  {
    path: '/Main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "Main.vue", webpackMode: "lazy" */'../views/Main.vue')
  },
  {
		path: '/state/:id',
		name: 'StateId',
		props: {id:'', state:{}},
		component: () => import(/* webpackChunkName: "State.vue", webpackMode: "lazy" */'../views/State.vue')
	},
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

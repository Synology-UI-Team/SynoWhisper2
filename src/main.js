import 'semantic-ui-css/semantic.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import App from './app.vue';
import Rooms from '@/pages/rooms';
import Signin from '@/pages/signin.vue';
import ApiService from '@/services/api.service'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

ApiService.init();

Vue.use(VueRouter);
Vue.use(VueMaterial);

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: Rooms
		},
		{
			path: '/signin',
			component: Signin
		}
	]
});


new Vue({
	el: '#app',
	template: '<app></app>',
	store: store,
	components: { App },
	router: router
});

import 'semantic-ui-css/semantic.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import App from './app.vue';
import Rooms from '@/pages/rooms';
import Signup from '@/pages/signup.vue';
import RoomContent from '@/pages/roomContent.vue'
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
			path: '/signup',
			component: Signup
		},
		{
			path: '/room/:roomId',
			component: RoomContent,
			props: true
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

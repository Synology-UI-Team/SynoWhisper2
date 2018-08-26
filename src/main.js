import 'semantic-ui-css/semantic.css';
import Vue from 'vue';
import store from '@/store';
import App from './app.vue';
import ApiService from '@/services/api.service'

ApiService.init();

new Vue({
	el: '#app',
	template: '<app></app>',
	store: store,
	components: { App }
});

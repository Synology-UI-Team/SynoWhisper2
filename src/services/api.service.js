import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from './config'


const ApiService = {
	init () {
		Vue.use(VueAxios, axios);
		Vue.axios.defaults.baseURL = API_URL
	},
	get (resource, slug = '') {
		return Vue.axios
		.get(`${resource}`)
		.catch((error) => {
			throw new Error(`ApiService ${error}`);
		});
	},
	post (resource, params) {
		return Vue.axios.post(`${resource}`, params);
	},
	update (resource, slug, params) {
		return Vue.axios.put(`${resource}/${slug}`, params);
	},
	put (resource, params) {
	}
}

export default ApiService;

export const RoomsService = {
	get (slug) {
		return ApiService.get('rooms', slug)
	},
	create (params) {
		return ApiService.post('rooms', {room: params});
	}
}


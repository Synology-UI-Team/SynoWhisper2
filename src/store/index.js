import Vue from 'vue'
import Vuex from 'vuex'
import rooms from './rooms.module'
import users from './users.module'
import views from './views.module'
import posts from './posts.module'

Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		rooms,
		users,
		views,
		posts
	}
});

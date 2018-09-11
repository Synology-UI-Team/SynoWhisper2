import { UsersService } from '@/services/api.service'
import {
	SET_USER,
	FETCH_START,
	FETCH_END
} from './mutations.type'

import {
	USER_CREATE,
	USER_GET
} from './actions.type'

export const state = {
	user: {},
	isLoading: false
}

export const mutations = {
	[FETCH_START] (state) {
		state.isLoading = true;
	},
	[FETCH_END] (state) {
		state.isLoading = false;
	},
	[SET_USER] (state, user) {
		state.user = user;
	}
}

export const actions = {
	[USER_CREATE] ({ commit }, params) {
		commit(FETCH_START);
		return UsersService.create(params)
		.then(({ data }) => {
			commit(FETCH_END);
			commit(SET_USER, {username: data.username})
		});
	}
}

export default {
	state,
	actions,
	mutations,
	namespaced: true
}

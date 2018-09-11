import { UsersService } from '@/services/api.service'
import {
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
	}
}

export const actions = {
	[USER_CREATE] ({ commit }, params) {
		commit(FETCH_START);
		return UsersService.create(params)
		.then(({ data }) => {
			commit(FETCH_END);
		})
	}
}

export default {
	state,
	actions,
	mutations
}

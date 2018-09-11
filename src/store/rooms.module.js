import { RoomsService } from '@/services/api.service'
import {
	SET_ROOMS,
	FETCH_START,
	FETCH_END
} from './mutations.type'

import {
	FETCH_ROOMS
} from './actions.type'

export const state = {
	rooms: [
	],
	isLoading: false
}

export const mutations = {
	[FETCH_START] (state) {
		state.isLoading = true;
	},
	[FETCH_END] (state) {
		state.isLoading = false;
	},
	[SET_ROOMS] (state, rooms) {
		state.rooms = rooms;
	}
}

export const actions = {
	[FETCH_ROOMS] ({ commit }, params) {
		commit(FETCH_START);
		return RoomsService.get()
		.then(({ data }) => {
			commit(FETCH_END);
			commit(SET_ROOMS, data);
		})
	}
}

export default {
	state,
	actions,
	mutations,
	namespaced: true
}

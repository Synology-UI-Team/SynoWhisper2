import { RoomsService } from '@/services/api.service'
import {
	SET_ROOMS,
	ADD_ROOM,
	FETCH_START,
	FETCH_END
} from './mutations.type'

import {
	FETCH_ROOMS,
	CREATE_ROOM
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
	},
	[ADD_ROOM] (state, room) {
		state.rooms.push(room);
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
	},
	[CREATE_ROOM] ({ commit }, params) {
		return RoomsService.create(params)
		.then(({ data }) => {
			commit(ADD_ROOM, data);
		})
	}
}

export default {
	state,
	actions,
	mutations,
	namespaced: true
}

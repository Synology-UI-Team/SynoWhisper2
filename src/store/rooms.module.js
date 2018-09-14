import { RoomsService } from '@/services/api.service'
import {
	SET_ROOMS,
	ADD_ROOM,
	REMOVE_ROOM,
	FETCH_START,
	FETCH_END
} from './mutations.type'

import {
	FETCH_ROOMS,
	CREATE_ROOM,
	DELETE_ROOM
} from './actions.type'

export const state = {
	rooms: [
	],
	isLoading: false,
	loaded: false
}

export const mutations = {
	[FETCH_START] (state) {
		state.isLoading = true;
	},
	[FETCH_END] (state) {
		state.loaded = true;
		state.isLoading = false;
	},
	[SET_ROOMS] (state, rooms) {
		state.rooms = rooms;
	},
	[ADD_ROOM] (state, room) {
		state.rooms.push(room);
	},
	[REMOVE_ROOM] (state, roomId) {
		let index = -1;
		state.rooms.every((room, idx) => {
			if (room.id === roomId) {
				index = idx;
				return false;
			}
			return true;
		});
		if (index === -1) return;
		state.rooms.splice(index, 1);
	}
}

export const actions = {
	[FETCH_ROOMS] ({ commit }, params) {
		commit(FETCH_START);
		return RoomsService.get()
		.then(({ data }) => {
			commit(SET_ROOMS, data);
			commit(FETCH_END);
		})
	},
	[CREATE_ROOM] ({ commit }, params) {
		return RoomsService.create(params)
		.then(({ data }) => {
			commit(ADD_ROOM, data);
		})
	},
	[DELETE_ROOM] ({ commit }, params) {
		return RoomsService.delete(params)
		.then(({ data }) => {
			commit(REMOVE_ROOM, params);
		})
	}
}

export const getters = {
	getRoom: (state) => {
		return (roomId) => state.rooms.filter((room) => room.id === roomId)[0];
	},
	getRoomPath: (state) => {
		return (roomId) => `/room/${roomId}`
	}
};

export default {
	state,
	actions,
	mutations,
	getters,
	namespaced: true
}

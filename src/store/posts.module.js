import { PostsService } from '@/services/api.service'
import {
	SET_POSTS,
	ADD_POST,
	FETCH_START,
	FETCH_END
} from './mutations.type'

import {
	FETCH_POSTS,
	CREATE_POST
} from './actions.type'

export const state = {
	posts: {},
	isLoading: false
}

export const mutations = {
	[FETCH_START] (state) {
		state.isLoading = true;
	},
	[FETCH_END] (state) {
		state.isLoading = false;
	},
	[SET_POSTS] (state, obj) {
		state.rooms[obj.roomId] = obj.rooms;
	},
	[ADD_POST] (state, obj) {
		state.rooms[obj.roomId].push(obj.room);
	}
}

export const actions = {
	[FETCH_POSTS] ({ commit }, params) {
		commit(FETCH_START);
		return PostsService.get(params)
		.then(({ data }) => {
			if (params && params.room_id !== undefined) {
				commit(SET_POSTS, {
					rooms: data,
					room_id: params.room_id
				});
			} else {
				commit(SET_POSTS, data);	
			}
			commit(FETCH_END);
		})
	},
	[CREATE_POST] ({ commit }, params) {
		return RoomsService.create(params)
		.then(({ data }) => {
			commit(ADD_ROOM, data);
		})
	}
}

export const getters = {
	getPosts: (state) => {
		return (roomId) => state.posts[roomId];
	}
};

export default {
	state,
	actions,
	mutations,
	getters,
	namespaced: true
}

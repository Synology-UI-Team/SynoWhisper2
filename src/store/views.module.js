import {
	TOGGLE_CREATE_ROOM_DIALOG
} from './mutations.type'

export const state = {
	toggleCreateRoomDialog: false
}

export const mutations = {
	[TOGGLE_CREATE_ROOM_DIALOG] (state, toggle) {
		state.toggleCreateRoomDialog = toggle;
	}
}

export default {
	state,
	mutations,
	namespaced: true
}

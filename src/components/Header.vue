<template>
	<div class="ui inverted vertical segment big-cover">
		<div v-if="userNotLoggedIn" class="right">
			<md-button class="md-raised md-primary" to="/signup">Sign up</md-button>
		</div>
		<div v-else class="right">
			<md-avatar class="md-avatar-icon md-primary">{{ firstCharOfName }}</md-avatar>
		</div>
		<h1 class="ui header">
			Syno Whisper2
		</h1>
		<div class="ui action input">
			<input type="text" placeholder="Search...">
			<button class="ui icon button">
				<i class="search icon"></i>
			</button>
		</div>
		<div class="ui horizontal divider inverted">Or </div>
		<div class="ui labeled icon button" @click="showDialog=true">Create Room<i class="add icon"></i> </div>

		<create-room-dialog @dialogVisible="dialogVisible" :visible="showDialog"></create-room-dialog>
	</div>
</template>
<script>

import CreateRoomDialog from '@/pages/createRoom'
import { mapState } from 'vuex'

export default  {
	data() {
		return {
			showDialog: false
		}
	},
	computed: {
		...mapState('users', ['user']),
		userNotLoggedIn() {
			return !this.user.username;
		},
		firstCharOfName() {
			if (this.user.username) {
				return this.user.username.charAt(0).toUpperCase();
			}
			return '';
		}
	},
	components: {
		CreateRoomDialog
	},
	methods: {
		dialogVisible (data) {
			this.showDialog = data;
		}
	}
}
</script>
<style lang="css">
.big-cover.segment {
	text-align: center;
}
.big-cover h1.ui.header{
	padding-top: 120px;
	font-size: 4em;
	text-align: center;
}

.right {
	float: right;
	padding-right: 5px;
}

</style>

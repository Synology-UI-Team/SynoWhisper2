<template>
	<div class="ui inverted vertical segment big-cover">
		<div class="right menu">
			<div class="item">
				<md-button class="md-raised md-primary" to="/signin">Sign In</md-button>
			</div>
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

export default  {
	data() {
		return {
			showDialog: false
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
</style>

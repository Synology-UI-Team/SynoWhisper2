<template>
	<md-dialog :md-active.sync="showDialog">
		<md-dialog-title>Create Room</md-dialog-title>
		<md-field>
			<label>Title</label>
			<md-input ></md-input>
		</md-field>
		<md-field>
			<label>SubTitle</label>
			<md-input ></md-input>	
		</md-field>
		<md-field>
			<label>Description</label>
			<md-input ></md-input>
		</md-field>
		<md-field>
			<label>Image</label>
      			<md-file accept="image/*" />	
		</md-field>
		<md-dialog-actions>
		<md-button @click="showDialog = false">Close</md-button>
		<md-button class="md-primary" @click="showDialog = false">Save</md-button>
		</md-dialog-actions>
	</md-dialog>
</template>

<script>

export default {
	name: 'CreateRoomDialog',
	props: ['showDialog'],
	methods: {
	}
}
	
</script>

<style lang="scss">
	
</style>

<template>
	<md-dialog :md-active.sync="toggleCreateRoomDialog">
		<md-dialog-title>Create Room</md-dialog-title>
		<md-content>
			<form id="create-room"
					novalidate class="md-layout"
					@submit.prevent="validateRoom"
			>
			<md-field>
				<label for="title">Title</label>
				<md-input name="title" v-model="form.title"></md-input>
				<span class="md-error" v-if="!$v.form.title.required">Title is required</span>
			</md-field>
			<md-field>
				<label for="subtitle">Subtitle</label>
				<md-input name="subtitle" v-model="form.subtitle"></md-input>
			</md-field>
			<md-field>
				<label for="description">Description</label>
				<md-input name="description" v-model="form.description"></md-input>
			</md-field>
			<md-field>
				<label>Image</label>
					<md-file accept="image/*" />	
			</md-field>
			<div class="right">
				<md-button @click="doClose">Close</md-button>
				<md-button type="submit" class="md-primary">Create</md-button>
			</div>
			</form>
		</md-content>
	</md-dialog>
</template>

<script>

import { mapState, mapGetters } from 'vuex'
import {
	CREATE_ROOM
} from '@/store/actions.type'
import {
	TOGGLE_CREATE_ROOM_DIALOG
} from '@/store/mutations.type'
import { validationMixin } from 'vuelidate'
import {
	required,
	email,
	minLength,
	maxLength
} from 'vuelidate/lib/validators'

const ROOMS_PREFIX = 'rooms/';

export default {
	name: 'CreateRoomDialog',
	props: ['visible'],
	mixins: [validationMixin],
	data() {
		return {
			form: {
				title: '',
				subtitle: '',
				description: ''
			}
		}
	},
	validations: {
		form: {
			title: {
				required
			}
		}
	},
	computed: {
		toggleCreateRoomDialog: {
			set(value) {
				this.$store.commit(`views/${TOGGLE_CREATE_ROOM_DIALOG}`, value);
			},
			get() {
				return this.$store.state.views[TOGGLE_CREATE_ROOM_DIALOG];
			}
		}
		// ...mapState('views', ['toggleCreateRoomDialog']),
	},
	methods: {
		doClose() {
			this.toggleCreateRoomDialog = false;
		},
		validateRoom() {
			this.$v.$touch();
			if (!this.$v.$invalid) {
				this.createRoom();
			}
		},
		createRoom() {
			this.$store.dispatch(ROOMS_PREFIX + CREATE_ROOM, {
				title: this.form.title,
				subtitle: this.form.subtitle,
				description: this.form.description
			});
			this.toggleCreateRoomDialog = false;
		}
	}
}
</script>

<style lang="scss" scoped>
.md-content {
	padding: 16px;
}
.right {
	margin-left: auto;
}
</style>

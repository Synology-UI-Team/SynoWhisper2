<template>
	<div class="ui middle center grid">
		<div class="column">
			<form id="signin"
				novalidate class="md-layout"
				@submit.prevent="validateUser"
			>
				<md-card-content>
					<div class="md-layout md-gutter">
						<md-field :class="getValidationClass('username')">
							<label for="username">User Name</label>
							<md-input name="username" id="username" v-model="form.username" :disabled="isLoading" />
							<span class="md-error" v-if="!$v.form.username.required">User name is required</span>
							<span class="md-error" v-else-if="!$v.form.username.minlength">Invalid user name</span>
						</md-field>
						<md-field :class="getValidationClass('password')">
							<label for="password">Password</label>
							<md-input name="password" id="password" type="password" v-model="form.password" :disabled="isLoading" />
							<span class="md-error" v-if="!$v.form.password.required">Password is required</span>
							<span class="md-error" v-else-if="!$v.form.password.minlength">Invalid password</span>
						</md-field>
					</div>

					<md-card-actions>
						<md-button type="submit" class="md-primary" :disabled="isLoading || userCreated">Create user</md-button>
					</md-card-actions>
				</md-card-content>

				<md-snackbar md-position="center" :md-duration="Infinity" :md-active="userCreated" md-persistent>
					<span>User {{ this.user.username }} has been created.</span>
					<md-button class="md-primary" to="/">Click here to redirect to home page</md-button>
				</md-snackbar>
			</form>
		</div>
	</div>
</template>

<script>

import { validationMixin } from 'vuelidate'
import {
	required,
	email,
	minLength,
	maxLength
} from 'vuelidate/lib/validators'
import { mapState } from 'vuex';
import {
	USER_CREATE,
	USER_GET
} from '../store/actions.type'

const USER_PREFIX = 'users/';

export default {
	name: 'Signup',
	mixins: [validationMixin],
	data() {
		return {
			form: {
				username: null,
				password: null
			}
		};
	},
	computed: {
		...mapState('users', ['isLoading', 'user']),
		userCreated() {
			return !!this.user.username;
		}
	},
	validations: {
		form: {
			username: {
				required,
				minLength: minLength(3)
			},
			password: {
				required,
				minLength: minLength(8)
			}
		}
	},
	methods: {
		getValidationClass (fieldName) {
			const field = this.$v.form[fieldName];

			if (field) {
				return {
					'md-invalid': field.$invalid && field.$dirty
				}
			}
		},
		validateUser () {
			this.$v.$touch();

			if (!this.$v.$invalid) {
				this.createUser();
			}
		},
		createUser() {
			this.$store.dispatch(USER_PREFIX + USER_CREATE, {
				username: this.form.username,
				password: this.form.password
			});
		}
	}
}
	
</script>

<style lang="scss">
	
</style>
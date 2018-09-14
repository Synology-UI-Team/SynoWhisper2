<template>
<router-link :to="getRoomPath(id)">
	<md-card md-with-hover>
		<md-card-header>
			<md-card-header-text>
				<div class="md-title">{{ title }}</div>
				<div class="md-subhead">{{ subtitle }}</div>
			</md-card-header-text>

			<md-card-media>
				<md-avatar class="md-large">
					<img :src="img_url">
				</md-avatar>
			</md-card-media>
		</md-card-header>
		<md-card-content>
			{{ description }}
		</md-card-content>
		<md-card-actions md-alignment="space-between">
			<md-button class="md-icon-button">
				<md-icon class="md-size-1x">delete</md-icon>
			</md-button>
			<md-button :to="getRoomPath(id)">
				<md-icon class="md-size-1x">arrow_forward</md-icon>
			</md-button>
		</md-card-actions>
	</md-card>
</router-link>
</template>
<script>
import image from './baby.jpg';
import { mapGetters } from 'vuex'

export default {
	name: 'Room',
	props: {
		img_url: {
			default: image
		},
		title: {
			type: String,
			default: '寶寶大作戰'
		},
		subtitle: {
			type: String,
			default: '快累死'
		},
		description: {
			type: String,
			default: ''
		},
		roomId: {
			type: String
		}
	},
	computed: {
		...mapGetters('rooms', ['getRoomPath']),
		id() {
			return parseInt(this.roomId);
		}
	}
}
</script>

<style>
.md-card {
	width: 320px;
	margin: 4px;
	display: inline-block;
	vertical-align: top;
}
</style>

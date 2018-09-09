<template>
<md-card>
	<md-card-header>
		<md-card-header-text>
			<div class="md-title">{{this.title}}</div>
			<div class="md-subhead">{{this.subtitle}}</div>
		</md-card-header-text>

		<md-card-media>
			<md-avatar class="md-large">
				<img :src="img_url">
			</md-avatar>
		</md-card-media>
	</md-card-header>
	<md-card-content>
		{{this.description}}
	</md-card-content>
	<md-card-actions>
		<md-button class="md-icon-button">
			<md-icon class="md-size-1x ">delete</md-icon>
		</md-button>
	</md-card-actions>
</md-card>
</template>
<script>
import image from './baby.jpg';
export default {
	name: 'Post',
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

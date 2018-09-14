<template>
	<md-table-row>
		<md-table-cell>{{ title }}</md-table-cell>
		<md-table-cell>{{ likedNumber }}</md-table-cell>
	</md-table-row>
</template>
<script>
import image from './baby.jpg';
export default {
	name: 'Post',
	props: {
		title: {
			type: String,
			default: '寶寶大作戰'
		},
		likedNumber: 0
	}
}
</script>

<style>
</style>

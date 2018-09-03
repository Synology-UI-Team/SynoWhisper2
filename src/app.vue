<template>
	<div>
		<app-header></app-header>
		<div class="ui container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import AppHeader from '@/components/Header'
export default {
	name: 'App',
	components: {
		AppHeader
	}
}
</script>

<style lang="css">
.ui.container{
	margin-top: 3em;
}
</style>

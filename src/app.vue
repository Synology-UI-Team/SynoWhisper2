<template>
	<div>
		<app-header></app-header>
		<div class="ui container">
			<rooms></rooms>
		</div>
	</div>
</template>

<script>
import AppHeader from '@/components/Header'
import Rooms from '@/components/Rooms'
export default {
	name: 'App',
	components: {
		AppHeader,
		Rooms
	}
}
</script>

<style lang="css">
.ui.container{
	margin-top: 3em;
}
</style>

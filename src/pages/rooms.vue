<template>
	<div class="ui items">
		<div v-if="rooms.length === 0">No available room, please create one</div>
		<room v-for="room in rooms" :title="room.title" :subtitle="room.subtitle" :description="room.description" :key="room.id" :roomId="room.id"></room>
	</div>
</template>
<script>
import Room from '@/components/Room'
import { mapState } from 'vuex'
import {
	FETCH_ROOMS
} from '@/store/actions.type'

const ROOMS_PREFIX = 'rooms/';

export default  {
	components: {
		Room
	},
	data() {
		return {
		}
	},
	mounted() {
		this.$store.dispatch(ROOMS_PREFIX + FETCH_ROOMS);
	},
	computed: {
		...mapState('rooms', [
			'isLoading',
			'rooms'
		])
	}
}
</script>
<style lang="css">
</style>

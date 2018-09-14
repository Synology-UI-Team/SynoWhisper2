<template>
	<div class="ui items">
		<room title="這是直接指定的" subtitle="這是直接指定的副標" description="這是直接指定的描述"></room>
		<router-link v-for="room in rooms" :to="getRoomPath(room.id)">
			<room :title="room.title" :subtitle="room.subtitle" :description="room.description" :key="room.id"></room>
		</router-link>
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
	},
	methods: {
		getRoomPath(id) {
			return `/room/${id}`;
		}
	}
}
</script>
<style lang="css">
</style>

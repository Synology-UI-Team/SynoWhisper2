<template>
	<div class="ui items">
		<room ></room>
		<room title="這是直接指定的" subtitle="這是直接指定的副標" decription="這是直接指定的描述"></room>
	</div>
</template>
<script>
import Room from '@/components/Room'
import { mapGetters } from 'vuex'
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
		...mapGetters([
			'isLoading',
			'rooms'
		])
	}
}
</script>
<style lang="css">
</style>

<template>
	<div class="ui items">
		<post ></post>
		<post title="這是直接指定的" subtitle="這是直接指定的副標" decription="這是直接指定的描述"></post>
	</div>
</template>
<script>
import Post from '@/components/Post'
import { mapGetters } from 'vuex'
import {
	FETCH_ROOMS
} from '@/store/actions.type'

export default  {
	components: {
		Post
	},
	data() {
		return {
		}
	},
	mounted() {
		this.$store.dispatch(FETCH_ROOMS, {
		});
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

<template>
<div>
	<div v-if="!!room">
	<div>{{ room.title }}</div>
	<div>{{ room.subtitle }}</div>
	<div>{{ room.description }}</div>
	<md-table>
		<md-table-row>
			<md-table-head>title</md-table-head>
			<md-table-head>liked</md-table-head>
		</md-table-row>
		<post ></post>
		<post v-for="post in posts" :title="post.title" :subtitle="post.subtitle" :description="post.description" :key="post.id"></post>
	</md-table>
	</div>
	<div v-else>
		<div>no such room exists</div>
	</div>
</div>
</template>
<script>
import Post from '@/components/Post'
import { mapState, mapGetters } from 'vuex'
import {
	
} from '@/store/actions.type'

export default  {
	name: 'RoomContent',
	components: {
		Post
	},
	props: {
		roomId: {
			required: true
		}
	},
	data() {
		return {
		}
	},
	mounted() {
		//this.$store.dispatch(ROOMS_PREFIX + FETCH_ROOMS);
	},
	computed: {
		...mapGetters('rooms', ['getRoom']),
		id() {
			return parseInt(this.roomId);
		},
		room() {
			return this.$store.getters['rooms/getRoom'](this.id);
		},
		posts() {
			return this.$store.getters['posts/getPosts'](this.id);
		}
	}
}
</script>
<style lang="css">
</style>

<template>
<div>
	<div v-if="!!room">
	<h3>{{ room.title }}</h3><h4 v-if="room.subtitle"> - {{ room.subtitle }}</h4>
	<p>{{ room.description }}</p>
	<md-table>
		<md-table-row>
			<md-table-head>title</md-table-head>
			<md-table-head>liked</md-table-head>
		</md-table-row>
		<post ></post>
		<post v-for="post in posts" :title="post.title" :subtitle="post.subtitle" :description="post.description" :key="post.id"></post>
	</md-table>
	</div>
	<div v-if="showNoRoomExist">
		<div>no such room exists</div>
	</div>
</div>
</template>
<script>
import Post from '@/components/Post'
import { mapState, mapGetters } from 'vuex'
import {
	FETCH_ROOMS
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
		if (!this.isRoomLoaded && !this.isRoomLoading) {
			this.$store.dispatch(`rooms/${FETCH_ROOMS}`);
		}
	},
	computed: {
		...mapGetters('rooms', ['getRoom']),
		...mapState('rooms', {
			isRoomLoaded: 'loaded',
			isRoomLoading: 'isLoading'
		}),
		id() {
			return parseInt(this.roomId);
		},
		room() {
			return this.$store.getters['rooms/getRoom'](this.id);
		},
		posts() {
			return this.$store.getters['posts/getPosts'](this.id);
		},
		showNoRoomExist() {
			return this.isRoomLoaded && !this.room && !this.isRoomLoading;
		}
	}
}
</script>
<style lang="css">
</style>

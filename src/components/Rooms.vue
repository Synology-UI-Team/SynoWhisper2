<template>
	<div class="ui items">
		<div class="item">
			<div class="content">
				<a class="header">標題</a>
				<div class="meta">
					<span>描述</span>
				</div>
				<div class="description">
					<p></p>
				</div>
				<div class="extra">
					<div class="ui label">IMAX</div>
					<div class="ui label"><i class="globe icon"></i> Additional Languages</div>
				</div>
			</div>
		</div>
		<div class="item">
			<div class="content">
				<a class="header">標題</a>
				<div class="meta">
					<span>描述</span>
				</div>
				<div class="description">
					<p></p>
				</div>
				<div class="extra">Additional Details </div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import {
	FETCH_ROOMS
} from '@/store/actions.type'

export default  {
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

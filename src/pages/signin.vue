<template>
	<div class="ui middle center grid">
		<div class="column">
			<form class="ui large form">
				<div class="ui stacked segment">
					<textfield iconCls="user"
						type="text"
						placeholder="Email Address"
					></textfield>
					<textfield
						iconCls="lock"
						type="password"
						placeholder="Password"
					></textfield>
				</div>
			</form>
		</div>
	</div>
</template>

<script>

import Textfield from '@/components/Textfield'

export default {
	name: 'Signin',
	components: { Textfield }
}
	
</script>

<style lang="scss">
	
</style>
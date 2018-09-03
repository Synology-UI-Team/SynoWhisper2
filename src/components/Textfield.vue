<template>
	<div class="field">
		<div class="ui left icon input">
			<i :class="['icon', iconCls]"></i>
			<input :type="type" :value="value" :placeholder="placeholder" ref="input_area"/>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
export default  {
	name: 'Textfield',
	props: {
		placeholder: {
			type: String,
			default: ''
		},
		value: {
			type: String,
			default: ''
		},
		iconCls: {
			type: String,
			default: ''
		},
		type: {
			type: String,
			default: 'text'
		}
	}
}
</script>

<style>
	
</style>
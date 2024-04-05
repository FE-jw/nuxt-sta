<template>
	<component :is="tagName" data-sta><slot /></component>
</template>

<script setup>
defineProps({
	tagName: {
		type: String,
		default: 'div'
	}
});
</script>

<style lang="scss" scoped>
[data-sta]	{color:#d33;}
</style>
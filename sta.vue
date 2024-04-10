<template>
	<component ref="sta" :is="tagName" data-sta><slot /></component>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

defineProps({
	tagName: {
		type: String,
		default: 'div'
	}
});

const sta = ref(null);
let staHandler;

onMounted(() => {
	console.log('onMounted');
	staHandler = () => {
		console.log(sta.value);
	};
	window.addEventListener('scroll', staHandler);
});

onUnmounted(() => {
	console.log('onUnmounted');
	window.removeEventListener('scroll', staHandler);
});
</script>

<style scoped>
[data-sta]	{
	--sta-value: 60px;
	--sta-duration: 1s;
	opacity:0;transform:translate(0, var(--sta-value));
}
[data-sta][data-sta-direction='ttb']	{transform:translate(0, calc(var(--sta-value) * -1));}
[data-sta][data-sta-direction='ltr']	{transform:translate(calc(var(--sta-value) * -1), 0);}
[data-sta][data-sta-direction='rtl']	{transform:translate(var(--sta-value), 0);}
[data-sta].sta-trigger	{opacity:1;transform:translate(0, 0);transition-property:opacity, transform;transition-duration:var(--sta-duration);}
</style>
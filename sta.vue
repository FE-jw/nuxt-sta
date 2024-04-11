<template>
	<component
		ref="sta"
		:is="tagName"
		:class="{ 'sta-trigger': isVisible, 'sta-complete': isComplete }"
	>
		<slot />
	</component>
</template>

<script setup>
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';

defineProps({
	tagName: {
		type: String,
		default: 'div'
	}
});

const sta = ref(null);
const isVisible = ref(false);
const isComplete = ref(false);
const transHandler = () => {
	if(!isComplete.value){
		isComplete.value = true;
	}
};
let IO;	//IntersectionObserver

// Setting Default
onBeforeMount(() => {
	sta.value.dataset.sta = '';

	// delay
	const delay = sta.value.dataset.staDelay;
	if(delay) sta.value.style.setProperty('--sta-delay', delay / 1000 + 's');
	
	// duration
	const duration = sta.value.dataset.staDuration;
	if(duration) sta.value.style.setProperty('--sta-duration', duration / 1000 + 's');
});

onMounted(() => {
	// observe
	IO = new IntersectionObserver(entries => {
		if(entries[0].intersectionRatio <= 0) return;

		isVisible.value = true;
	});
	IO.observe(sta.value);
	
	// transition complete
	sta.value.addEventListener('transitionend', transHandler);
});

onUnmounted(() => {
	IO.disconnect(sta.value);

	sta.value.removeEventListener('transitionend', transHandler);
});
</script>

<style scoped>
[data-sta]	{
	--sta-value: 60px;
	--sta-duration: 1s;
	--sta-delay: 0;
	opacity:0;transform:translate(0, var(--sta-value));
}
[data-sta][data-sta-direction='ttb']	{transform:translate(0, calc(var(--sta-value) * -1));}
[data-sta][data-sta-direction='ltr']	{transform:translate(calc(var(--sta-value) * -1), 0);}
[data-sta][data-sta-direction='rtl']	{transform:translate(var(--sta-value), 0);}
[data-sta].sta-trigger	{opacity:1;transform:translate(0);transition-property:opacity, transform;transition-duration:var(--sta-duration);transition-delay:var(--sta-delay);}
</style>
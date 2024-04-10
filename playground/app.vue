<template>
	<div class="sta-wrap">
		<!-- <div class="section">
			<sta v-if="isVisible" class="cont">1</sta>
			<button type="button" @click="isVisible = false">클릭</button>
		</div> -->
		<div class="section"><sta class="cont">1</sta></div>
		<div class="section"><sta tagName="span" class="cont" data-sta-direction="rtl" data-sta-delay="1000">2</sta></div>
		<div class="section"><Sta tagName="section" class="cont" data-sta-duration="500" data-sta-direction="ltr">3</Sta></div>
		<div class="section"><Sta tagName="article" class="cont" data-sta-direction="ttb">4</Sta></div>
		<!-- <div class="section"><sta class="cont">5</sta></div> -->
	</div>
</template>

<script setup>
// const isVisible = ref(true);
</script>

<style lang="scss" scoped>
.sta-wrap	{background-color:var(--nuxt-navy);
	.section	{height:100vh;position:relative;
		.cont	{display:flex;justify-content:center;align-items:center;width:200px;height:200px;position:absolute;left:calc(50% - 100px);top:calc(50% - 100px);font-size:40px;font-weight:bold;color:var(--nuxt-navy);background-color:var(--nuxt-green);}
	}
}
</style>

<style lang="scss">
// reset
*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;-webkit-overflow-scrolling:touch;}
body	{line-height:1.3;font-family:Arial, Helvetica, sans-serif;font-size:16px;color:#000;}

:root	{
	--nuxt-navy: #020420;
	--nuxt-green: #00dc82;
}
</style>
![nuxt-sta](logo.svg)

# **nuxt-sta(beta)**
STA Nuxt.js module

---

## **Features**
* Nuxt 3 Support
* Based on [STA](https://github.com/FE-jw/STA)
* Using the IntersectionObserver API
	* iOS: 12.2+
	* Android: 5+

## **Install**
```
npm install nuxt-sta
```

## **Setup**
```js
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-sta']
});
```

## **Usage**
```vue
<template>
	<!-- As a result, it is rendered as a div tag -->
	<sta>You can add text, tags, etc. here.</sta>

	<!-- By setting the tagName, you can change it to the desired tag -->
	<sta tagName="section">
		<span>Lorem ipsum dolor sit amet.</span>
	</sta>

	<!-- You can set the speed, direction, delay, and distance of the animation -->
	<sta duration="500">
		<span>Lorem ipsum dolor sit amet.</span>
	</sta>
	<sta direction="rtl">
		<span>Lorem ipsum dolor sit amet.</span>
	</sta>
	<sta delay="200">
		<span>Lorem ipsum dolor sit amet.</span>
	</sta>
	<sta distance="100">
		<span>Lorem ipsum dolor sit amet.</span>
	</sta>
</template>
```
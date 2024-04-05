// import { defineNuxtModule, addComponent } from '@nuxt/kit'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
	meta: {
		name: 'nuxt-sta',
		configKey: 'NuxtSta'
	},
	setup(){
		console.log('setup');
		/*
		addComponent({
			name: 'nuxt-sta',
			filePath: '/node_modules/nuxt-sta/NuxtSta.vue',
			pascalName: 'NuxtSta',
			kebabName: 'nuxt-sta'
		});
		*/
	};
});
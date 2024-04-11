import { defineNuxtModule, addComponent } from '@nuxt/kit'

export default defineNuxtModule({
	meta: {
		name: 'sta',
		configKey: 'sta'
	},
	setup(options){
		addComponent({
			name: 'sta',
			filePath: '/node_modules/nuxt-sta/sta.vue',
			pascalName: 'Sta',
			kebabName: 'sta'
		});
	}
});
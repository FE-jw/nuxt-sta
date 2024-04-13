import { defineNuxtModule, addComponent } from '@nuxt/kit';

export default defineNuxtModule({
	meta: {
		name: 'sta',
		configKey: 'sta'
	},
	setup(){
		addComponent({
			name: 'sta',
			filePath: '/node_modules/nuxt-sta/dist/sta.vue',
			pascalName: 'Sta',
			kebabName: 'sta'
		});
	}
});
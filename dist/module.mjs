import { defineNuxtModule, addComponent } from '@nuxt/kit';

export default defineNuxtModule({
	meta: {
		name: 'sta',
		configKey: 'sta'
	},
	setup(options, nuxt){
		const moduleDir = nuxt.options.modulesDir[0];

		addComponent({
			name: 'sta',
			filePath: moduleDir + '/nuxt-sta/dist/sta.vue',
			pascalName: 'Sta',
			kebabName: 'sta'
		});
	}
});
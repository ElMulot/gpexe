import { startStimulusApp } from '@symfony/stimulus-bridge';
import { defineCustomElement } from 'vue';

// Registers Stimulus controllers from controllers.json and in the controllers/ directory
export const app = startStimulusApp(require.context(
    '@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
    true,
    /\.[jt]sx?$/
));

// Register vue custom elements
(components => {
	components.keys().forEach(filePath => {
		components(filePath).then(module => {
			const customElement = defineCustomElement(module.default);
			customElements.define(filePath.replace(/\W+(\w+)\.vue/, '$1').replace(/_/g, '-'), customElement);
		})
	});
})(require.context('./components', true, /\.vue$/, 'lazy'));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

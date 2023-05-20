import { startStimulusApp } from '@symfony/stimulus-bridge';

// Registers Stimulus controllers from controllers.json and in the controllers/ directory
export const app = startStimulusApp(require.context(
	'@symfony/stimulus-bridge/lazy-controller-loader!./controllers',
	true,
	/\.[jt]sx?$/
));
app.debug = false;

// // Register vue custom elements
// (components => {
// 	components.keys().forEach(filePath => {
// 		components(filePath).then(module => {
// 			const customElement = defineCustomElement(module.default);
// 			customElements.define(filePath.replace(/\W+(\w+)\.vue/, '$1').replace(/_/g, '-'), customElement);
// 		})
// 	});
// })(require.context('./components', true, /\.vue$/, 'lazy'));


// Register lit elements from the elements/ directory
let elements = require.context('./elements', true, /\.[jt]s$/, 'lazy');
elements.keys().forEach((filePath: string) => {
	elements(filePath).then((module: any) => {
		customElements.define(filePath.replace(/\W+(\w+)\.[jt]s/, '$1').replace(/_/g, '-'), module.default);
	})
});

// register any custom, 3rd party controllers here
// app.register('flatpickr', Flatpickr);

//helper
// function listStimulusController(app: Application) {	
// 	app.keys().forEach((key:string) => console.log(key));
// }


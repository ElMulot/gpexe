import { createApp, h } from 'vue';


export const renderComponent = (component) => {
	return createApp({
		render: () => h(component)
	})
}

export default { renderComponent };
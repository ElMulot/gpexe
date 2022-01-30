import { Controller } from 'stimulus';
import { Toast } from 'bootstrap';

export default class extends Controller {
	
	toast = null;

	connect() {
		
		this.toast = new Toast(this.element, {
			animation: true,
			autohide: true,
			delay: 5000,
		});

		this.toast.show();

		this.element.addEventListener('hidden.bs.toast', event => {
			this.toast.dispose();
			this.element.remove();
		});
	}
}
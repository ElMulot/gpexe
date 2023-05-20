import { Controller } from '@hotwired/stimulus';
import { Toast } from 'bootstrap';

export default class ToastController extends Controller
{
	#toast!:Toast;

	connect(): void
	{
		
		this.#toast = new Toast(this.element, {
			animation: true,
			autohide: true,
			delay: 5000,
		});

		this.#toast.show();

		this.element.addEventListener('hidden.bs.toast', () => {
			this.#toast.dispose();
			this.element.remove();
		});

		this.dispatch('connected');
	}
}
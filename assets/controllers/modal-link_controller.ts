import { Controller } from '@hotwired/stimulus';

/**@deprecated */
export default class ModalLinkController extends Controller
{
	connect(): void
	{	
		this.element.addEventListener('click', (event: Event) => {
			
			const target = event.target as HTMLElement;
			const id = target.dataset.turboFrame;
			const src = target.getAttribute('href');

			if (!id || !src) {
				return false;
			}

			if (document.getElementById(id) === null) {
				document.body.innerHTML += `
					<turbo-frame id="${id}" src="${src}">
						<div class="modal"></div>
					</turbo-frame>`;
				event.preventDefault();
				target.blur();
			}
		});

		this.dispatch('connected');

    }
}

//deprecated

import { Controller } from 'stimulus';

export default class extends Controller {
    
	connect() {	
		this.element.addEventListener('click', event => {
			const id = event.target.dataset.turboFrame;
			const src = event.target.href;
			if (document.getElementById(id) === null) {
				document.body.innerHTML += `
					<turbo-frame id="${id}" src="${src}">
						<div class="modal"></div>
					</turbo-frame>`;
				event.preventDefault();
				event.target.blur();
			}
		});

		this.dispatch('connected');

    }
}

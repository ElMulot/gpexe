import { Controller } from '@hotwired/stimulus';
import { Collapse } from 'helpers/bootstrap_helper';

export default class extends Controller {
	
	static values = {
		disableCollapse: {
			type: Boolean,
			default: false
		}
	}

	connect() {

		this.element.querySelectorAll('.nav-link').forEach(e => {

			if (e.dataset.turboFrame !== undefined) { //nav with turbo links
				
				var $pannel = document.getElementById(e.dataset.turboFrame);
				if ($pannel == null) {
					return false;
				}

				e.addEventListener('click', event => {
					if (event.currentTarget.classList.contains('active') && this.disableCollapseValue === false) {
						event.preventDefault();
						event.currentTarget.classList.remove('active');
						event.currentTarget.removeAttribute('aria-current');
						Collapse.hide($pannel);
						event.currentTarget.blur();
						event.currentTarget.addEventListener('hidden.bs.collapse', () => { $pannel.innerHTML = '' }, { once: true });
					} else {
						this.element.querySelectorAll('.active').forEach(e => {
							e.classList.remove('active');
							e.removeAttribute('aria-current');
						});
						event.currentTarget.classList.add('active');
						event.currentTarget.setAttribute('aria-current', 'page');
						Collapse.show($pannel);
						
						$pannel.innerHTML = '';
					}
				});

				// render active link at startup
				this.element.querySelectorAll('.active').forEach(e => {
					if (e.href !== undefined) {
						$pannel.src = e.href;
					}
				});

			} else if (e.dataset.bsTarget !== undefined) { //nav managed by bootstrap

				var $pannel = document.querySelector(e.dataset.bsTarget);
				if ($pannel == null) {
					return false;
				}

				e.addEventListener('mousedown', event => {
					if (event.originalTarget.classList.contains('active') && this.disableCollapseValue === false) {
						event.target.addEventListener('click', event => {
							event.preventDefault();
							this.element.querySelectorAll('.active').forEach(e => e.classList.remove('active'));
							event.target.setAttribute('aria-selected', false);
							Collapse.hide($pannel);
							event.target.blur();
						}, { 'once': true });

					}
				});
			}
		});

		this.dispatch('connected');
	}

}
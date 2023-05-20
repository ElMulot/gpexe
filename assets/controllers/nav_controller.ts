import { Controller } from '@hotwired/stimulus';
import { Collapse } from 'helpers/bootstrap_helper';

export default class NavController extends Controller
{
	static values = {
		disableCollapse: {
			type: Boolean,
			default: false
		}
	}

	declare disableCollapseValue: boolean

	connect(): void
	{
		var $pannel: HTMLElement | null;

		this.element.querySelectorAll('.nav-link').forEach((e: Element) => {
			
			if (!(e instanceof HTMLElement)) {
				return;
			}

			if (e.dataset.turboFrame !== undefined) { //nav with turbo links
				
				$pannel = document.getElementById(e.dataset.turboFrame);

				e.addEventListener('click', (event: Event) => {
					
					if ($pannel === null) {
						return false;
					}

					const currentTarget = event.currentTarget as HTMLElement|null;

					if (currentTarget === null) {
						return false;
					}
					
					if (currentTarget.classList.contains('active') && this.disableCollapseValue === false) {
						event.preventDefault();
						currentTarget.classList.remove('active');
						currentTarget.removeAttribute('aria-current');
						Collapse.hide($pannel);
						currentTarget.blur();
						currentTarget.addEventListener('hidden.bs.collapse', () => { $pannel?.clear() }, { once: true });
					} else {
						this.element.querySelectorAll('.active').forEach(e => {
							e.classList.remove('active');
							e.removeAttribute('aria-current');
						});
						currentTarget.classList.add('active');
						currentTarget.setAttribute('aria-current', 'page');
						Collapse.show($pannel);
						
						$pannel.clear();
					}
				});

				// render active link at startup
				this.element.querySelectorAll<HTMLElement>('.active').forEach((e: HTMLElement) => {
					if ($pannel === null) {
						return false;
					}
					if (e.getAttribute('href')) {
						Object.entries(e.dataset).forEach(([k, v]) => $pannel!.dataset[k] = v );
						$pannel.setAttribute('src', e.getAttribute('href') ?? '');
					}
				});

			} else if (e.dataset.bsTarget !== undefined) { //nav managed by bootstrap

				$pannel = document.querySelector(e.dataset.bsTarget);

				e.addEventListener('mousedown', (event: Event) => {

					//todo : vérifier que originalTarget peut être remplacé par target.
					const target = event.target as HTMLElement|null;

					if (target?.classList.contains('active') && this.disableCollapseValue === false) {
						target.addEventListener('click', event => {
							event.preventDefault();
							this.element.querySelectorAll('.active').forEach(e => e.classList.remove('active'));
							target.removeAttribute('aria-selected');
							if ($pannel !== null) {
								Collapse.hide($pannel);
							}
							target.blur();
						}, { 'once': true });

					}
				});
			}
		});

		this.dispatch('connected');
	}

}

import { Controller } from '@hotwired/stimulus';
import { Dropdown } from 'bootstrap';

export default class extends Controller {

	#dropdown = null;
	#countOfRequest = 0;
	#request = [];

	static targets = ['toggle', 'menu', 'component'];

	static values = {
		id: String,
		width: Number,
		filtered: Boolean,
		sortedDesc: Boolean,
		sortedAsc: Boolean,
		resizable: Boolean,
		movable: Boolean,
	}

	static classes = ['empty', 'fill', 'arrowDown', 'arrowUp'];

	connect() {

		/**
		 * Create Dropdown instance.
		 */
		this.#dropdown = new Dropdown(this.toggleTarget);

		if (this.#dropdown === null) {
			throw new Error("Invalid dropdown target.");
		}

		/**
		 * Listener that reset the menu when opened.
		 */
		this.toggleTarget.addEventListener('show.bs.dropdown', () => {
			this.componentTargets.forEach(e => {
				this.dispatch('reset', {
					target: e
				});
			});
		});

		/**
		 * Listener triggered on resize action.
		 */
		this.element.addEventListener('engineering--main:requestResize', () => {
			if (this.hasWidthValue === true) {
				this.dispatch('display', {
					detail: [{
						key: this.idValue,
						value: this.widthValue,
					}]
				});
			}
		});

		/**
		 * Listener triggered on order action.
		 */
		 this.element.addEventListener('engineering--main:requestMove', event => {
			this.dispatch('order', {
				detail: [{
					key: this.idValue,
					value: event.detail.order,
				}]
			});
		});

		/**
		 * Listener triggered when update requested.
		 */
		this.element.addEventListener('engineering--main:update', event => {
			
			if (event.detail.width !== undefined) {
				this.widthValue = event.detail.width;
			}
			
			if (event.detail.filtered !== undefined) {
				this.filteredValue = event.detail.filtered.length !== 0;
			}
			
			if (event.detail.sortedDesc !== undefined) {
				this.sortedDescValue = event.detail.sortedDesc !== false;
			}
			
			if (event.detail.sortedAsc !== undefined) {
				this.sortedAscValue = event.detail.sortedAsc !== false;
			}
			
			this.componentTargets.forEach(e => {
				this.dispatch('update', {
					target: e,
					detail: event.detail,
				});
			});

			this.#reset();

			this.#dropdown.hide();

        });

		/**
		 * Listener triggered on Filter button clicked.
		 */
		this.element.addEventListener('engineering--header--component:filter', event => {

			if (Array.isArray(event.detail)) {
				this.#request = [...this.#request, ...event.detail];
			} else {
				this.#request.push(event.detail);
			}
			this.#countOfRequest++;
			if (this.#countOfRequest === this.componentTargets.length) {
				this.dispatch('filter',  { detail: this.#request });
			}
		});

		/**
		 * Listener triggered on SortDesc button clicked.
		 */
		this.element.addEventListener('engineering--header--component:sortDesc', event => {
			this.dispatch('sortDesc',  {
				detail: event.detail
			});
		});

		/**
		 * Listener triggered on SortAsc button clicked.
		 */
		this.element.addEventListener('engineering--header--component:sortAsc', event => {
			this.dispatch('sortAsc',  {
				detail: event.detail
			});
		});

		/**
		 * Listener triggered on Highlight switch changed.
		 */
		this.element.addEventListener('engineering--header--component:highlight', event => {
			this.dispatch('highlight',  {
				detail: event.detail
			});
		});

		/**
		 * Listener triggered on Highlight switch changed.
		 */
		 this.element.addEventListener('engineering--header--component:display', event => {
			this.dispatch('display',  {
				detail: event.detail
			});
		});

		this.#reset();
		this.dispatch('connected');
	}
	
	/**
	 * Action when Filter button clicked.
	 * @param {Object} event 
	 */
	filter(event) {
		
		if (event.type === 'keypress' && event.which !== 13) {
			return;
		}

		this.#countOfRequest = 0;
		this.#request = [];
		this.componentTargets.forEach(e => {			
			this.dispatch('requestFilter', {
				target: e,
			});
		});
	}

	/**
	 * Reset icons in Toggle target.
	 */
	#reset() {
		this.#renderWidth();
		this.#renderFiltered();
		this.#renderSortedDesc();
		this.#renderSortedAsc();
	}

	#renderWidth() {
		if (this.hasWidthValue === true) {
			this.element.style.minWidth = this.widthValue + 'rem';
			this.element.style.width = this.widthValue + 'rem';
			this.element.style.maxWidth = this.widthValue + 'rem';
		}
	}

	#renderFiltered() {
		if (this.hasFilteredValue === true) {
			this.toggleTarget.querySelectorAll(`.${this.emptyClass} .${this.fillClass}`).forEach(e => e.remove());
			if (this.filteredValue === true) {
				this.toggleTarget.innerHTML = `<i class="bi ${this.fillClass}"></i>`;
			} else {
				this.toggleTarget.innerHTML = `<i class="bi ${this.emptyClass}"></i>`;
			}
		}
	}

	#renderSortedDesc() {
		if (this.hasSortedDescValue === true) {
			this.toggleTarget.querySelectorAll(`.${this.arrowDownClass}`).forEach(e => e.remove());
			if (this.sortedDescValue === true) {
				this.toggleTarget.innerHTML += `<i class="bi ${this.arrowDownClass}"></i>`;
			}
		}
	}

	#renderSortedAsc(value) {
		if (this.hasSortedAscValue === true) {
			this.toggleTarget.querySelectorAll(`.${this.arrowUpClass}`).forEach(e => e.remove());
			if (this.sortedAscValue === true) {
				this.toggleTarget.innerHTML += `<i class="bi ${this.arrowUpClass}"></i>`;
			}
		}
	}
}
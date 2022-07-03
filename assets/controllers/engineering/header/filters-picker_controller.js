import { Controller } from 'stimulus';

/**
 * @classdesc Manage local behaviour of the header menus for filters-picker (reset, uncheckOthers).
 */
export default class extends Controller {

	static targets = ['checkbox'];

	static values = {
		filtered: String,
	}

	connect() {

		/**
		 * Listener triggered on Filter button clicked.
		 */
		this.element.addEventListener('engineering--header:requestFilter', () => {
			
			//Uncheck others checkboxes in order to always have only one checkbox checked
			this.checkboxTargets.filter(e => e.dataset.id == this.filteredValue).forEach(e => e.checked = false);

			let detail = [];
			this.checkboxTargets.forEach(e => {
				detail.push({
					key: e.dataset.id,
					value: (e.checked)?1:null,
				});
			});
			
			this.dispatch('filter', {
				prefix: 'engineering--header--component',
				detail: detail,
			});

		});

		/**
		 * Listener triggered on update requested.
		 */
		this.element.addEventListener('engineering--header:update', event => {

			if (event.detail.filtered !== undefined) {
				this.filteredValue = event.detail.filtered.filter(e => this.checkboxTargets.map(e => e.dataset.id).includes(e.key)).map(e => e.key).shift() ?? '';
			}
			this.#reset();
		});

		/**
		 * Listener triggered when reset requested.
		 */
		this.element.addEventListener('engineering--header:reset', () => {
			this.#reset();
		});

		this.#reset();
		this.dispatch('connected');

	}

	/**
	 * Reset checkboxes to filtered value.
	 */
	#reset() {
		this.#renderCheckboxes();
	}

	#renderCheckboxes() {
		this.checkboxTargets.forEach(e => e.checked = (e.dataset.id == this.filteredValue));
	}
}
import { Controller } from '@hotwired/stimulus';

/**
 * @classdesc Manage local behaviour of the header menus for boolean fields (reset, uncheckOthers)
 */
export default class extends Controller {

	static targets = ['sortDesc', 'sortAsc', 'checkbox'];

	static values = {
		id: String,
		key: String,
		filtered: Number,
		sortedDesc: Boolean,
		sortedAsc: Boolean,
	}

	connect() {

		/**
		 * Listener triggered on Filter button clicked.
		 */
		this.element.addEventListener('engineering--header:requestFilter', () => {
			
			//Uncheck others checkboxes in order to always have only one checkbox checked
			this.checkboxTargets.filter(e => e.value == this.filteredValue).forEach(e => e.checked = false);
			
			this.dispatch('filter', {
				prefix: 'engineering--header--component',
				detail: {
					key: this.keyValue,
					value: (this.checkboxTargets.find(e => e.checked === true))?this.checkboxTargets.find(e => e.checked === true).value:0,
				}
			});

		});

		/**
		 * Listener triggered on update requested.
		 */
		this.element.addEventListener('engineering--header:update', event => {

			if (event.detail.filtered !== undefined) {
				this.filteredValue = event.detail.filtered.filter(e => e.key === this.idValue).map(e => e.value).shift() ?? 0;
			}
			if (event.detail.sortedDesc !== undefined) {
				this.sortedDescValue = event.detail.sortedDesc === this.idValue;
			}
			if (event.detail.sortedAsc !== undefined) {
				this.sortedAscValue = event.detail.sortedAsc === this.idValue;
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
	 * Action when SortDesc button clicked.
	 */
	sortDesc() {
		this.dispatch('sortDesc', {
			prefix: 'engineering--header--component',
			detail: {
				value: this.idValue
			}
		});
	}

	/**
	 * Action when SortAsc button clicked.
	 */
	sortAsc() {
		this.dispatch('sortAsc', {
			prefix: 'engineering--header--component',
			detail: {
				value: this.idValue
			}
		});
	}

	/**
	 * Reset checkboxes to filtered value.
	 */
	#reset() {
		this.#renderCheckboxes();
		this.#renderSortedDesc();
		this.#renderSortedAsc();
	}

	#renderCheckboxes() {
		this.checkboxTargets.forEach(e => e.checked = (e.value == this.filteredValue));
	}

	#renderSortedDesc() {
		if (this.hasSortDescTarget === true) {
			this.sortDescTarget.classList.toggle('btn-primary', this.sortedDescValue === false);
			this.sortDescTarget.classList.toggle('btn-outline-primary', this.sortedDescValue === true);
			this.sortDescTarget.classList.toggle('bg-dark', this.sortedDescValue === true);
		}
	}

	#renderSortedAsc() {
		if (this.hasSortAscTarget === true) {
			this.sortAscTarget.classList.toggle('btn-primary', this.sortedAscValue === false);
			this.sortAscTarget.classList.toggle('btn-outline-primary', this.sortedAscValue === true);
			this.sortAscTarget.classList.toggle('bg-dark', this.sortedAscValue === true);
		}
	}

}
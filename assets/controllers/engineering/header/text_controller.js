import { Controller } from '@hotwired/stimulus';

/**
 * @classdesc Manage local behaviour of the header menus for text fields (reset, clear).
 */
export default class extends Controller {

	static targets = ['sortDesc', 'sortAsc', 'textbox'];

	static values = {
		id: String,
		key: String,
		filtered: String,
		sortedDesc: Boolean,
		sortedAsc: Boolean,
	}

	connect() {

		/**
		 * Listener triggered on Filter button clicked.
		 */
		this.element.addEventListener('engineering--header:requestFilter', () => {
			this.dispatch('filter', {
				prefix: 'engineering--header--component',
				detail: {
					key: this.keyValue,
					value: this.textboxTarget.value
				}
			});
		});

		/**
		 * Listener triggered on update requested.
		 */
		this.element.addEventListener('engineering--header:update', (event) => {
			if (event.detail.filtered !== undefined) {
				console.log(event);
				this.filteredValue = event.detail.filtered.filter(e => e.key === this.idValue).map(e => e.value).shift();
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
	 * Action when Clear button clicked.
	 */
	clear() {
		this.textboxTarget.value = '';
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
	 * Action when sortAsc button clicked.
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
	 * Reset textbox to saved value.
	 */
	#reset() {
		this.#renderTextbox();
		this.#renderSortedDesc();
		this.#renderSortedAsc();
	}

	#renderTextbox() {
		this.textboxTarget.value = this.filteredValue;
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
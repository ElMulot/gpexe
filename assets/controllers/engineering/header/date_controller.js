import { Controller } from 'stimulus';

/**
 * @classdesc Manage local behaviour of the header menus for date fields (reset, clear, flatpickr controller).
 */
export default class extends Controller {

	static targets = ['sortDesc', 'sortAsc', 'greaterThanCheckbox', 'greaterThanTextbox', 'lessThanCheckbox', 'lessThanTextbox', 'highlight'];

	static values = {
		id: String,
		filtered: Array,
		sortedDesc: Boolean,
		sortedAsc: Boolean,
		highlighted: Boolean,
	}

	connect() {

		/**
		 * Listener triggered when flatpickr opened.
		 */
		this.element.addEventListener('flatpickr:open', event => {
			event.stopPropagation();
			event.target.parentElement.querySelectorAll('input[type="checkbox"]').forEach(e => {
				e.checked = true;
			});
		});
		
		/**
		 * Listener triggered when flatpickr closed. Manage checkbox status and check coherence between dates.
		 */
		this.element.addEventListener('flatpickr:close', event => {
			event.stopPropagation();
			event.target.parentElement.querySelectorAll('input[type="checkbox"]').forEach(e => {
				e.checked = event.target.value !== '';
			});
			let greaterThan = this.greaterThanTextboxTarget.value.toDate();
			let lessThan = this.lessThanTextboxTarget.value.toDate();
			if (greaterThan && lessThan) {
				if (greaterThan.getTime() > lessThan.getTime()) {
					if (event.target === this.greaterThanTextboxTarget) {
						this.dispatch('setDate', {
							target: this.lessThanTextboxTarget,
							prefix: '',
							
						});
					} else if (event.target === this.lessThanTextboxTarget) {
						this.dispatch('setDate', {
							target: this.greaterThanTextboxTarget,
							prefix: '',
							detail: lessThan,
						});
					}
				}
			}
		});

		/**
		 * Listener triggered on Filter button clicked.
		 */
		this.element.addEventListener('engineering--header:requestFilter', () => {
			let dates = [];
			if (this.greaterThanTextboxTarget.value) {
				dates.push(">" + this.greaterThanTextboxTarget.value);
			}
			if (this.lessThanTextboxTarget.value) {
				dates.push("<" + this.lessThanTextboxTarget.value);
			}
			
			// this.dispatch('highlight', {
			// 	prefix: 'engineering--header--component',
			// 	detail: {
			// 		value: this.highlightTarget.checked?this.idValue:''
			// 	}
			// });
			
			this.dispatch('filter', {
				prefix: 'engineering--header--component',
				detail: {
					key: this.idValue,
					value: dates
				}
			});
		});

		/**
		 * Listener triggered on update requested.
		 */
		this.element.addEventListener('engineering--header:update', event => {
			if (event.detail.filtered !== undefined) {
				this.filteredValue = event.detail.filtered.filter(e => e.key === this.idValue).map(e => e.value).shift();
			}
			if (event.detail.sortedDesc !== undefined) {
				this.sortedDescValue = event.detail.sortedDesc === this.idValue;
			}
			if (event.detail.sortedAsc !== undefined) {
				this.sortedAscValue = event.detail.sortedAsc === this.idValue;
			}
			if (event.detail.highlighted !== undefined) {
				this.highlightedValue = event.detail.highlighted === this.idValue;
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
	clear(event) {
		if (event.target.checked === false) {
			event.target.parentElement.parentElement.querySelectorAll('input[type="text"]').forEach(e => e.value = '');
		}
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
	 * Action when Highlight switch changed.
	 */
	 highlight() {
		this.dispatch('highlight', {
			prefix: 'engineering--header--component',
			detail: {
				value: this.idValue,
			}
		});
	}

	/**
	 * Reset checkboxes and textboxes to filtered value.
	 */
	 #reset() {
		this.#renderTextboxes();
		this.#renderSortedDesc();
		this.#renderSortedAsc();
		this.#renderHighlight();
	}

	#renderTextboxes() {
		this.greaterThanCheckboxTarget.checked = this.filteredValue.filter(v => v.startsWith('>')).length !== 0;
		this.greaterThanTextboxTarget.value = this.filteredValue.filter(v => v.startsWith('>')).toString().substring(1);
		this.lessThanCheckboxTarget.checked = this.filteredValue.filter(v => v.startsWith('<')).length !== 0;
		this.lessThanTextboxTarget.value = this.filteredValue.filter(v => v.startsWith('<')).toString().substring(1);
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

	#renderHighlight() {
		if (this.hasHighlightTarget === true) {
			this.highlightTarget.checked = this.highlightedValue;
		}
	}
	
}
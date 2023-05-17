import { Controller } from '@hotwired/stimulus';

/**
 * @classdesc Manage local behaviour of the header menus for date fields (reset, live search, clear, select all).
 */
export default class extends Controller {

	static targets = ['sortDesc', 'sortAsc', 'liveSearch', 'selectAll', 'checkbox'];

	static values = {
		id: String,
		key: String,
		filtered: Array,
		sortedDesc: Boolean,
		sortedAsc: Boolean,
	}

	connect() {

		/**
		 * Listener triggered on any checkbox clicked to update SelectAll checkbox status.
		 */
		this.checkboxTargets.forEach(e => {
			e.addEventListener('click', this.#updateSelectAll.bind(this));
		});

		/**
		 * Listener triggered on Filter button clicked.
		 */
		this.element.addEventListener('engineering--header:requestFilter', () => {
			
			if (this.checkboxTargets.filter(v => v.checked === false).length === 0) { //all checkbox are checked
				this.selectAllTarget.checked = false;
				this.selectAll();
			}

			let ids = [];
			this.checkboxTargets.forEach(e => {
				if (e.checked === true) {
					ids.push(e.value);
				}
			});

			this.dispatch('filter', {
				prefix: 'engineering--header--component',
				detail: {
					key: this.keyValue,
					value: ids
				}
			});
		});

		/**
		 * Listener triggered on update requested.
		 */
		this.element.addEventListener('engineering--header:update', (event) => {
			if (event.detail.filtered !== undefined) {
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
	 * Action on LiveSearch textbox change to display and check checkboxes dynamically accordingly. 
	 */
	liveSearch(event) {
			
		if (this.liveSearchTarget.value === '') {
			this.clear();
			return;
		}

		this.checkboxTargets.forEach(e => {
			const $container = e.parentElement;
			const $label = $container.querySelector('label');
			if ($label !== null) {
				if ($label.textContent.toLowerCase().includes(this.liveSearchTarget.value.toLowerCase())) {
					e.checked = true;
					$container.style.removeProperty('display');
				} else {
					e.checked = false;
					$container.style.display = 'none';
				}
			}
		});

	}

	/**
	 * Action when Clear live search button clicked.
	 */
	clear() {

		this.liveSearchTarget.value = '';
		this.checkboxTargets.forEach(e => {
			const $container = e.parentElement;
			e.checked = false;
			$container.style.removeProperty('display');
		});

	}

	/**
	 * Action on SelectAll checkbox clicked to check/uncheck all checkboxes.
	 */
	selectAll() {
		this.checkboxTargets.forEach(e => {
			e.checked = this.selectAllTarget.checked;
		});
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

	#updateSelectAll() {
		if (this.checkboxTargets.filter(v => v.checked === true).length === 0) {
			this.selectAllTarget.indeterminate = false;
			this.selectAllTarget.checked = false;
		} else if (this.checkboxTargets.filter(v => v.checked === false).length === 0) {
			this.selectAllTarget.indeterminate = false;
			this.selectAllTarget.checked = true;
		} else {
			this.selectAllTarget.indeterminate = true;
		}
	}

	/**
	 * Reset checkboxes to filtered value.
	 */
	 #reset() {
		this.clear();
		this.#renderCheckboxes();
		this.#renderSortedDesc();
		this.#renderSortedAsc();
	}
	
	#renderCheckboxes() {
		this.checkboxTargets.forEach(e => e.checked = this.filteredValue.includes(e.value));
		this.#updateSelectAll();
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
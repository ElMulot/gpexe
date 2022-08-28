import { Controller } from '@hotwired/stimulus';

/**
 * @classdesc Manage local behaviour of the header menus for fields-picker (reset, live search, clear, select all).
 */
export default class extends Controller {

	static targets = ['name', 'filter', 'liveSearch', 'selectAll', 'checkbox'];

	static values = {
		displayed: Array,
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
			
			let detail = [];
			this.checkboxTargets.forEach(e => {
				if (this.displayedValue.includes(e.dataset.id) === false || e.checked === false) {
					detail.push({
						key: e.dataset.id,
						value: (e.checked)?e.value:null,
					});
				}
			});

			this.dispatch('display', {
				prefix: 'engineering--header--component',
				detail: detail,
			});
			
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
	 * Action when Codename switch changed.
	 */
	toggleName() {
		this.#renderLabels();
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
					$container.style.removeProperty('display');
				} else {
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
		this.filterTarget.disabled = this.selectAllTarget.checked === false;
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
		this.filterTarget.disabled = this.checkboxTargets.filter(v => v.checked === true).length === 0;
	}
	
	/**
	 * Reset checkboxes to displayed value.
	 */
	 #reset() {
		this.#renderCheckboxes();
		this.#renderLabels();
	}

	#renderCheckboxes() {
		this.checkboxTargets.forEach(e => e.checked = this.displayedValue.includes(e.dataset.id));
		this.#updateSelectAll();
	}

	#renderLabels() {
		this.checkboxTargets.forEach(e => {
			const $container = e.parentElement;
			const $label = $container.querySelector('label');
			if ($label !== null) {
				$label.textContent = (this.nameTarget.checked)?e.dataset.codename:e.dataset.title;
				$label.title = (this.nameTarget.checked)?e.dataset.codename:e.dataset.title;
			}
		});
	}
}
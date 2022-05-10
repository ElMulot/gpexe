import { Controller } from 'stimulus';
import UrlParams from 'helpers/url_params_helper';

export default class extends Controller {

	static targets = ['liveSearch', 'selectAll', 'checkbox', 'highlight'];

	static values = {
		codename: String,
		type: String,
	}

	static params = {
		key: Number
	}

	connect() {

		if (this.typeValue === 'date') {
			this.element.addEventListener('flatpickr:open', event => {
				event.stopPropagation();
				event.target.parentElement.querySelectorAll('input[type="checkbox"]').forEach(e => {
					e.checked = true;
				});
			});
			
			this.element.addEventListener('flatpickr:close', event => {
				event.stopPropagation();
				event.target.parentElement.querySelectorAll('input[type="checkbox"]').forEach(e => {
					e.checked = event.target.value !== '';
				});
			});
		}

		this.dispatch('connected');
	}

	sortDesc() {
		this.dispatch('sortDesc', { detail: { value: this.codenameValue } });
	}

	filter(event) {

		if (event.type === 'keypress' && event.which !== 13) {
			return;
		}

		switch (this.typeValue) {
			
			case 'bool':
				this.checkboxTargets.forEach(e => {
					let $input = e.querySelector('input');
					if ($input !== null && $input.checked == true) {
						this.dispatch('filter', { detail: { key: this.codenameValue, value: e.value } });
					}
				});
				break;
			
			case 'text':
			case 'regex':
				if (this.hasLiveSearchTarget === true) {
					this.dispatch('filter', { detail: { key: this.codenameValue, value: this.liveSearchTarget.value } });
				}
				break;

			case 'date':
				let dates = [];
				if (this.hasGreaterThanTarget === true) {
					dates.push(">" + this.greaterThanTarget.value);
				}
				if (this.hasLessThanTarget === true) {
					dates.push("<" + this.lessThanTarget.value);
				}

				this.dispatch('filter', { detail: { key: this.codenameValue, value: dates } });

				if (this.hasHighlightTarget === true) {
					this.dispatch('highlight', { detail: { value: this.getHighlightTarget.checked?this.codenameValue:'' } });
				}

				break;

			case 'list':
				let ids = [];
				this.checkboxTargets.forEach(e => {
					let $input = e.querySelector('input');
					if ($input !== null && $input.checked === true) {
						ids.push($input.value);
					}
				});

				this.dispatch('filter', { detail: { key: this.codenameValue, value: ids } });
				break;
			
			case 'fields_picker':
				this.dispatch('display', { detail: { key: event.params.key, value: event.target.checked == true } });

			case 'filters_picker':
				this.dispatch('filter', { detail: { key: event.params.key, value: event.target.checked == true } });
				break;

		}
		

	}

	sortAsc() {
		this.dispatch('sortAsc', { detail: { value: this.codenameValue } });
	}

	boolChoice({ params }) {
		this.checkboxTargets.forEach(e => {
			let $input = e.querySelector('input');
			if ($input !== null) {
				$input.checked = ($input.value == params.key);
			}
		});
		this.filter();
	}

	liveSearch(event) {

		if (this.hasLiveSearchTarget === true) {
			switch (this.typeValue) {
				case 'text':
				case 'regex':
					break;

				case 'list':
					if (this.liveSearchTarget.value === '') {
						this.clearLiveSearch();
						return;
					}

					this.checkboxTargets.forEach(e => {

						let $label = e.querySelector('label');
						let $input = e.querySelector('input');
						if ($label !== null && $input !== null) {
							if ($label.textContent.toLowerCase().includes(this.liveSearchTarget.value.toLowerCase())) {
								$input.checked = true;
								e.style.removeProperty('display');
							} else {
								$input.checked = false;
								e.style.display = 'none';
							}
						}
					});
					break;
			}
		}

	}

	clearLiveSearch() {

		if (this.hasLiveSearchTarget === true) {
			this.liveSearchTarget.value = '';
			this.checkboxTargets.forEach(e => {
				let $input = e.querySelector('input');
				if ($input !== null) {
					$input.checked = false;
				}
				e.style.removeProperty('display');
			});
		}

	}

	selectAll() {
		this.checkboxTargets.forEach(e => {
			let $input = e.querySelector('input');
			if ($input !== null) {
				$input.checked = this.selectAllTarget.value;
			}
		});
	}
	
}
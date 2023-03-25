import { Controller } from '@hotwired/stimulus';

export default class extends Controller {

	#customOptionTarget = null;

	static targets = ['choice', 'input'];

	static values = {
		customOptionLabel: String,
	}

	connect() {

		this.#customOptionTarget = `<option value="">${this.customOptionLabelValue}</option>`.toElement();
		this.choiceTarget.appendChild(this.#customOptionTarget);

		this.choiceTarget.addEventListener('change', () => this.onSelectChange());
		this.onSelectChange();

		this.dispatch('connected');

	}

	onSelectChange() {
		
		if (this.choiceTarget.selectedOptions[0] === this.#customOptionTarget) {
			this.choiceTarget.style.display = 'none';
			this.inputTarget.style.removeProperty('display');
			this.inputTarget.required = this.choiceTarget.required;
		} else {
			this.choiceTarget.style.removeProperty('display');
			this.inputTarget.style.display = 'none';
		}

    }
}
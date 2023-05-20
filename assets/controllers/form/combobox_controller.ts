import { Controller } from '@hotwired/stimulus';

export default class ComboboxController extends Controller {

	#customOptionTarget: Element|null = null;

	static targets = ['choice', 'input'];

	static values = {
		customOptionLabel: String,
	}

	declare choiceTarget: HTMLSelectElement;
	declare inputTarget: HTMLInputElement;
	declare customOptionLabelValue: string;

	connect(): void
	{
		this.#customOptionTarget = `<option value="">${this.customOptionLabelValue}</option>`.toElement();
		this.choiceTarget.appendChild(this.#customOptionTarget);

		this.choiceTarget.addEventListener('change', () => this.onSelectChange());
		this.onSelectChange();

		this.dispatch('connected');
	}

	onSelectChange(): void
	{	
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
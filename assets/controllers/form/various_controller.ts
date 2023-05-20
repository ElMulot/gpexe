import { Controller } from '@hotwired/stimulus';

export default class VariousController extends Controller {

	#height = '0';

	static targets = ['input', 'placeholder', 'switch'];

	declare inputTarget: HTMLInputElement;
	declare placeholderTarget: HTMLElement;
	declare switchTarget: HTMLInputElement;
	
	connect(): void
	{
		new ResizeObserver(this.onResize.bind(this)).observe(this.inputTarget);
		this.switchTarget.addEventListener('change', () => this.onCheckboxChange());
		this.onResize();
		this.onCheckboxChange();

		this.dispatch('connected');

	}

	onResize(): void
	{
		if (getComputedStyle(this.inputTarget).getPropertyValue('height') !== 'auto') {
			this.#height = getComputedStyle(this.inputTarget).getPropertyValue('height');
		}
		this.placeholderTarget.style.height = this.#height;

	}

	onCheckboxChange(): void
	{	
		if (this.switchTarget.checked === true) {
			this.inputTarget.style.display = 'none';
			this.placeholderTarget.style.removeProperty('display');
			this.inputTarget.parentNode?.insertBefore(this.placeholderTarget, this.inputTarget);
		} else {
			this.inputTarget.style.removeProperty('display');
			this.placeholderTarget.style.display = 'none';
			this.placeholderTarget.parentNode?.insertBefore(this.inputTarget, this.placeholderTarget);
		}

		this.inputTarget.style.display = (this.switchTarget.checked)?'none':'block';
		this.placeholderTarget.style.display = (this.switchTarget.checked)?'block':'none';

    }
}
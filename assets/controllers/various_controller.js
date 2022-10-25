import { Controller } from '@hotwired/stimulus';

export default class extends Controller {

	static targets = ['input', 'variousInput', 'switch'];
	
	connect() {
		
		// this.switchTarget.checked = true;

		this.switchTarget.addEventListener('change', () => this.onCheckboxChange());

		this.onCheckboxChange();

		this.dispatch('connected');

	}

	onCheckboxChange() {
		
		if (this.switchTarget.checked === true) {
			this.inputTarget.style.display = 'none';
			this.variousInputTarget.style.removeProperty('display');
			this.inputTarget.parentNode.insertBefore(this.variousInputTarget, this.inputTarget);
		} else {
			this.inputTarget.style.removeProperty('display');
			this.variousInputTarget.style.display = 'none';
			this.variousInputTarget.parentNode.insertBefore(this.inputTarget, this.variousInputTarget);
		}

		this.inputTarget.style.display = (this.switchTarget.checked)?'none':'block';
		this.variousInputTarget.style.display = (this.switchTarget.checked)?'block':'none';

    }
}
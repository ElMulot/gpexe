import { Controller } from 'stimulus';

export default class extends Controller {

	static values = {
		query: Object,
	}

	connect() {
		this.dispatch('connected');
	}

	queryValueChanged() {
		this.dispatch('updated', { detail: { query: this.queryValue } });
	}

}
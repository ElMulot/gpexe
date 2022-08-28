import { Controller } from '@hotwired/stimulus';
import { Tab } from 'bootstrap';

export default class extends Controller {
	
	static targets = ['button'];

	static values = {
		selected: Number,
	}

	static param = {
		id: Number,
	}

	connect() {

		if (this.buttonTargets.length === 0) { //no series to display
			document.getElementById('serie_label').classList.add('disabled');
			Tab.getInstance(document.getElementById('view_label')).show();
		} else {
			document.getElementById('serie_label').classList.remove('disabled');
			this.updateClasses(this.selectedValue);
		}

		this.dispatch('connected');
	}

	update({ params }) {
		this.updateClasses(params.id);
	}

	updateClasses(selected) {

		var ids = [];
		
		this.buttonTargets.forEach(e => {
			if (selected === 0 || e.getAttribute('data-engineering--serie-id-param') == selected) {
				e.classList.remove('btn-primary');
				e.classList.add('btn-outline-primary');
				ids.push(Number(e.getAttribute('data-engineering--serie-id-param')));
			} else {
				e.classList.remove('btn-outline-primary');
				e.classList.add('btn-primary');
			}
		});
		
		this.dispatch('update', { detail: { ids: ids } });
	}
}
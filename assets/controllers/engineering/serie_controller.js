import { Controller } from '@hotwired/stimulus';
import { Tab } from 'bootstrap';

export default class extends Controller {
	
	static targets = ['button'];

	static values = {
		series: Array,
		display: Object,
		filters: Object,
		resultsPerPage: Number,
		sortDesc: String,
		sortAsc: String,
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
			this.updateClasses(this.filtersValue['serie']);
		}

		this.dispatch('connected');
	}

	update({ params }) {
		this.updateClasses([params.id]);
	}

	updateClasses(selectedSeries) {
		
		this.buttonTargets.forEach(e => {
			let id = e.getAttribute('data-engineering--serie-id-param');

			if (selectedSeries.some(v => v == id) === true) {
				e.classList.remove('btn-primary');
				e.classList.add('btn-outline-primary');
			} else {
				e.classList.remove('btn-outline-primary');
				e.classList.add('btn-primary');
			}
		});

		this.dispatch('update', { detail: { series: this.seriesValue,
											display: this.displayValue,
											filters: {...this.filtersValue, ...{'serie': selectedSeries}},
											resultsPerPage: this.resultsPerPageValue,
											sortDesc: this.sortDescValue,
											sortAsc: this.sortAscValue} });
	}
}
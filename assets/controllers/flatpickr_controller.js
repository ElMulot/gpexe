import Flatpickr from 'stimulus-flatpickr';
import i18n from 'i18n';

import { English } from "flatpickr/dist/l10n/default.js"
import { French } from "flatpickr/dist/l10n/fr.js"

require("styles/flatpickr.scss");

export default class extends Flatpickr {
	
    static values = {
        mandatory: {
			type: Boolean,
			default: false,
		},
		todayBtn: {
			type: Boolean,
			default: true,
		},
		disableWeekend: {
			type: Boolean,
			default: true,
		},
		dateFormat: {
			type: String,
			default: 'd-m-Y',
		}
    }

	initialize() {
		
		this.config = {
			dateFormat: this.dateFormatValue,
			weekNumbers: true,
			disable: this.disableWeekendValue?[date => date.getDay() === 0 || date.getDay() === 6]:[],
			locale: this.getLocale(),
		}
		
	}

	connect() {

		super.connect();
		this.createClearButton();
		this.createTodayButton();
		
		this.fp.input.addEventListener('setDate', (event) => {
			this.fp.setDate(event.detail);
		});

		this.dispatch('connected');

	}

	open() {
		this.dispatch('open');
	}

	close() {
		this.dispatch('close');
	}

	getLocale() {

		if (document.documentElement.hasAttribute('lang') === true) {
			const locale = document.documentElement.getAttribute('lang');
			switch (locale) {
				case 'fr_FR':
					return French;
				default:
					return English;
			}
		}

		return English;
	}

	createClearButton() {
		const $clearButton = `<button type="button" class="btn btn-sm btn-primary m-2">${i18n.t('clear')}</button>`.toElement();
		$clearButton.addEventListener('click', (event) => {
			event.preventDefault();
			event.stopPropagation();
			this.fp.clear();
			this.fp.close();
		});
		this.fp.calendarContainer.appendChild($clearButton);
	}

	createTodayButton() {
		const $todayButton = `<button type="button" class="btn btn-sm btn-primary m-2">${i18n.t('today')}</button>`.toElement();
		$todayButton.addEventListener('click', (event) => {
			event.preventDefault();
			event.stopPropagation();
			let today = new Date();
			let iteration = 0;
			while (this.fp.isEnabled(today) === false && iteration < 7) {
				iteration++;
				today = today.setDate(today.getDate() + 1);
			}
			this.fp.setDate(today, true);
			this.fp.close();
		});
		this.fp.calendarContainer.appendChild($todayButton);
	}

	// all flatpickr hooks are available as callbacks in your Stimulus controller
	// change(selectedDates, dateStr, instance) {
	// 	console.log('the callback returns the selected dates', selectedDates)
	// 	console.log('but returns it also as a string', dateStr)
	// 	console.log('and the flatpickr instance', instance)
	// }
}
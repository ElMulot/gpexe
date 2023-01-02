import { Controller } from '@hotwired/stimulus';
import Flatpickr from 'flatpickr';
import i18n from 'i18n';

import { english } from "flatpickr/dist/l10n/default.js"
import { French } from "flatpickr/dist/l10n/fr.js"

require("styles/flatpickr.scss");

export default class extends Controller {
	
    #fp;
	
	static values = {
        mandatory: {
			type: Boolean,
			default: false,
		},
		todayButton: {
			type: Boolean,
			default: false,
		},
		disableWeekend: {
			type: Boolean,
			default: false,
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

		this.#fp = Flatpickr(this.element, this.config);

		if (this.mandatoryValue === false) {
			this.createClearButton();
		}

		if (this.todayButtonValue === true) {
			this.createTodayButton();
		}

		// super.connect();
		// this.createClearButton();
		// this.createTodayButton();
		
		/**
		 * Listener triggered on setDate event (event.detail must be a Date object)
		 */
		this.element.addEventListener('setDate', (event) => {
			this.#fp.setDate(event.detail, true);
		});

		this.dispatch('connected');

	}

	// open() {
	// 	this.dispatch('open');
	// }

	// close() {
	// 	this.dispatch('close');
	// }

	/**
	 * Get Locale from <html> attribute
	 */
	getLocale() {

		if (document.documentElement.hasAttribute('lang') === true) {
			const locale = document.documentElement.getAttribute('lang');
			switch (locale) {
				case 'fr_FR':
					return French;
				default:
					return english;
			}
		}

		return English;
	}

	/**
	 * Add a clear button
	 */
	createClearButton() {
		const $clearButton = `<button type="button" class="btn btn-sm btn-primary m-2">${i18n.t('clear')}</button>`.toElement();
		$clearButton.addEventListener('click', (event) => {
			event.preventDefault();
			event.stopPropagation();
			this.#fp.clear();
			this.#fp.close();
		});
		this.#fp.calendarContainer.appendChild($clearButton);
	}

	/**
	 * Add a today button
	 */
	createTodayButton() {
		const $todayButton = `<button type="button" class="btn btn-sm btn-primary m-2">${i18n.t('today')}</button>`.toElement();
		$todayButton.addEventListener('click', (event) => {
			event.preventDefault();
			event.stopPropagation();
			let today = new Date();
			let iteration = 0;
			while (this.#fp.isEnabled(today) === false && iteration < 7) {
				iteration++;
				today = new Date(today.setDate(today.getDate() + 1));
			}
			this.#fp.setDate(today, true);
			this.#fp.close();
		});
		this.#fp.calendarContainer.appendChild($todayButton);
	}

	// all flatpickr hooks are available as callbacks in your Stimulus controller
	// change(selectedDates, dateStr, instance) {
	// 	console.log('the callback returns the selected dates', selectedDates)
	// 	console.log('but returns it also as a string', dateStr)
	// 	console.log('and the flatpickr instance', instance)
	// }
}
import { Controller } from '@hotwired/stimulus';
import flatpickr from 'flatpickr';
import "styles/flatpickr.scss";
import i18n from 'i18n';

import { english as English } from "flatpickr/dist/l10n/default.js"
import { French } from "flatpickr/dist/l10n/fr.js"

export default class FlatpickrController extends Controller
{
	
    #fp: flatpickr.Instance|null = null;
	#config: Object = {};
	
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

	declare mandatoryValue: boolean;
	declare todayButtonValue: boolean;
	declare disableWeekendValue: boolean;
	declare dateFormatValue: string;

	initialize(): void
	{
		this.#config = {
			dateFormat: this.dateFormatValue,
			weekNumbers: true,
			disable: this.disableWeekendValue?((date: Date) => date.getDay() === 0 || date.getDay() === 6):[],
			locale: this.getLocale(),
		}
		
	}

	connect(): void
	{

		this.#fp = flatpickr(this.element, this.#config);

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
		this.element.addEventListener('setDate', (event: CustomEvent) => {
			if (this.#fp) {
				this.#fp.setDate(event.detail, true);
			}
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
	getLocale(): flatpickr.CustomLocale
	{
		const locale = document.documentElement.getAttribute('lang');
		switch (locale) {
			case 'fr_FR':
				return French;
			default:
				return English;
		}
	}

	/**
	 * Add a clear button
	 */
	createClearButton(): void
	{
		const $clearButton = `<button type="button" class="btn btn-sm btn-primary m-2">${i18n.t('clear')}</button>`.toElement();
		$clearButton.addEventListener('click', (event: Event) => {
			event.preventDefault();
			event.stopPropagation();
			this.#fp?.clear();
			this.#fp?.close();
		});
		this.#fp?.calendarContainer.appendChild($clearButton);
	}

	/**
	 * Add a today button
	 */
	createTodayButton(): void
	{
		const $todayButton = `<button type="button" class="btn btn-sm btn-primary m-2">${i18n.t('today')}</button>`.toElement();
		$todayButton.addEventListener('click', (event: Event) => {
			event.preventDefault();
			event.stopPropagation();
			let today = new Date();
			let iteration = 0;
			while (this.#fp?.isEnabled(today) === false && iteration < 7) {
				iteration++;
				today = new Date(today.setDate(today.getDate() + 1));
			}
			this.#fp?.setDate(today, true);
			this.#fp?.close();
		});
		this.#fp?.calendarContainer.appendChild($todayButton);
	}

	// all flatpickr hooks are available as callbacks in your Stimulus controller
	// change(selectedDates, dateStr, instance) {
	// 	console.log('the callback returns the selected dates', selectedDates)
	// 	console.log('but returns it also as a string', dateStr)
	// 	console.log('and the flatpickr instance', instance)
	// }
}
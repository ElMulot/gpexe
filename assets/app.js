// CSS import
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';
import 'helpers/bootstrap_helper';
import 'helpers/turbo_helper';

// import 'helpers/turbo_debug';


//---------------------
// JS overrides
//---------------------

/**
 * Format a date as per 'd-m-Y' format.
 * @return {string} - The formatted date string.
 */
Date.prototype.format = function() {
	
	day = this.getDate();
	month = this.getMonth() + 1;
	year = this.getFullYear();
	
	if (month < 10) month = '0' + month;
	if (day < 10) day = '0' + day;
	
	return [day, month, year].join('-');
	
};

/**
 * Convert into Date object a string as per format d-m-Y.
 * @returns {Date|null} - The Date object
 */
String.prototype.toDate = function () {
	let s = /\d{2}-\d{2}-\d{4}/g.exec(this)
	if (s) {
		const [day, month, year] = s[0].split("-");
		let d = new Date(year, month - 1, day);
		return (d instanceof Date && isNaN(d) === false)?d:null;
	}
	return null;
};


/**
 * Convert an html string to a node.
 * @return {Node} - A node, or null if string is empty.
 */
String.prototype.toElement = function() {

	let template = document.createElement('template');
	template.innerHTML = this.trim();
	return template.content.firstChild;

}

/**
 * Determine whether the passed value is an Object.
 * @param {} value - The value to be checked.
 * @return {boolean} - True if the value is an Object; otherwise, false.
 */
Object.isObject = function (value) {
	return value != null && value.constructor.name === "Object";
}

/**
 * Determine whether the passed value is an Object.
 * @param {string} type - The name of the event.
 * @param {Object} options - An object with the options of CustomEvent constructor. Option bubbles is defined true by default.
 * @param {Object} [controller] - A stimulus controller to attach to the event.
 * @return {boolean} - False if event is cancelable, and at least one of the event handlers which received event called Event.preventDefault(). Otherwise true.
 */
//  Element.prototype.dispatch = function (type, options, controller) {
// 	options.bubbles = options.bubbles || true;
// 	if (controller) {
// 		type = controller.context.scope.identifier + ':' + type;
// 	}

// 	const event = new CustomEvent(type, options);
// 	return this.dispatchEvent(event);
// }

/**
 * Convert a size in rem into px.
 * @returns {Number} - The value converted in px.
 */
Number.prototype.remToPx = function() {
	return Math.max(0, Math.ceil(this * parseFloat(getComputedStyle(document.documentElement).fontSize)));
}

/**
 * Convert a size in px into rem.
 * @returns {Number} - The value converted in rem.
 */
Number.prototype.pxToRem = function(i) {
	return Math.max(0, Math.ceil(this / parseFloat(getComputedStyle(document.documentElement).fontSize)));
}

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
 * @return {string} The formatted date string.
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
 * Convert an html string to a node.
 * @return {Node} A node, or null if string is empty
 */
String.prototype.toElement = function() {

	let template = document.createElement('template');
	template.innerHTML = this.trim();
	return template.content.firstChild;

}
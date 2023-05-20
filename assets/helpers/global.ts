//---------------------
// JS overrides
//---------------------

/**
 * Determine wheter an array or an object is empty
 * @param {*} value  - The array or the object to test
 * @returns {boolean} - True if the object is empty
 */
global.isEmpty = function(value: any): boolean
{
	return (
		value === null ||
		(Object.getPrototypeOf(value) === Array.prototype && value.length === 0) ||
		(Object.getPrototypeOf(value) === Object.prototype && Object.getOwnPropertyNames(value).length === 0 && Object.getOwnPropertySymbols(value).length === 0)
	);
}

/**
 * Convert a size in rem into px.
 * @returns {Number} - The value converted in px.
 */
Number.prototype.remToPx = function(this: number): number
{
	return Math.max(0, Math.ceil(this * parseFloat(getComputedStyle(document.documentElement).fontSize)));
}

/**
 * Convert a size in px into rem.
 * @returns {Number} - The value converted in rem.
 */
Number.prototype.pxToRem = function(this: number): number
{
	return Math.max(0, Math.ceil(this / parseFloat(getComputedStyle(document.documentElement).fontSize)));
}

/**
 * Convert into Date object a string as per format d-m-Y.
 * @returns {Date|null} - The Date object
 */
String.prototype.toDate = function (this: string): Date|null
{
	let s = /\d{2}-\d{2}-\d{4}/g.exec(this)
	if (s) {
		const [day, month, year] = s[0].split("-");
		let d = new Date(Number(year), Number(month) - 1, Number(day));
		return (d instanceof Date)?d:null;
	}
	return null;
};

/**
 * Convert an html string to a node.
 * @return {Element} - A node, or null if string is empty.
 */
String.prototype.toElement = function(this: string): Element
{
	let template = document.createElement('template');
	template.innerHTML = this.trim();

	if (template.content.firstChild === null) {
		throw new Error('Internal error');
	}

	return template.content.firstChild as Element;
}

/**
 * Determine whether the passed value is an Object.
 * @param {} value - The value to be checked.
 * @return {boolean} - True if the value is an Object; otherwise, false.
 */
Object.isObject = function (value: any): boolean
{
	return value != null && value.constructor.name === "Object";
}

Element.prototype.clear = function(): void
{
	this.innerHTML = '';
}


export { };
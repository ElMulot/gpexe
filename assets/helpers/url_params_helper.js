import { v4 as uuidv4 } from 'uuid';

const UrlParams = class extends URLSearchParams {

	constructor(paramsString) {
		super(paramsString);
	}

	/**
	 * Determine if key or key[] or key[...] exists.
	 * @param {string} key
	 * @returns {boolean} True if key or key[] or key[...] exists.
	 */
	has(key) {

		const safeKey = this.#getSafeKey(key);
		if (super.has(safeKey) === true) {
			return true;
		} else if (super.has(safeKey + '[]') === true) {
			return true;
		} else {
			return [...super.keys()].some(k => k.startsWith(safeKey + '['));
		}
	}

	/**
	 * Return values associated to key or key[] or key[...].
	 * @param {string} key
	 * @returns {null|String|Object} A string or an object if the given search parameter is found; otherwise, null.
	 */
	get(key) {

		const safeKey = this.#getSafeKey(key);
		if (super.has(safeKey) === true) {
			return super.get(safeKey) || '';
		} else if (super.has(safeKey + '[]') === true) {
			return super.getAll(safeKey + '[]') || [];
		} else if (this.has(safeKey) === true) {
			console.warn("url_params_helper: Utilisation d'une fonction expérimentale !")
			var result = {};
			[...super.entries()].filter(([k, v]) => k.startsWith(safeKey + '[') && k.endsWith(']')).map(([k, v]) => {
				let matches = k.matchAll(/(?<=\[)[^\]]*(?=\])/g);
				var tmp = result;
				Array.from(matches, m => m[0]).forEach((m, i, a) => {
					
					if (i === a.length-1) {
						if (m === '') {
							if (Object.isObject(tmp) === true) {
								Object.assign(tmp, {[uuidv4()]: v});
							} else if (Array.isArray(tmp) === true) {
								tmp.push(v);
							} else {
								tmp = [tmp, v];
							}
						} else {
							if (tmp[m] === undefined) {
								tmp[m] = v;
							} else if (Object.isObject(tmp[m]) === true) {
								Object.assign(tmp[m], {[uuidv4()]: v});
							} else if (Array.isArray(tmp[m]) === true) {
								tmp[m].push(v);
							} else {
								tmp[m] = [tmp[m], v];
							}
						}
					} else if (m !== '') {
						if (tmp[m] === undefined) {
							tmp[m] = [];
						} else if (Object.isObject(tmp[m]) === false && Array.isArray(tmp[m]) === false) {
							if (a[i+1] === '') {
								Object.assign(tmp, {[m]: [tmp[m]]});
							} else {
								Object.assign(tmp, {[m]: {[uuidv4()]: tmp[m]}});
							}
						}
						tmp = tmp[m];
					}
				});
			});
			return result;
		} else {
			return null;
		}
	}

	/**
	 * Sets the value associated with a given search parameter to the given value.
	 * If value is null, delete the given search parameter and all its associated values, from the list of all search parameters.
	 * @param {String} key 
	 * @param {*} value A Number, a String, an Array or an Object.
	 */
	set(key, value) {

		const safeKey = this.#getSafeKey(key);

		if (Object.isObject(value)) {
			[...super.keys()].filter(k => k.startsWith(safeKey + '[')).forEach(k => this.delete(k));
			Object.entries(value).forEach(([k, v]) => this.set(safeKey + '[' + k + ']', v));
		} else if (Array.isArray(value)) {
			super.delete(safeKey + '[]');
			value.forEach(v => super.append(safeKey + '[]', v));
		} else if (value !== null) {
			super.set(safeKey, value);
		} else {
			this.delete(safeKey);
		}
	}

	/**
	 * Appends a specified key/value pair as a new search parameter.
	 * @param {String} key 
	 * @param {*} value A Number, a String, an Array or an Object.
	 */
	append(key, value) {

		const safeKey = this.#getSafeKey(key);

		if (Object.isObject(value)) {
			Object.entries(value).forEach(([k, v]) => this.append(safeKey + '[' + k + ']', v));
		} else if (Array.isArray(value)) {
			value.forEach((v, k) => super.append(safeKey + '[]', v));
		} else if (value !== null) {
			super.append(safeKey, value);
		}
	}

	/**
	 * Deletes the given search parameter and all its associated values, from the list of all search parameters. 
	 * @param {String} key 
	 */
	delete(key) {
		const safeKey = this.#getSafeKey(key);
		super.delete(safeKey);
		super.delete(safeKey + '[]');
	}

	/**
	 * Deletes all search parameters. 
	 */
	deleteAll() {
		[...this.keys()].forEach(k => {
			super.delete(k);
		});
	}

	#getSafeKey(key) {
		const safeKey = key.replace(/(\S+)\[\]/, '$1');
		if (safeKey === '') {
			throw new Error('Invalid key for UrlParams.');
		}
		return safeKey;
	}
}

export default UrlParams;
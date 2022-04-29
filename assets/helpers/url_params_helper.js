const UrlParams = class extends URLSearchParams {

	constructor(paramsString) {
		super(paramsString);
	}

	has(key) {
		
		key = this.#getSafeKey(key);
		if (super.has(key) === true) {
			return true;
		} else {
			return super.has(key + '[]');
		}
	}
	
	get(key) {

		key = this.#getSafeKey(key);

		if (super.has(key) === true) {
			return super.get(key) || '';
		} else if (super.has(key + '[]') === true) {
			return super.getAll(key + '[]') || [];
		} else {
			return '';
		}
	}
	
	set(key, value) {

		key = this.#getSafeKey(key);

		if (key == 'view') {
			this.deleteAll();
		}
		
		if (Array.isArray(value)) {
			value.forEach(v => super.set(key + '[]', value));
		} else {
			super.set(key, value);
		}
	}
	
	append(key, value) {

		key = this.#getSafeKey(key);

		if (key == 'view') {
			this.deleteAll();
		}

		if (Array.isArray(value)) {
			value.forEach(v => super.append(key + '[]', value));
		} else {
			super.set(key, value);
		}
	}
		
	delete(key) {

		key = this.#getSafeKey(key);

		super.delete(key);
	}

	deleteAll() {
		for (let e of this.entries()) {
			super.delete(e[0]);
		}
	}

	#getSafeKey(key) {
		const safeKey = key.replace(/(\S+)\[\]/, '$1');
		if (safeKey === '') {
			throw new Error("Error : invalid key for UrlParams.");
		}
		return safeKey;
	}
}

export default UrlParams;
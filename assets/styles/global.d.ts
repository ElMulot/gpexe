declare global {
	
	interface String {
		toDate(): Date|null,
		toElement(): ChildNode|null,
	}

	interface Object {
		isObject(value: any): boolean,
	}


	interface Number {
		remToPx(): number,
		pxToRem(): number,
	}

	function isEmpty(value: any): boolean;
}

export {};
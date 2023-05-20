interface CustomEventListener {
	(this: Element, event: CustomEvent): void;
}

declare global {
	
	function isEmpty(value: any): boolean;
	
	interface Number {
		remToPx(): number,
		pxToRem(): number,
	}

	interface String {
		toDate(): Date|null,
		toElement(): Element,
	}
	
	interface Object {
		isObject(value: any): boolean,
	}

	interface Document {
		addEventListener(type: string, listener: CustomEventListener, options?: boolean | AddEventListenerOptions): void;
	}

	interface Element {
		clear(): void,
		addEventListener(type: string, listener: CustomEventListener, options?: boolean | AddEventListenerOptions): void;
	}
}

export {};
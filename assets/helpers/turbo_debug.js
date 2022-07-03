const TurboDebug = class {
    
    constructor() {

        document.addEventListener('turbo:click', (event) => {
            this.executeWithEvent(event);
        });

        document.addEventListener('turbo:before-visit', (event) => {
            this.executeWithEvent(event);
        });

        document.addEventListener('turbo:visit', (event) => {
            this.executeWithEvent(event);
        });

        document.addEventListener('turbo:submit-start', (event) => {
            this.executeWithEvent(event);
        });

        document.addEventListener('turbo:before-fetch-request', (event) => {
            this.executeWithEvent(event);
        });

		document.addEventListener('turbo:before-fetch-response', (event) => {
            this.executeWithEvent(event);
        });

		document.addEventListener('turbo:submit-end', (event) => {
            this.executeWithEvent(event);
        });

		document.addEventListener('turbo:before-cache', (event) => {
            this.executeWithEvent(event);
        });

		document.addEventListener('turbo:before-render', (event) => {
            this.executeWithEvent(event);
        });

		document.addEventListener('turbo:before-stream-render', (event) => {
            this.executeWithEvent(event);
        });

		document.addEventListener('turbo:render ', (event) => {
            this.executeWithEvent(event);
        });

		document.addEventListener('turbo:load ', (event) => {
            this.executeWithEvent(event);
        });

		document.addEventListener('turbo:frame-render', (event) => {
            this.executeWithEvent(event);
        });

		document.addEventListener('turbo:frame-load', (event) => {
            this.executeWithEvent(event);
        });

    }

	executeWithEvent(event) {
		console.log(this.getRelative(Date.now()).toLocaleString('fr')  + ' : ' + event.type);
        console.log(event);
	}

	getRelative(number) {
		number -= Math.floor(number/1000000) * 1000000;
		number = Math.floor(number/100)/10;
		return number;
	}

}

export default new TurboDebug();
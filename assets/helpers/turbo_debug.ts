const TurboDebug = class
{
	constructor()
	{

		document.addEventListener('turbo:click', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:before-visit', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:visit', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:submit-start', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:before-fetch-request', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:before-fetch-response', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:submit-end', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:before-cache', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:before-render', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:before-stream-render', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:render ', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:load ', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:frame-render', (event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:frame-load', (event: Event) => {
			this.executeWithEvent(event);
		});

		document.addEventListener('turbo:fetch-request-error', (event: Event) => {
			this.executeWithEvent(event);
		});

	}

	executeWithEvent(event: Event): void
	{
		console.log(this.getRelative(Date.now()).toLocaleString('fr')  + ' : ' + event.type);
		console.log(event);
	}

	getRelative(number: number): number
	{
		number -= Math.floor(number/1000000) * 1000000;
		number = Math.floor(number/100)/10;
		return number;
	}

}

export default new TurboDebug();
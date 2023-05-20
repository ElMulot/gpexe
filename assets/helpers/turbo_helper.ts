import * as Turbo from '@hotwired/turbo';
import i18n from 'i18n';

// ---------------------------------------------------------------------------------------------------------------------
// |                    |            Drive             |              Frame            |             Stream            |
// ---------------------------------------------------------------------------------------------------------------------
// |      Request       | X-Requested-With (js)        | X-Requested-With (js)         | X-Requested-With (js)         |
// |                    |                              | Turbo-Frame (js*)             | Turbo-Stream-Replace (js)     |
// |                    |                              |                               |                               |
// ---------------------------------------------------------------------------------------------------------------------
// |      Response      |                              | Turbo-Frame (php)             | Turbo-Stream-Replace (php)    |
// |                    |                              | Turbo-Location (php)          |                               |
// ---------------------------------------------------------------------------------------------------------------------
//
// *Natively added by Turbo


const TurboHelper = class
{

	constructor()
	{

		//loading animation for instant loading turbo-frame
		document.querySelectorAll('turbo-frame[src]').forEach((e: Element) => {
			this.renderLoading(e);
		});

		//clear document before caching
		document.addEventListener('turbo:before-cache', () => {
			this.closeAllModals();
			this.clearLoadingComponents();
			this.emptyFrames();
		});

		const button = document.createElement('button')

		document.addEventListener('turbo:before-fetch-request', (event: Turbo.TurboBeforeFetchRequestEvent) => {
			
			var $frame: HTMLElement|null;

			//add in response specific headers
			// -------------------------------------------------------------------------------------------------------------------------
			// |                       When                      |        event.target       |      event.explicitOriginalTarget       |
			// -------------------------------------------------------------------------------------------------------------------------
			// | clicking on a link                              |  <html> element           |  <a> element                            |
			// | clicking on a link with turbo-frame attribute   |  <turbo-frame> element    |  <a> element                            |
			// | submitting a form with button Submit            |  <form> element           |  Submit <button> or <a> element         |
			// | submitting a form with key press Enter          |  <form> element           |  <input> element                        |
			// | modifying src attribute in js                   |  <turbo-frame> element    |  <any> element that initiate the action |
			// -------------------------------------------------------------------------------------------------------------------------
			
			// event.detail.fetchOptions.headers['X-Requested-With'] = 'XMLHttpRequest';
			
			// const target = (event.target instanceof HTMLFormElement)?event.target:event.explicitOriginalTarget;

			//get data-turbo-* attribute on both event.target and event.explicitOriginalTarget and add it in the request header.
			//in case of conflict, target has priority
			//if target is the <html> element, only explicitOriginalTarget is used

			const target = event.target as HTMLElement|null;
			//todo : à vérifier si explicitOriginalTarget est équivalent à currentTarget
			const explicitOriginalTarget = event.currentTarget as HTMLElement|null;

			if (target === null || explicitOriginalTarget === null) {
				console.error('Internal error');
				event.preventDefault();
				return false;
			}

			if (target instanceof HTMLBodyElement === true) {
				var dataset = Object.entries(explicitOriginalTarget.dataset);
			} else {
				var dataset = [...Object.entries(explicitOriginalTarget.dataset), ...Object.entries(target.dataset)];
			}

			const headers = new Headers(event.detail.fetchOptions.headers);
			
			dataset.forEach(([k, d]) => {
				if (k.match('^turbo') !== null && d) {
					headers.set('Turbo-' + (k.match(/([A-Z][a-z]+)/g) ?? []).join('-'), d);
				}
			});
			
			const frameId = headers.get('Turbo-Frame') ?? '';
			const append = headers.get('Turbo-Append')?true:false;
			
			event.detail.fetchOptions.headers = headers;

			//determination of the targeted frame
			if (!frameId || frameId === '_top') {
				//if frame is not defined or if the whole page must be replaced, place a loading animation in the center of the page
				$frame = document.body;
			} else if (frameId === '_self') {
				//if _self is defined, clear the turbo-frame and place a loading animation in the center of instance
				//to avoid this behaviour, explicitly specify the turbo-frame id
				$frame = event.target as HTMLElement|null;
			} else {
				//if turbo-frame id is defined, append a loading animation
				var $frame = document.getElementById(frameId);
				if ($frame === null) {
					console.error(`The page has no matching <turbo-frame id="${frameId}"> element`);
					event.preventDefault();
					return false;
				}
			}

			if ($frame === null) {
				console.error('Internal error');
				event.preventDefault();
				return false;
			}

			//if the targeted frame contain a modal, place the loader on the body
			if ([...$frame.children].some(e => e.classList.contains('modal'))) {
				$frame = document.body;
			}
			
			//clear the targeted frame
			// console.log($frame.innerHTML);
			if (append === false && $frame instanceof HTMLBodyElement === false) {
				$frame.clear
			}
			// console.log($frame.innerHTML);

			this.renderLoading($frame);
			
		});

		document.addEventListener('turbo:before-fetch-response', (event: Turbo.TurboBeforeFetchResponseEvent) => {

			//display error message from Symfony, except if form error (status code 422)
			if (event.detail.fetchResponse.failed && event.detail.fetchResponse.response.status !== 422) {
				if (event.detail.fetchResponse.response.headers.get('Turbo-Frame')) {
					this.renderErrorMessage(event);
					event.preventDefault();
					return;
				}
			}

			//if stream, disable the loading animation
			// if (event.detail.fetchResponse.response.headers.get('content-type').includes('turbo-stream')) {
				this.clearLoadingComponents();
			// }

			//redirect to a full page (for instance redirect to login page if user is not yet logged in)
			const fetchResponse = event.detail.fetchResponse;
			const redirectLocation = fetchResponse.response.headers.get('Turbo-Location');
			if (redirectLocation) {
				event.preventDefault();
				Turbo.clearCache();
				Turbo.visit(redirectLocation);
				return;
			}
		});

		document.addEventListener('turbo:submit-end', (event: Turbo.TurboSubmitEndEvent) => {
			
			//in case a successfull form submission, close the modal
			if (event.detail.success) {
				const frameId = event.detail.formSubmission.fetchRequest.headers['Turbo-Frame'];
				document.querySelectorAll(`#${frameId} .modal`).forEach((e) => e.dispatchEvent(new Event('modal:close')));
			}
		});

		document.addEventListener('turbo:frame-render', (event: Turbo.TurboFrameRenderEvent) => {

			const target = event.target as HTMLElement|null;

			//open the modal in the turbo-frame
			if (target !== null) {
				[...target.children].forEach(e => {
					if (e.classList.contains('modal')) {
						e.dispatchEvent(new Event('modal:open'));
					}
				});
			}
			
			//loading animation for instant loading turbo-frame
			document.querySelectorAll('turbo-frame[src][busy]').forEach(e => this.renderLoading(e));
		});
	}

	closeAllModals() {
		if (document.body.classList.contains('modal-open')) {
			document.querySelectorAll('.modal').forEach(e => e.dispatchEvent(new Event('modal:dispose')));
		}
	}

	reenableSubmitButtons() {
		document.querySelectorAll('.turbo-submit-disabled').forEach(e => {
			e.toggleAttribute('disabled', false);
			e.classList.remove('turbo-submit-disabled');
		});
	}

	clearLoadingComponents() {
		document.querySelectorAll('frame-loading-component').forEach(e => e.remove());
		document.querySelectorAll('loading-component').forEach(e => e.remove());
		document.querySelectorAll('#navbarContent').forEach(e => e.classList.remove('invisible'));
	}

	emptyFrames() {
		document.querySelectorAll('turbo-frame').forEach(e => e.clear());
	}

	renderLoading(e: Element = document.body) {

		//hide navbar in case of a full page navigation
		if (e instanceof HTMLBodyElement) {
			document.querySelectorAll('#navbarContent').forEach(e => e.classList.add('invisible'));
			if (document.getElementsByTagName('loading-component').length === 0) {
				document.body.appendChild(document.createElement('loading-component'));
			}
		} else {
			if (e.getElementsByTagName('frame-loading-component').length === 0) {
				e.appendChild(document.createElement('frame-loading-component'));
			}
		}
	}

	renderErrorMessage(event: Turbo.TurboBeforeFetchResponseEvent) {

		const frameId = event.detail.fetchResponse.response.headers.get('Turbo-Frame');
		const $frame = document.getElementById(frameId ?? '');

		if (!$frame) {
			return;
		}

		event.detail.fetchResponse.responseHTML.then((html) => {
			
			if (html === undefined) {
				return;
			}

			const responseHTML = new DOMParser().parseFromString(html, 'text/html');
			const fullRender = ($frame.clientWidth > 720);

			const $traceBox = responseHTML.querySelector('[href="#trace-box-1"]');
			const $exceptionHttp = responseHTML.querySelector('.exception-http');

			const $exceptionMessageWrapper = responseHTML.querySelector('.exception-message-wrapper > div > h1');
			const $traceFilePath = responseHTML.querySelector('#trace-html-1 span.block.trace-file-path');
			const $traceHtml = responseHTML.querySelector('#trace-html-1-0');

			var header: string = '';
			var title: string = '';
			var content: string = '';

			if (fullRender === true) {
				if ($traceBox && $exceptionHttp) {
					header = $traceBox.innerHTML + $exceptionHttp.innerHTML;
				}
				if ($exceptionMessageWrapper && $traceFilePath) {
					title = $exceptionMessageWrapper.innerHTML +
						'<br />' +
						'<small>' +
							$traceFilePath.innerHTML +
						'</small>';
				}
				if ($traceHtml) {
					content = $traceHtml.innerHTML;
				}

			} else {
				if ($traceBox) {
					header = $traceBox.innerHTML;
				}
				if ($exceptionMessageWrapper && $traceFilePath) {
					content = $exceptionMessageWrapper.innerHTML +
						'<br />' +
						'<small>' +
							$traceFilePath.innerHTML +
						'</small>';
				}
			}

			if ([...$frame.children].some(e => e.classList.contains('modal'))) {
				
				$frame.innerHTML =
					'<div id="test" class="modal fade" tabindex="-1" aria-labelledby="error_modal_label" aria-hidden="true" data-controller="modal">' +
						'<div class="modal-dialog">' +
							'<div class="modal-content border-danger">' +
								'<div class="modal-header">' +
									'<h5 class="modal-title" id ="error_modal_label">' +
										header +
									'</h5>' +
									'<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="' + i18n.t('close') + '"></button>' +
								'</div>' +
								'<div class="modal-body">' +
									'<h5 class="modal-title">' +
										title +
									'</h5>' +
									'<div class="card-text trace-code">' +
										content +
									'</div>' +
								'</div>' +
								'<div class="modal-footer justify-content-center">' +
									'<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">' + i18n.t('close') + '</button>' +
								'</div>'+
							'</div>' +
						'</div>' +
					'</div>';
				
				const $modal = [...$frame.children].find(e => e.classList.contains('modal'));
				if ($modal) {
					$modal.addEventListener('controller:connected', (event: Event) => {
						if (event.target) {
							event.target.dispatchEvent(new Event('modal:open'));
						}
					});
				}
			} else {

				$frame.innerHTML =
					'<div class="card border-danger overflow-hidden">' +
						'<div class="card-header text-white">' +
							header +
						'</div>' +
						'<div class="card-body">' +
							'<h5 class="card-title">' +
								title +
							'</h5>' +
							'<div class="card-text trace-code">' +
								content +
							'</div>' +
						'</div>' +
					'</div>';
			}
		});

	}

}

export default new TurboHelper();
import * as Turbo from '@hotwired/turbo';
import i18n from './../i18n';

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

const TurboHelper = class {
	
	noCache = false;

	constructor() {

		//clear document before caching
		document.addEventListener('turbo:before-cache', event => {
			this.closeAllModals();
			this.clearLoadingComponents();
			this.emptyFrames();
		});

		document.addEventListener('turbo:before-fetch-request', event => {
			
			//add in response specific headers
			// ------------------------------------------------------------------------------------------------------------------
			// |                       When                      |        event.target       |   event.explicitOriginalTarget   |
			// ------------------------------------------------------------------------------------------------------------------
			// | clicking on a link                              |  <html> element           |  <a> element                     |
			// | clicking on a link with turbo-frame attribute   |  <turbo-frame> element    |  <a> element                     |
			// | submitting a form with button Submit            |  <form> element           |  Submit <button> or <a> element  |
			// | submitting a form with key press Enter          |  <form> element           |  <input> element                 |
			// ------------------------------------------------------------------------------------------------------------------
			
			// event.detail.fetchOptions.headers['X-Requested-With'] = 'XMLHttpRequest';
			
			const target = (event.target instanceof HTMLFormElement)?event.target:event.explicitOriginalTarget
			Object.entries(target.dataset).forEach(([k, d]) => {
				if (k.match('^turbo') !== null) {
					event.detail.fetchOptions.headers['Turbo-' + k.match(/([A-Z][a-z]+)/g).join('-')] = d;
				}
			});
			
			const frameId = event.detail.fetchOptions.headers['Turbo-Frame'];
			if (frameId !== undefined) {
				document.querySelectorAll(`#${frameId}`).forEach(e => this.renderLoading(e));
			} else {
				this.renderLoading();
			}
			
		});

		document.addEventListener('turbo:before-fetch-response', event => {

			//display error message from Symfony, except if form error (status code 422)
			if (event.detail.fetchResponse.failed && event.detail.fetchResponse.response.status != 422) {
				if (event.detail.fetchResponse.response.headers.get('Turbo-Frame')) {
					this.renderErrorMessage(event);
					event.preventDefault();
					return;
				}
			}
			
			//redirect to a full page (for instance redirect to login page if user is not yet logged in)
			const fetchResponse = event.detail.fetchResponse;
			const redirectLocation = fetchResponse.response.headers.get('Turbo-Location');
			if (redirectLocation) {
				event.preventDefault();
				Turbo.clearCache();
				Turbo.visit(redirectLocation);
				console.log('redirect');
				return;
			}
		});

		document.addEventListener('turbo:submit-end', event => {
			
			//in case a successfull form submission, close the modal
			if (event.detail.success) {
				const frameId = event.detail.fetchResponse.response.headers.get('Turbo-Frame');
				document.querySelectorAll(`#${frameId} .modal`).forEach(e => e.dispatchEvent(new Event('modal:close')));
			}
		});

		document.addEventListener('turbo:frame-render', (event) => {

			//open the modal in the turbo-frame
			[...event.target.children].forEach(e => {
				if (e.classList.contains('modal')) {
					e.dispatchEvent(new Event('modal:open'));
				}
			});
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
		document.querySelectorAll('loading-component').forEach(e => e.remove());
		document.querySelectorAll('#navbarContent').forEach(e => e.classList.remove('invisible'));
	}

	emptyFrames() {
		document.querySelectorAll('turbo-frame').forEach(e => e.innerHTML = '');
	}

	renderLoading(e = document.body) {
		
		//hide navbar in case of a full page navigation
		if (e instanceof HTMLBodyElement) {
			document.querySelectorAll('#navbarContent').forEach(e => e.classList.add('invisible'));
		}

		if (e instanceof HTMLBodyElement || [...e.children].some(e => e.classList.contains('modal'))) {
			if (document.getElementsByTagName('loading-component').length === 0) {
				document.body.appendChild(document.createElement('loading-component'));
			}
		} else {
			e.appendChild(document.createElement('frame-loading-component'));
		}
	}

	renderErrorMessage(event) {

		const frameId = event.detail.fetchResponse.response.headers.get('Turbo-Frame');
		const $frame = document.getElementById(frameId);

		if ($frame === null) {
			return;
		}

		event.detail.fetchResponse.responseHTML.then(html => {
			
			if ($frame.classList.contains('modal')) {
				$frame.dispatchEvent(new Event('modal:open'));
			}

			const responseHTML = new DOMParser().parseFromString(html, 'text/html');
			const fullRender = ($frame.clientWidth > 720);
			const header = responseHTML.querySelector('[href="#trace-box-1"]').innerHTML + (fullRender)?responseHTML.querySelector('.exception-http').innerHTML:'';
			const title = (fullRender)?(responseHTML.querySelector('.exception-message-wrapper > div > h1').innerHTML +
							'<br />' +
							'<small>' +
								responseHTML.querySelector('#trace-html-1 span.block.trace-file-path').innerHTML +
							'</small>'):'';
			const content = (fullRender)?responseHTML.querySelector('#trace-html-1-0').innerHTML:(responseHTML.querySelector('.exception-message-wrapper > div > h1').innerHTML +
							'<br />' +
							'<small>' +
								responseHTML.querySelector('#trace-html-1 span.block.trace-file-path').innerHTML +
							'</small>');

			if ($frame.classList.contains('modal')) {
				
				$frame.innerHTML =
					'<div class="modal-dialog">' +
						'<div class="modal-content border-danger">' +
							'<div class="modal-header">' +
								'<h5 class="modal-title">' +
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
					'</div>';
				
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
		})

	}

}

export default new TurboHelper();
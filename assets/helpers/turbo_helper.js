import { Modal } from 'bootstrap';
import * as Turbo from '@hotwired/turbo';
import i18n from './../i18n';

// -------------------------------------------------------------------------------------
// |                    |            Drive             |              Frame            |
// -------------------------------------------------------------------------------------
// |      Request       | X-Requested-With (js)        | X-Requested-With (js)         |
// |                    |                              | Turbo-Frame (js*)             |
// |                    |                              | Turbo-Frame-Redirect (js)     |
// -------------------------------------------------------------------------------------
// |      Response      |                              | Turbo-Frame (php)             |
// |                    |                              | Turbo-Location (php)          |
// -------------------------------------------------------------------------------------
//
// *Natively added by Turbo


const TurboHelper = class {
    
    noLoadingAnimation = false;
    noCache = false;

    constructor() {

        document.addEventListener('turbo:before-cache', (event) => {
            this.closeModal();
            this.reenableSubmitButtons();
            this.emptyFrames();
        });

        document.addEventListener('turbo:before-fetch-request', (event) => {
            
            event.detail.fetchOptions.headers['X-Requested-With'] = 'XMLHttpRequest';

            const frameId = event.detail.fetchOptions.headers['Turbo-Frame'];
            if (!frameId) {
                return;
            }
            
            const $frame = document.querySelector(`#${frameId}`);

            if ($frame && this.noLoadingAnimation === false) {
                this.renderLoading($frame);
            }

            if (!$frame || !$frame.dataset.turboFormRedirect) {
                return;
            }

            event.detail.fetchOptions.headers['Turbo-Frame-Redirect'] = 1;
        });

        document.addEventListener('turbo:before-fetch-response', (event) => {
            
            if (event.detail.fetchResponse.failed === true) {
                if (event.detail.fetchResponse.response.headers.get('Turbo-Frame')) {
                    this.renderErrorMessage(event);
                    return;
                }
            }
            
            const fetchResponse = event.detail.fetchResponse;
            const redirectLocation = fetchResponse.response.headers.get('Turbo-Location');
            if (!redirectLocation) {
                return;
            }

            event.preventDefault();
            Turbo.clearCache();
            Turbo.visit(redirectLocation);
        });

        // document.addEventListener('turbo:render', () => {
        //     if (document.documentElement.hasAttribute("data-turbo-preview")) {
        //         this.noLoadingAnimation = true;
        //     } else if (this.noLoadingAnimation === true) {
        //         this.noLoadingAnimation === false;
        //     }
        // });
    }

    closeModal() {
        if (document.body.classList.contains('modal-open')) {
            const $modal = document.querySelector('.modal');
            const modal = Modal.getInstance($modal);
            $modal.classList.remove('fade');
            modal._backdrop._config.isAnimated = false;
            modal.hide();
            modal.dispose();
        }
    }

    reenableSubmitButtons() {
        document.querySelectorAll('.turbo-submit-disabled').forEach((button) => {
            button.toggleAttribute('disabled', false);
            button.classList.remove('turbo-submit-disabled');
        });
    }

    emptyFrames() {
        document.querySelectorAll('turbo-frame').forEach((e) => {
            this.renderLoading(e);
        });
    }

    renderLoading(e) {
        console.log(i18n.t('loading'));
        e.innerHTML =
            '<div class="d-flex justify-content-center">' +
                '<div class="spinner-border" role="status">' +
                    '<span class="visually-hidden">' + i18n.t('loading') + '</span>' +
                '</div>' +
            '</div>';
    }

    renderErrorMessage(event) {

        event.detail.fetchResponse.responseHTML.then((html) => {
            const responseHTML = new DOMParser().parseFromString(html, 'text/html');
            
            if (event.target.clientWidth > 720) {
                event.originalTarget.innerHTML =
                    '<div class="card border-danger overflow-hidden">' +
                    '<div class="card-header text-white">' +
                    responseHTML.querySelector('[href="#trace-box-1"]').innerHTML + responseHTML.querySelector('.exception-http').innerHTML +
                    '</div>' +
                    '<div class="card-body">' +
                    '<h5 class="card-title">' +
                    responseHTML.querySelector('.exception-message-wrapper > div > h1').innerHTML +
                    '<br />' +
                    '<small>' +
                    responseHTML.querySelector('#trace-html-1 span.block.trace-file-path').innerHTML +
                    '</small>' +
                    '</h5>' +
                    '<div class="card-text trace-code">' +
                    responseHTML.querySelector('#trace-html-1-0').innerHTML +
                    '</div>' +
                    '</div>' +
                    '</div>';
            } else {
                event.originalTarget.innerHTML =
                    '<div class="card border-danger overflow-hidden">' +
                    '<div class="card-header">' +
                    responseHTML.querySelector('[href="#trace-box-1"]').innerHTML +
                    '</div>' +
                    '<div class="card-body">' +
                    '<p class="card-text">' +
                    responseHTML.querySelector('.exception-message-wrapper > div > h1').innerHTML +
                    '<br />' +
                    '<small>' +
                    responseHTML.querySelector('#trace-html-1 span.block.trace-file-path').innerHTML +
                    '</small>' +
                    '</p>' +
                    '</div>' +
                    '</div>';
            }
        })

    }

}

export default new TurboHelper();
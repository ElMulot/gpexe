import { Modal } from 'bootstrap';

const TurboHelper = class {
    constructor() {
        document.addEventListener('turbo:before-cache', () => {
            this.closeModal();
        });

        document.addEventListener('turbo:before-fetch-request', (event) => {
            this.renderLoading(event.target); 
        });
    }

    closeModal() {
        if (document.body.classList.contains('modal-open')) {
            const modalEl = document.querySelector('.modal');
            const modal = Modal.getInstance(modalEl);
            modalEl.classList.remove('fade');
            modal._backdrop._config.isAnimated = false;
            modal.hide();
            modal.dispose();
        }
    }

    renderLoading(e) {
        
        e.innerHTML =
         	'<div class="d-flex justify-content-center">' +
                    '<div class="spinner-border" role="status">' +
                        '<span class="visually-hidden">{% trans %}Loading{% endtrans %}...</span>' +
                    '</div>' +
                '</div>';
    }

}

export default new TurboHelper();
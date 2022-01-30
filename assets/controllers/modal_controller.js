import { Controller } from 'stimulus';
import { Modal } from 'bootstrap';

export default class extends Controller {
	
	modal = null;

    connect() {
        this.modal = new Modal(this.element, {
			backdrop: false,
		});

        this.element.addEventListener('modal:open', event => {
            if (this.modal._isShown === false) {
                this.element.addEventListener('shown.bs.modal', event => {
                    document.querySelectorAll('loading-component').forEach(e => e.remove());
                }, { once: true });
                this.modal.show();
            } else {
                document.querySelectorAll('loading-component').forEach(e => e.remove());
            }
        });

        this.element.addEventListener('modal:close', event => {
            this.modal.hide();
            if (this.modal._isShown === true) {
                this.element.addEventListener('hidden.bs.modal', event => {
                    document.querySelectorAll('loading-component').forEach(e => e.remove());
                }, { once: true });
                this.modal.show();
            } else {
                document.querySelectorAll('loading-component').forEach(e => e.remove());
            }
        });

        this.element.addEventListener('modal:dispose', event => {
            this.element.classList.remove('fade');
            this.modal._backdrop._config.isAnimated = false;
            this.modal.hide();
            this.modal.dispose();
        });
    }
}
import { Controller } from 'stimulus';
import { Modal } from 'bootstrap';

export default class extends Controller {
	
    static targets = ['close'];

	#modal = null;

    connect() {
        
        this.element.style.zIndex = this.getZIndex(this.element) + [...document.body.querySelectorAll('.modal.show')].length;
        
        this.#modal = new Modal(this.element, {
			backdrop: false,
		});

        this.element.addEventListener('modal:open', event => {
            this.onModalOpen();
        });

        this.element.addEventListener('modal:close', event => {
            this.onModalClose();
        });

        this.element.addEventListener('modal:dispose', event => {
            this.onModalDispose();
        });

        this.element.addEventListener('modal:delete', event => {
            this.onModalDelete();
        });

        this.element.addEventListener('show.bs.modal', event => {
            this.setModalBackdropZIndexOnOpen();
        });

        this.element.addEventListener('shown.bs.modal', event => {
            document.querySelectorAll('loading-component').forEach(e => e.remove());
        });

        this.element.addEventListener('hidden.bs.modal', event => {
            event.stopPropagation();
            this.setModalBackdropZIndexOnClose();
        });

        //add data-modal-target="close" to close the modal when clicked
        this.closeTargets.forEach(e => {
            e.addEventListener('click', (event) => {
                this.dispatch('close');
            });
        })

        this.dispatch('connected');
    }

    onModalOpen() {
        if (this.#modal._isShown === false) {
            this.#modal.show();
        } else {
            document.querySelectorAll('loading-component').forEach(e => e.remove());
        }
    }

    onModalClose() {
        console.log('modal:close', this.#modal);
        if (this.#modal === null) {
            return;
        }
        if (this.element && this.#modal._isShown === true) {
            this.#modal.hide();
        }
        document.querySelectorAll('loading-component').forEach(e => e.remove());
    }

    onModalDispose() {
        console.log('modal:dispose', this.#modal);
        if (this.#modal === null) {
            return;
        }
        if (this.element) {
            this.element.classList.remove('fade');
        }
        if (this.#modal._backdrop) {
            this.#modal._backdrop._config.isAnimated = false;
        }
        this.onModalClose();
        this.#modal.dispose();
        this.#modal = null;
    }

    onModalDelete() {
        console.log('modal:delete', this.#modal, this.element);
        this.element.remove();
        //this.onModalDispose();
    }

    setModalBackdropZIndexOnOpen() {
        let zIndex = [...document.body.querySelectorAll('.modal.show'), this.element].map(e => this.getZIndex(e)).reduce((a,b) => (a>b && a!=0)?a:b, 0);
        this.setModalBackdropZIndex(zIndex);
    }

    setModalBackdropZIndexOnClose() {
        let zIndex = [...document.body.querySelectorAll('.modal.show')].map(e => this.getZIndex(e)).reduce((a,b) => (a>b && a!=0)?a:b, 0);
        this.setModalBackdropZIndex(zIndex);
    }

    setModalBackdropZIndex(zIndex) {
        
        var $modalBackdrop = document.querySelector('.modal-backdrop');
        if ($modalBackdrop === null) {
            $modalBackdrop = document.createElement('div');
            $modalBackdrop.classList.add('modal-backdrop', 'show');
            document.body.appendChild($modalBackdrop);
        }

        if (zIndex > 0) {
            $modalBackdrop.classList.remove('d-none');
            $modalBackdrop.style.zIndex = zIndex - 1;
        } else {
            $modalBackdrop.remove();
        }
    }

    getZIndex(e) {
        if (window.getComputedStyle) {
            return parseInt(document.defaultView.getComputedStyle(e,null).getPropertyValue('z-index')); 
        } else if (e.currentStyle) {
            return parseInt(e.currentStyle['z-index']);
        } else {
            return 0;
        }
    }
}
import { Controller } from 'stimulus';
import { Modal } from 'bootstrap';

export default class extends Controller {
	
	modal = null;
    $modalBackdrop = null;

    connect() {
        
        this.element.style.zIndex = this.getZIndex(this.element) + [...document.body.querySelectorAll('.modal.show')].length;

        this.modal = new Modal(this.element, {
			backdrop: false,
		});
        
        this.$modalBackdrop = document.querySelector('.modal-backdrop');

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

        this.element.addEventListener('shown.bs.modal', event => {
            event.stopPropagation();
            document.querySelectorAll('loading-component').forEach(e => e.remove());
            this.setModalBackdropZIndex();
        });

        this.element.addEventListener('hidden.bs.modal', event => {
            event.stopPropagation();
            this.setModalBackdropZIndex();
        });

        this.element.dispatchEvent(new Event('controller:connected'));
    }

    onModalOpen() {
        if (this.modal._isShown === false) {
            this.modal.show();
        } else {
            document.querySelectorAll('loading-component').forEach(e => e.remove());
        }
    }

    onModalClose() {
        console.log('modal:close', this.modal);
        if (this.modal === null) {
            return;
        }
        if (this.element && this.modal._isShown === true) {
            this.modal.hide();
        } else {
            document.querySelectorAll('loading-component').forEach(e => e.remove());
        }
    }

    onModalDispose() {
        console.log('modal:dispose', this.modal);
        if (this.modal === null) {
            return;
        }
        if (this.element) {
            this.element.classList.remove('fade');
        }
        if (this.modal._backdrop) {
            this.modal._backdrop._config.isAnimated = false;
        }
        this.onModalClose();
        this.modal.dispose();
        this.modal = null;
    }

    onModalDelete() {
        console.log('modal:delete', this.modal, this.element);
        this.element.remove();
        //this.onModalDispose();
    }

    setModalBackdropZIndex() {

        if (this.$modalBackdrop) {
            let zIndex = [...document.body.querySelectorAll('.modal.show')].map(e => this.getZIndex(e)).reduce((a,b) => (a>b && a!=0)?a:b, 0);
            if (zIndex > 0) {
                this.$modalBackdrop.classList.remove('d-none');
                this.$modalBackdrop.style.zIndex = zIndex - 1;
            } else {
                this.$modalBackdrop.classList.add('d-none');
            }
        }
    }

    getZIndex(e) {
        if (window.getComputedStyle) {
            return document.defaultView.getComputedStyle(e,null).getPropertyValue('z-index'); 
        } else if (e.currentStyle) {
            return e.currentStyle['z-index'];
        } else {
            return 0;
        }
    }
}
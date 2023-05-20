import { Controller } from '@hotwired/stimulus';
import { Modal } from 'bootstrap';

export default class ModalController extends Controller<HTMLElement>
{
	
	static targets = ['close'];
	
	#modal:Modal|null = null;

	declare closeTargets: HTMLElement[];

	connect(): void
	{
		
		this.element.style.zIndex = (this.#getZIndex(this.element) + [...document.body.querySelectorAll('.modal.show')].length).toString();
		this.#modal = new Modal(this.element, {
			backdrop: false,
		});

		this.element.addEventListener('modal:open', () => this.onModalOpen());

		this.element.addEventListener('modal:close', () => this.onModalClose());

		this.element.addEventListener('modal:dispose', () => this.onModalDispose());

		this.element.addEventListener('modal:delete', () => this.onModalDelete());

		this.element.addEventListener('show.bs.modal', () => this.setModalBackdropZIndexOnOpen());

		this.element.addEventListener('shown.bs.modal', () => {
			document.querySelectorAll('loading-component').forEach(e => e.remove());
		});

		this.element.addEventListener('hidden.bs.modal', (event: Event) => {
			event.stopPropagation();
			this.setModalBackdropZIndexOnClose();
		});

		//add data-modal-target="close" to close the modal when clicked
		this.closeTargets.forEach((e: Element) => {
			e.addEventListener('click', () => this.dispatch('close'));
		})

		this.dispatch('connected');
	}

	onModalOpen(): void
	{
		this.#modal?.show();
		document.querySelectorAll('loading-component').forEach(e => e.remove());
	}

	onModalClose(): void
	{
		// console.log('modal:close', this.#modal);
		this.#modal?.hide();
		document.querySelectorAll('loading-component').forEach(e => e.remove());
	}

	onModalDispose(): void
	{
		console.log('modal:dispose', this.#modal);
		if (this.element) {
			this.element.classList.remove('fade');
		}
		// if (this.#modal._backdrop) {
		// 	this.#modal._backdrop._config.isAnimated = false;
		// }
		this.onModalClose();
		this.#modal?.dispose();
		this.#modal = null;
	}

	onModalDelete(): void
	{
		console.log('modal:delete', this.#modal, this.element);
		this.element.remove();
	}

	setModalBackdropZIndexOnOpen(): void
	{
		let zIndex = [...document.body.querySelectorAll('.modal.show'), this.element].map(e => this.#getZIndex(e)).reduce((a,b) => (a>b && a!=0)?a:b, 0);
		this.setModalBackdropZIndex(zIndex);
	}

	setModalBackdropZIndexOnClose(): void
	{
		let zIndex = [...document.body.querySelectorAll('.modal.show')].map(e => this.#getZIndex(e)).reduce((a,b) => (a>b && a!=0)?a:b, 0);
		this.setModalBackdropZIndex(zIndex);
	}

	setModalBackdropZIndex(zIndex: number): void
	{
		var $modalBackdrop = document.querySelector('.modal-backdrop') as HTMLElement | null;
		if ($modalBackdrop === null) {
			$modalBackdrop = '<div class="modal-backdrop show"></div>'.toElement() as HTMLElement;
			document.body.appendChild($modalBackdrop);
		}

		if (zIndex > 0) {
			$modalBackdrop.classList.remove('d-none');
			$modalBackdrop.style.zIndex = (zIndex - 1).toString();
		} else {
			$modalBackdrop.remove();
		}
	}

	#getZIndex(e: Element): number
	{
		if (document.defaultView !== null) {
			return parseInt(document.defaultView.getComputedStyle(e).zIndex);
		} else {
			return 0;
		} 
	}
}
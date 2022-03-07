import i18n from 'i18n';
import { Controller } from 'stimulus';
import Cropper from 'cropperjs';

// import Dropzone from "@symfony/ux-dropzone/dist/controller.js";

//explications à ajouter
//1) en mode nouveau projet, la modal Crop s'affiche automatiquement à chaque fois qu'un nouveau fichier est uploadé
//à la sauvegarde de la modal Crop, le fichier est mis à jour dans le champ Input type=text
//2) en mode editer le projet et si un fichier avait déjà été indiqué, php rempli le champ data-src du Input type=text
//Dès lors, côté client, le champ Input type=text est rempli avec un "Faux" fichier ne comprenant pas de données, mais juste le nom du fichier.
//cela permet de traiter la requête via php ensuite vu qu'aucun attribut n'est exportable dans php
//si l'image est effacé, le champ data-src est effacé et on se retrouve dans le premier cas.

//il reste à rendre ce controlleur utilisable avec autre chose qu'une image
//j'ai renoncé à utiliser un component, bootstrap ne permet pas la gestion de modal dans un DOM Shadow.

export default class extends Controller {

	mimeType = 'image/jpeg';

	cropper = null;
	$input = null;
	$placeholder = null;
	$preview = null;
	$previewImage = null;
	$button = null;

	connect() {
		this.$input = this.element.querySelector('input');
		this.$placeholder = this.element.querySelector('.dropzone-placeholder');
		this.$preview = this.element.querySelector('.dropzone-preview');
		this.$previewImage = this.element.querySelector('.dropzone-preview-image');
		this.$button = this.element.querySelector('.dropzone-preview-button');
		this.element.addEventListener('dropzone:connect', this.onConnect.bind(this));
		this.element.addEventListener('dropzone:change', this.onChange.bind(this));
		// this.element.addEventListener('dropzone:clear', this.onClear.bind(this));
	}

	disconnect() {
		this.element.removeEventListener('dropzone:connect', this.onConnect);
		this.element.removeEventListener('dropzone:change', this.onChange);
		// this.element.removeEventListener('dropzone:clear', this.onClear);
	}

	onConnect(event) {
		
		const filePath = this.$input.dataset.src;
		const fileName = filePath.match(/[^\/]+$/g);

		if (fileName !== null) {
			
			let file = new File([], fileName, {type:this.mimeType, lastModified:new Date().getTime()}, 'utf-8');
			let container = new DataTransfer();
			container.items.add(file);
			this.$input.files = container.files;
			this.$input.style.display = 'none';
			this.$placeholder.style.display = 'none';
			this.$preview.style.display = 'flex';
			this.$previewImage.style.display = 'block';
            this.$previewImage.style.backgroundImage = `url("${filePath}")`;
			// fetch(filePath).then(response => response.blob()).then(blob => {
			// 	let file = new File([blob], fileName, {type:this.mimeType, lastModified:new Date().getTime()}, 'utf-8');
			// 	let container = new DataTransfer();
			// 	container.items.add(file);
			// 	this.$input.files = container.files;
			// 	this.$input.dispatchEvent(new Event('change'));
			// });
		}

		event.target.addEventListener('dropzone:clear', (event) => {
			console.log(this.$input);
			delete this.$input.dataset.src;
		});

	}

	onChange(event) {

		if (this.$input.dataset.src !== undefined && this.$input.dataset.src !== '') {
			return;
		}
		
		const file = event.detail;
		if (typeof file === 'undefined') {
			return;
		}
		const src = URL.createObjectURL(file);

		let cropperModal = `<div id ="cropper_modal" class="modal fade" tabindex="-1" aria-labelledby="crop_modal_label" aria-hidden="true" data-controller="modal">
								<div class="modal-dialog modal-md">
									<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="crop_modal_label">${i18n.t('cropImage')}</h5>
											<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="${i18n.t('close')}"></button>
										</div>
										<div class="modal-body">
											<div class="img-container">
												<img src="${src}" class="mw-100">
											</div>
										</div>
										<div class="modal-footer justify-content-center">
											<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${i18n.t('cancel')}</button>
											<button id="cropper_button" type="button" class="btn btn-primary">${i18n.t('crop')}</button>
										</div>
									</div>
								</div>
							</div>`;
		document.body.insertAdjacentHTML('beforeend', cropperModal);

		let $cropperModal = document.getElementById('cropper_modal');
		let $cropperButton = document.getElementById('cropper_modal').querySelector('button:not([data-bs-dismiss])');

		$cropperModal.addEventListener('show.bs.modal', event => {
			this.cropper = new Cropper(event.target.querySelector('img'), {
				aspectRatio: 2,
				viewMode: 2,
				autoCropArea: 1,
			});
		});

		$cropperModal.addEventListener('hidden.bs.modal', event => {
			if (this.cropper) {
				this.cropper.destroy();
				this.cropper = null;
			}
			console.log('hidden.bs.modal');
			event.target.dispatchEvent(new Event('modal:delete'));
		});

		$cropperButton.addEventListener('click', event => {
			
			event.target.dispatchEvent(new Event('dropzone:clear'));

			let canvas = this.cropper.getCroppedCanvas({
				width: 180,
				height: 90,
			})
			
			canvas.toBlob(blob => {
				let file = new File([blob], 'croppedImage.jpg', {type:this.mimeType, lastModified:new Date().getTime()}, 'utf-8');
				let container = new DataTransfer();
				container.items.add(file);
				this.$input.files = container.files;
				this.$input.dataset.src = true;
				this.$input.dispatchEvent(new Event('change'));
			}, this.mimeType);
			
			$cropperModal.dispatchEvent(new Event('modal:close'));
		});

		$cropperModal.addEventListener('controller:connected', event => {
			event.target.dispatchEvent(new Event('modal:open'));
		}, { once: true });

	}
}
// CSS import
import 'styles/dropzone.scss';

import { Controller } from '@hotwired/stimulus';
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

	imageWidth = 180;
	imageHeight = 90;
	mimeType = 'image/jpeg';
	cropper = null;

	static targets = ['input', 'placeholder', 'preview', 'previewClearButton', 'previewFilename', 'previewImage', 'modal', 'image', 'cropButton'];
	
    static values = {
        uploadsDirectory: String,
		name: String,
		mimeType: String,
    }

	connect() {
		
		this.previewClearButtonTarget.addEventListener('click', () => this.clear());
		
		this.inputTarget.addEventListener('change', () => this.onInputChange());

		this.modalTarget.addEventListener('show.bs.modal', () => this.onModalShow());

		this.modalTarget.addEventListener('hidden.bs.modal', () => this.onModalHidden());

		this.cropButtonTarget.addEventListener('click', () => this.onCropperButtonClick());

		if (this.nameValue !== '') {
			fetch(this.uploadsDirectoryValue + this.nameValue).then(response => response.blob()).then(blob => {
				let file = new File([blob], this.nameValue, {type:this.mimeType, lastModified:new Date().getTime()}, 'utf-8');
				let container = new DataTransfer();
				container.items.add(file);
				this.inputTarget.files = container.files;
				this.onInputChange();
			});
		}

		this.dispatch('connected');

	}

	onInputChange() {

        const file = this.inputTarget.files[0];
        if (typeof file === 'undefined') {
            return;
        }
		
		//check if uploaded file match the requested mime type
		if (file.type && this.mimeTypeValue.match(/^\w+\/[-+.\w*]+$/g) !== null) {
			if (file.type.includes(this.mimeTypeValue.replace('*', '')) === false) {
				return;
			}
		}
		
		// Hide the input and placeholder
        this.inputTarget.style.display = 'none';
        this.placeholderTarget.style.display = 'none';
		this.previewClearButtonTarget.style.display = 'block';
		this.previewImageTarget.style.display = 'block';
		this.previewImageTarget.className = '';
		this.previewImageTarget.style = '';
		this.previewTarget.style.display = 'flex';

        // Show the filename in preview if not image + icon or image
		if (file.type.includes('image') === true) {
			this.previewFilenameTarget.textContent = '';
			this.previewImageTarget.style.width = this.imageWidth + 'px';
			this.previewImageTarget.style.height = this.imageHeight + 'px';
			const src = URL.createObjectURL(file);
			this.previewImageTarget.style.backgroundImage = `url("${src}")`;
			if (this.nameValue === '') { //new upload
				this.imageTarget.innerHTML = `<img class="mw-100" src="${src}" />`;
				this.nameValue = '';
				this.modalTarget.dispatchEvent(new Event('modal:open'));
			}

		} else {
			this.previewFilenameTarget.textContent = file.name;
			this.previewImageTarget.style.fontSize = "2rem";
			this.previewImageTarget.classList.add('bi', 'bi-' + this.getfileEarmark(file));
		}
    }

	onModalShow() {
		
		this.cropper = new Cropper(this.imageTarget.firstChild, {
			aspectRatio: 2,
			viewMode: 2,
			autoCropArea: 1,
		});

	}

	onModalHidden() {
		
		if (this.cropper !== null) {
			this.cropper.destroy();
			this.cropper = null;
		}

	}

	onCropperButtonClick() {
		
		this.clear();
		let canvas = this.cropper.getCroppedCanvas({
			width: this.imageWidth,
			height: this.imageHeight,
		});
		
		canvas.toBlob(blob => {
			let file = new File([blob], 'croppedImage.jpg', {type:this.mimeType, lastModified:new Date().getTime()}, 'utf-8');
			let container = new DataTransfer();
			container.items.add(file);
			this.inputTarget.files = container.files;
			this.nameValue = file.name;
			this.inputTarget.dispatchEvent(new Event('change'));
		}, this.mimeType);

		this.modalTarget.dispatchEvent(new Event('modal:close'));

	}

	clear() {

        this.nameValue = '';
		
		this.inputTarget.value = '';
        this.inputTarget.style.display = 'block';
        this.placeholderTarget.style.display = 'block';
        this.previewTarget.style.display = 'none';
		this.previewClearButtonTarget.style.display = 'none';
        this.previewImageTarget.style.display = 'none';
        // this.previewImageTarget.style.backgroundImage = 'none';
        this.previewFilenameTarget.textContent = '';
	}

	getFileExtension(filename) {
		return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
	}

	getfileEarmark(file) {

		switch (this.getFileExtension(file.name)) {
			
			case '':
				return 'file-earmark';

			case 'pdf':
				return 'file-earmark-pdf';

			case 'doc':
			case 'docx':
			case 'docm':
			case 'dot':
			case 'dotx':
			case 'dotm':
				return 'file-earmark-word';

			case 'xls':
			case 'xlsx':
			case 'xlxm':
			case 'xlt':
			case 'xltx':
			case 'xltm':
			case 'xlsb':
				return 'file-earmark-spreadsheet';
			
			default:
				return 'file-earmark-' + this.getFileExtension(filename);

		}
	}
}
<template>
	<div class="modal fade" tabindex="-1" aria-labelledby="crop_modal_label" aria-hidden="true" ref="modal">
		<div class="modal-dialog modal-md">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="crop_modal_label">{{ t('cropImage') }}</h5>
					<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="{{ t('close') }}"></button>
				</div>
				<div class="modal-body">
					<div class="img-container">
						<img :src="src" class="mw-100" ref="image">
					</div>
				</div>
				<div class="modal-footer justify-content-center">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ t('cancel') }}</button>
					<button type="button" class="btn btn-primary" ref="button">{{ t('crop') }}</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

	import i18n from 'i18n';
	import { Modal } from 'bootstrap';
	import Cropper from 'cropperjs';

	export default {
		name: 'Cropper',
		modal: null,

		props: {
			src: String,
		},

		methods: {
			t: i18n.t
		},

		mounted() {
			this.modal = new Modal(this.$refs.modal, {
				backdrop: false,
			});

			let cropper;

			this.$refs.modal.addEventListener('show.bs.modal', event => {
				cropper = new Cropper(this.$refs.image, {
					aspectRatio: 2,
					viewMode: 2,
					autoCropArea: 1,
				});
			});

			this.$refs.modal.addEventListener('hidden.bs.modal', event => {
				cropper.destroy();
				cropper = null;
			});

			this.$refs.button.addEventListener('click', event => {
				
			});

			this.modal.show();
		},
	}
</script>

<style>

h1, h2, h3, h4, h5, h6 {
	text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.3);
}

button:not(:disabled), [type="button"]:not(:disabled), [type="reset"]:not(:disabled), [type="submit"]:not(:disabled) {
	cursor: pointer;
}

button, [type="button"], [type="reset"], [type="submit"] {
	-webkit-appearance: button;
}

button, select {
	text-transform: none;
}

input, button, select, optgroup, textarea {
	margin: 0;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
}

.modal {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1055;
	display: none;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	overflow-y: auto;
	outline: 0;
}

.fade {
	transition: opacity 0.15s linear;
}

.modal.show .modal-dialog {
	transform: none;
}

.modal.fade .modal-dialog {
	transition: transform 0.3s ease-out;
}

.modal-dialog {
	position: relative;
	width: auto;
	pointer-events: none;
	margin: 1.75rem auto;
	max-width: 768px;
}

.modal-content {
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	pointer-events: auto;
	background-color: #32383e;
	background-clip: padding-box;
	border: 1px solid rgba(0, 0, 0, 0.2);
	border-radius: 0.3rem;
	outline: 0;
}

.modal-header {
	display: flex;
	flex-shrink: 0;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 1rem;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
	border-top-left-radius: calc(0.3rem - 1px);
	border-top-right-radius: calc(0.3rem - 1px);
}

.modal-title {
	margin-bottom: 0;
	line-height: 1.5;
}

.modal-body {
	position: relative;
	flex: 1 1 auto;
	padding: 1rem;
}

.modal-footer {
	display: flex;
	flex-wrap: wrap;
	flex-shrink: 0;
	align-items: center;
	justify-content: flex-end;
	padding: 0.75rem;
	border-top: 1px solid rgba(0, 0, 0, 0.2);
	border-bottom-right-radius: calc(0.3rem - 1px);
	border-bottom-left-radius: calc(0.3rem - 1px);
}

.modal-footer .btn {
	flex: 0 0 auto;
	width: 16.66666667%;
}

.modal-footer > * {
	margin: 0.25rem;
}

.btn {
	display: inline-block;
	font-weight: 400;
	line-height: 1.5;
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	user-select: none;
	border: 1px solid transparent;
	border-color: rgba(0, 0, 0, 0.6);
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
	padding: 0.75rem 1rem;
	font-size: 1rem;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-close {
	box-sizing: content-box;
	width: 1em;
	height: 1em;
	padding: 0.5rem 0.5rem;
	margin: -0.5rem -0.5rem -0.5rem auto;
	color: #000;
	background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
	border: 0;
	border-radius: 0.25rem;
	opacity: 0.5;
}

.btn-close-white {
	filter: invert(1) grayscale(100%) brightness(200%);
}

.btn-primary {
	color: #fff;
	background-color: #3a3f44;
	border-color: #3a3f44;
}

.btn-secondary {
	color: #fff;
	background-color: #7a8288;
	background-image: linear-gradient(#8a9196, #7a8288 60%, #70787d);
	filter: none;
}

</style>
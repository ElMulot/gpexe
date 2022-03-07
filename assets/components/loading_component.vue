<template>
	<div class="modal show" tabindex="-1" style="display: block;">
		<div class="modal-dialog modal-dialog-centered justify-content-center">
			<div class="spinner-border" role="status">
				<span class="visually-hidden">{{ t('loading') }}</span>
			</div>
		</div>
	</div>
</template>
<script>
	import i18n from 'i18n';

	export default {
		name: 'Loading',
		$modalBackdrop: null,
		
		mounted() {
			if (this.$modalBackdrop = document.querySelector('.modal-backdrop')) {
				this.$modalBackdrop.classList.remove('d-none');
			} else {
				this.$modalBackdrop = document.createElement('div');
				this.$modalBackdrop.classList.add('modal-backdrop');
				document.body.appendChild(this.$modalBackdrop);
			}
			this.$modalBackdrop.classList.add('show');
		},

		// unmounted() {
		// 	if (this.$modalBackdrop = document.querySelector('.modal-backdrop')) {
		// 		this.$modalBackdrop.classList.add('d-none');
		// 	}
		// },
		
		methods: {
			t: i18n.t
		},
	};
</script>
<style>
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
	.modal-dialog {
		position: relative;
		width: auto;
		pointer-events: none;
		max-width: 500px;
		margin: 1.75rem auto;
	}
	.modal.show .modal-dialog {
		transform: none;
	}
	.modal-dialog-centered {
		display: flex;
		align-items: center;
		min-height: calc(100% - 3.5rem);
	}
	.justify-content-center {
		justify-content: center;
	}
	.spinner-border {
		display: inline-block;
		width: 2rem;
		height: 2rem;
		vertical-align: -0.125em;
		border: 0.25em solid currentColor;
		border-right-color: currentcolor;
		border-right-color: transparent;
		border-radius: 50%;
		animation: 0.75s linear infinite spinner-border;
	}
	@Keyframes spinner-border {
		100% {
			transform: rotate(360deg);
		}
	}
	.visually-hidden {
		position: absolute !important;
		width: 1px !important;
		height: 1px !important;
		padding: 0 !important;
		margin: -1px !important;
		overflow: hidden !important;
		clip: rect(0, 0, 0, 0) !important;
		white-space: nowrap !important;
		border: 0 !important;
	}
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1050;
		width: 100vw;
		height: 100vh;
		background-color: #000;
	}
	.modal-backdrop.show {
		opacity: 0.5;
	}
</style>
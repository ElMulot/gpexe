<template>
	<div class="modal-backdrop show" :style="styleObject"></div>
</template>
<script>
	import i18n from 'i18n';

	export default {
		name: 'Loading',
		methods: {
			t: i18n.t
		},
		computed: {
			styleObject() {
				const list = document.body.querySelectorAll('.modal.show');
				let zIndex = 0;
				if (list.length > 0) {
					let zIndex = [...list].map(e => { 
									if (window.getComputedStyle) {
										return document.defaultView.getComputedStyle(e,null).getPropertyValue('z-index'); 
									} else if (x.currentStyle) {
										return x.currentStyle['z-index'];
									} else {
										return 0;
									}
								}).reduce((a,b) => (a<b)?a:b);
				}
				return {
					'z-index': (zIndex > 0)?zIndex-1:0
				};
			}
		},
	};
</script>
<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #000;
	}
	.modal-backdrop.show {
		opacity: 0.5;
	}
</style>
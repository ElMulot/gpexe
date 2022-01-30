<template>
	<div class="d-flex justify-content-center">
		<div class="spinner-border" role="status">
			<span class="visually-hidden">{{ t('loading') }}</span>
		</div>
	</div>
</template>
<script>
	import i18n from 'i18n';

	export default {
		name: 'frame-loading-component',
		methods: {
			t: i18n.t
		},
	};
</script>
<style>
	.d-flex {
		display: flex;
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
</style>
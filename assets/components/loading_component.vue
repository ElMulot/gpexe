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
	name: 'Loading',
	methods: {
		t: i18n.t
	}
};
</script>
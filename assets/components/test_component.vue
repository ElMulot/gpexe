<template>
	<div id="container">
		<div class="d-flex justify-content-center">
			<p>test</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Test',

	beforeCreate() {
		console.log('beforeCreate');
	},

	created() {
		console.log('created');
	},

	beforeMount() {
		console.log('beforeMount');
	},

	mounted() {
		this.initObserver();
		console.log('mounted');
	},

	beforeUpdate() {
		console.log('beforeUpdate');
	},

	updated() {
		console.log('updated');
	},

	activated() {
		console.log('activated');
	},

	desactivated() {
		console.log('desactivated');
	},
	
	beforeUnmount() {
		console.log('beforeUnmount');
	},

	unmounted() {
		console.log('unmounted');
	},

	errorCaptured() {
		console.log('errorCaptured');
	},

	renderTracked() {
		console.log('renderTracked');
	},

	renderTriggered() {
		console.log('renderTriggered');
	},

};
</script>

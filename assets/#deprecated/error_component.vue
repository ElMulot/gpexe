<template>
	<div class="card border-danger overflow-hidden">
		<div class="card-header text-white" v-html="header">
		</div>
		<div class="card-body">
			<h5 class="card-title">
				{{ title }}
				<br />
				<small v-html="subtitle">
				</small>
			</h5>
			<div class="card-text trace-code" v-html="content">
			</div>
		</div>
	</div>
</template>
<script>

	import i18n from 'i18n';
	
	export default {
		name: 'Error',
		
		props: {
			html: String,
			modal: Boolean,
		},

		methods: {
			t: i18n.t
		},

		data() {

			const responseHTML = new DOMParser().parseFromString(this.html, 'text/html');

			return {
				header: responseHTML.querySelector('[href="#trace-box-1"]').innerHTML + responseHTML.querySelector('.exception-http').innerHTML,
				title: responseHTML.querySelector('.exception-message-wrapper > div > h1').innerHTML,
				subtitle: responseHTML.querySelector('#trace-html-1 span.block.trace-file-path').innerHTML,
				content: responseHTML.querySelector('#trace-html-1-0').innerHTML,
			};
		}
	};
</script>
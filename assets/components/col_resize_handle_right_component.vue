<template>
	<div class="col-resize-handle"></div>
</template>
<script>
	export default {
		name: 'col-resize-handle-component',
	};
</script>
<style>
	.col-resize-handle {
		cursor: col-resize;
		height: 100%;
		position: absolute;
		top: 0;
		user-select: none;
		width: 5px;
		z-index: 1030; /*$zindex-fixed*/
		background-color: red;
		right: 0px;
	}
</style>
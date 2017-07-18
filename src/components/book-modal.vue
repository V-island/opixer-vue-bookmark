<template>
<div class="modal-overlay is-visible">
	123
</div>
</template>

<script>
export default {

  name: 'book-modal',

  data () {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
.modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow-y: auto;
	z-index: 9001;
	font-size: 14px;
	// Theming
	background: rgba(0,0,0, 0.3);
	// Animation
	opacity: 0;
	transition: opacity 0.3s;
	transform: translate3D(0, 0, 0);
	-webkit-perspective: 500px;
	&.is-visible {
		opacity: 1;
	}
}
</style>
<template>
<div class="book-icon-button">
	<div class="book-icon">
		<slot></slot>
	</div>
</div>
</template>

<script>
export default {

  name: 'book-icon-button',

  data () {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
.book-icon-button{
	display: inline-block;
  position: relative;
  padding: 8px;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  z-index: 0;
  line-height: 1;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box !important;
  &:hover{
  	background: rgba(0,0,0,.2);
  }
	.book-icon{
		position: absolute;
		left: 0;
		right: 0;
		text-align: center;
		top: 50%;
		margin-top: -10px;
	}
}
</style>
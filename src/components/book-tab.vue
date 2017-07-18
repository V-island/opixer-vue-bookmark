<template>
<div class="book-tab">
	<slot></slot>
</div>
</template>

<script>
export default {

  name: 'book-tab',

  data () {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
	.book-tab{
		-webkit-box-flex: 1;
		box-flex: 1;
		-webkit-flex-grow: 1;
		flex-grow: 1;
		border-bottom: 2px solid transparent;
    color: #fff;
		cursor: pointer;
		font-size: 14px;
		font-weight: 500;
		line-height: 45px;
    max-width: 160px;
		outline: none;
		overflow: hidden;
		position: relative;
		text-align: center;
		&.active{
			border-bottom-color: #fff;
		}
	}
</style>
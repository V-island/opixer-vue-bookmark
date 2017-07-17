<template>
<div class="card-list">
	<div class="card">
		123
	</div>
</div>
</template>

<script>
export default {

  name: 'card-list',

  data () {
    return {

    };
  }
};
</script>

<style lang="less" scoped>
.card-list{
	box-sizing: border-box;
	width: auto;
	margin: 0 auto;
	overflow: hidden;
	position: relative;
}
.card{
	display: inline-block;
    // margin: 5px;
    width: 120px;
    height: 120px;
	background: #fff;
    position: relative;
    text-align: center;
    vertical-align: middle;
    white-space: normal;
}
</style>
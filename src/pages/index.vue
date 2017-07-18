<template>
<div class="main">
	<content>
		<card-list></card-list>
	</content>
</div>
</template>

<script>
import cardList from '@/components/cardList';
export default {
  name: 'index',
	components: {
		'card-list': cardList
	},
  data () {
    return {

    };
  }
};
</script>

<style lang="less">
	@import '../assets/less/app';
	.main{
    margin-left: @sidebar-width;
    min-height: 100%;
    padding-top: @sidebar-main-padding;
    height: auto;
    backface-visibility: hidden;
	}
	content{
		// text-align: center;
		display: block;
		line-height: 0;
		position: relative;
	}
	@media only screen and (min-width: 1024px) {
		content{
			padding: 0 12px;
		}
	}
	@media (min-width: 650px) {
		content{
	    width: 85%;
		}
	}
	@media (min-width: 500px) {
		content{
      width: 92%;
		}
	}
	@media only screen and (min-width: 440px) {
		content{
      width: 95%;
		}
	}
	@media only screen and (min-width: 440px) {
		content{
      margin: 0 auto;
      padding: 0;
		}
	}
</style>
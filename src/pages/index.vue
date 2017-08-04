<template>
<div class="main">
	<content>
		<card-list @show="show = true">
		</card-list>
		{{ getItems() }}
	</content>
	<book-modal :show="show" animation="slide-up" :width="448" :height="350" @hide="show = false" @show="show = true">
		<div class="card-modal">
			<div title>创建收藏集</div>
			<input type="text" class="whsOnd zHQkBf" jsname="YPqjbf" autocomplete="off" tabindex="0" aria-label="收藏集名称" maxlength="50" autofocus="" data-initial-value="">
		</div>
	</book-modal>
</div>
</template>
<script>
import cardList from '@/components/cardList';
import bookModal from '@/components/book-modal';
import axios from 'axios';
export default {
  name: 'index',
	components: {
		'card-list': cardList,
		'book-modal': bookModal
	},
  data() {
  	return {
  		show: false
  	}
  },
  methods: {
    getItems() {
		axios({
			url:'http://bkapi.opixer.com',
		    method:"GET",
		    params: {
				service:'Index.GetList',
				type: 'sort'
		    },
			}).then(function (response) {
				console.log(response.data.data);
		  })
		  .catch(function (error) {
		  })
    }
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
	.card-modal{
		[title]{
			font-size: 20px;
	    	font-weight: 500;
		}
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
	.card-modal{
		
	}
</style>
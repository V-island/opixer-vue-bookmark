<template>
<div class="main">
	<content>
		<card-list>
		</card-list>
	</content>
</div>
</template>
<script>
import cardList from '@/components/cardList';

import { mapGetters } from 'vuex'
export default {
  name: 'index',
	components: {
		'card-list': cardList
	},
  data() {
  	return {
  		dialog: false
  	}
  },
  beforeRouteEnter(to, from, next) {
      next((vm) => {
          vm.getListData(vm)
      })
  },
  computed: {
		...mapGetters({
      list: 'getList'
  	})
  },
  methods: {
  	getListData(el) {
  	    window.scroll(0, 0)
  	    let id = el.$route.params.id
  	    let type = this.$route.path.split('/')[1]
  	    let orderName, orderType, page, perpage
  	    let params = {
  	        id,
  	        type,
  	        orderName,
  	        orderType,
  	        page,
  	        perpage
  	    }
  	    el.$store.dispatch('getList', params)
  	}
  }
}
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
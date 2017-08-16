<template>
<div class="main">
	<content>
		<div class="card-list">
			<card v-for="item in list.items" :card="item"></card>
		</div>
	</content>
</div>
</template>
<script>
import card from '@/components/card';

import { mapGetters } from 'vuex'
export default {
  name: 'index',
	components: {
		'card': card
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
  	    // let type = this.$route.path.split('/')[1]
  	    let type = 'sort'
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
	content{
		// text-align: center;
		display: block;
		line-height: 0;
		position: relative;
	}
	.card-list{
		width: auto;
		margin: -12px;
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
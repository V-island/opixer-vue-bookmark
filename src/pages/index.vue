<template>
<div class="main">
	<!-- <nav class="action-bar">
		<div class="action-bar-item">
			<div class="action-bar-link active">
				<a href="#" class="anchor">我的</a>
			</div>
		</div>
		<div class="action-bar-item">
			<div class="action-bar-link">
				<a href="#" class="anchor">常用</a>
			</div>
		</div>
		<div class="action-bar-item">
			<div class="action-bar-spacer"></div>
		</div>
		<div class="action-bar-item">
			<div class="action-bar-link">
				<a href="#" class="anchor">最新</a>
			</div>
		</div>
		<div class="action-bar-item">
			<div class="action-bar-link">
				<a href="#" class="anchor">文章</a>
			</div>
		</div>
	</nav> -->
	<!-- /.action-bar -->
	<card-list class="content"></card-list>
</div>
</template>

<script>
import cardList from '@/components/card-list';
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
	.content{
		// padding: 10px 0;
	}
	.action-bar{
		-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.05);
		box-shadow: 0 1px 0 rgba(0,0,0,0.05);
		background: #fff;
		height: 48px;
		position: relative;
		top: 0;
		width: 100%;
		.action-bar-item{
			display: inline-block;
			height: 48px;
			vertical-align: top;
		}
		.action-bar-spacer{
			background: #d6d6d6;
		    display: inline-block;
		    height: 64%;
		    margin: 9px 5px;
		    padding: 0;
		    width: 1px;
		}
		.action-bar-link{
			-webkit-font-smoothing: antialiased;
			color: @md-grey-600;
			cursor: pointer;
			display: inline-block;
			font-size: 14px;
			font-weight: 400;
			height: 48px;
			line-height: 48px;
			text-decoration: none;
			vertical-align: top;
			&:hover{
			    background-color: rgba(0,0,0,0.05);
			}
		}
		.action-bar-link{
			.anchor, .anchor:visited{
				text-decoration: none;
				-webkit-box-sizing: border-box;
			    box-sizing: border-box;
			    color: @md-grey-600;
			    display: block;
			    font-weight: 400;
			    height: 100%;
			    padding: 0 14px;
			    text-align: left;
			    width: 100%;
			}
			&.active{
				border-bottom-style: solid;
				border-bottom-width: 3px;
				color: @theme-color;
				font-weight: 500;
				height: 45px;
				.anchor{
					color: #333;
					font-weight: 500;
				}
			}
		}
	}
</style>
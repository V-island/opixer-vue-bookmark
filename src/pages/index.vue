<template>
<div class="main">
	<nav class="action-bar">
		<!-- <div class="action-bar-item">
			<div class="action-bar-dropdown-container">
				<div class="action-bar-dropdown">
					<div class="action-bar-dropdown-top">
						<span>分类</span>
						<span class="dropdown-icon"><icon name="angle-down"></icon></span>
					</div>
				</div>
				<div class="action-bar-dropdown-children-container">
					<div class="dropdown-submenu">
						<div style="width:600px;height: 600px"></div>
					</div>
				</div>
			</div>
		</div> -->
		<div class="action-bar-item" style="margin-left: 80px">
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
	</nav>
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

<style lang="less" scoped>
//theme
@theme-color: #37474f;
@theme-font-color: #fff;
//material
@md-grey-400: #bdbdbd;
@md-grey-500: #9e9e9e;
@md-grey-600: #757575;
.content{
	padding: 10px 0;
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
	.action-bar-dropdown-container{
		display: inline-block;
		position: relative;
		vertical-align: top;
	}
	.action-bar-dropdown-children-container{
		margin: -44px 0 0 -40px;
		padding: 40px;
		position: absolute;
		.dropdown-submenu{
			-webkit-border-radius: 3px;
			border-radius: 3px;
			-webkit-box-shadow: 0 2px 40px rgba(0,0,0,0.4);
			box-shadow: 0 2px 40px rgba(0,0,0,0.4);
			background: #fff;
			border: 1px solid @md-grey-400;
			max-height: 500px;
			overflow-x: hidden;
			overflow-y: auto;
			position: absolute;
			top: 0;
			white-space: nowrap;
			z-index: 1100;
			&:first-child{
				opacity: 1;
				filter: alpha(opacity=100);
				left: 0;
				position: relative;
				top: 0;
			}
		}
	}
	.action-bar-spacer{
		background: #d6d6d6;
	    display: inline-block;
	    height: 64%;
	    margin: 9px 5px;
	    padding: 0;
	    width: 1px;
	}
	.action-bar-dropdown, .action-bar-link{
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
	.action-bar-dropdown-top{
	    padding: 0 14px;
	}
	.dropdown-icon{
		display: inline-block;
		margin: 0 3px;
		vertical-align: middle;
	}
}
</style>
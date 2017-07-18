<template>
<div class="card-list">
	<div class="card">
   <a class="card-item">
     <div>
       <div class="card-item-img">
         <img src="http://www.opixer.com/var/thumb/ae20a8cf3c8ea56717523f4b1790e5a5-600-300.jpg">
       </div>
     </div>
     <div class="card-info">
       <div class="card-info-title">1654</div>
       <div class="card-info-txt">我去饿</div>
     </div>
   </a>
	</div>
</div>
</template>

<script>
export default {

  name: 'cardList',

  data () {
    return {

    };
  }
};
</script>

<style lang="less">
  // @import '../assets/less/app';
  .card-list{
  	width: auto;
  	margin: -12px;
    .card{
      margin: 12px;
      width: 253px;
      max-width: 253px;
      display: inline-block;
      position: relative;
      cursor: pointer;
      white-space: normal;
      line-height: normal;
      &:after{
        content: '';
        display: block;
        padding-top: 202px;
        padding-top: ~'calc(56.25% + 118px)';
        @media only screen and (min-width: 440px) {
          padding-top: 242px;
          padding-top: ~'calc(56.25% + 118px)';
        }
      }
      .card-item{
        background-color: #999;
        bottom: 0;
        left: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
        text-align: left;
        top: 0;
        -webkit-border-radius: 0;
        border-radius: 0;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
        z-index: 1;
        @media only screen and (min-width: 440px) {
          border-radius: 2px;
        }
      }
      .card-item-img{
        position: relative;
        height: 0;
        width: 100%;
        overflow: hidden;
        padding-top: 56.25%;
        >img{
          position: absolute;
          display: block;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100%;
          height: auto;
          margin: auto;
        }
      }
      .card-info{
        bottom: 16px;
        height: 102px;
        left: 16px;
        position: absolute;
        right: 16px;
        .card-info-title{
          font-size: 16px;
          line-height: 20px;
          max-height: 40px;
          margin-top: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
          color: #fff;
        }
        .card-info-txt{
          font-size: 12px;
          margin-top: 4px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: break-all;
          color: rgba(255,255,255,0.54);
        }
      }
    }
  }
</style>
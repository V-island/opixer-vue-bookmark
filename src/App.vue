<template>
  <div class="wrapper">
  	<header>
      <nav>
        <div class="menu">
          <div class="menu-icon">
            <icon name="bars" scale="1.3"></icon>
          </div>
          <div class="logo">
            <a href="/">
              <span class="title">OPIXER</span>
              <span>书签</span>
            </a>
          </div>
        </div>
        <!-- /.menu -->
        <div class="search">
          <form class="search-form">
            <button class="btn-searth" type="button"><icon name="search" scale="1.3"></icon></button>
            <div class="input-box">
              <div class="box-body">
                <input value="搜索">
              </div>
            </div>
          </form>
        </div>
        <!-- /.search -->
        <div class="user-menu">
          <div class="user-box">
            <a href="#">
              <span><icon name="user-circle" scale="1.7"></icon></span>
            </a>
          </div>
        </div>
        <!-- /.user-menu -->
      </nav>
      <!-- /.nav -->
    </header>
    <!-- /.header -->
    <div class="content-box">
      <router-view></router-view>
    </div>
    <!-- .content-box -->
  </div>
</template>

<script>
//User-defined components

export default {
  name: 'app'
}
</script>

<style lang="less" scoped>
//theme
@theme-color: #37474f;
@theme-font-color: #fff;
//material
@md-grey-500: #9e9e9e;

.wrapper{
  height: 100%;
  width: 100%;
}
header{
  box-shadow: 0 0 10px @md-grey-500;
  z-index: 1000;
  box-flex: 0;
  min-width: 320px;
  position: relative;
  z-index: 986;
  -webkit-transition: box-shadow .25s;
     -moz-transition: box-shadow .25s;
      -ms-transition: box-shadow .25s;
       -o-transition: box-shadow .25s;
          transition: box-shadow .25s;
}
nav{
  background: @theme-color;
  color: @theme-font-color;
  padding: 8px;
  width: 100%;
  min-width: min-content;
  display: flex;
  position: relative;
  box-sizing: border-box;
  -webkit-transition: background-color .4s;
     -moz-transition: background-color .4s;
      -ms-transition: background-color .4s;
       -o-transition: background-color .4s;
          transition: background-color .4s;
  .menu{
    height: 48px;
    padding-right: 32px;
    flex:1 0 auto;
    vertical-align: middle;
    white-space: normal;
    align-items:center;
    display: flex;
    .menu-icon{
      border-radius: 50%;
      display: inline-block;
      margin: 0 4px;
      padding: 12px;
      overflow: hidden;
      cursor: pointer;
      vertical-align: middle;
      height: 24px;
      width: 24px;
      text-align: center;
      &:hover{
        background: rgba(0, 0, 0, .071);
        outline: none;
      }
    }
    .logo{
      padding-left: 16px;
      line-height: normal;
      position: relative;
      >a{
        color: inherit;
        display: inline-block;
        vertical-align: middle;
        outline: none;
        text-decoration: none;
        >img{
          width: 75px;
          height: 24px;
          vertical-align: middle;
          min-width: 75px;
        }
        >span{
          display: inline-block;
          vertical-align: middle;
          padding-left: 8px;
          font-size: 22px;
          line-height: 24px;
          top: -1.5px;
        }
      }
      .title{
        font-weight: lighter;
        font-size: 30px;
        vertical-align: middle;
        padding-left: 0;
      }
    }
  }
  .search{
    width: 100%;
    height: 48px;
    vertical-align: middle;
    white-space: nowrap;
    display: flex;
    align-items: center;
    flex:1 1 100%;
    .search-form{
      border: 1px soldi rgba(0,0,0,0);
      background: rgba(225, 225, 255, 0.16);
      border-radius: 4px;
      max-width: 720px;
      flex: 1 1 100%;
      position: relative;
      -webkit-transition: background .1s ease-in, width 100ms ease-out;
         -moz-transition: background .1s ease-in, width 100ms ease-out;
          -ms-transition: background .1s ease-in, width 100ms ease-out;
           -o-transition: background .1s ease-in, width 100ms ease-out;
              transition: background .1s ease-in, width 100ms ease-out;
    }
    .btn-searth{
      background: none;
      border: none;
      cursor: pointer;
      outline: none;
      float: left;
      display: inline-block;
      margin: 5px 6px;
      padding: 7px 10px;
      overflow: hidden;
      cursor: pointer;
      vertical-align: middle;
      text-align: center;
      border-radius: 50%;
      color: @theme-font-color;
      &:hover{
        background: rgba(0, 0, 0, .17);
        outline: none;
      }
    }
    .input-box{
      height: 46px;
      padding: 0 11px;
      margin-left: 48px;
      .box-body{
        color: rgba(225,225,255,.7);
        border: none;
        padding: 0;
        padding-bottom: 0;
        height: 46px;
        line-height: 46px;
      }
      input{
        border-color: transparent;
        border-style: solid;
        border-width: 0 1px;
        outline: none;
        opacity: .5;
        height: 100%;
        padding-left: 0;
        padding-right: 0;
        background-color: transparent;
        color: inherit;
        font: inherit;
        line-height: inherit;
      }
    }
  }
  .user-menu{
    flex: 0 0 auto;
    padding-left: 32px;
    height: 48px;
    line-height: normal;
    padding: 0 4px;
    vertical-align: middle;
    align-items: center;
    display: flex;
    .user-box{
      padding: 4px;
      display: inline-block;
      vertical-align: middle;
      a{
        text-decoration: none;
        padding: 4px;
        display: inline-block;
        outline: none;
        vertical-align: middle;
        border-radius: 2px;
        box-sizing: border-box;
        height: 40px;
        width: 40px;
        color: @theme-font-color;
        span{
          border-radius: 50%;
          display: block;
          margin: 0;
          text-align: center;
          vertical-align: middle;
          overflow: hidden;
          position: relative;
          height: 32px;
          width: 32px;
          z-index: 0;
        }
      }
    }
  }
}
.content-box{
  // margin-left: 280px;
  height: 100%;
  display: block;
}
</style>

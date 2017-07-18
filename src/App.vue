<template>
  <div class="wrapper">
    <book-header>
      <book-toolbar>
        <book-icon-button><icon name="bars" scale="1.3"></icon></book-icon-button>
        <div class="title" main-title>
          <span logo-title>OPIXER</span>
          <span pages-title>书签</span>
        </div>
        <book-icon-button><icon name="th" scale="1.3"></icon></book-icon-button>
        <book-icon-button><icon name="star-o" scale="1.3"></icon></book-icon-button>
        <book-icon-button><icon name="user-circle" scale="1.3"></icon></book-icon-button>
      </book-toolbar>
      <book-toolbar class="content-justified">
        <book-tab class="active">精选</book-tab>
        <book-tab>我的</book-tab>
      </book-toolbar>
    </book-header>
    <!-- /.book-header -->
    <router-view></router-view>
  </div>
</template>

<script>
//User-defined components
import bookHeader from '@/components/book-header'
import bookToolbar from '@/components/book-toolbar'
import bookIconButton from '@/components/book-icon-button'
import bookTab from '@/components/book-tab'

export default {
  name: 'app',
  components: {
    'book-header': bookHeader,
    'book-toolbar': bookToolbar,
    'book-icon-button': bookIconButton,
    'book-tab': bookTab
  },
}
</script>

<style lang="less">
  @import './assets/less/app';
  .wrapper{
    height: 100%;
    width: 100%;
  }
</style>

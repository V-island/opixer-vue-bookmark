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
import header from '@/components/book-header'
import toolbar from '@/components/book-toolbar'
import iconButton from '@/components/book-icon-button'
import tab from '@/components/book-tab'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    'book-header': header,
    'book-toolbar': toolbar,
    'book-icon-button': iconButton,
    'book-tab': tab
  },
  data () {
    return {

    }
  },
  watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'hideMenuSlide'
  },
  methods: {
      ...mapActions({ setNavState: 'setNavState' }),
      // 隐藏MenuSlide
      hideMenuSlide() {
        this.setNavState(false)
      }
  },
  computed: {
      ...mapGetters([
          'loading'
      ])
  }
}
</script>

<style lang="less">
  @import './assets/less/app';
  .wrapper{
    height: 100%;
    width: 100%;
  }
</style>

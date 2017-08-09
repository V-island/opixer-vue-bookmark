<template>
  <div class="wrapper">
    <book-header></book-header>

    <router-view></router-view>

  </div>
</template>

<script>
//User-defined components
import header from '@/components/book-header'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  components: {
    'book-header': header
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

<template>
<div id="book-header">
  <!-- <slot></slot> -->
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
  <!-- <book-toolbar class="content-justified">
    <book-tab class="active">精选</book-tab>
    <book-tab>我的</book-tab>
  </book-toolbar> -->
</div>
</template>

<script>
import toolbar from '@/components/book-toolbar'
import iconButton from '@/components/book-icon-button'
import tab from '@/components/book-tab'
export default {

  name: 'book-header',
  components: {
    'book-toolbar': toolbar,
    'book-icon-button': iconButton,
    'book-tab': tab
  },
  data () {
    return {

    };
  }
};
</script>

<style lang="less">
  @import '../assets/less/app';
  #book-header {
    .layout-fixed-top;
    background: @theme-color;
    color: @theme-font-color;
    z-index: 2;
    width: 100%;
  }
</style>
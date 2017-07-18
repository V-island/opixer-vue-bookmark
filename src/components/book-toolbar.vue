<template>
<div class="book-toolbar">
  <slot></slot>
</div>
</template>

<script>
export default {

  name: 'book-toolbar',

  data () {
    return {

    };
  }
};
</script>

<style lang="less">
  @import '../assets/less/app';
  .book-toolbar{
    .layout-horizontal;
    .layout-center;
    position: relative;
    height: 64px;
    padding: 0 16px;
    font-size: @book-toolbar-font-size;
    z-index: 1;
    &.content-justified{
      .layout-center-justified;
      height: 48px;
    }

    > book-icon-buttonn{
      font-size: 0;
    }
    [main-title]{
      margin-left: 12px;
      .layout-flex;
    }
    [logo-title]{
      font-weight: lighter;
      font-size:  @book-logo-font-size;
    }
    [pages-title]{
      border-left: 1px solid rgba(255,255,255,0.2);
      padding-left: 24px;
      margin-left: 24px;
      line-height: 32px;
      font-weight: 500;
    }
  }
</style>
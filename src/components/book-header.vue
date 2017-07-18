<template>
<div id="book-header">
  <slot></slot>
</div>
</template>

<script>
export default {

  name: 'book-header',

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
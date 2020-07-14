<template>
  <div class="le-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'le-button-group',
  mounted () {
    const children = this.$el.children
    console.log(children)
    for (let i = 0, l = children.length; i < l; i++) {
      const tagName = children[i].tagName.toUpperCase()
      if (children[i].tagName.toUpperCase() !== 'BUTTON') {
        console.error(`子元素必须是 BUTTON, 不应该是${tagName}`)
        break
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~@/styles/_var.scss';
  .le-button-group {
    display: inline-flex;
    align-items: center;
    button {
      position: relative;
      border-radius: 0;
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:hover {
        z-index: 1;
      }
      &:focus, &:active {
        z-index: 2;
      }
    }
  }
</style>

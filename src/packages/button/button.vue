<template>
  <button :class="btnClass" :disabled="loading" @click="$emit('click', $event)">
    <le-icon class="icon" v-if="icon && !loading" :icon="icon"></le-icon>
    <le-icon class="icon" v-if="loading" icon="loading"></le-icon>
    <span class="button" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import classNames from 'classnames'
export default {
  name: 'le-button',
  props: {
    type: {
      type: String,
      default: '',
      validator (type) {
        const types = ['warning', 'success', 'danger', 'info', 'primary']
        if (type && !types.includes(type)) {
          console.error(`
            type类型必须为：${types.join('、')}
          `)
        }
        return true
      }
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (type) {
        const types = ['left', 'right']
        if (!types.includes(type)) {
          console.error(`
            iconPosition属性必须为：left | right
          `)
        }
        return true
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnClass () {
      const classes = classNames({
        'le-button': true,
        [`le-button-${this.type}`]: !!this.type,
        [`le-button-${this.iconPosition}`]: !!this.icon
      })
      return classes
    }
  }
}
</script>

<style lang="scss">
@import '../styles/_var.scss';
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.le-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  height: $height;
  line-height: 1;
  font-size: $font-size;
  cursor: pointer;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  user-select: none;

  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    opacity: .6;
  }

  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus, &:active {
    color: $active-color;
    border: 1px solid $active-color;
    background-color: $background;
    outline: none;
  }

  .icon {
    width: 16px;
    height: 16px;
  }

  &-left {
    .icon {
      order: 1;
      & + .button {
        margin-left: 4px;
      }
    }
    .button {
      order: 2;
    }
  }

  &-right {
    .icon {
      order: 2;
    }
    .button {
      order: 1;
      margin-right: 4px;
    }
  }

  // type button
  @each $type, $color in (primary: $primary, success: $success, warning: $warning, info: $info, danger: $danger) {
    &-#{$type} {
      background-color: #{$color};
      border-color: #{$color};
      color: #fff;
      fill: #fff;
    }
  }

  @each $type, $color in (primary: $primary-hover, success: $success-hover, warning: $warning-hover, info: $info-hover, danger: $danger-hover) {
    &-#{$type}:hover {
      background-color: #{$color};
      border-color: #{$color};
      color: #fff;
    }
  }

  @each $type, $color in (primary: $primary-active, success: $success-active, warning: $warning-active, info: $info-active, danger: $danger-active) {
    &-#{$type}:active, &-#{$type}:focus {
      background-color: #{$color};
      border-color: #{$color};
      color: #fff;
    }
  }
}
</style>

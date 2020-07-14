import Vue from 'vue'
import Button from '@/packages/button'
import Icon from '@/packages/icon'
import ButtonGroup from '@/packages/button-group'

function install (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(ButtonGroup.name, ButtonGroup)
}

// 真的script直接引入组件库
if (typeof window.Vue !== 'undefined') {
  install(Vue)
}

export default {
  install
}

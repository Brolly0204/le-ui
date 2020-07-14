<template>
  <div id="app">
    <!-- 默认按钮 -->
    <le-button>默认按钮</le-button>
    <br>
    <!-- 带类型的按钮 -->
    <le-button type="primary">主要按钮</le-button>
    <le-button type="warning">警告按钮</le-button>
    <le-button type="danger">危险按钮</le-button>
    <le-button type="success">成功按钮</le-button>
    <le-button type="info">信息按钮</le-button>

    <!-- icon -->
    <le-icon icon="sousuo"></le-icon>
    <le-icon icon="edit"></le-icon>

    <!-- icon button -->
    <le-button type="primary" icon="sousuo">搜索</le-button>
    <le-button type="primary" icon="sousuo" icon-position="right">搜索</le-button>
    <le-button type="primary" icon-position="right">搜索</le-button>
    <le-button type="primary" icon="sousuo"></le-button>
    <le-button type="primary" icon="sousuo" loading>加载</le-button>
    <br>
    <le-button-group>
      <le-button icon="left">上一页</le-button>
      <le-button icon="right" iconPosition="right">上一页</le-button>
    </le-button-group>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

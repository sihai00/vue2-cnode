<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang='scss'>
/* 全局样式 */
html{
  height: 100%;
  max-height: 100%;
  font-size: 62.5%;
}
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #eee;
}
a{
  text-decoration: none;
}
ul {
  padding: 0;
  margin-left: 0;
  li{
    list-style: none;
  }
}
.label-primary {
  background-color: #337ab7;
}
.clearfix{
  &:before,
  &:after {
    content: " ";
    display: table;
  }
  &:after {
    clear: both;
  }
}
</style>

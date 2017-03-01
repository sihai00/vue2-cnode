<template>
  <div id="app">
    <cnav></cnav>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <returnTop></returnTop>
  </div>
</template>

<script>
import cnav from './components/cnav'
import returnTop from './components/returnTop'

export default {
  name: 'app',
  components: {cnav,returnTop}
}
</script>

<style lang="scss">
// 过渡动画
.fade-enter-active, .fade-leave-active {
  transition: opacity .7s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
/* 全局样式 */
html{
  height: 100%;
  max-height: 100%;
  font-size: 62.5%;
  transition: all 1s;
}
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // background-color: #eee;
}
h1{
  font-size: 2rem;
  margin-top: 0;
}
h2{
  margin-top: 0;
  font-size: 1.8rem;
}
h3{
  font-size: 1.6rem;
}
a, a:active, a:focus{
  text-decoration: none;
}
ul {
  padding: 0;
  margin-left: 0;
  li{
    list-style: none;
  }
}
#app{
  position: absolute;
  width: 100%;
  height: 100%;
}
.app-wrap{
  padding-top: 5rem;
  background-color: #eee;
  height: 100%;
}
.content{
  img{
    max-width: 3rem;
    max-height: 3rem;
    float: left;
    margin: 0.3rem 1rem 0.3rem 0;
  }
  .info-item{
    margin-bottom: 0.1rem;
    color: #2c3e50;
    font-size: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.markdown-text{
  img{
    max-width: 100%;
  }
}
.coment-content h1{
  font-size: 2rem;
}
</style>

<template>
  <nav class="cnav">
    <a href="#"><strong>Cnode-mobile</strong></a>
    <a @click="increment">狗蛋</a>
  </nav>
</template>

<script>
export default {
  name: 'cnav',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    increment(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cnav{
  font-size: 1.8rem;
  line-height: 5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
  background-color: #f8f8f8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  a{
    color: #5e5e5e;
  }
}
</style>

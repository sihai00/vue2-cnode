<template>
  <div class="returnTop" @click="returnTop">Top</div>
</template>

<script>
export default {
  name: 'returnTop',
  methods: {
    returnTop(){
      document.body.scrollTop = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.returnTop{
  position: fixed;
  right: 3rem;
  bottom: 12rem;
  width: 4rem;
  background-color: rgba(223, 240, 216, 0.58);
  color: #777;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 4rem;
  border-radius: 50%;
  &:before{
    content: '';
    width: 0;
    position: absolute;
    top: -1.9rem;
    border-bottom: 1.2rem solid rgba(223, 240, 216, 0.58);
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-top: 1.2rem solid transparent;
  }
}
</style>

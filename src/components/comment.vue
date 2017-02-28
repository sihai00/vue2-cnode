<template>
  <div class="comment-textarea">
    <form>
      <textarea class="form-control" rows="3" ></textarea>
      <button type="button" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'comment',
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
.comment-textarea{
  padding: 1rem 0;
  button{
    width: 100%;
    margin-top: 10px;
  }
}
</style>

<template>
  <div class="app-wrap">
    <section class="login">
      <form role="form">
          <div class="form-group">
            <label>登录Token:</label>
            <input type="text" class="form-control">
          </div>
          <button type="button" class="btn btn-success" @click="submitToken">提交</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    submitToken() {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login{
  padding: 10px 15px; 
  button{
    width: 100%;
  }
}
</style>

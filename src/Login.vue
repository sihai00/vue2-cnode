<template>
  <div class="app-wrap">
    <section class="login">
      <form role="form">
          <div class="form-group">
            <label>登录accessToken:</label>
            <input type="text" class="form-control" v-model="token">
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
      token: '5131a181-5dbb-4f55-9fd7-4fc128120a28'
    }
  },
  methods: {
    submitToken() {
      this.$store.dispatch('verifyUser', this.token)
      // 跳转
      this.$router.push('/')
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

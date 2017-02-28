<template>
  <nav class="cnav">
    <span><img src="../assets/logo.png" alt="logo"><a href="#">Cnode</a></span>
    <span>
      <router-link :to="{name: 'Login'}">
        <img :src="[userLogo]" alt="userLogo" v-if="userLogo">
        <img src="../assets/timg.jpeg" alt="userLogo" v-else>
      </router-link>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'cnav',
  computed: {
    userLogo() {
      return this.$store.state.userInfo.avatar_url
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
  span{
    font-weight: bold;
  }
  a{
    color: #5e5e5e;
  }
  img{
    width: 3rem;
    height: 3rem;
    border-radius: 6px;
  }
}
</style>

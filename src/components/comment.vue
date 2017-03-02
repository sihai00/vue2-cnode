<template>
  <div class="comment-textarea">
    <form>
      <textarea class="form-control" rows="3" v-model="comment_content"></textarea>
      <button type="button" class="btn btn-success" @click="submit_comment">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: ['replyid','replyName'],
  data () {
    return {
      comment_content: this.replyid ? `@${this.replyName} ` : null,
    }
  },
  methods: {
    submit_comment(){
      let body = {
        content: this.comment_content,
        replyid: this.replyid
      }
      this.$store.dispatch('setComment',body)
      this.$store.commit('set_areatext', '')
      this.comment_content = this.replyid ? `@${this.replyName} ` : null
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

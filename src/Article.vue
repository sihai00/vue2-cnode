<template>
  <div class="app-wrap">
    <section class="article" v-if="get_Article.author">
      <h1>{{get_Article.title}}</h1>
      <div class="content">
        <img :src="[get_Article.author.avatar_url]">
        <div class="info">
          <div class="info-item"><span>{{get_Article.author.loginname}}</span><span class="label label-primary">{{get_Article.tab | getArticleTab(get_Article.good, get_Article.top)}}</span></div>
          <div class="info-item"><time>发布于：{{get_Article.create_at.split('T')[0]}}</time><time>{{get_Article.visit_count}}次浏览</time></div>
        </div>
      </div>
      <div class="article-centent" v-html="get_Article.content"></div>
    </section>
    <section class="comment-num" v-if="get_Article.replies">
      <span class="label label-info mr4">{{get_Article.replies.length}}</span><span>回复</span>
    </section>
    <section class="comment">
      <ul>
        <li class="comment-item" v-for="replies in get_Article.replies">
          <div class="content">
            <img :src="[replies.author.avatar_url]">
            <div class="info">
              <div class="info-item" v-if="replies.ups">
                <span>{{replies.author.loginname}}</span>
                <span class="label label-default"
                      :class="[isUps(replies.ups) ? 'label-success' : null]"
                      @click="ups(replies)"
                >{{replies.ups.length}}赞</span>
              </div>
              <div class="info-item">
                <time>发布于：{{replies.create_at.split('T')[0]}}</time>
                <span class="label label-warning" @click="replyid_to(replies.id, replies.author.loginname)">回复</span>
              </div>
            </div>
          </div>
          <div class="coment-content" v-html="replies.content"></div>
          <comment 
            v-show="get_aretext_state == replies.id" 
            :replyid="replies.id" 
            :replyName="replies.author.loginname"
            :replyState="replyid"
          ></comment>
        </li>
      </ul>
    </section>
    <section class="comment-wrap">
      <comment></comment>
    </section>
  </div>
</template>

<script>
import comment from './components/comment'
export default {
  name: 'Article',
  data () {
    return {
      replyid: '',
    }
  },
  mounted(){
    this.$store.dispatch('getArticle', this.$route.params.id)
  },
  computed: {
    get_Article() {
      return this.$store.state.article
    },
    get_aretext_state() {
      return this.$store.state.areatext_state
    }
  },
  components: {comment},
  methods: {
    replyid_to(id, name) {
      // this.replyid = id
      this.$store.commit('set_areatext',id)
    },
    ups(replies){
      this.$store.dispatch('setUps', replies)
    },
    isUps(ups){
      let myId = this.$store.state.userInfo.id
      
      return ups.some((v, i) => {
        if (v === myId) {
          return true
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/*article*/
.article{
  padding: 1rem;
  background-color: #fff;
  h1{
    padding: .6rem;
    background-color: #f0f0f0;
    border-radius: 4px;
  }
  .article-centent{
    font-size: 1.4rem;
    margin-top: 1rem;
    overflow: scroll;
    background-color: #eee;
    padding: 1rem;
    border-radius: 4px;
    img{
      width: 100%;
    }
  }
}
/*comment-num*/
.comment-num{
  font-size: 1.4rem;
  margin: 1rem 0;
  padding: 1rem;
  background-color: #fff;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  span{
    vertical-align: middle;
  }
}
/*comment*/
.comment{
  background-color: #fff;
  .comment-item{
    padding: 1rem;
    border-bottom: 1px solid #ddd;
  }
  .coment-content{
    font-size: 1.4rem;
    margin-top: 1rem;
    overflow: scroll;
    background-color: #eee;
    padding: 1rem 1rem 0;
    border-radius: 4px;
  }
}
.comment-wrap{
  padding: 0 1rem;
}
</style>

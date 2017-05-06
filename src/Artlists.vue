<template>
  <div class="app-wrap">
    <section class="slide">
    	<ul>
          <li v-for="topic in topics"
              :class="[topic.type == activeTab ? 'active' : null]"
              @click="select_topic(topic.type)"
          >{{ topic.title }}</li>
    	</ul>
  	</section>
    <section class="artlist">
      <ul>
        <li class="artlist-item" v-for="artlist in this.artlists">
          <router-link :to="{ name: 'Article', params: { id: artlist.id }}">
            <div class="artlist-title"><span class="label label-success">{{artlist.tab | getArticleTab(artlist.good, artlist.top)}}</span><strong>{{ artlist.title }}</strong></div>
            <div class="content clearfix">
              <img :src="[artlist.author.avatar_url]">
              <div class="info">
                <div class="info-item"><span>{{artlist.author.loginname}}</span><span>{{artlist.reply_count}}/{{artlist.visit_count}}</span></div>
                <div class="info-item"><time>创建时间：{{artlist.create_at.split('T')[0]}}</time><time>{{artlist.last_reply_at | getLastTime}}</time></div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </section>
    <!-- <footer class="footer">
      <ul>
        <li class="active">cnode</li>
        <li>aa</li>
        <li>bb</li>
        <li>cc</li>
      </ul>
    </footer> -->
  </div>
</template>

<script>
export default {
  name: 'Artlists',
  data () {
    return {
      topics: [
        {'title' : '全部', 'type' : 'all'},
        {'title' : '精华', 'type' : 'good'},
        {'title' : '分享', 'type' : 'share'},
        {'title' : '问答', 'type' : 'ask'},
        {'title' : '招聘', 'type' : 'job'}
      ],
      activeTab: localStorage.tab || 'all' ,
      isScroll: true
    }
  },
  // 第一次加载完执行
  mounted() {
    this.$store.dispatch('getArtlists', this.activeTab)
    this.$store.commit('set_artlists_type', this.activeTab)

    let window_height = window.innerHeight
    document.addEventListener('scroll', () => {
      if (this.isScroll && (window_height + document.body.scrollTop > document.body.clientHeight)) {
        this.isScroll = false
        this.$store.commit('set_artlists_limit', 10)
        this.$store.commit('set_artlists_type', this.activeTab)
        this.$store.dispatch('getArtlists').catch((e) => {
          console.log(e)
        })
      }
    })
  },
  // 加载完后获取store的值
  computed: {
    artlists() {
      return this.$store.state.artlists
    }
  },
  // 监听变量加载完后执行
  watch: {
    artlists() {
      this.isScroll = true
    }
  },
  // 该组件方法
  methods: {
    select_topic(type){
      this.$store.commit('set_artlists_type', type)
      this.$store.dispatch('getArtlists', type)
      this.activeTab = type
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.slide{
  font-size: 1.5rem;
	background-color: #fff;
  margin-left: .4rem;
	margin-right: .4rem;
	border-radius: .4rem;
	ul{
		padding: .6rem;
		display: flex;
		justify-content: space-around;
    li{
      padding: .4rem 1rem;
      border-radius: .4rem;
    }
    .active{
      background-color: #80bd01;
      color: #fff;
    }
	}
}
.artlist{
  margin-bottom: 6rem;
  background-color: #fff;
  ul {
    padding: 0;
  }
  li{
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    .artlist-title{
      color: #2c3e50;
      font-size: 1.8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-bottom: 0.4rem;
      strong{
        line-height: 2.6rem;
        margin-left: 0.5rem;
        font-size: 1.6rem;
      }
    }
  }
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 5rem;
  font-size: 1.5rem;
  border-top: 1px solid #ddd;
  ul{
    margin: 0;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    li{
      text-align: center;
    }
    .active{
      font-weight: bold;
      color: #80bd01;
    }
  }
}
</style>

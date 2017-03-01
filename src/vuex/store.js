import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		artlists:[],
		article: [],
    ups: [],
    topic: {
    	page: 1,
      tab: 'all',
      limit: 10,
      mdrender: true
    },
    userInfo:{
      loginname: localStorage.loginname,
      avatar_url: localStorage.avatar_url,
      accesstoken: localStorage.accesstoken,
      id: localStorage.id
    }
  },
  mutations: {
    // 获取帖子列表
    get_artlists(state, artlists){
      state.artlists = artlists
    },
    // 设置帖子列表数量
    set_artlists_limit(state, limit){
    	state.topic.limit += limit
    },
    // 获取帖子信息
    get_article(state, article) {
      state.article = article
    },
    // 获取用户信息
    get_userInfo(state, info){
      state.userInfo = info

      localStorage.avatar_url = info.avatar_url
      localStorage.id = info.id
      localStorage.loginname = info.loginname
      localStorage.accesstoken = info.accesstoken
    },
    // 设置点赞功能
    set_ups(state, upState){
      let userId = state.userInfo.id

      if (upState === 'up') {
        state.ups.push(userId)
      }else{
        for(let [i, v] of state.ups.entries()){
          if (v === userId) {
            state.ups.splice(i, 1)
          }
        }
      }
    },
    // 获取点赞数据
    get_ups(state, ups){
      state.ups = ups
    }
  },
  actions: {
    // 获取列表数据
  	getArtlists(store, type){
  		let { topic } = store.state
  		var string = `limit=${topic.limit}&&tab=${type?type:topic.tab}&&page=${topic.page}&&mdrender=${topic.mdrender}`

  		Vue.axios.get(`https://cnodejs.org/api/v1/topics?${string}`).then((response) => {
			  store.commit('get_artlists', response.data.data)
			}).catch((e) => {
				console.log(e)
			})
  	},
    // 获取文章数据
  	getArticle(store, articleId){
  		Vue.axios.get(`https://cnodejs.org/api/v1/topic/${articleId}`).then((response) => {
  			store.commit('get_article', response.data.data)
  		}).catch((e) => {
  			console.log(e)
  		})
  	},
    // 获取用户详细信息
    getUserDec(store, userName){
      Vue.axios.get(`https://cnodejs.org/api/v1/user/${userName}`).then((response) => {
        store.commit('get_userInfo', response.data.data)
      }).catch((e) => {
        console.log(e)
      })
    },
    // 验证用户token
    verifyUser(store, accesstoken){
      Vue.axios.post(`https://cnodejs.org/api/v1/accesstoken`,{accesstoken}).then((response) => {
        store.commit('get_userInfo', Object.assign(response.data,{accesstoken}))
      }).catch((e) => {
        console.log(e)
      })
    },
    // 设置点赞
    setUps(store, replies){
      Vue.axios.post(`https://cnodejs.org/api/v1/reply/${replies.id}/ups`,{accesstoken: store.state.userInfo.accesstoken}).then((response) => {
        store.commit('get_ups', replies.ups)
        store.commit('set_ups', response.data.action)
        return response.data
      }).catch((e) => {
        console.log(e)
      })
    }
  }
})
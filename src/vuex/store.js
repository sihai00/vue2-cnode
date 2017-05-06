import Vue from 'vue'
import Vuex from 'vuex'
import {getTime} from '../filters'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		artlists:[],
		article: [],
    ups: [],
    // url: 'https://cnodejs.org/api/v1',
    url: 'http://127.0.0.1:3000',
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
    },
    userDec: {},
    areatext_state: ''
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
    // 设置帖子类型
    set_artlists_type(state, type){
      state.topic.tab = type
      localStorage.tab = type
      console.log(localStorage.tab)
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
    },
    // 获取用户详细信息
    get_userDec(state, data){
      state.userDec = data
    },
    get_replyid(state, id){
      state.replyid = id
    },
    set_comment(state, body){
      let string

      string = {
        author: {
          avatar_url: state.userInfo.avatar_url,
          loginname: state.userInfo.loginname,
        },
        content: `<p>${body.content}</p>`,
        create_at: getTime(new Date()),
        id: state.userInfo.id,
        reply_id: null,
        ups: []
      }

      state.article.replies.push(string)
    },
    set_areatext(state, id){
      state.areatext_state = id
    }
  },
  actions: {
    // 获取列表数据
  	getArtlists(store, type){
  		let { topic } = store.state
      if (type) {
        topic.limit = 10
      }else{
        type = topic.tab
      }
  		var string = `limit=${topic.limit}&&tab=${type}&&page=${topic.page}&&mdrender=${topic.mdrender}`

  		Vue.axios.get(`${store.state.url}/topics?${string}`).then((response) => {
			  store.commit('get_artlists', response.data.data)
			}).catch((e) => {
				console.log(e)
			})
  	},
    // 获取文章数据
  	getArticle(store, articleId){
  		Vue.axios.get(`${store.state.url}/topic/${articleId}`).then((response) => {
  			store.commit('get_article', response.data.data)
  		}).catch((e) => {
  			console.log(e)
  		})
  	},
    // 获取用户详细信息
    getUserDec(store){
      if (store.state.userInfo.loginname) {
        Vue.axios.get(`${store.state.url}/user/${store.state.userInfo.loginname}`).then((response) => {
          store.commit('get_userDec', response.data.data)
        }).catch((e) => {
          console.log(e)
        })
      }
    },
    // 验证用户token
    verifyUser(store, accesstoken){
      Vue.axios.post(`${store.state.url}/accesstoken`,{accesstoken}).then((response) => {
        store.commit('get_userInfo', Object.assign(response.data,{accesstoken}))
      }).catch((e) => {
        console.log(e)
      })
    },
    // 设置点赞
    setUps(store, replies){
      Vue.axios.post(`${store.state.url}/reply/${replies.id}/ups`,{accesstoken: store.state.userInfo.accesstoken}).then((response) => {
        store.commit('get_ups', replies.ups)
        store.commit('set_ups', response.data.action)
        return response.data
      }).catch((e) => {
        console.log(e)
      })
    },
    // 评论
    setComment(store, body){
      let string = {
        accesstoken: store.state.userInfo.accesstoken,
        content: body.content,
        reply_id: body.replyid
      }
      // console.log(string)
      Vue.axios.post(`${store.state.url}/topic/${store.state.article.id}/replies`,string).then((response) => {
        store.commit('set_comment', string)
        return response.data
      }).catch((e) => {
        console.log(e)
      })
    }
  }
})
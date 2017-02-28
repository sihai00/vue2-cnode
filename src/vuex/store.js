import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		artlists:[],
		article: [],
    topic: {
    	page: 1,
      tab: 'all',
      limit: 10,
      mdrender: true
    },
  },
  mutations: {
    get_artlists(state, artlists) {
      state.artlists = artlists
    },
    set_artlists_limit(state, limit){
    	state.topic.limit += limit
    },
    get_article(state, article) {
      state.article = article
    }
  },
  actions: {
  	getArtlists(store, type){
  		let { topic } = store.state
  		var string = `limit=${topic.limit}&&tab=${type?type:topic.tab}&&page=${topic.page}&&mdrender=${topic.mdrender}`

  		Vue.axios.get(`https://cnodejs.org/api/v1/topics?${string}`).then((response) => {
			  store.commit('get_artlists', response.data.data)
			}).catch((e) => {
				console.log(e)
			})
  	},
  	getArticle(store, accesstoken){
  		Vue.axios.get(`https://cnodejs.org/api/v1/topic/${accesstoken}`).then((response) => {
  			store.commit('get_article', response.data.data)
  		}).catch((e) => {
  			console.log(e)
  		})
  	}
  }
})
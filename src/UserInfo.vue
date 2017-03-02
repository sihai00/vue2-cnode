<template>
	<div class="app-wrap">
		<section class="userInfo">
			<div class="user-logo"><img :src="[userDec.avatar_url]" alt="头像"></div>
			<div class="user-name"><strong>{{userDec.loginname}}</strong></div>
			<div class="user-dec" v-if="userDec.create_at"><strong>注册时间：{{userDec.create_at.split('T')[0]}}</strong><strong>积分：{{userDec.score}}</strong></div>
		</section>
		<section class="recent">
			<div class="recent-select">
				<span :class="[activeTab === 'replies'? 'active' : null]" @click="selectTab('replies')">最近回复</span>
				<span :class="[activeTab === 'topics'? 'active' : null]" @click="selectTab('topics')">最新发布</span>
			</div>
			<ul class="recent-content" v-if="recents">
				<li v-for="recent in recents" @click="toArticle(recent.id)">
					<div class="content clearfix">
						<img :src="recent.author.avatar_url">
						<div class="info">
							<div class="info-item"><strong>{{recent.title}}</strong></div>
							<div class="info-item">
								<span>{{recent.author.loginname}}</span>
								<span>{{recent.last_reply_at | getLastTime}}</span>
							</div>
						</div>
					</div>
				</li>
				<li v-if="recents.length === 0">
					<div>暂无话题</div>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default {
	name: 'UserInfo',
	data () {
		return {
			activeTab: 'replies',
			recents: []
		}
	},
	mounted(){
		this.$store.dispatch('getUserDec')
	},
	computed: {
		userDec(){
			if (this.activeTab === 'replies') {
				this.recents = this.$store.state.userDec.recent_replies
			}else if(this.activeTab === 'topics'){
				this.recents = this.$store.state.userDec.recent_topics
			}else{
				this.recents = []
			}
			return this.$store.state.userDec
		}
	},
	methods: {
		toArticle(id){
			this.$router.push('/Article/' + id)
		},
		selectTab(tab){
			this.activeTab = tab
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.userInfo{
	padding: 1rem 3rem;
	.user-logo{
		width: 8rem;
		height: 8rem;
		margin: 0 auto;
		img{
			width: 100%;
		}
	}
	.user-name{
		text-align: center;
		font-size: 2rem;
		color: #555;
	}
	.user-dec{
		margin-top: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: #80bd01;
	}
}
.recent{
	background-color: #fff;
	.recent-select{
		display: flex;
		border-bottom: 1px solid #ddd;
		font-weight: bold;
		span{
			flex: 1;
			padding: 1rem;
			text-align: center;
			display: inline-block;
		}
		span:first-child{
			border-right: 1px solid #ddd;
		}
		.active{
			color: #ff5a5f;
			border-bottom: 2px solid #ff5a5f;
		}
	}
}
.recent-content{
	overflow: scroll;
	li{
		padding: 1rem;
		border-bottom: 1px solid #ddd;
	}
}
</style>

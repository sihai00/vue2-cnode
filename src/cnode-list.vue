<template>
  <div class="hello">
    <nav class="nav">
      <a href="#"><strong>Cnode-mobile</strong></a>
      <a href="#">狗蛋</a>
    </nav>
    <section class="slide">
    	<ul>
          <li class="active">
            aaa
          </li>
          <li>
            aaa
          </li>
          <li>
            aaa
          </li>
          <li>
            aaa
          </li>
          <li>
            aaa
          </li>
    	</ul>
  	</section>
    <section class="artlist">
      <ul>
        <li class="artlist-item">
          <div class="artlist-title"><span class="label label-primary">置顶</span><strong>Node.js 2016 回顾以及2017展望</strong></div>
          <div class="content clearfix">
            <img src="./assets/logo.png">
            <div class="info">
              <div class="info-item"><span>i5ting</span><span>36/22</span></div>
              <div class="info-item"><time>创建时间：2015-5-5</time><time>6分钟前</time></div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <footer class="footer">
      <ul>
        <li>cnode</li>
        <li>aa</li>
        <li>bb</li>
        <li>cc</li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'cnode-list',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.nav{
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
  a{
    color: #5e5e5e;
  }
}
.slide{
  margin-top: 6rem;
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
      font-size: 1.8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      span{
        display: inline-block;
        padding: .2rem .6rem .3rem;
        font-weight: 700;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        border-radius: 6px;
        margin-right: 4px;
      }
    }
    .content{
      padding-top: 1rem;
      img{
        display: inline-block;
        max-width: 4rem;
        max-height: 4rem;
        float: left;
        margin-right: 1rem;
      }
      .info-item{
        font-size: 1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
  ul{
    margin: 0;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    li{
      text-align: center;
      width: 3rem;
    }
  }
}
</style>

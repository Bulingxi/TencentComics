<template>
	<main>
		<div class="topnav">
			<div class="back" @click="back()"></div>
			<h2 class="top-title">深度看漫画</h2>
		</div>
		<ul class="topic-list">
			<li class="topic-item" v-for="(item,index) in topic">
				<router-link to="/vip" class="vip">
					<img :src="item.topicpic" />
					<i class="topic-time">2019-04-11</i>
					<p class="topic-title">
						<span class="light-title">专题</span>
						<span class="title-con">{{item.titlecon}}</span>
						<i><img src="../../assets/images/sright.png"/></i>
					</p>
				</router-link>
				
			</li>
		</ul>
		<p class="no-more">客官，人家已经没有那个的啦~~</p>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				topic:[
					{
						topicpic:require('../../assets/images/deep1.jpg'),
						titlecon:'就你话多07：等价交换，你付得起足够的代价吗？'
					},
					{
						topicpic:require('../../assets/images/deep2.jpg'),
						titlecon:'15秒入坑19：万渣朝凰'
					},
					{
						topicpic:require('../../assets/images/deep3.jpg'),
						titlecon:'小编藏书目录14：踏青赏漫两不误'
					},
					{
						topicpic:require('../../assets/images/deep4.jpg'),
						titlecon:'15秒入坑18：霸凰传说'
					},
					{
						topicpic:require('../../assets/images/deep5.jpg'),
						titlecon:'今日限定！四小编漫画家出道'
					},
					{
						topicpic:require('../../assets/images/deep6.jpg'),
						titlecon:'小编藏书目录13：我们的生存游戏'
					},
					{
						topicpic:require('../../assets/images/deep7.jpg'),
						titlecon:'15秒入坑17：朕也不想这样'
					},
					{
						topicpic:require('../../assets/images/deep8.jpg'),
						titlecon:'就你话多06：血脉相承，将门终将出虎子'
					},
					{
						topicpic:require('../../assets/images/deep9.jpg'),
						titlecon:'小编藏书目录12：萌妹的裙下有野兽！'
					},
					{
						topicpic:require('../../assets/images/deep10.jpg'),
						titlecon:'15秒入坑16：我乘白虎去'
					},
					{
						topicpic:require('../../assets/images/deep11.jpg'),
						titlecon:'15秒入坑15：我的仇人有超能力'
					},
					{
						topicpic:require('../../assets/images/deep12.jpg'),
						titlecon:'15秒入坑14：皇子，你想干啥'
					}
				]
			}
		},
		methods:{
			back(){
				this.$router.push('/index')
			}
		}
	}
</script>



<style scoped>
	
	.topnav{
		background: white;
		/*overflow: hidden;*/
		overflow: hidden;
		padding-bottom: 18px;
	}
	.back{
		width:27px;
		height: 27px;
		display: inline-block;
		/*padding: 0.375rem;*/
		box-sizing: border-box;
		background: url(../../assets/images/icons_1.png);
		background-position: -80px -251px;
		background-size:300px;
		position: relative;
		top: 14px;
		left: 8px;
	}
	.top-title{
		/*width: 60px;*/
		font-size: 18px;
		color: #535252;
		line-height: 1.6rem;
		height: 1.5rem;
		display: inline-block;
		background: white;
		position: relative;
		top: 5px;
		left: 50%;
		transform: translateX(-80%);
		
	}
	.topic-list{
		width: 100%;
		height: auto;
		overflow: hidden;
		margin-top: 55px;
	}
	.topic-item{
		width: 100%;
		height: auto;
		margin-bottom: 15px;
		position: relative;
	}
	.topic-item img{
		width: 100%;
		height: auto;
	}
	.topic-item:nth-last-child{
		margin-bottom: 0;
	}
	.vip{
		width: 100%;
		height: auto;
	}
	.topic-title{
		width: 100%;
		height: auto;
		overflow: hidden;
		margin-top: -4px;
		background: white;
	}
	.light-title{
		width: 10%;
		background: #FF9A6A;
		color: white;
		font-size: 14px;
		text-align: center;
		padding: 12px;
		display: inline-block;
	}
	.title-con{
		width: 70%;
		display: inline-block;
		font-size: 15px;
		color:#535252;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		/*margin-top: 15px;*/
		vertical-align: middle;
	}
	.topic-title i {
		width: 21px;
		height: 21px;
		display: inline-block;
		float: right;
		margin-top:13px;
	}
	.topic-title i img{
		width: 100%;
		height: auto;
	}
	.topic-time{
		width: 100px;
		height: 21px;
		background: url(../../assets/images/sc_img_default.png) no-repeat;
		background-size: 100px;
		background-position: 0px 0;
		color: white;
		font-size: 12px;
		font-style: normal;
		position: absolute;
		top: 75%;
		left: 0;
		line-height: 21px;
		text-align: center;
		text-indent: 10px;
	}
	.no-more{
		width: 100%;
		color: #969696;
		text-align: center;
		font-size: 13px;
		padding: 0.95rem 0;
	}
</style>






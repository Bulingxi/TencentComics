<template>
	<main>
		<section class="tues-box">
			<ul class="rank-list">
				<li class="rank-item" v-for="(item,index) in tues">
					<router-link to="/comicInfo" class="rank-a">
						<p class="rank-pic">
							<img :src="item.src2" />
						</p>
						<div class="rank-info">
							<strong class="rank-title">{{item.title2}}</strong>
							<span class="rank-update">{{item.update2}}</span>
							<span class="rank-update">{{item.tag2}}</span>
							<span class="rank-update">{{item.con2}}</span>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
	</main>
</template>



<script>
	export default{
		data(){
			return{
				tues:[
//					{
//						src2:require('../../assets/images/rank1.jpg'),
//						title2:'通灵妃',
//						update2:'更新到209话',
//						tag2:'都市 恋爱 明星',
//						con2:'【周五周日更新】“想要重生就要实现她的愿望。”“那她的愿望是什么？”“追影帝！”——姑奶奶，你让我一个恋爱都没谈过的人怎么去追一个影帝！？看小演员如何扑倒大影帝。'
//						
//					},
//					{
//						src2:require('../../assets/images/rank11.jpg'),
//						title2:'王牌校草',
//						update2:'更新到153话',
//						tag2:'纯爱 恋爱 虐心',
//						con2:'虐心、夺嫡、后宫的明争暗斗，一场以复仇为开端的古风剧'
//						
//					},
//					{
//						src2:require('../../assets/images/rank4.jpg'),
//						title2:'重生只为追影帝',
//						update2:'更新到132话',
//						tag2:'爆笑 热血 格斗',
//						con2:'“零”是人类第一个真正意义上的超级英雄。 在他的带动下，不断涌现出了大量的超级英雄。但是他在持续战斗了五年之后，却消失在了人们的视线之中。【授权/每周二更新】'
//						
//					},
//					{
//						src2:require('../../assets/images/rank5.jpg'),
//						title2:'帝王侧',
//						update2:'更新到161话',
//						tag2:'恋爱 唯美 魔幻',
//						con2:'能够看破人心的平凡少女应邀加入当红乐队，深陷充满机遇与阴谋的华丽陷阱，邂逅一众声音化形的美艳音灵，开启少女一路逆袭，成为一代天后的开挂之旅！'
//						
//					},
//					{
//						src2:require('../../assets/images/rank7.jpg'),
//						title2:'怪奇天籁音灵笔记',
//						update2:'更新到241话',
//						tag2:'恐怖 悬疑 脑洞',
//						con2:'【每周二、四、六更新】这里是脑洞故事集中营，亦是奇妙的漫画物语！不到最后一刻，结局一直在你想象之外！'
//						
//					},
//					{
//						src2:require('../../assets/images/rank9.jpg'),
//						title2:'妹子与科学',
//						update2:'更新到406话',
//						tag2:'科幻 冒险 穿越',
//						con2:'穿越 宏伟浩大场景 毁天灭地的战斗',
//						
//					},
//					{
//						src2:require('../../assets/images/rank15.jpg'),
//						title2:'食色大陆',
//						update2:'更新到235话',
//						tag2:'纯爱 爆笑 恋爱',
//						con2:'【每周不定时更新】此部为《同居男闺蜜》完整故事作品，一男一女，同是冤家又是闺蜜，同住一个屋檐下的纯都市爱情漫画，很接地气的都市爱情哈！'
//						
//					},
//					{
//						src2:require('../../assets/images/rank17.jpg'),
//						title2:'我家师兄脑袋有坑',
//						update2:'更新到320话',
//						tag2:'校园 恋爱 生活',
//						con2:'一个跌宕起伏的校园恋爱故事，凌曜和唐茉茉本是命中注定，却相见不相识，他故意阻挠她追求男神，她就专门陷害他被花痴非礼。他们最终能否终成眷属？且看欢喜冤家斗智斗勇，胜者为王，败者？暖床！【授权/每周五更新】'
//						
//					},
//					{
//						src2:require('../../assets/images/rank13.jpg'),
//						title2:'传武',
//						update2:'更新到161话',
//						tag2:'恋爱 校园',
//						con2:'当暴力人类少女捡到化身为萌正太的外星帝王，当黑暗料理界扛把子遇到食物链顶端吞天吞地的凶残包子，看少女如何养成称霸宇宙的强大龙族！'
//						
//					},
//					{
//						src2:require('../../assets/images/rank14.jpg'),
//						title2:'从前有座灵剑山',
//						update2:'更新到129话',
//						tag2:'古风 恐怖',
//						con2:'他说：“这世上本不该有鬼”。然后，这世间为之一清。'
//						
//					},
//					{
//						src2:require('../../assets/images/rank24.jpg'),
//						title2:'贺少的闪婚娇妻',
//						update2:'更新到479话',
//						tag2:'玄幻 爆笑 古风',
//						con2:'创世中文网《从前有座灵剑山》授权官方漫画！因彗星陨落，末法大劫而降临的奇才，来自现代世界的穿越者王陆，怀着千年未有的空灵根，踏入灵剑派山门，走上了一条智商碾压异界，成为绝世逗逼强者的不寻常路！每周三，周日更新！'
//						
//					},
//					{
//						src2:require('../../assets/images/rank22.jpg'),
//						title2:'我的天劫女友',
//						update2:'更新到386话',
//						tag2:'穿越 玄幻 爆笑',
//						con2:'主角穿越到修真世界之后，发现自己竟然不是主角设定！这不就坑爹了吗？打怪升级不重要了！活下去才是关键啊！于是炮灰NPC开始了寻找主角大腿的没节操生活。【授权/每周六更新】同名【漫改动画】正在热播，快来追番嗷~'
//						
//					},
//					{
//						src2:require('../../assets/images/rank23.jpg'),
//						title2:'我为苍生',
//						update2:'更新到299话',
//						tag2:'穿越 励志 美食',
//						con2:'没有味觉怎么当厨师？没关系！外挂菜刀在手，天下我有！美食抽奖系统，自带美女师傅，还有灵植空间！“教练，我要成为厨师！”从此，付炎泽一本正经的走向了成为美食之神（后宫之神）的道路！'
//						
//					},
//					{
//						src2:require('../../assets/images/rank20.jpg'),
//						title2:'小绿和小蓝',
//						update2:'更新到205话',
//						tag2:'爆笑 纯爱 校园',
//						con2:'还记得初恋的味道么？有可能你已经忘记初恋的味道了，或许你已将它埋在心里，也或许此时此刻正经历着初恋，不管如何，初恋呢，是甜蜜的，是羞涩的，是幸福的。曾经是初恋的那个人， 当再次相遇的时候，会擦出什么样的火花呢。'
//						
//					},
//					{
//						src2:require('../../assets/images/rank17.jpg'),
//						title2:'我家师兄脑袋有坑',
//						update2:'更新到211话',
//						tag2:'爆笑 热血 玄幻',
//						con2:'年仅七岁却超速生长的短命神童时江，为恢复正常生活，带着寄宿体内的某位大神仙闯入仙界，从此走上成为仙界大亨的传奇之路……'
//						
//					},
//					{
//						src2:require('../../assets/images/rank19.jpg'),
//						title2:'我的天劫女友',
//						update2:'更新到454话',
//						tag2:'玄幻 恋爱 冒险',
//						con2:'现代修仙界，尔虞我诈，弱肉强食，人人自危。保安马英雄救下修仙少女之后，误打误撞的开始了修行之路.......'
//					
//					},
//					{
//						src2:require('../../assets/images/rank20.jpg'),
//						title2:'小绿和小蓝',
//						update2:'更新到401话',
//						tag2:'恐怖 惊险 僵尸',
//						con2:'那些年我相信有一种律法叫天道，那些年我知道有一种命运叫轮回。那些年我掌握了一种占卜叫经验，那些年我记得有一种长生不死叫僵尸，那些年，那些我遇到的离奇诡异的事件！'
//						
//					},
//					{
//						src2:require('../../assets/images/rank21.jpg'),
//						title2:'我是大神仙',
//						update2:'更新到209话',
//						tag2:'都市 恋爱 明星',
//						con2:'【周五周日更新】“想要重生就要实现她的愿望。”“那她的愿望是什么？”“追影帝！”——姑奶奶，你让我一个恋爱都没谈过的人怎么去追一个影帝！？看小演员如何扑倒大影帝。'
//						
//					},
//					{
//						src2:require('../../assets/images/rank22.jpg'),
//						title2:'我的天劫女友',
//						update2:'更新到209话',
//						tag2:'都市 恋爱 明星',
//						con2:'【周五周日更新】“想要重生就要实现她的愿望。”“那她的愿望是什么？”“追影帝！”——姑奶奶，你让我一个恋爱都没谈过的人怎么去追一个影帝！？看小演员如何扑倒大影帝。'
//						
//					},
//					{
//						src2:require('../../assets/images/rank23.jpg'),
//						title2:'我为苍生',
//						update2:'更新到209话',
//						tag2:'都市 恋爱 明星',
//						con2:'【周五周日更新】“想要重生就要实现她的愿望。”“那她的愿望是什么？”“追影帝！”——姑奶奶，你让我一个恋爱都没谈过的人怎么去追一个影帝！？看小演员如何扑倒大影帝。'
//						
//					},
//					{
//						src2:require('../../assets/images/rank24.jpg'),
//						title2:'贺少的闪婚娇妻',
//						update2:'更新到209话',
//						tag2:'都市 恋爱 明星',
//						con2:'【周五周日更新】“想要重生就要实现她的愿望。”“那她的愿望是什么？”“追影帝！”——姑奶奶，你让我一个恋爱都没谈过的人怎么去追一个影帝！？看小演员如何扑倒大影帝。'
//						
//					}
				]
			}
	},
	mounted(){
		this.$http.get("./data/tuesday.json")
			.then((res)=>{
				
				this.tues=res.data.tues
			})
	}
	}
</script>

<style>
	.tues-box{
		width: 100%;
		height: auto;
		padding-top: 0.25rem
	}
	.rank-list{
		width: 100%;
		height: auto;
		padding: 5px;
		overflow: hidden;
	}
	.rank-item{
		/*width: 100%;*/
		height: auto;
		background: white;
		border-bottom: 0.25rem solid #F5F5EE;
		padding: 0.25rem;
		margin-right: 12px;
	}
	.rank-pic{
		height: 5.775rem;
    	width: 4.5rem;
		margin-right: 0.5rem;
		display: inline-block;
	}
	.rank-pic img{
		width: 100%;
		height: auto;
	}
	.rank-a{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.rank-info{
		width: 75%;
		height: auto;
		display: inline-block;
		position: relative;
		/*float: right;*/
	}
	.rank-title{
		width: 80%;
		height: auto;
		padding-right: 2rem;
		padding-top: 0.25rem;
		color: #535252;
    	font-size:16px;
    	display: block;
	}
	.rank-update{
		width: 100%;
		display: block;
		margin: 5px 0;
		font-size: 0.6rem;
		color: #969696;
		text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	    /*display:inline-block;*/
	}
	.rank-num{
		position: absolute;
		top: 0;
		right: 0;
		font-size: 2rem;
		display: block;
		font-style: normal;
		color: #C5C5C5;
	}
</style>












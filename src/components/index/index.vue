<template>
	<main id="mainBox" v-cloak>
		<div class="topnav">
			<div class="top-logo"></div>
			<div class="btn">
				<router-link to="/search" class="btn-search"></router-link>
				<div class="main-menu" v-clickoutside="handleClose">
					<div class="btn-f" @click="mshow=!mshow"></div>
				</div>
				
			</div>
		</div>
		<!--导航菜单-->	
		<transition enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp">
		<div class="nav-menu-box" v-show="mshow">
			<div class="nav-menu">
				<ul class="nav-list">
					<li class="item">
						<router-link to="/index" class="item-a">
							<i class="pic"></i>
							<span>首页</span>
						</router-link>
					</li>					
					<li class="item">
						<router-link to="/collect" class="item-a">
							<i class="pic collect"></i>
							<span>收藏</span>
						</router-link>
					</li>
					<li class="item">
						<router-link to="/his" class="item-a">
							<i class="pic his"></i>
							<span>历史</span>
						</router-link>
					</li>
					<li class="item">
						<router-link to="/category" class="item-a">
							<i class="pic col"></i>
							<span>分类</span>
						</router-link>
					</li>
					<li class="item">
						<router-link to="/rank" class="item-a">
							<i class="pic rank"></i>
							<span>排行</span>
						</router-link>
					</li>
					<li class="item">
						<router-link to="/schedule" class="item-a">
							<i class="pic sche"></i>
							<span>追更</span>
						</router-link>
					</li>
					<li class="item map">
						<router-link to="/login" class="item-a">
							<i class="pic my"></i>
						</router-link>
					</li>
					
				</ul>
			</div>
		</div>
		</transition>
		<!--轮播-->
		<mt-swipe :auto="3000">
		  <mt-swipe-item>
		  	<router-link to="/index">
		  		<img src="../../assets/images/swiper_1.jpg" />
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/index">
		  		<img src="../../assets/images/swiper_2.jpg" />
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/index">
		  		<img src="../../assets/images/swiper_3.jpg" />
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/index">
		  		<img src="../../assets/images/swiper_4.jpg" />
		  	</router-link>
		  </mt-swipe-item>
		  <mt-swipe-item>
		  	<router-link to="/index">
		  		<img src="../../assets/images/swiper_5.jpg" />
		  	</router-link>
		  </mt-swipe-item>
		</mt-swipe>
		
		<!--菜单-->
		<ul class="nav-list menu-list">
			<li class="item menu-item">
				<router-link to="/category" class="item-a">
					<i class="pic col"></i>
					<span>分类</span>
				</router-link>
			</li>
			<li class="item menu-item">
				<router-link to="/rank" class="item-a">
					<i class="pic rank"></i>
					<span>排行</span>
				</router-link>
			</li>
			<li class="item menu-item">
				<router-link to="/schedule" class="item-a">
					<i class="pic sche"></i>
					<span>追更</span>
				</router-link>
			</li>
			<li class="item menu-item">
				<router-link to="/his" class="item-a">
					<i class="pic his"></i>
					<span>历史</span>
				</router-link>
			</li>
		</ul>
		<!--编辑推荐-->
		<section class="recommend">
			<h2 class="sub-title">
				<i class="title-content"></i>
				<router-link to="/index" class="more-recomment"></router-link>
			</h2>
			
			<ul class="recomment-list">
				<li class="recomment-item" v-for="(item,i) in src1">
					<router-link :to="item.path">
						<div class="re-pic">
							<img :src="item.src" />
						</div>
						<div class="re-text">
							<strong>{{item.title}}</strong>
							<p>{{item.txt}}</p>
						</div>
					</router-link>
				</li>
			</ul>
			
		</section>
			
		<!--每日推荐-->
		<section class="light-comic">
			<h2 class="sub-title">
				<i class="title-content t2"></i>
				<router-link to="/index" class="more-recomment"></router-link>
			</h2>
			<div class="lights-recomment">
				<router-link to="/comicInfo">
					<img src="../../assets/images/banner1.jpg" />
				</router-link>
				<router-link to="/comicInfo" class="light-title">
					<span>狐妖小红娘</span>
					<small class="artist">作者：小新</small>
				</router-link>
			</div>
		</section>
		<!--特别君-->
		<section class="promotion">
			<h2 class="sub-title">
				<i class="title-content t3"></i>
				<router-link to="/index" class="more-recomment"></router-link>
			</h2>
			<ul class="promotion-list">
				<li><router-link to="/deep" class="pro-a"><img src="../../assets/images/banner2.jpg"/></router-link></li>
				<li><router-link to="/downloadGuide" class="pro-a"><img src="../../assets/images/banner3.jpg"/></router-link></li>
			</ul>
		</section>
		<!--今日更新-->
		<section class="update-today">
			<h2 class="sub-title">
				<i class="title-content t4"></i>
				<router-link to="/index" class="more-recomment"></router-link>
			</h2>
			<div class="update-area">
				<aside class="update-side"></aside>
				<ul class="update-list">
					<li class="update-item" v-for="(u,index) in src2">
						<router-link to="/comicInfo">
							<div class="update-pic">
								<img :src="u.uppic"/>
							</div>
							<div class="update-content">
								<strong class="comic-title">{{u.uptitle}}</strong>
								<small class="artist">{{u.upartist}}</small>
								<small class="comic-latest">{{u.uplatest}}</small>
								<ul class="rank-bar">
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li class="rank-score">{{u.upscore}}</li>
								</ul>
							</div>
						</router-link>
					</li>
				</ul>
			</div>
		</section>
		<!--日漫推荐-->
		<section class="japan-comic">
			<h2 class="sub-title">
				<i class="title-content t5"></i>
				<router-link to="/index" class="more-recomment"></router-link>
			</h2>
			<ul class="recomment-list">
				<li class="recomment-item" v-for="(item,i) in src3">
					<router-link to="/comicInfo">
						<div class="re-pic">
							<img :src="item.src" />
						</div>
						<div class="re-text">
							<strong>{{item.title}}</strong>
							<p class="japan-txt">{{item.txt}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<!--新作推荐-->
		<section class="new-comic">
			<h2 class="sub-title">
				<i class="title-content t6"></i>
				<router-link to="/index" class="more-recomment"></router-link>
			</h2>
			<ul class="recomment-list">
				<li class="recomment-item" v-for="(item,i) in src4">
					<router-link to="/comicInfo">
						<div class="re-pic">
							<img :src="item.src" />
						</div>
						<div class="re-text">
							<strong>{{item.title}}</strong>
							<p class="japan-txt">{{item.txt}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</section>
		<!--底部-->
		<footer class="bottom">
			<div class="bottom-row">
				<i class="bottom-pic"></i>
				<router-link to="/index" class="bottom-a">电脑版</router-link>
				<router-link to="/help" class="bottom-a">帮助</router-link>
				<router-link to="/login" class="bottom-a">意见反馈</router-link>
			</div>
		</footer>
		<section class="bottom-fixed">
			<router-link to="/index">
				<img src="../../assets/images/app-guiding-2.png" />
			</router-link>
		</section>
		<div class="scrolltop" v-show="topshow" ref="topbtn" @click="backtop()">
			<img src="../../assets/images/top2.png">
		</div>
	</main>
</template>




<script>
	export default{
		data(){
			return {
				mshow:false,
				topshow:false,
//				scrollTop:'',
				src1:[
//					{
//						path:'/comicInfo',
//						src:require('../../assets/images/indexbook1.jpg'),
//						title:'狐妖小红娘',
//						txt:'呆萌狐狸爱上二货道'
//					},
//					{
//						path:'/comicInfo',
//						src:require('../../assets/images/indexbook2.jpg'),
//						title:'一人之下',
//						txt:'身怀异术该何去何从'
//					},
//					{
//						path:'/comicInfo',
//						src:require('../../assets/images/indexbook3.jpg'),
//						title:'铁姬钢兵',
//						txt:'屌丝统领三千机娘'
//					},
//					{
//						path:'/comicInfo',
//						src:require('../../assets/images/indexbook4.jpg'),
//						title:'我才不是恶毒女配',
//						txt:'身怀异术该何去何从'
//					},
//					{
//						path:'/comicInfo',
//						src:require('../../assets/images/indexbook5.jpg'),
//						title:'阿多尼斯',
//						txt:'重生女主征服世界'
//					},
//					{
//						path:'/comicInfo',
//						src:require('../../assets/images/indexbook6.jpg'),
//						title:'老婆大人有点冷',
//						txt:'身怀异术该何去何从'
//					}
					
				],
				src2:[
//					{
//						uppic:require('../../assets/images/update-pic1.jpg'),
//						uptitle:'魔王的轮舞曲',
//						upartist:'作者：躺着吧',
//						uplatest:'更新到29话',
//						upscore:'9.2'
//					},
//					{
//						uppic:require('../../assets/images/update-pic2.jpg'),
//						uptitle:'长城守卫军·盛世长安篇',
//						upartist:'作者：王者荣耀IP团队',
//						uplatest:'更新到40话',
//						upscore:'9.3'
//					},
//					{
//						uppic:require('../../assets/images/update-pic3.jpg'),
//						uptitle:'救世主别逃债',
//						upartist:'作者：一笔亿画',
//						uplatest:'更新到4话',
//						upscore:'9.1'
//					}
				],
				src3:[
//					{
//						src:require('../../assets/images/japan1.jpg'),
//						title:'真实账号',
//						txt:'热血 冒险 科幻'
//					},
//					{
//						src:require('../../assets/images/japan2.jpg'),
//						title:'七人传奇',
//						txt:'热血 冒险 玄幻'
//					},
//					{
//						src:require('../../assets/images/japan3.jpg'),
//						title:'干物妹！小埋',
//						txt:'爆笑 萌系 生活'
//					}
				],
				src4:[
//					{
//						src:require('../../assets/images/new1.jpg'),
//						title:'龙俦纪',
//						txt:'玄幻 冒险'
//					},
//					{
//						src:require('../../assets/images/new2.jpg'),
//						title:'美食供应商',
//						txt:'爆笑 都市'
//					},
//					{
//						src:require('../../assets/images/new3.jpg'),
//						title:'我的魔女老师',
//						txt:'校园 爆笑'
//					}
					
				]
			}	
		},
		methods:{
			handleClose(){
				this.mshow=false;
			},
			backtop(){
				let timer=setInterval(()=>{
//					var ispeed = Math.floor(-this.scrollTop/5);
//					document.documentElement.scrollTop=document.body.scrollTop=this.scrollTop;
					if(document.body.scrollTop || document.documentElement.scrollTop){
						document.body.scrollTop-= 100;
//						document.body.animate({'scrollTop':'0'});
						document.documentElement.scrollTop -= 100;
					}else{
						clearInterval(timer);
						
					}
				},20)
			},
			scrollToTop() { 
			　　let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
//			　　console.log(scrollTop) 
//				this.scrollTop=scrollTop;
				let browserHeight = window.outerHeight-500;
//				console.log('browser',browserHeight)
				if(scrollTop>browserHeight){
//					console.log('超过了600')
					this.topshow=true;
				}else{
					this.topshow=false;
				}
			}
			
			
			
		},
		mounted(){
			window.addEventListener('scroll', this.scrollToTop);
			
			this.$http.get("./data/data.json")
			.then((res)=>{
				this.src1=res.data.indexList.src1
				this.src2=res.data.indexList.src2
				this.src3=res.data.indexList.src3
				this.src4=res.data.indexList.src4
			})
			
		},
		destroyed(){
			window.removeEventListener('scroll',this.scrollToTop)
		},
		//自定义全局指令
		directives:{
			clickoutside:{
	            bind:function(el,binding,vnode){
	                function documentHandler(e){
	                    if(el.contains(e.target)){
	                        return false;
	                    }
	                    if(binding.expression){
	                        binding.value(e)
	                    }
	                }
	                el._vueClickOutside_ = documentHandler;
	                document.addEventListener('click',documentHandler);
	            },
	            unbind:function(el,binding){
	                document.removeEventListener('click',el._vueClickOutside_);
	                delete el._vueClickOutside_;
	            }
	        }

		}
	}

	
</script>
<style scoped>
	[v-cloak]{
		display: none;
	}
	/*轮播*/
	/deep/ .mint-swipe-items-wrap{
		padding-bottom: 51% !important;
		height: 0px;
		width:100%;
		
	}
	.mint-swipe-items-wrap{
		padding-bottom: 51%;
		width: 50%;
	}
	.mint-swipe{
		width: 100%;
		height: auto;
		/*padding-bottom: 51%;*/
		margin-top: 55px;
		overflow: hidden;
		
	}
	
	/*.mint-swipe-item{
		width:100%;
		height:auto;
		overflow: hidden;
	}*/
	.mint-swipe-item img{
		width: 100%;
		height: auto;
		display: block;
	}
	.mint-swipe .mint-swipe-indicators{
		position: absolute;
	    bottom: 20px;
	    left: 80% !important; 
	    -webkit-transform: translateX(0%); 
	    transform: translateX(0%); 

    }
    .mint-swipe .mint-swipe-indicator{
    	background:rgba(210,210,210,0.35);
    	width:6px;
    	height:6px;
    	opacity: 1;
    	margin-right: 8px;
    }
    .menu-list{
    	width:100%;
    	height: 4.5rem;
    	background: url(../../assets/images/bolan.png);
    	background-size: 400px;
    	background-position: 0px -15px;
    	position: relative;
    	z-index: 100;
    	margin-top: -1.75rem;
    }
    .menu-item{
    	width: 25%;
    }
    .recommend{
    	width: 100%;
    	height: auto;
    	/*padding: 0 10px;*/
    	padding-top: 5px;
    }
    .sub-title{
    	width: 100%;
    	height: 46px;
    	padding: 0px 10px 0px 10px;
    }
    .title-content{
    	width: 150px;
    	height: 40px;
    	display: inline-block;
    	background: url(../../assets/images/tips.png) no-repeat -6.5rem 0.2rem;;
    	background-size: 420px;
    	
    }
    .t2{
    	background-position: -16.5rem 0.2rem;
    }
    .more-recomment{
        width:65px;
    	height:40px;
    	background: url(../../assets/images/tips.png) no-repeat -332px -36px;
    	background-size: 410px;
    	float: right;
    	margin-right: 22px;
    }
    .recomment-list{
    	width: 100%;
    	height: auto;
    	overflow: hidden;
    }
    .recomment-item{
    	width: 28%;
    	height: auto;
    	margin-left: 4%;
    	margin-top: 0.75rem;
    	overflow: hidden;
    	background: white;
    	vertical-align: top;
    	float: left;
    }
    .re-pic{
    	width: 100%;
    	height: auto;
    }
    .re-pic img{
    	width: 100%;
    	height: auto;
    }
    .re-text{
    	width: 100%;
    	height: auto;
    }
    .re-text strong{
    	display: block;
    	/*margin-bottom: 0.25rem;*/
    	font-size: 14px;
    	color: #535252;
    	padding-top:1px ;
    	white-space: nowrap;
    	overflow: hidden;
   		text-overflow: ellipsis;
   		text-align: center;
    }
    .re-text p{
    	font-size: 12px;
    	color: #969696;
    	padding-top: 1px;
	    white-space: nowrap;
	    overflow: hidden;
	    margin-bottom: 5px;
	    text-overflow: ellipsis;
	    /*text-indent: 0.4rem;*/
	    text-align: center;
    }
    .light-comic{
    	width: 100%;
    	height: auto;
    	padding: 10px;
    }
    .lights-recomment{
    	width: 95%;
    	height: auto;
    	/*padding: 0px 10px 0px 10px;*/
    	background:white;
    }
    .light-title{
    	width: 100%;
    	height: 40px;
    	text-align: center;
    	line-height: 40px;
    }
    .lights-recomment a img{
    	width: 100%;
    	height: auto;
    	/*padding-right: 10px;*/
    }
    .lights-recomment a{
    	width: 100%;
    	height: auto;
    	/*padding: 0 10px;*/
    }
    .lights-recomment a span{
    	font-size: 16px;
    	color: #535252;
    	margin-left: 0.75rem;
    }
    .artist{
    	float: right;
    	color: #c5c5c5;
    	font-size: 14px;
    	margin-right: 10px;
    }
    .promotion{
    	width: 100%;
    	margin-bottom: 15px;
    	height: auto;
    	background: white;
    }
    .promotion-list{
    	padding: 0 10px;
    	width: 100%;
    	height: auto;
    	overflow: hidden;
    }
    .pro-a{
    	width: 100%;
    	height: 100%;
    	overflow: hidden;
    }
    .t3{
    	background-position: -6.5rem -6rem;
    }
    .t4{
    	background-position:-6.5rem -8.5rem ;
    }
    .t5{
    	background-position:-6.5rem -14.5rem ;
    }
    .t6{
    	background-position:-6.5rem -17rem ;
    }
    .promotion-list li{
    	width: 45%;
    	height: auto;
    	float: left;
    }
    .promotion-list li:nth-child(2){
    	margin-left: 12px;
    }
    .promotion-list li img{
    	width: 100%;
    	height: auto;
    }
    .update-today{
    	width: 100%;
    	height: auto;
    	background: white;
    }
    .update-area{
    	width: 100%;
    	height:auto;
    	padding: 0 10px;
    	overflow: hidden;
    }
    .update-side{
    	/*width: 6rem;*/
    	width: 22%;
    	height: 100%;
    	/*height: auto;*/
    	padding-bottom:80%;
    	background: url(../../assets/images/tips.png) no-repeat;
    	background-size:450% auto;
    	background-position: 0 0;
    	display: inline-block;
    }
    .update-list{
    	width:73%;
    	height: auto;
    	margin: 0;
    	margin-right: 10px;
    	float: right;
    	margin: 0;
    	display: inline-block;
    	border-right: 10px solid white;
    }
    .update-item{
    	width: 100%;
    	height: auto;
    	background-color: #F5F4EF;
    	margin-bottom: 10px;
    }
    .update-pic{
	    width: 25%;
		height: 16%;
    	display: inline-block;
    }
    .update-pic img{
    	width: 100%;
    	height: auto;
    }
    .update-content{
    	/*position: relative;
    	top: -20px;*/
    	width: 65%;
    	height: auto;
    	display: inline-block;
    	/*margin-bottom: 10px;*/
    }
    .update-content .artist{
    	width: 100%;
    	font-size: 12px;
    	text-indent: 1.5rem;
    	color: #969696;
    	margin-top: 3px;
    }
    .comic-title{
    	width: 100%;
    	display: block;
    	/*margin-bottom: 0.25rem;*/
    	font-size: 14px;
    	color: #535252;
    	padding-top:1px ;
    	white-space: nowrap;
    	overflow: hidden;
   		text-overflow: ellipsis;
   		text-indent: 0.8rem;
    }
    .comic-latest{
    	width: 100%;
    	display: inline-block;
    	color: #969696;
    	font-size: 12px;
    	margin-right: 10px;
    	text-indent: 0.9rem;
    	/*margin-top: 7px;*/
    }
    .rank-bar{
    	width: 100%;
    	height: auto;
    	overflow: hidden;
    	margin-left: 10px;
    	/*margin-top: 5px;*/
    }
    .rank-bar li{
    	width: 15px;
    	height: 15px;
    	float: left;
    	background: url(../../assets/images/tips.png) no-repeat -395px -72px;
    	background-size: 410px;
    	
    }
    .rank-score{
    	line-height: 16px;
	    font-size: 0.5rem;
	    font-weight: 200;
	    color: #ff9a6a;
	    background: none !important;
	}
	.japan-txt{
		text-align: center;
	}
	.japan-comic{
		width: 100%;
		height: auto;
		padding-top: 5px;
	}
	.bottom{
		width: 100%;
		height: 80px;
		background: url(../../assets/images/bottomBg.png) no-repeat;
		background-size: 100% auto;
		background-position: 0px 30px;
		padding-top: 10px;
		box-sizing: border-box;
		/*margin-bottom: 4.0rem;*/
		margin-bottom: 17%;
		position: relative;
	}
	.bottom-row{
		width: 80%;
		/*margin: 0 auto;*/
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		height: 70px;
		overflow: hidden;
	}
	.bottom-pic{
		display: inline-block;
		width: 75px;
		height: 70px;
		background: url(../../assets/images/tips.png);
		/*background: red;*/
		background-size: 400px;
		background-position: -16rem -2.4rem;
		/*position: relative;
    	z-index: 100;*/
	}
	.bottom-a{
		width: auto;
		height: 70px;
		display: inline-block;
		text-align: center;
		line-height: 70px;
		color: #535252;
		position: relative;
		top: -20px;
		font-weight: bold;
		margin: 0 10px;
	}
	.bottom-fixed{
		width: 100%;
		height: auto;
		position: fixed;
		bottom: 0px;
		left: 0;
	}
	.bottom-fixed a img{
		width: 100%;
		height: auto;
		display: block;
	}
	.scrolltop{
		width: 45px;
		height: 45px;
		position: fixed;
		bottom: 80px;
		right: 20px;
		border: 1px solid #535252;
		background: white;
		padding: 5px;
		box-sizing: border-box;
	}
	.scrolltop img{
		width: 80%;
		display: block;
		margin: 0 auto;
		height: auto;
	}
</style>

<style>
	     *{
     	margin: 0;
     	padding: 0;
     	list-style: none;
     	text-decoration: none;
     }
	.topnav{
		width: 100%;
		height: auto;
		overflow: hidden;
		background: white;
		position: fixed;
		top: 0;
		left: 0;	
		z-index: 300;
	}
	.top-logo{
		width: 130px;
		height: 55px;
		background-image: url(../../assets/images/icons_1.png);
		background-position:2px -190px;
		background-size:300px;
		float: left;
	}
	.btn{
		width: 100px;
		height: 55px;
		float: right;
	}
	.btn-search,.btn-f{
		width: 40px;
		height: 50px;
		display: block;
		position: relative;
		cursor: pointer;
		float: left;
	}
	.btn-search:after{
		content: '';
		position:absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-image: url(../../assets/images/icons_1.png);
		background-position: -135px -233px;
		background-size:300px;
	}
	.btn-f:after{
		content: '';
		position:absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-image: url(../../assets/images/icons_1.png);
		background-position: -100px -233px;
		background-size:300px;
	}
	.nav-menu-box{
		width: 100%;
		height: 100%;
		display:block;
		position: fixed;
		top: 3.1rem;
		left: 0;
		transition: all 5s;
		z-index: 900000;
		overflow: hidden;
		background: rgba(0,0,0,0.5);
		
	}
	.show{
		display: block;
	}
	.nav-menu{
		width: 100%;
		height: auto;
		padding-bottom: 0.75rem;
		background: #f5f5ee;
		border-bottom:0.25rem solid #ff9a6a ;
		transition: all 0.65s;
	}
	.nav-list{
		width: 100%;
		height: auto;
		overflow: hidden;
		/*background: aquamarine;*/
	}
	.item{
		width: 33.3%;
		height: 66px;
		float: left;
		/*background: palevioletred;*/
	}
	.map{
		width: 100%;
		height:58px;
	}
	.map .item-a{
		width: 81.5%;
	}
	.item-a{
		width: 42%;
		height: 80%;
		display: block;
		margin: 0 auto;
		color: #969696;
		margin-top: 10px;
		text-align: center;
		font-size: 12px;
	}
	.item-a span{
		display: block;
		text-align: left;
		text-indent: 0.5rem;
	}
	.pic{
		width: 37px;
		height: 37px;
		background:url(../../assets/images/icons_1.png);
		background-size: 300px;
		background-position: -200px -50px;
		display: block;
	}
	.collect{
		background-position: -240px -50px;
	}
	.his{
		background-position: -125px -50px;
	}
	.col{
		background-position: -35px -105px;
	}
	.rank{
		background-position: 4.5px -105px;
	}
	.sche{
		background-position: -162px -47px;
	}
	.my{
		width: 19.7rem;
		height: 100%;
		display: block;
		margin: 0 auto;
		background-size:19.8rem 9rem;
		background-position: 0px 0px;
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
</style>

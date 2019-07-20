<template>
	<main>
		<div class="topnav">
			<div @click="back1()" style="display: inline-block;">
				<router-link to="" class="back" ></router-link>
			</div>
			<h2 class="top-title">分类</h2>
			<div class="btn">
				<router-link to="/search" class="btn-search"></router-link>
				<div class="main-menu" v-clickoutside="handleClose">
					<div class="btn-f" @click="mshow=!mshow"></div>
				</div>
			</div>
		</div>
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
						<router-link to="/update" class="item-a">
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
		<!--菜单-->
		<section class="category-menu">
			<ul class="c-list">
				<li class="c-item" v-for="(item,index) in cate1">
					<router-link to="/index" class="menu-a">
						<strong>{{item.title}}</strong>
						<small>{{item.des}}</small>
					</router-link>
				</li>
				
				
			</ul>
		</section>
		
		<!--普通分类-->
		<section class="category-normal">
			<ul class="category-normal-list">
				<li v-for="(item,index) in cate2">
					<router-link class="item-link" :to="'/cate/'+item.title">
						<span class="item-name">{{item.cname}}</span>
						<img :src="item.src" />
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
				mshow:false,
					cate1:[
					{
						title:'条漫',
						des:'城会玩'
					},
					{
						title:'独家',
						des:'就我有'
					},
					{
						title:'完结',
						des:'选我咯'
					},
					{
						title:'日漫',
						des:'神作集'
					}
				],
				cate2:[
					{
						id:0,
						cname:'| 恐怖',
						title:'恐怖',
						src:require('../../assets/images/cate1.png'),
					},
					{
						id:1,
						cname:'| 妖怪',
						title:'妖怪',
						src:require('../../assets/images/cate2.png'),
					},
					{
						id:2,
						cname:'| 恋爱',
						title:'恋爱',
						src:require('../../assets/images/cate3.png'),
					},
					{
						id:3,
						cname:'| 玄幻',
						title:'玄幻',
						src:require('../../assets/images/cate4.png'),
					},
					{
						cname:'| 热血',
						title:'热血',
						src:require('../../assets/images/cate5.png'),
					},
					{
						id:4,
						cname:'| 悬疑',
						title:'悬疑',
						src:require('../../assets/images/cate6.png'),
					},
					{
						id:5,
						cname:'| 彩虹',
						title:'彩虹',
						src:require('../../assets/images/cate7.png'),
					},
					{
						id:6,
						cname:'| 少女',
						title:'少女',
						src:require('../../assets/images/cate8.png'),
					},
					{
						id:7,
						cname:'| 韩漫',
						title:'韩漫',
						src:require('../../assets/images/cate9.png'),
					},
					{
						id:8,
						cname:'| 科幻',
						title:'科幻',
						src:require('../../assets/images/cate10.png'),
					},
					{
						id:9,
						cname:'| 逗比',
						title:'逗比',
						src:require('../../assets/images/cate11.png'),
					},
					
					{
						id:10,
						cname:'| 校园',
						title:'校园',
						src:require('../../assets/images/cate12.png'),
					},
					{
						id:11,
						cname:'| 都市',
						title:'都市',
						src:require('../../assets/images/cate13.png'),
					},
					{
						id:12,
						cname:'| 治愈',
						title:'治愈',
						src:require('../../assets/images/cate14.png'),
					},
				]
			}
			
		},
		methods:{
			back1(){
				this.$router.go(-1)
			},
			handleClose(){
				this.mshow=false;
			}
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
		width: 60px;
		font-size: 18px;
		color: #535252;
		line-height: 1.6rem;
		height: 1.5rem;
		display: inline-block;
		background: white;
		position: relative;
		top: 5px;
		left: 10px;
	}
	.category-menu{
		width:100%;
    	height: 7.19rem;
    	margin-top: 4.4rem;
    	margin-left: auto;
    	margin-right: auto;
    	background: white;
	}
	.c-list{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.c-list li{
		width: 50%;
		height: 3.30rem;
		float: left;
		background: white;
		list-style: none;
		position: relative;
	}
	.c-list li:before{
		content: '';
		height: 3.30rem;
		width: 1px;
		background: #F5F5EE;
		position: absolute;
		right: 0;
		top: 0;
	}
	.c-list li:after{
		content: '';
		width: 6.3rem;
		height: 1px;
		background: #F5F5EE;
		position: absolute;
		right: 50%;
		transform: translateX(50%);
		bottom: 0;
	}
	.menu-a{
		width: 100%;
		height: auto;
		overflow: hidden;
		padding-left: 25px;
	}
	.menu-a strong{
		display: inline-block;
		width: 35px;
		height: 52px;
		line-height: 52px;
		color: #969696;
	}
	.menu-a small{
		width: 2.775rem;
    	height: 1.1rem;
    	font-size: 12px;
    	display: inline-block;
    	color: white;
    	background: url(../../assets/images/menu.png) no-repeat;
    	background-size: 100% auto;
    	background-position: 0px;
    	background-color: #de8275;
    	text-indent: 0.5rem;
	}
	.category-normal{
		width: 100%;
		height: auto;
		margin-top: 10px;
		padding-top: 15px;
		background: #FFFFFF;
		padding-bottom: 15px;
	}
	.category-normal-list{
		width: 100%;
		height: auto;
		overflow: hidden;
		padding: 0 10px;
	}
	.category-normal-list li{
		width: 46%;
		height: auto;
		overflow: hidden;
		float: left;
    	margin-bottom: 0.75rem;
    	background: white;
    	margin: 0 2.5px;
    	margin-top: 10px;
    	position: relative;
	}
	
	.item-link{
		width: 100%;
		height: auto;
		overflow: hidden;
		display: inline-block;
		position: relative;
	}
	.item-name{
		color: #535252;
		font-size: 14px;
		position: absolute;
	    left: 0.9rem;
	    top: 2.05rem;
	}
	.item-link img{
		width: 100%;
		height: auto;
	}
</style>










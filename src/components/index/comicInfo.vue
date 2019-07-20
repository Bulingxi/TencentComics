<template>
	<main>
		<div class="topnav">
			<router-link to="/index" class="back"></router-link>
			<h2 class="top-title">一人之下</h2>
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
		<!--作品信息-->
		<section class="head-info-box">
			<div class="head_channel">
		      	<div class="head_box">
		          	<div class="info-pic">
						<img src="../../assets/images/indexbook2.jpg" />
					</div>
					<div class="info-book">
					<strong>一人之下<span class="score">9.6</span></strong>
					
					<p>标签：玄幻 | 格斗 | 爆笑</p>
					<p>作者：动漫堂</p>
					<p>人气：<span>178.2亿</span></p>
					<p>月票：<span>1922</span></p>
				</div>
		      	</div>
		      	<div class="blur_bj">
		        	<img src="../../assets/images/indexbook2.jpg">
		      	</div>
		      	<div class="blur_bj_gray"></div>	
		 	</div>
		</section>
		<p class="app-guiding" v-show="open">
			<img src="../../assets/images/app-guiding-2.png" />
			<i class="app-close" @click="close()"></i>
		</p>
		
		<ul class="info-tab">
			<li class="info-item" @click="tabname='detail'" :class="{active:tabname=='detail'}">详情</li>
			<li class="info-item" @click="tabname='catalog'" :class="{active:tabname=='catalog'}">目录</li>
			<li class="info-item" @click="tabname='comment1'" :class="{active:tabname=='comment1'}">评论</li>
		</ul>
		<component :is="tabname"></component>
		
		<section class="details-footer">
			<ul class="footer-icon">
				<li class="like"><router-link to="/login"></router-link></li>
				<li class="share" @click="sshow=!sshow"></li>
				<li class="download"></li>
			</ul>
			<p class="start">开始阅读</p>
		</section>
		
		<section class="bookshare" v-show="sshow">
			<div class="share-box">
				<p>分享</p>
				<p><img src="../../assets/images/qqkj.png"/><span>QQ空间</span></p>
				<p @click="sshow=!sshow">取消分享</p>
			</div>
		</section>
		
	</main>
</template>

<script>
		import detail from '../comicInfo/details.vue'
		import catalog from '../comicInfo/catalog.vue'
		import comment1 from '../comicInfo/comment.vue'
	export default{

		components:{
			detail,
			catalog,
			comment1
		},
		data(){
			return {
				mshow:false,
				open:true,
				tabname:'catalog',
				sshow:false
			}
		},
		methods:{
			handleClose(){
				this.mshow=false;
			},
			close(){
				this.open=!this.open;
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
    .head_channel {
    	width: 100%;
        height: auto;
        position: relative;
        overflow: hidden;
    }
     .head_channel .blur_bj {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        z-index: -1;
        -webkit-filter: blur(5px);
        filter: blur(15px);
        transform: scale(1.3);
    }
        .head_channel .blur_bj img {
            width: 100%;
            height: 120%;
        }
        .head_channel .blur_bj_gray {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0;
            background: rgba(0,0,0,.2);
            z-index: -1;
            opacity: 0.5;
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
		left: 10px;
	}
	.head-info-box{
		width: 100%;
		height: auto;
		margin-top: 55px;
		overflow: hidden;
		
	}
	.info-pic{
		width: 35%;
		height: auto;
		position: relative;
		z-index: 2;
		top: 2rem;
		left: 2rem;
		display: inline-block;
		padding-bottom: 1.9rem;
		background: url(../../assets/images/pic-bg.png);
	}
	.info-pic img{
		width: 100%;
		height: auto;
	}
	.info-pic:before{
		content: '';
		width: 50%;
		height: 100%;
		display: block;
		transform: skew(6deg,0deg);
		background: rgba(0,0,0,.2);
		position: absolute;
		z-index: -1;
		right: -10px;
		bottom: 0px;
		filter: blur(4px);
	}
	.info-book{
		/*width: 100%;*/
		position: relative;
		left: 3.5rem;
		height: auto;
		display: inline-block;
		color: white;
	}
	.info-book strong{
		letter-spacing: 2px;
		display: block;
		margin-bottom: 15px;
	}
	.score{
		width: 1.05rem;
    	height: 1.05rem;
		letter-spacing: 0;
		font-size: 10px;
		background: #d97e5c;
		padding:2px;
		text-align: center;
		display: inline-block;
		margin-left: 2px;
		line-height: 1.05rem;
		border-radius: 50%;
	}
	.info-book p{
		margin-bottom: 3px;
		font-size: 12px;
	}
	.info-book p span{
		color: #fef886;
	}
	.app-guiding{
		width: 100%;
		height: auto;
		position: relative;
		display: block;
	}
	.app-guiding img{
		width: 100%;
		height: auto;
	}
	.app-close{
		width: 20px;
		display: inline-block;
		height: 20px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 10px;
		background: red;
		background: url(../../assets/images/sc_img_search.png);
		background-position: 0rem -4.475rem;
		background-size: 7rem 5.575rem;
	}
	.info-tab{
		width: 100%;
		height: auto;
		padding:0 20px;
		margin: 0;
		background: white;
		overflow: hidden;
		border-bottom: 1px solid #f5f5ee;
	}
	.info-item{
		width: 30%;
		height: auto;
		padding: 14px 0;
		color: #C5C5C5;
		text-align: center;
		float: left;
		position: relative;
		font-size: 15px;
		cursor: pointer;
	}
	.active{
		color: #535252;
	}
	.active:after{
		content: '';
		width:10px;
		height: 3px;
		background: #ff9a6a;
		position: absolute;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
	}
	/*.router-link-active:after{
		content: '';
		width:10px;
		height: 3px;
		background: #ff9a6a;
		position: absolute;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
	}*/
	    .details-footer{
    	width: 100%;
    	height: auto;
    	border-top: 1px solid #C5C5C5;
    	overflow: hidden;
    	position: fixed;
    	bottom: 0;
    	left: 0;
    	padding: 10px 0;
    	background: white;
    }
    .footer-icon{
    	width: 150px;
    	height: auto;
    	overflow: hidden;
    	margin: 0;
    	padding: 0;
    	margin-left: 10px;
    	float: left;
    	padding: 10px 0;
    }
    .footer-icon li{
    	/*width: 20%;
    	height: 27px;*/
    	width: 1.85rem;
    	height:1.85rem;
    	float: left;
    	/*background: red;*/
    	margin-left: 1.2rem;
    	cursor: pointer;
    }
    .footer-icon li a{
    	width: 100%;
    	height: 100%;
    	display: inline-block;
    }
    .like{
    	background: url(../../assets/images/sc_img_comic-index.png) no-repeat;
    	background-position: 3px -40px;
    	background-size: 100px;
    }
    .share{
    	background: url(../../assets/images/sc_img_comic-index.png) no-repeat;
    	background-position: -30px -40px;
    	background-size: 100px;
    }
    .download{
    	background: url(../../assets/images/sc_img_comic-index.png) no-repeat;
    	background-position: -70px 0px;
    	background-size: 100px;
    }
    .start{
    	width:38%;
    	height: auto;
    	background:#FFA775;
    	color: white;
    	font-size: 17px;
    	font-weight: 600;
    	text-align: center;
    	padding: 13px;
    	display: inline-block;
    	float: right;
    	border-radius: 5px;
    	margin-right: 10px;
    	cursor: pointer;
    }
    .router-link-active:after{
		content: '';
		width:10px;
		height: 3px;
		background: #ff9a6a;
		position: absolute;
		bottom: 0px;
		left: 50%;
		transform: translateX(-50%);
	}
	.tab-a{
		color: #C5C5C5;
	}
	.bookshare{
		width: 100%;
		height: 100%;
		display:block;
		position: fixed;
		top: 3.1rem;
		left: 0;
		transition: all 5s;
		z-index: 990000;
		overflow: hidden;
		background: rgba(0,0,0,0.5);
	}
	.share-box{
		width: 100%;
		height: auto;
		background: white;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.share-box p{
		width: 100%;
		height: auto;
		display: block;
	}
	.share-box p:nth-child(1){
		text-align: center;
		font-size: 16px;
		color: #535252;
		padding: 10px 0;
	}
	.share-box p:nth-child(2) img{
		width: 59px;
		height: 59px;
		display: block;
		margin-left: 30px;
	}
	.share-box p:nth-child(2) span{
		font-size: 12px;
		color: #969696;
		margin-left: 25px;
	}
	.share-box p:nth-child(3){
		text-align: center;
		font-size: 16px;
		color: #535252;
		background: #f5f5ee;
		border-top: 1px solid #C5C5C5;
		padding: 20px 0;
		margin-top: 20px;
	}
</style>























<template>
	<main>
		<div class="topnav">
			<div class="back" @click="back()"></div>
			<h2 class="top-title">评论</h2>
			<div class="btn">
				<router-link to="/search" class="btn-search"></router-link>
				<!--<router-link to="/index" class="btn-f" @click="show()"></router-link>-->
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
		
		<textarea class="saybox" placeholder="快快说两句吧 (ง •̀_•́)ง" v-model="words"></textarea>
		<p class="subsay">
			<input type="submit" value="发表" class="subs" @click="sub()" >
		</p>
		<p class="app-guiding" v-show="open">
			<img src="../../assets/images/app-guiding-2.png" />
			<i class="app-close" @click="close()"></i>
		</p>
		<ul class="comment-list">
			<li class="comment-item" v-for="(item,index) in comment1">
				<div class="userinfo">
					<p class="head-info">
						<i class="head-pic"><img :src="item.headpic"/></i>
						<span class="username">{{item.username}}</span>
						<span class="time">{{item.time}}</span>
					</p>
					<i class="like"></i>
					<span class="like-num">{{item.likenum}}</span>
				</div>
				<p class="comment-con">{{item.con}}</p>
			</li>
		</ul>

		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				mshow:false,
				open:true,
				words:'',
				comment1:[]
			}
		},
		methods:{
			handleClose(){
				this.mshow=false;
			},
			back(){
				this.$router.go(-1)
			},
			close(){
				this.open=!this.open;
			},
			sub(){
				var date1=new Date();
				var y=date1.getFullYear();
				var m=date1.getMonth();
				var d=date1.getDate();
				var str=`${y}年${m+1}月${d}日`;
				this.comment1.unshift({
					headpic:require('../../assets/images/chathead7.jpg'),
					username:'buling_z',
					likenum:'0',
					time:str,
					con:this.words
				})
				this.words='';
			
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

		},
		mounted(){
			this.$http.get("./data/comment.json")
			.then((res)=>{
				this.comment1=res.data.comment1
			})
		}
		
	}
</script>

<style scoped>
	.topnav{
		background: white;
		/*overflow: hidden;*/
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
	.saybox{
		width: 100%;
		height: 150px;
		resize: none;
		border: none;
		/*border: 1px solid #C5C5C5;*/
		outline: none;
		box-sizing: border-box;
		margin-top: 56px;
		font-size: 15px;
		color: #535252;
		padding: 10px;
	}
	.subsay{
		width: 100%;
		height: auto;
		background: white;
		padding: 10px 0;
		display: block;
	}
	.subs{
		width: 194px;
		height: auto;
		border: none;
		border: 3px solid #ff9a6a;
		margin:0 auto ;
		color: #ff9a6a;
		font-size: 18px;
		display: block;
		text-align: center;
		padding: 10px;
		background: white;

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
	.comment-list{
		width: 100%;
		height: auto;
		padding: 0 20px;
		/*background: white;*/
		/*padding-bottom: 4.7rem;*/
	}
	.comment-item{
		width: 100%;
		height: auto;
		padding-top: 20px;
		border-bottom: 1px solid #F5F5EE;
	}
	.userinfo{
		width: 100%;
		height: auto;
		overflow: hidden;
		display: block;
		position: relative;
	}
	.head-info{
		height: auto;
		display: inline-block;
		
	}
	.head-pic{
		width: 30px;
		height: 30px;
		margin-right: 5px;
		display: inline-block;
		border-radius: 50%;
	}
	.head-pic img{
		width: 100%;
		height: auto;
	}
	.username{
		color: #e86a3e;
		font-size: 14px;
		position: absolute;
		top: 0;
		left: 30;
		vertical-align: top;
	}
	.time{
		color: #C5C5C5;
		font-size: 12px;
		vertical-align: bottom;
	}
	.like{
		width: 21px;
		height: 21px;
		background: url(../../assets/images/like.png) no-repeat;
		background-size: 21px 21px;
		display: inline-block;
		position: absolute;
		top: 2px;
		right: 40px;
	}
	.like-num{
		font-size: 14px;
		color: #969696;
		position: absolute;
		top: 2px;
		right: 30px;
	}
	.comment-con{
		padding: 10px 5px 10px 40px;
		color: #535252;
		font-size: 16px;
	}
</style>












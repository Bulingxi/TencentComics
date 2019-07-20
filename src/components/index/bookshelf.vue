<template>
	<main>
		<div class="topnav">
			<div class="back" @click="back()"></div>
			<h2 class="top-title">书架</h2>
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
						<router-link to="/Monday" class="item-a">
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
		<!--<section class="rank-tab">
			<ul class="tab-list">
				<li class="tab-list-item">
					<router-link to="/collect" class="active">收藏</router-link>
				</li>
				<li class="tab-list-item">
					<router-link to="/his">历史</router-link>
				</li>
				<i class="edit" @click="chooseone()"></i>
			</ul>
		</section>-->
		
		<!--头部top3部分-->
		<router-view></router-view>
		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				mshow:false
			}
		},
		methods:{
			handleClose(){
				this.mshow=false;
			},
			back(){
				this.$router.push('/index')
			},
			chooseone(){
				
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
	.rank-tab{
		/*width: 100%;*/
		height: auto;
		margin-top: 55px;
		border-top: 4px solid #fbfbfb;
	}
	.tab-list{
		width: 100%;
		height: auto;
		overflow: hidden;
		padding: 0 9%;
		position: relative;
		background: white;
		padding: 0 10% 0 18%;
	}
	.tab-list-item{
		width:30%;
		height: 2.5rem;
		/*background: red;*/
		color: #969696;
		float: left;
		text-align: center;
		line-height: 2.5rem;
		position: relative;
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
	.router-link-active{
		color: black;
	}
	.tab-list-item a{
		color: #969696;
	}
	/*.tab-list-item .active{
		
	}*/
	.rank-top3{
		height: auto;
	}
	.edit{
	    width: 1.65rem;
    	height: 1.65rem;
    	position: absolute;
    	display: block;
    	top: 0.5rem;
    	/*left:21.2rem;*/
    	right: 110px;
    	background: url(../../assets/images/sc_img_bookshelf.png) no-repeat;
    	background-size: 5.6rem 5.6rem;
    	background-position: 0 0;
	}
</style>











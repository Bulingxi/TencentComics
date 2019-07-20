<template>
	<main>
		<div class="topnav">
			<div @click="back1()" style="display: inline-block;">
				<router-link to="" class="back" ></router-link>
			</div>
			<h2 class="top-title">{{this.$route.params.title}}</h2>
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
		<section class="rank-tab">
			<ul class="tab-list">
				<li class="tab-list-item" @click="catename='cateupdate'" :class="{active:catename=='cateupdate'}">更新</li>
				<li class="tab-list-item" @click="catename='catehot'" :class="{active:catename=='catehot'}">人气</li>
				<li class="tab-list-item" @click="catename='catemouthlyTicket'" :class="{active:catename=='catename'}">月票</li>
			</ul>
		</section>
		<component :is="catename"></component>
	</main>
</template>

<script>
	import cateupdate from '../schedule/Monday.vue'
	import catehot from '../schedule/Thursday.vue'
	import catemouthlyTicket from '../schedule/Friday.vue'
	export default{
		components:{
			cateupdate,
			catehot,
			catemouthlyTicket
		},
		data(){
			return {
				mshow:false,
				catename:'catehot'
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
		padding: 0 5%;
		background: white;
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
	.active{
		color: #535252 !important;
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
	
	.tab-list-item a{
		color: #969696;
	}
	.tab-list-item .active{
		color: #535252;
	}
</style>








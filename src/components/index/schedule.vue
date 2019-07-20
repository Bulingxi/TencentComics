<template>
	<main>
		<div class="topnav">
			<div class="back" @click="back()"></div>
			<h2 class="top-title">追更时间表</h2>
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
		<section class="rank-tab">
			<ul class="tab-list">
				<li class="tab-list-item" @click="weekname='Monday'" :class="{active:weekname=='Monday'}">一</li>
				<li class="tab-list-item" @click="weekname='Tuesday'" :class="{active:weekname=='Tuesday'}">二</li>
				<li class="tab-list-item" @click="weekname='Wednesday'" :class="{active:weekname=='Wednesday'}">三</li>
				<li class="tab-list-item" @click="weekname='Thursday'" :class="{active:weekname=='Thursday'}">四</li>
				<li class="tab-list-item" @click="weekname='Friday'" :class="{active:weekname=='Friday'}">五</li>
				<li class="tab-list-item" @click="weekname='Saturday'" :class="{active:weekname=='Saturday'}">六</li>
				<li class="tab-list-item" @click="weekname='Sunday'" :class="{active:weekname=='Sunday'}">日</li>
			</ul>
		</section>
		
		<!--追更内容部分-->
		<component :is="weekname"></component>
		<div class="scrolltop" v-show="topshow" ref="topbtn" @click="backtop()">
			<img src="../../assets/images/top2.png">
		</div>
	</main>
</template>

<script>
	import Monday from '../schedule/Monday.vue'
	import Tuesday from '../schedule/Tuesday.vue'
	import Wednesday from '../schedule/Wednesday.vue'
	import Thursday from '../schedule/Thursday.vue'
	import Friday from '../schedule/Friday.vue'
	import Saturday from '../schedule/Saturday.vue'
	import Sunday from '../schedule/Sunday.vue'
	export default{
		components:{
			Monday,
			Tuesday,
			Wednesday,
			Thursday,
			Friday,
			Saturday,
			Sunday	
		},
		data(){
			return{
				mshow:false,
				topshow:false,
				weekname:''
			}
		},
		methods:{
			handleClose(){
				this.mshow=false;
			},
			back(){
				this.$router.push('/index')
			},
			backtop(){
				let timer=setInterval(()=>{
					if(document.body.scrollTop || document.documentElement.scrollTop){
						document.body.scrollTop-= 100;
						document.documentElement.scrollTop -= 100;
					}else{
						clearInterval(timer);
						
					}
				},40)
			},
			scrollToTop() { 
			　　let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				let browserHeight = window.outerHeight-300;
				if(scrollTop>browserHeight){
					this.topshow=true;
				}else{
					this.topshow=false;
				}
			}
		},
		mounted(){
			window.addEventListener('scroll', this.scrollToTop)
			
			var oLi=document.getElementsByClassName('tab-list-item')
			var ddd=new Date();
			var week=ddd.getDay();
			if(week==1){
				week='Monday'
			}else if(week==2){
				week='Tuesday'
			}else if(week==3){
				week='Wednesday'
			}else if(week==4){
				week='Thursday'
			}else if(week==5){
				week='Friday'
			}else if(week==6){
				week='Saturday'
			}else{
				week='Sunday'
			}
			this.weekname=week;
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
		/*width: ;*/
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
		background: white;
		padding: 0;
	}
	.tab-list-item{
		width:14%;
		height: 2.5rem;
		/*background: red;*/
		color: #969696;
		float: left;
		text-align: center;
		line-height: 2.5rem;
		position: relative;
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
	
	.tab-list-item a{
		color: #969696;
	}
	.tab-list-item .active{
		color: #535252;
	}
	.rank-top3{
		height: auto;
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

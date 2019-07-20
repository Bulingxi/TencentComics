<template>
	<main>
		<div class="topnav">
			<div class="back" @click="back()"></div>
			<h2 class="top-title">帮助</h2>
			<div class="btn">
				<router-link to="/search" class="btn-search"></router-link>
				<!--<router-link to="/index" class="btn-f" @click="show()"></router-link>-->
				<div class="main-menu" v-clickoutside="handleClose">
					<div class="btn-f" @click="mshow=!mshow"></div>
				</div>
			</div>
		</div>
		<section class="paragraph p1">
			<strong class="p-title">如何向腾讯动漫官方吐槽？</strong>
			<p>1、加入反馈群，“当面”吐槽。反馈群号：281081466</p>
			<p>2、通过首页或者“我的地盘”底部的“意见反馈”链接，直接反馈您的问题。 </p>
		</section>
		<section class="paragraph">
			<strong class="p-title">什么是动漫VIP制度？动漫VIP将享有哪些特权？</strong>
			<p>动漫VIP全称“腾讯动漫VIP会员”，是腾讯动漫为广大用户提供的增值服务，腾讯动漫VIP会员即贵宾会员，在免费享受高质量原创正版漫画之外，还可享受更尊贵、更酷炫、更贴心、更强大、更便捷的功能特权服务！</p>
			<p>动漫VIP用户将具有独特的VIP标识，让您更尊贵，更酷炫；同时，您还会获得一些更加贴心使用的特权： </p>
			<p>2、通过首页或者“我的地盘”底部的“意见反馈”链接，直接反馈您的问题。 </p>
			<p>1.购买付费作品享受8折优惠 </p>
		    <p>2.专属VIP漫画库，免费浏览库内付费作品 </p>
		    <p>3.QQ面板，点亮动漫图标 </p>
		    <p>4.每月获得漫画月票（可在APP内使用） </p>
		    <p>5.专属的VIP会员尊贵形象 </p>
		    <p>6.丰富的腾讯游戏特权及活动 </p>
		    <p>7.越来越多的尊贵特权功能，即将展开... </p>
		</section>
		<section class="paragraph">
			<strong class="p-title">什么是网站点券和代金券？</strong>
			<p>腾讯动漫点券是一种专有的虚拟“代币”，它仅能用于购买腾讯动漫网站上的付费漫画作品，不可购买腾讯其他产品或服务。点券充值后无有效期的限制，但不可转赠。1元=100点券。 </p>
		</section>
		<section class="paragraph">
			<strong class="p-title">为什么有部分漫画会收费？</strong>
			<p>我们的收费漫画主要包括两类：</p>
			<p>1.引进的作品。这类漫画为出版社或工作室作品（如火影忍者、七公主），因为均是正版漫画所以涉及版权成本，所得漫画收入的很大部分就是来支付稿酬的 </p>
			<p>2.部分优秀原创漫画。这类作品由原创作者辛勤创作（如 贴身小女佣），但漫画家也需要养家糊口，所以希望大家能去理解和支持 </p>

		</section>
	</main>
</template>

<script>
	export default{
		data(){
			return {
				mshow:false
			}
		},
		methods:{
			handleClose(){
				this.mshow=false;
			},
			back(){
				this.$router.push('/index')
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
	.paragraph{
		/*width: 100%;*/
		height: auto;
		display: block;
		padding: 0.6rem 1.50rem;
	    color: #535252;
	    line-height: 2;
	    font-size: 13px;
	    position: relative;
	    border-bottom:1px solid #C5C5C5;
	}
	.p1{
		margin-top: 55px;
	}
	.p-title{
		width: 100%;
		height: auto;
		display: block;
		font-size: 16px;
	}
</style>















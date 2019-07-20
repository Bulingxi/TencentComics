<template>
	<main>
		<div class="topnav search">
			<div class="search-back" @click="back()"></div>
			<div class="search-text">
				<i class="search-icon sc2" v-show="!hintshow"></i>
				<transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
					<div class="search-hint-box" v-show="hintshow">
						<!--<div class="serach-hint-pad"></div>-->
						<i class="search-icon"></i>
						<span class="search-hint-txt">漫画名 | 作者</span>	
					</div>
				</transition>
				
				<div class="search-text-box">
					<input type="search" class="txt-input" v-model="inpvalue" name="word" @click="inp($event)" @blur.prevent="bp()"/>
					<!--<i class="txt-input-clear" @click="clearinp()" v-show="op"></i>-->
				</div>
				
			</div>
			<div class="search-btn">搜索</div>
		</div>
		
		
		<!--搜索热词-->
		<section class="search-hot">
			<div class="search-hot-npc">
				<i class="npc-pic"></i>
				<span class="npc-dialog"></span>
			</div>
			<ul class="search-hot-list">
				<li v-for="(item,index) in hot">
					<router-link to="/comicInfo" class="hot-txt">{{item}}</router-link>
				</li>
			</ul>
		</section>
		
	</main>
	
	
</template>

<script>
//	var oInp=document.getElementsByClassName('txt-input');
	export default{
		data(){
			return{
				op:false,
				inpvalue:'',
				hintshow:true,
				hot:[
					'剑逆苍穹',
					'神仙婚介所',
					'糟糕！它成精了',
					'爷在江湖飘',
					'荒野追踪',
					'无人之境',
					'绝命异人',
					'王的初拥',
					'被青梅竹马攻略了怎么办',
					'英雄？我早就不当了'
				]
			}
		},
		methods:{
			inp(e){
				if(e.target.focus){
					this.op=true;
					this.hintshow=false;
				}
				
			},
			bp(){
				this.op=false;
				this.hintshow=true;
			},
			back(){
				this.$router.go(-1)
			}
		},
		mounted(){
		}
	}
</script>
<style scoped>
	*{
		text-decoration: none;
		list-style: none;
	}
	.search{
		background: #ff9a6a;
		width: 100%;
		height: auto;
		padding: 10px 0 10px 0;
	}
	.search-back{
		width:27px;
		height: 27px;
		display: inline-block;
		/*padding: 0.375rem;*/
		box-sizing: border-box;
		background: url(../../assets/images/sc_img_search.png);
		background-position: -170px -145px;
		background-size:120px;
		position: relative;
		top: 0px;
		left: 8px;
		cursor: pointer;
	}
	.search-text{
		width: 73%;
		height: 2rem;
		background: white;
		display: inline-block;
		margin-left: 22px;
		position: absolute;
		top: 10px;
		
	}
	.search-hint-box{
		width: 100%;
		height: auto;
		display: flex;
   		-webkit-box-align: center;
        align-items: center;
        transition: all 0.65s;
	}
	.search-icon{
		width: 2rem;
    	height: 2rem;
    	background: url(../../assets/images/sc_img_search.png);
    	background-position: -85px -35px;
    	background-size: 120px;
    	display: block;
    	margin-left: 50%;
    	transform: translateX(-140%);
	}
	.sc2{
		position: absolute;
		left: 0;
		top: 0;
		transform: translateX(10%);
		margin-left: 0;
	}
	.search-hint-txt{
		margin-left: 0.1rem;
    	font-size: 14px;
    	color: #C5C5C5;
    	transform: translateX(-60%);
	}
	.search-btn{
		color: white;
		font-size: 15px;
		padding: 5px;
		display: inline-block;
		float: right;
		padding-right: 12px;
		cursor: pointer;
	}
	.search-text-box{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		align-items: center;
		display: flex;
		-webkit-box-align: center;
		z-index: 1;
	    vertical-align: baseline;
    	background: transparent;
	}
	.txt-input{
		flex: 1;
		display: block;
		height: 0.95rem;
		line-height: 0.95rem;
		border: none;
		background: transparent;
		outline: none;
		font-size: 0.75rem;
		color: #535252;
		vertical-align: middle;
		box-sizing: border-box;
		margin: 0;
		padding-left: 30px;
		padding-right: 10px;
	}
	.txt-input-clear{
		width: 0.9rem;
		height: 0.9rem;
		background: url(../../assets/images/sc_img_search.png) no-repeat;
		background-position: 0rem -3.475rem;
		background-size: 5.2rem 4.375rem;
		margin-right: 0.3rem;
		margin-left: 0.25rem;
		display: block;
		transition: all 0.65s;
		opacity: 1;
	}
	
	.mint-searchbar{
		background-color:#ff9a6a !important;
	}
	.search-hot{
		width: 100%;
		height: auto;
	}
	.search-hot-npc{
		/*width: 100%;*/
		height: 3.8rem;
		margin: 0 10px;
		margin-top: 52px;
		border-bottom: 1px solid #C5C5C5;
	}
	.npc-pic{
	    width: 2.5rem;
    	height: 1.875rem;
    	background:url(../../assets/images/sc_img_search.png) no-repeat;
    	background-size: 100px;
    	background-position:0 -2rem;
    	margin-top:1rem ;
    	display: inline-block;
	}
	.npc-dialog{
	    width: 6.4rem;
    	height: 1.9rem;
    	display: inline-block;
    	background:url(../../assets/images/sc_img_search.png) no-repeat;
    	background-size: 100px;
    	background-position: 0 0;
	}
	.search-hot-list{
		height: auto;
		padding: 15px 10px;
		overflow: hidden;
	}
	.search-hot-list li{
		/*width: 0.5rem;
		height: 0.5rem;*/
		display: inline-block;
	    margin-bottom: 0.5rem;
	    margin-right: 0.5rem;
	    /*background: red;*/
	}
	.hot-txt{
	    display: inline-block;
	    padding: 0.9rem 1.1rem;
	    border-radius: 2.25rem;
	    background-color: white;
	    border: 1px solid #C5C5C5;
	    font-size:15px;
	    color: #535252;
	}
</style>













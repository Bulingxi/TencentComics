<template>
	<main id="collect-box">
		<section class="rank-tab">
			<ul class="tab-list">
				<li class="tab-list-item">
					<router-link to="/collect" class="active">收藏</router-link>
				</li>
				<li class="tab-list-item">
					<router-link to="/his">历史</router-link>
				</li>
				<i class="edit" @click="chooseone()"></i>
			</ul>
		</section>
		<div class="unload">
			<img src="../../assets/images/unload-girl.png" />
			<p class="unload-txt">大人，快快登录，<br/>同步云书架，漫画们等着你哦</p>
			<p class="unload-btn"><router-link to="/login">登录</router-link></p>
		</div>
		<section class="recommend">
			<h2 class="sub-title">
				<p class="all">大家都在搜</p>
				<router-link to="/index" class="more-recomment"></router-link>
			</h2>
			
			<ul class="recomment-list">
				<li class="recomment-item" v-for="(item,i) in all">
					<router-link to="/index">
						<div class="re-pic">
							<img :src="item.src8" />
						</div>
						<div class="re-text">
							<strong>{{item.title8}}</strong>
							<p>{{item.txt8}}</p>
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
				all:[
					{
						src8:require('../../assets/images/indexbook1.jpg'),
						title8:'狐妖小红娘',
						txt8:'呆萌狐狸爱上二货道'
					},
					{
						src8:require('../../assets/images/indexbook2.jpg'),
						title8:'一人之下',
						txt8:'身怀异术该何去何从'
					},
					{
						src8:require('../../assets/images/indexbook3.jpg'),
						title8:'铁姬钢兵',
						txt8:'屌丝统领三千机娘'
					}
				]
			}
		}
	}
</script>

<style scoped>
	#collect-box{
		background: white;
	}
	.unload{
		width: 100%;
		height: auto;
		background: #F5F5EE;
	}
	.unload img{
	    width: 5.5rem;
    	height:auto;
		display: block;
		margin: 0 auto;
		padding-top: 25px;
		padding-bottom: 10px;
	}
	.unload-txt{
		width: 100%;
		font-size: 14px;
		color: #C5C5C5;
		text-align: center;
		padding-bottom: 15px;
	}
	.unload-btn{
		width: 7rem;
		height: 3rem;
		border: 1px solid #FFA775;
		display: block;
		margin: 0 auto;
		border-radius: 3px;
		background: white;
		margin-bottom: 0.5rem;
	}
	.unload-btn a{
		width: 100%;
		height: auto;
		color: #FFA775;
		font-size: 16px;
		display: block;
		text-align: center;
		line-height: 3rem;
	}
	.all{
		display:inline-block;
		color: #969696;
		font-size: 14px;
	}
	.recommend{
    	width: 100%;
    	height: auto;
    	/*padding: 0 10px;*/
    	padding-top: 5px;
    	padding-bottom: 1.7rem;
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













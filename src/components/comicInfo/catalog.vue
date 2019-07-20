<template>
	<main>
		<section class="book-chapter">
			<p class="update-chapter">
				<span class="time">2019-7-11</span>
				<span class="chapter-num">更新至438话</span>
			</p>
			
			<ul class="chapter-list">
				<li class="chapter-item" v-for="(chapter,index) in chapter">
					{{chapter}}
					<i class="lock"><img src="../../assets/images/lock2.png"/></i>
				</li>
			</ul>
			<p class="chapter-more">大人，查看更多目录</p>
		</section>
		<section class="recommend">
			<h2 class="sub-title">
				<p class="all">骚年们都在看</p>
				<router-link to="/index" class="more-recomment"></router-link>
			</h2>
			
			<ul class="recomment-list">
				<li class="recomment-item" v-for="(item,i) in cha">
					<router-link to="/index">
						<div class="re-pic">
							<img :src="item.src10" />
						</div>
						<div class="re-text">
							<strong>{{item.title10}}</strong>
							<p>{{item.txt10}}</p>
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
			return {
				tabname:'detail',
				chapter:[ '438','437','436','435','434','433','432','431','430'],
				cha:[
					{
						src10:require('../../assets/images/indexbook1.jpg'),
						title10:'狐妖小红娘',
						txt10:'呆萌狐狸爱上二货道'
					},
					{
						src10:require('../../assets/images/indexbook2.jpg'),
						title10:'一人之下',
						txt10:'身怀异术该何去何从'
					},
					{
						src10:require('../../assets/images/indexbook3.jpg'),
						title10:'铁姬钢兵',
						txt10:'屌丝统领三千机娘'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.book-chapter{
		width: 100%;
		height: auto;
		background: white;
		padding-bottom: 15px;
	}
	.update-chapter{
		width: 100%;
		margin: 0 10px;
		color: #C5C5C5;
		font-size: 12px;
		padding-top: 15px;
	}
	.chapter-list{
		width:100%;
		height: auto;
		padding: 0;
		margin: 0 auto;
		overflow: hidden;
		padding: 10px 15px;
		padding-bottom: 0;
	}
	.chapter-item{
		width: 28.1%;
		height: auto;
		border: 1px solid #C5C5C5;
		font-size: 16px;
		color: #C5C5C5;
		text-align: center;
		padding: 12px 0;
		float: left;
		margin-right: 16px;
		margin-bottom: 15px;
		cursor: pointer;
		position: relative;
	}
	.lock{
		width: 16px;
		height: 16px;
		position: absolute;
		bottom: 1px;
		right: 0;
		display: inline-block;
	}
	.lock img{
		width: 100%;
		height: auto;
	}
	.chapter-more{
		width: 92%;
		height: auto;
		color: #535252;
		border: 1px solid #C5C5C5;
		display: block;
		margin: 0 auto;
		text-align: center;
		font-size: 16px;
		padding: 12px 0;
		
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
    	padding-bottom: 4.7rem;
    	background: white;
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

</style>




















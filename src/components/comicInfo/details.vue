<template>
	<main>
		<section class="details-box">
			<p class="quotes">
				<img src="../../assets/images/quotes.png" />
			</p>
			<p class="details-txt">大学生张楚岚清明回乡，遭遇神秘少女冯宝宝。素未谋面的冯宝宝却对张楚岚异常熟悉，并将其带去自己打工的快递公司。为了帮冯宝宝寻找她的身世，也为了查清自己与爷爷身上的秘密，张楚岚的生活被彻底颠覆，与冯宝宝一同踏上"异人"之旅。</p>
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
	.all{
			display:inline-block;
			color: #969696;
			font-size: 14px;
		}
	.details-box{
		width: 100%;
		height: auto;
		background: white;
	}
	.quotes{
		padding-top: 10px;
		width: 10%;
		height: auto;
		display: block;
		margin: 0 auto;
	}
	.quotes img{
		width: 100%;
		height: auto;
		margin: 0 auto;
		display: block;
	}
	.details-txt{
		/*width: 100%;*/
		height: auto;
		color: #535252;
		font-size: 15px;
		display: block;
		line-height:24px;
		padding: 10px 20px 20px 25px;
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













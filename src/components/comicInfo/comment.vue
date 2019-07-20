<template>
	<main>
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
		<section class="details-footer comment-footer">
			<router-link to="/wantsay">
				<input type="text" placeholder="我来说两句" class="inp"/>
			</router-link>
		</section>
	</main>
</template>


<script>
	export default{
		data(){
			return {
				comment1:[]
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
	.comment-list{
		width: 100%;
		height: auto;
		padding: 0 20px;
		background: white;
		padding-bottom: 4.7rem;
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
	.comment-footer{
		z-index: 10000;
		background: #F5F5EE;
		padding:15px 0 ;
	}
	.inp{
		height:38px;
		width: 90%;
		display: block;
		margin: 0 auto;
		border-radius: 1.5rem;
    	vertical-align: middle;
    	border: none;
    	padding-left: 20px;
    	border: 1px solid #C5C5C5;
    	outline: none;
	}
	.inp::-webkit-input-placeholder{
		color: #C5C5C5;
		text-align: center;
	}
</style>







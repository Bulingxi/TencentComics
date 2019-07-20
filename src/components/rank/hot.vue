<template>
	<main>
		<section class="rank-top3">
			<p class="topbook no2">
				<router-link to="/comicInfo" class="book-box">
					<img src="../../assets/images/rank27.jpg" />
					<strong class="bookname">魔法仙气一乾坤</strong>
					<span class="bookup">更新到470话</span>
				</router-link>
			</p>
			<p class="topbook no1">
				<router-link to="/comicInfo" class="book-box">
					<img src="../../assets/images/rank26.jpg" />
					<strong class="bookname">19天</strong>
					<span class="bookup">更新到287话</span>
				</router-link>
			</p>
			<p class="topbook no3">
				<router-link to="/comicInfo" class="book-box">
					<img src="../../assets/images/rank28.jpg" />
					<strong class="bookname">毒步天下</strong>
					<span class="bookup">更新到401话</span>
				</router-link>
			</p>
		</section>
		
		<!--下方列表-->
		<section class="orderlist">
			
				
			<ul class="rank-list">
				<li class="rank-item" v-for="(item,index) in rank">
					<router-link to="/comicInfo" class="rank-a">
						<p class="rank-pic">
							<img :src="item.src" />
						</p>
						<div class="rank-info">
							<strong class="rank-title">{{item.title}}</strong>
							<span class="rank-update">{{item.update}}</span>
							<span class="rank-update">{{item.tag}}</span>
							<span class="rank-update">{{item.con}}</span>
							<i class="rank-num">{{item.num}}</i>
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
				rank:[]
			}
		},
		methods:{
			loadMore() {
				  this.loading = true;
				  setTimeout(() => {
				    var last = this.rank[this.rank.length - 1];
				    for (var i = 1; i <= 10; i++) {
				      this.rank.push(last + i);
				    }
				    this.loading = false;
				  }, 2500);
			}
		},
		mounted(){
			this.$http.get("./data/rank.json")
			.then((res)=>{
				this.rank=res.data.rank
			})
		}
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.rank-top3{
		width: 100%;
		overflow: hidden;
		height: auto;
		padding: 1.3rem 0;
		position: relative;
		background: url(../../assets/images/rank-banner-bg.png);
		background-position: center bottom;
	    background-repeat: no-repeat;
	    background-size: 100% auto;
	}
	.topbook{
		width: 23%;
		height: auto;
		float: left;
		display: inline-block;
		margin: 0 5%;
		position: relative;
		bottom: -1.5rem;
		left: 0;
	}
	.no1{
		width: 28%;
		bottom: 0;
		margin: 0;
	}
	.no2{
		margin-left: 7.5%;
	}
	.book-box{
		width: 100%;
		height: auto;
		display: inline-block;
		overflow: hidden;
		background: url(../../assets/images/top3_2bg.jpg);
		background-repeat: no-repeat;
	    background-position: right bottom;
	    background-size: auto 2.95rem;
	    text-overflow: ellipsis;
	   background-color:#ffa775;
	   
	}
	.topbook img{
		width: 100%;
		height: auto;
		
	}
	.bookname{
		width: 100%;
		color: white;
		display: block;
		font-size: 14px;
		padding: 2px 0;
		overflow: hidden;
		text-align: center;
		text-overflow: ellipsis;
		white-space: nowrap;
	    overflow: hidden;
		/*background:rgba(255,167,85,0.7);*/
	}
	.bookup{
		display: block;
		width: 100%;
		color: white;
		font-size: 13px;
		text-align: center;
		padding: 1.5px 0;
		/*background:rgba(255,167,85,0.7);*/
	}
	.no1 .book-box{
		
		background: url(../../assets/images/top3_1bg.jpg);
		background-repeat: no-repeat;
	    background-position: right bottom;
	    background-size: auto 2.95rem;
	    background-color: #e86a3e;
	}
	.no3 .book-box{
		background: url(../../assets/images/top3_3bg.jpg);
		background-repeat: no-repeat;
	    background-position: right bottom;
	    background-size: auto 2.95rem;
	    background-color: #FFA775;
	}
	.orderlist{
		width: 100%;
		height: auto;
		padding-top: 0.25rem
	}
	.rank-list{
		width: 100%;
		height: auto;
		padding: 5px;
		overflow: hidden;
	}
	.rank-item{
		/*width: 100%;*/
		height: auto;
		background: white;
		border-bottom: 0.25rem solid #F5F5EE;
		padding: 0.25rem;
		margin-right: 12px;
	}
	.rank-pic{
		height: 5.775rem;
    	width: 4.5rem;
		margin-right: 0.5rem;
		display: inline-block;
	}
	.rank-pic img{
		width: 100%;
		height: auto;
	}
	.rank-a{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.rank-info{
		width: 70%;
		height: auto;
		display: inline-block;
		position: relative;
		/*float: right;*/
	}
	.rank-title{
		width: 80%;
		height: auto;
		padding-right: 2rem;
		padding-top: 0.25rem;
		color: #535252;
    	font-size:16px;
    	display: block;
	}
	.rank-update{
		width: 100%;
		display: block;
		margin: 5px 0;
		font-size: 0.6rem;
		color: #969696;
		text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	    /*display:inline-block;*/
	}
	.rank-num{
		position: absolute;
		top: 0;
		right: 0;
		font-size: 2rem;
		display: block;
		font-style: normal;
		color: #C5C5C5;
	}
	 .loading-box{
                padding:.1rem 0;
 
                .loading-more{
                    display:inline-block;
                    vertical-align: middle;
                    margin-right:.2rem;
                }
                .loading-more-txt{
                    vertical-align: middle;
                    font-size:.22rem;
                }
            }
 
            .no-more{
                color:@c-999;
                font-size:.16rem;
                padding:.1rem 0 .2rem;
                
            }

</style>



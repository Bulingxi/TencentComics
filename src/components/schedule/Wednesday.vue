<template>
	<main>
		<section class="wednes-box">
			<ul class="rank-list">
				<li class="rank-item" v-for="(item,index) in wednes">
					<router-link to="/comicInfo" class="rank-a">
						<p class="rank-pic">
							<img :src="item.src3" />
						</p>
						<div class="rank-info">
							<strong class="rank-title">{{item.title3}}</strong>
							<span class="rank-update">{{item.update3}}</span>
							<span class="rank-update">{{item.tag3}}</span>
							<span class="rank-update">{{item.con3}}</span>
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
				wednes:[]
			}
		},
		mounted(){
			this.$http.get("./data/wednesday.json")
			.then((res)=>{
				this.wednes=res.data.wednes
			})
		}
	}
</script>

<style>
	.wednes-box{
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
		width: 75%;
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
</style>












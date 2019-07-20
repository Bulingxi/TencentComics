<template>
	<main class="guide">
		<p class="guide-title">
			<img src="../../assets/images/page1-title.png" />
		</p>
		<p class="guide-title gt2">
			<img src="../../assets/images/page1-text-5.png" />
		</p>
		<div class="gt-box">
			<span>
				<img src="../../assets/images/page1-dialog.png" />
			</span>
			<span class="sao"></span>
			<span class="yu"></span>
			<span class="people">
				<img src="../../assets/images/people.png" />
			</span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.guide{
		width: 100%;
		height: 667px;
		direction: block;
		overflow:hidden;
		background: url(../../assets/images/bg.png) repeat-y;
		background-size: 100% auto;
	}
	.guide-title{
		width: 100%;
		height: auto;
		padding: 10px;
		padding-top: 20px;
		box-sizing: border-box;
	}
	.guide-title img{
		width: 100%;
		height: auto;
	}
	.gt2{
		padding-top: 0px;
		margin-top: -10px;
	}
	.gt-box{
		width: 100%;
		height: auto;
		overflow: hidden;
		position: relative;
		/*padding-bottom: 280px;*/
	}
	.gt-box span:nth-child(1){
		width: 50%;
		height: auto;
		display: inline-block;
		/*margin-left: 20px;*/
		position: absolute;
		top: 0;
		left: 20px;
	}
	span img{
		width: 100%;
		height: auto;
	}
	.gt-box span:nth-child(2){
		width: 7.825rem;
    	height: 7.525rem;
		display: inline-block;
		position: absolute;
		top: 0;
		right: 0;
		background: url(../../assets/images/sc_img_text.png) no-repeat;
		background-size:250px auto;
		background-position: -130px 0;
	}
	.gt-box span:nth-child(3){
		width: 7.825rem;
    	height: 7.525rem;
		display: inline-block;
		position: absolute;
		top: 150px;
		left:-20px;
		background: url(../../assets/images/sc_img_text.png) no-repeat;
		background-size:250px auto;
		background-position: 0px 0;
	}
	.people{
		width:75%;
		height: auto;
		display: block;
		float: right;
		margin-top: 70px;
		position: relative;
		
	}
	.people img{
		width: 100%;
		height: auto;
	}
	.gt-box span:nth-child(5){
		width: 5.025rem;
    	height: 5.025rem;
		display: inline-block;
		position: absolute;
		bottom: 100px;
		left:30px;
		background: url(../../assets/images/sc_img_text.png) no-repeat;
		background-size:200px auto;
		background-position: 0px -130px;
	}
	.gt-box span:nth-child(6){
		width: 10.5rem;
    	height: 2.5rem;
		display: inline-block;
		position: absolute;
		bottom: 60px;
		left:10px;
		background: url(../../assets/images/sc_img_text.png) no-repeat;
		background-size:220px auto;
		background-position: 0px -110px;
	}
	.gt-box span:nth-child(7){
		width: 4rem;
    	height: 4rem;
		display: inline-block;
		position: absolute;
		bottom: 300px;
		right: -8px;
		background: url(../../assets/images/page1-icon-2.png) no-repeat;
		background-size:55px auto;
		background-position: 0px px;
	}
	
	.sao{
		animation: dd 3s 3s ease both infinite;
	}
	.yu{
		animation: dd 3s 3s ease both infinite;
		
	}
	@keyframes dd{
		0%{transform: scale(1);}
		50%{transform: scale(0.8);}
		100%{transform: scale(1);}
	}
</style>



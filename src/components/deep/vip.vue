<template>
	<main>
		<ul class="vip-list">
			<li v-for="(item,index) in viplist">
				<img :src="item" />
			</li>
		</ul>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				viplist:[
					require('../../assets/images/vip1.jpg'),
					require('../../assets/images/vip2.jpg'),
					require('../../assets/images/vip3.jpg'),
					require('../../assets/images/vip4.jpg'),
					require('../../assets/images/vip5.jpg'),
					require('../../assets/images/vip6.jpg'),
					require('../../assets/images/vip7.jpg'),
					require('../../assets/images/vip8.jpg'),
					require('../../assets/images/vip9.jpg'),
					require('../../assets/images/vip10.jpg'),
					require('../../assets/images/vip11.jpg'),
					require('../../assets/images/vip12.jpg'),
					require('../../assets/images/vip13.jpg'),
					require('../../assets/images/vip14.jpg'),
					require('../../assets/images/vip15.jpg'),
					require('../../assets/images/vip16.jpg'),
					require('../../assets/images/vip17.jpg'),
					require('../../assets/images/vip18.jpg'),
					require('../../assets/images/vip19.jpg'),
					require('../../assets/images/vip20.jpg'),
					require('../../assets/images/vip21.jpg'),
					require('../../assets/images/vip22.jpg'),
					require('../../assets/images/vip23.jpg')
				]
			}
		}
	}
</script>
<style scoped>
	.vip-list{
		width: 100%;
		height: auto;
		overflow: hidden;
		margin: 0 ;
		padding: 0;
	}
	.vip-list li{
		width: 100%;
		height: auto;
		margin: 0 ;
		padding: 0;
		display: block;
	}
	.vip-list li img{
		width: 100%;
		height: auto;
		display: block;
	}
</style>



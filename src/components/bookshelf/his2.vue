<template>
	<main>
		<section class="rank-tab">
			<ul class="tab-list">
				<li class="tab-list-item">
					<router-link to="/collect" class="active">收藏</router-link>
				</li>
				<li class="tab-list-item">
					<router-link to="/his">历史</router-link>
				</li>
				<i class="edit" @click="choose()"></i>
			</ul>
		</section>
		<section class="his-box">
			<p class="his-login">
				<span class="login-txt">登录同步后可展示云书架中的漫画</span>
				<i class="login-btn"><router-link to="/login">登录</router-link></i>
			</p>
			<ul class="rank-list">
				<li class="rank-item" v-for="(item,index) in his" :key="index">
					<router-link to="/index" class="rank-a"  :class="{afterclick:aclick==true}">
						<p class="rank-pic">
							<img :src="item.src9" />
						</p>
						<div class="rank-info">
							<strong class="rank-title">{{item.title9}}</strong>
							<span class="rank-update">{{item.author}}</span>
							<span class="rank-update">{{item.update9}}</span>
						</div>
						<p class="comic-continute">
							<i class="continute-icon"></i>
							<span>{{item.continute}}</span>
						</p>
					</router-link>
					
					<div class="comic-choose" @click="chooseone(item.id)">
						<i class="unchoose" :class="{clickchoose:cid.indexOf(item.id)>=0}"></i>
					</div>
					
				</li>
			</ul>
			<p class="no-more">客官，人家已经没有那个的啦~~</p>
		</section>
		
		<ul class="his-choose" v-show="bottomshow">
			<li  @click="allchoose()" ><i class="allchoose"></i>全选</li>
			<li  @click="del()"><i class="allchoose del"></i>删除</li>
		</ul>
		
	</main>
</template>

<script>
	var oEdit=document.getElementsByClassName('edit');
	var oBook=document.getElementsByClassName('rank-a');
	export default{
		data(){
			return {
				aclick:false,
				cclick:false,
				bottomshow:false,
				all:false,
				his:[
					{	src9:require('../../assets/images/rank26.jpg'),
						title9:'19天',
						author:'作者：old先',
						update9:'更新至287话',
						continute:'续看37话',
						id:'1'
					},
					{
						src9:require('../../assets/images/his2.jpg'),
						title9:'要有光',
						author:'作者：XNOX种植大棚',
						update9:'更新至26话',
						continute:'续看18话',
						id:'2'
					},
					{
						src9:require('../../assets/images/his3.jpg'),
						title9:'我的英雄学园',
						author:'作者：集英社',
						update9:'更新到235话',
						continute:'续看1话',
						id:'3'
					}
				],
				cid:[]
			}
		},
		methods:{
			
			choose(){
				console.log('点击了编辑')
				console.log(oBook)
				this.aclick=!this.aclick;
				this.bottomshow=!this.bottomshow;
				this.cid=[]
			},
			chooseone(id){
				console.log('点击了圆圈')
//				this.cclick=index;
//				this.cclick=!this.cclick;
				var idindex=this.cid.indexOf(id);
				if(idindex>=0){
					this.cid.splice(idindex,1)
				}else{
					this.cid.push(id)
				}
				console.log(this.cid)
			},
			allchoose(){
				var len=this.his.length;
				console.log(len)
				console.log(typeof(len))
				console.log('cid的长度',this.cid.length)
				console.log(this.his[len-1].id)
				if(this.cid.length<this.his.length){
					for(var i=len;i>0;i--){
						console.log('aa',this.his[i-1].id)
						this.cid.push(this.his[i-1].id);
					}
				}else if(this.cid.length>=this.his.length){
					this.cid=[]
				}
				console.log(this.cid)
			},
			del(){
				var clen=this.cid.length;
				console.log(clen)
				console.log(this.cid)
				console.log('ss',typeof(Number(this.cid[clen-1])))
				for(var i=clen;i>0;i--){
					console.log('ss1',Number(this.cid[i-1]))
					for(var j=clen;j>0;j--){
						this.$delete(this.his,Number(this.cid[i-1])-1)
					}
					this.cid=[]
//					this.his.splice(Number(this.cid[i-1])-1,clen)
//					this.cid.splice(clen-1,1)
				}
			}
		}
	}
</script>

<style scoped>
	.his-box{
		width: 100%;
		height: auto;
	}
	.his-login{
		width: 100%;
		height: auto;
		display: block;
		margin: 5px;
		background: white;
		overflow: hidden;
		padding: 5px;
		box-sizing: border-box;
		border-left:5px solid #F5F5EE;
		border-right:7px solid #F5F5EE;
	}
	.login-txt{
		color: #969696;
		font-size: 14px;
		
	}
	.login-btn{
		width: 4.35rem;
    	height: 2.0rem;
    	display: inline-block;
    	background: #FFA775;
    	position: relative;
    	right: -20%;
    	top: 0;
    	border-radius: 5px;
    	font-size: 14px;
    	text-align: center;
    	line-height: 2rem;
    	font-style: normal;
	}
	.login-btn a{
		color: white;
	}
	.rank-list{
		width: 100%;
		height: auto;
		padding: 5px;
		overflow: hidden;
	}
	.rank-item{
		height: auto;
		
		border-bottom: 0.25rem solid #F5F5EE;
		padding: 0.25rem;
		margin: 0 5px;
		margin-right: 8px;
		position: relative;
		padding-bottom: 95px;
		overflow: hidden;
	}
	.rank-pic{
		height: 5.775rem;
    	width: 4.5rem;
		margin-right: 0.5rem;
		display: inline-block;
		position: relative;
		z-index: 2;
	}
	.rank-pic img{
		width: 100%;
		height: auto;
	}
	.rank-a{
		width: 100%;
		height: auto;
		position: absolute;
		left: 0px;
		top: 0;
		display: block;
		background: white;
		transition: all 0.65s;
		overflow: hidden;
	}
	.rank-info{
		width: 50%;
		height: auto;
		display: inline-block;
		position: relative;
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
	.comic-continute{
		width: 20%;
		height: a;
		transform: translateY(-50%);
		display: inline-block;
		width: 4.25rem;
	}
	.continute-icon{
		width: 1.8rem;
    	height: 1.8rem;
		display: block;
		background: url(../../assets/images/sc_img_bookshelf.png);
		background-size: 100px;
		background-position: 0 -35px;
		margin: 0 auto;
	}
	.comic-continute span{
		font-size: 12px;
		color: #969696;
		display: block;
		text-align: center;
	}
	.no-more{
		width: 100%;
		color: #969696;
		text-align: center;
		font-size: 13px;
		padding: 0.95rem 0;
	}
	.comic-choose{
		width: 83px;
		height: 103px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
	}
	.unchoose{
		width: 23px;
		height: 23px;
		display: block;
		margin: 0 auto;
		border: 1px solid #C5C5C5;
		background: white;
		border-radius: 50%;
		margin-top: 50%;

	}
	.clickchoose{
		background: url(../../assets/images/sc_img_bookshelf.png) no-repeat;
		background-size: 100px;
		background-position:-38px -38px;
	}
	.his-choose{
		width: 100%;
		height: auto;
		overflow: hidden;
		background: white;
		position: fixed;
		left: 0;
		bottom: 0;
		border-top: 1px solid #E7E7E7;
	}
	.his-choose li{
		width: 49.9%;
		height: auto;
		float: left;
		padding: 20px 0;
		color: #535252;
		font-size: 14px;
		text-align: center;
	}
	.his-choose li:nth-child(1){
		border-right: 0.5px solid #E7E7E7;
	}
	.allchoose{
		width: 27px;
		height: 27px;
		display: inline-block;
		background: url(../../assets/images/sc_img_bookshelf.png) no-repeat;
		background-size: 100px;
		background-position: -38px -38px;
		vertical-align: middle;
	}
	.del{
		background-position: -73px -38px;
	}
	.rank-tab{
		height: auto;
		margin-top: 55px;
		border-top: 4px solid #fbfbfb;
	}
	.tab-list{
		height: auto;
		overflow: hidden;
		padding: 0 22%;
		position: relative;
		background: white;
	}
	.tab-list-item{
		width:50%;
		height: 2.5rem;
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
	.rank-top3{
		height: auto;
	}
	.edit{
	    width: 1.65rem;
    	height: 1.65rem;
    	position: absolute;
    	display: block;
    	top: 0.5rem;
    	cursor: pointer;
    	right: 20px;
    	background: url(../../assets/images/sc_img_bookshelf.png) no-repeat;
    	background-size: 5.6rem 5.6rem;
    	background-position: 0 0;
	}
	.afterclick{
		left: 80px;
	}
</style>




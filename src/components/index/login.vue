<template>
	<main>
		<p class="logo"><img src="../../assets/images/login-logo.png"/></p>
		<div class="web-login">
			<input type="text" class="tel" placeholder="QQ号码/手机/邮箱" v-model="username" @blur="userblur()"/>
			<input type="password" class="tel" placeholder="请输入你的QQ密码" v-model="pass"/>
			<p class="sub" @click="sub()">登录</p>
			<p class=" sub quick-sub" @click="quicklogin()">一键登录</p>
			<span class="forget">忘了密码？</span>
			<span class=" forget register"><router-link to="/register">注册新帐号</router-link></span>
		</div>
		<div class="tips" v-show="tipsshow">
			<span class="gth"><img src="../../assets/images/gth.png"/></span>
			{{tips[0]}}
		</div>
		<div class="tips" v-show="tipspassshow">
			<span class="gth"><img src="../../assets/images/gth.png"/></span>
			{{tips[1]}}
		</div>
		<div class="tips" v-show="tipsmobileshow">
			<span class="gth"><img src="../../assets/images/gth.png"/></span>
			{{tips[2]}}
			<span class="mobile">{{tips[3]}}</span>
		</div>
		<div class="tips" v-show="phonenum">
			<span class="gth"><img src="../../assets/images/gth.png"/></span>
			{{tips[4]}}
		</div>
	</main>
</template>

<script>
	var oTel=document.getElementsByClassName('tel');
	export default{
		data(){
			return {
				tipsshow:false,
				tipspassshow:false,
				tipsmobileshow:false,
				phonenum:false,
				username:'',
				pass:'',
				tips:['你还没有输入帐号！','你还没有输入密码！','使用一键登录，','请安装最新版本的QQ手机版','请输入正确的手机号']
			}
		},
		methods:{
			userblur(){
				if(this.username!=''){
					this.username=this.username+'@qq.com';
				}
			},
			sub(){
//				var regex=/^[1-9]\d{1}[0-9]/
				if(this.username==''){
//					console.log('账号和密码没填')
					this.tipsshow=true;
					this.tipspassshow=false;
				}
				else if( this.pass==''&&this.username!=''){
//					console.log('密码没填')
					this.tipsshow=false;
					this.tipspassshow=true;
				}
				
				else if(this.pass!=''&&this.username!=''){
					this.tipspassshow=false;
					this.tipsshow=false;
				}
				
			},
			quicklogin(){
				this.tipsmobileshow=!this.tipsmobileshow;
				setTimeout(()=>{
					this.tipsmobileshow=false;
				},3000)
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	.logo{
		width: 100%;
		height: auto;
		
	}
	.logo img{
		width:244px;
		height: auto;
		display: block;
		margin: 0 auto;
		margin-top: 40px;
	}
	.web-login{
		width: 292px;
		height: auto;
		overflow: hidden;
		padding-top: 20px;
		margin: 0 auto;
		
	}
	.tel{
		width: 100%;
		height: 44px;
		font-size: 16px;
		display: block;
		-webkit-tap-highlight-color: rgba(255,255,255,0);
		margin-bottom: 2px;
		border: none;
		border-radius: 5px;
		padding: 8px;
		box-sizing: border-box;
		padding-left: 15px;
		outline: none;
	}
	input::-webkit-input-placeholder {
		color: #bebebe;
	}
	.sub{
		width: 100%;
		height: 44px;
		background: #146fdf;
		color: white;
		display: block;
		margin-top: 20px;
		border-radius: 5px;
		text-align: center;
		line-height: 44px;
		
	}
	.quick-sub{
		background: #e7e7e7;
		width: 99%;
		border: 1px solid #9abbe3;
		color: #146fdf;
	}
	.forget{
		font-size: 16px;
		color:#246183;
		padding: 20px 0 0 0;
		display: inline-block;
	}
	.register{
		float: right;
	}
	.register a{
		color:#246183;
	}
	.tips{
		width: 80%;
		height: auto;
		text-align: center;
		background: rgba(0,0,0,0.7);
		position: absolute;
		top: 0;
		left: 50%;
		color: white;
		transform: translateX(-50%);
		vertical-align: middle;
		padding: 20px 0;
		font-size: 13px;
		border-radius: 10px;
	}
	.gth{
		width: 24px;
		height: 24px;
		display: inline-block;
	}
	.gth img{
		width: 100%;
		height: auto;
		vertical-align: middle;
	}
	.mobile{
		color: #F15A22;
	}
</style>














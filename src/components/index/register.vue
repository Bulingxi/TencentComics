<template>
	<main>
		<header class="re-logo">
			<i class="logo-qe"><img src="../../assets/images/qe.png"/></i><span class="qq">QQ</span>
			<nav class="topbar">
				<p class="lh">
					<img src="../../assets/images/qe2.png" />
					<i class="qqlh">QQ靓号</i>
				</p>
				<ul class="sel">
					<li class="sel-item" @click="downlist()">简体中文
						<ul class="lan" v-show="lanshow">
							<li>繁体中文</li>
							<li>English</li>
						</ul>
					</li>
					<li class="sel-item">意见反馈</li>
				</ul>
			</nav>
		</header>
		
		<div class="register-box">
			<div class="box">
				<p class="welcome">欢迎注册QQ</p>
				<p class="everday">每一天，乐在沟通。<span class="free">免费靓号</span></p>
				<input type="text" class="user" placeholder="昵称" v-model="user" @focus="isfocus()"/>
				<p class="error-tips"><img src="../../assets/images/error.png"/>昵称不可以为空</p>
				<input type="password" class="user pwd" placeholder="密码" v-model="pwd"  @focus="isfocus2()" @blur="isblur()"/>
				<p class="error-tips err-pwd"><img src="../../assets/images/error.png"/>密码不可以为空</p>
				<div class="pwd-onfo">
					<p class="green"><img src="../../assets/images/green.png"/>不能包括空格</p>
					<p class="info"><img src="../../assets/images/info.png"/>长度为8-16个字符</p>
					<p class="info"><img src="../../assets/images/info.png"/>必须包含字母、数字、符号中至少2种</p>
				</div>
				<p class="error-tips err-pwd"><img src="../../assets/images/error.png"/>不能有空格</p>
				<p class="error-tips err-pwd"><img src="../../assets/images/error.png"/>长度为8-16个字符</p>
				<select id="qz">
					<option>+86</option>
					<option>中国 +86</option>
					<option>中国香港特别行政区 +852</option>
					<option>中国澳门特别行政区 +853</option>
					<option>中国台湾地区 +886</option>
				</select>
				
				<!--<ul class=""></ul>-->
				<input type="tel" class="user register-tel" placeholder="手机号" />
				<p class="input-tips">可通过该手机号找回密码</p>
				<input type="submit" class="submit" value="立即注册" @click="register()"/>
				<input type="checkbox" class="check" />
				<span class="agree">我已阅读并同意相关服务条款和隐私政策</span>
			</div>
		</div>
	</main>
</template>

<script>
var err=document.getElementsByClassName('error-tips');
var pwdinfo=document.getElementsByClassName('pwd-onfo');
	export default{
		data(){
			return{
				lanshow:false,
				user:'',
				pwd:''
			}
		},
		methods:{
			downlist(){
				
				this.lanshow=!this.lanshow;
			},
			register(){
				var reg =/\s/;
				var reg2=/^[A-Za-z0-9]{8,16}$/;
				if(this.user==''&&this.pwd==''){
					err[0].style.height="auto"
					err[1].style.height="auto"
				}else if(reg.test(this.pwd)){
					pwdinfo[0].style.height=0
					err[2].style.height="auto"
				}else if(!reg.test(this.pwd) && reg2.test(this.pwd) ){
					pwdinfo[0].style.height=0
				}
				else if(reg2.test(this.pwd)){
					pwdinfo[0].style.height=0
					
				}else if(!reg2.test(this.pwd)){
					pwdinfo[0].style.height=0;
					err[3].style.height='auto'
				}
			},
			isfocus(){
				err[0].style.height=0;
			},
			isfocus2(){
				err[1].style.height=0;
				pwdinfo[0].style.height="auto"
				err[2].style.height=0;
				err[3].style.height=0
			},
			isblur(){
				if(this.pwd==''){
					pwdinfo[0].style.height=0
				}
				
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	
	.re-logo{
		width:100%;
		height: auto;
		/*overflow: hidden;*/
		padding: 10px 10px;
		/*background: white;*/
	}
	.logo-qe{
		width: 18px;
		height: auto;
		display: inline-block;
		/*vertical-align: middle;*/
	}
	.logo-qe img{
		width: 100%;
		height: auto;
		display: block;
		vertical-align: middle;
	}
	.qq{
		font-size: 16px;
		display: inline-block;
		height: 100%;
		transform: translateY(-25%);
		margin-left: 10px;
	}
	.topbar{
		width: 64%;
		height: auto;
		/*overflow: hidden;*/
		float: right;
	}
	.lh{
		width: 30%;
		height: auto;
		background: #fc4754;
		/*padding: 2px;*/
		border-radius: 5px;
		display: inline-block;
		position: relative;
	}
	.lh img{
		width: 18px;
		height: auto;
		display: inline-block;
		vertical-align: middle;
		position: absolute;
		top: -5px;
		left: 0;
	}
	.qqlh{
		display: inline-block;		
		font-style: normal;
		color: white;
		font-size: 11px;
		line-height: 21px;
		padding-left: 21px;
	}
	.sel{
		width: 70%;
		height: auto;
		padding: 0;
		margin: 0;
		float: right;
		/*overflow: hidden;*/
	}
	.sel-item{
		width: 40%;
		height: auto;
		padding: 5px 5px;
		color: #C5C5C5;
		font-size: 14px;
		float: left;
		position: relative;
		cursor: pointer;
	}
	.lan{
		background: white;
		/*display: none;*/
		position: absolute;
		bottom: -55px;
		left: 0px;
		z-index: 1000;
	}
	.lan li{
		padding: 5px 8px;
		font-size: 12px;
	}
	.register-box{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.box{
		width: 80%;
		height: auto;
		margin: 0 auto;
		/*background: white;*/
		margin-top: 90px;
	}
	.welcome{
		font-size: 22px;
		padding: 10px 0;
	}
	.everday{
		font-size: 16px;
		padding: 5px 0;
	}
	.free{
		color: #359eff;
		font-size: 12px;
		display: inline-block;
		float: right;
		margin-top: 5px;
	}
	.user{
		width: 100%;
		display: block;
		border: none;
		padding: 10px 10px;
		box-sizing: border-box;
		border-radius: 5px;
		border: 1px solid #aaa;
		margin-top: 20px;
		outline: none;
	}
	.error-tips{
		width: 100%;
		height: 0;
		overflow: hidden;
		display: block;
		/*padding-top: 10px;*/
		font-size: 14px;
		color: #ff5b5b;
		transition: all 0.65s;
	}
	
	.error-tips img{
		width: 18px;
		height: 18px;
		display: inline-block;
		vertical-align: middle;
		padding-right: 10px;
	}
	.pwd-onfo{
		width: 100%;
		height: 0;
		overflow: hidden;
		/*padding-top: 10px;*/
		transition: all 0.65s;
	}
	.green,.info{
		width: 100%;
		display: block;
		overflow: hidden;
		font-size: 14px;
		margin-top: 5px;
	}
	.green img{
		width: 18px;
		height: 18px;
		vertical-align: middle;
		padding-right: 10px;
		display: inline-block;
	}
	.info img{
		width: 18px;
		height: 18px;
		vertical-align: middle;
		padding-right: 10px;
		display: inline-block;
	}
	#qz{
		width: 30%;
		padding: 10px 10px;
		border: none;
		border: 1px solid #aaa;
		outline: none;
		margin-top: 20px;
		border-radius: 5px;
		color: #969696;
	}
	option{
		font-size: 12px;
		border: none;
	}
	.register-tel{
		width:60%;
		display: inline-block;
		float: right;
	}
	.input-tips{
		color: #aaa;
		font-size: 12px;
		padding: 5px 0;
	}
	.submit{
		width: 100%;
		font-size: 18px;
		color: white;
		padding: 10px;
		text-align: center;
		background: #3487ff;
		border: none;
		border-radius: 5px;
		margin-top: 10px;
	}
	.check{
		width: 15px;
		height: 15px;
		border: 1px solid #aaa;
		background: white;
		margin-top: 20px;
		vertical-align: middle;
	}
	.agree{
		color: #AAAAAA;
		font-size: 12px;
		display: inline-block;
		vertical-align: middle;
		margin-top: 18px;
	}
</style>


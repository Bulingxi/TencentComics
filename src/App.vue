<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     	
    }
  }
}
</script>


<style>
*{
	margin: 0;
	padding: 0;
}
body{
	/*max-width: 750px;*/
	margin: 0 auto;
	background:#F5F5EE;
}
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;*/
  /*margin-top: 60px;*/
}
h1{
	background: yellow;
	margin: 0;
}

	  *{
     	margin: 0;
     	padding: 0;
     	list-style: none;
     	text-decoration: none;
     }
	.topnav{
		width: 100%;
		height: auto;
		overflow: hidden;
		background: white;
		position: fixed;
		top: 0;
		left: 0;	
		z-index: 300;
	}
	.top-logo{
		width: 130px;
		height: 55px;
		background-image: url(./assets/images/icons_1.png);
		background-position:2px -190px;
		background-size:300px;
		float: left;
	}
	.btn{
		width: 100px;
		height: 55px;
		float: right;
	}
	.btn-search,.btn-f{
		width: 40px;
		height: 50px;
		display: block;
		position: relative;

		float: left;
	}
	.btn-search:after{
		content: '';
		position:absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-image: url(./assets/images/icons_1.png);
		background-position: -135px -233px;
		background-size:300px;
	}
	.btn-f:after{
		content: '';
		position:absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-image: url(./assets/images/icons_1.png);
		background-position: -100px -233px;
		background-size:300px;
	}
	.nav-menu-box{
		width: 100%;
		height: auto;
		position: fixed;
		top: 3.1rem;
		left: 0;
		display: none;
		overflow: hidden;
		background: rgba(0,0,0,0.5);
	}
	.show{
		display: block;
	}
	.nav-menu{
		width: 100%;
		height: auto;
		padding-bottom: 0.75rem;
		background: #f5f5ee;
		border-bottom:0.25rem solid #ff9a6a ;
		transition: all 0.65s;
	}
	.nav-list{
		width: 100%;
		height: auto;
		overflow: hidden;
		/*background: aquamarine;*/
	}
	.item{
		width: 33.3%;
		height: 66px;
		float: left;
		/*background: palevioletred;*/
	}
	.map{
		width: 100%;
		height:58px;
	}
	.map .item-a{
		width: 81.5%;
	}
	.item-a{
		width: 42%;
		height: 80%;
		display: block;
		margin: 0 auto;
		color: #969696;
		margin-top: 10px;
		text-align: center;
		font-size: 12px;
	}
	.pic{
		width: 37px;
		height: 37px;
		background:url(./assets/images/icons_1.png);
		background-size: 300px;
		background-position: -200px -50px;
		display: block;
	}
	.collect{
		background-position: -240px -50px;
	}
	.his{
		background-position: -125px -50px;
	}
	.col{
		background-position: -35px -105px;
	}
	.rank{
		background-position: 4.5px -105px;
	}
	.sche{
		background-position: -162px -47px;
	}
	.my{
		width: 100%;
		height: 100%;
		background-size: 305px;
		background-position: 0px 0px;
	}
	.back{
		width:27px;
		height: 27px;
		display: inline-block;
		/*padding: 0.375rem;*/
		box-sizing: border-box;
		background: url(./assets/images/icons_1.png);
		background-position: -80px -251px;
		background-size:300px;
		position: relative;
		top: 14px;
		left: 8px;
	}


</style>
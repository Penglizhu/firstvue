<template>
  <div id="app">
  	

    <router-view></router-view>
  </div>
</template>


<script type="text/javascript" src="../js/jquery-1.4.2.min.js" ></script>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
     
  }
} 

</script>

<style>
	@media only screen and (max-width:300px) {
	html,
	body {
		font-size: 9.375px
	}
}

@media only screen and (max-width:310px) and (min-width:300px) {
	html,
	body {
		font-size: 9.375px
	}
}

@media only screen and (max-width:320px) and (min-width:310px) {
	html,
	body {
		font-size: 9.6875px
	}
}

@media only screen and (max-width:350px) and (min-width:320px) {
	html,
	body {
		font-size: 10px
	}
}

@media only screen and (max-width:360px) and (min-width:350px) {
	html,
	body {
		font-size: 10.9375px
	}
}

@media only screen and (max-width:400px) and (min-width:360px) {
	html,
	body {
		font-size: 11.25px
	}
}

@media only screen and (max-width:470px) and (min-width:400px) {
	html,
	body {
		font-size: 12.5px
	}
}

@media only screen and (max-width:480px) and (min-width:470px) {
	html,
	body {
		font-size: 14.6875px
	}
}

@media only screen and (max-width:540px) and (min-width:480px) {
	html,
	body {
		font-size: 15px
	}
}

@media only screen and (max-width:560px) and (min-width:540px) {
	html,
	body {
		font-size: 16.875px
	}
}

@media only screen and (max-width:570px) and (min-width:560px) {
	html,
	body {
		font-size: 17.5px
	}
}

@media only screen and (max-width:630px) and (min-width:570px) {
	html,
	body {
		font-size: 17.8125px
	}
}

@media only screen and (max-width:640px) and (min-width:630px) {
	html,
	body {
		font-size: 19.6875px
	}
}

@media only screen and (min-width:640px) {
	html,
	body {
		font-size: 20px
	}
}
	*{
		margin: 0;
		padding: 0;
	}
	html,body{
		width: 100%;
		height: 100%;
		background: #f2f2f2;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 640px;
  margin: 0 auto;

}
.clearfix:after, .clear:after, .clearfix:before, .clear:before {
    content:".";        
     display:block;        
     height:0;        
     clear:both;        
     visibility:hidden; 
    }
    .mint-header{
		position: relative;
		top: 0;
		max-width: 640px;
		width: 100%;
		height: 4rem;
		overflow: hidden;
		background: #b81c22;
		text-align: center;
		line-height: 4rem;
	}
	.mintui-back{
		font-size: 2rem;
	}
	.mint-header-title{
		font-size: 1.5rem;
	}

.nav {
	border-top: 1px solid #999;
  list-style-type: none;
  width: 100%;
  max-width: 640px;
  height: 4.25rem;
  background-color: #fff;
  z-index: 99;
  bottom: 0;
  position: fixed;
  padding: 0;
  display: flex;
  overflow: hidden;
}
.nav li {
  display: inline-block;
  flex: 1;
 
}
.nav li a{
     position: absolute;
     top: 50%;
    margin: 0 auto;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    width: 3rem;
    height: 4rem;
    background-image: url(assets/img/homenav.jpg);
    background-repeat: no-repeat;
    background-size: 3rem 40rem;
    overflow: hidden;
    text-decoration: none;
}


.home{
	background-position: 0rem 0rem;
}
.classifycation{
	background-position: 0rem -4rem;
}
.channel{
	    background-position: 0rem -8rem;
}
.cart{
	background-position: 0rem -12rem;
}
.my{
	background-position: 0rem -16rem;
}

.active1{
	background-position: 0rem -20rem;
}
.active2{
	background-position: 0rem -24rem;
}
.active3{
	    background-position: 0rem -28rem;
}
.active4{
	    background-position: 0rem -32rem;
}
</style>

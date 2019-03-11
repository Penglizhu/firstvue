<template>
	
	<div id="wrap">
	  	<ul class="nav">
  		<li><router-link to="/" class="home" active-class="active1"></router-link></li>
  		<li><router-link to="/classify" class="classifycation" active-class="active2"></router-link></li>
  		<li><router-link to="/channel" class="channel" active-class="active3"></router-link></li>
  		<li><router-link to="/cart" class="cart" active-class="active4"></router-link></li>
  		<li><router-link to="/login" class="my" active-class="active5"></router-link></li>
  	</ul>
		<mt-swipe :auto="4000">
			<mt-swipe-item><router-link to="/good/1"><img src="../../assets/img/3.jpg"></router-link></mt-swipe-item>
			<mt-swipe-item><router-link to="/good/3"><img src="../../assets/img/2.jpg"></router-link></mt-swipe-item>
			<mt-swipe-item><router-link to="/good/5"><img src="../../assets/img/1.jpg"></router-link></mt-swipe-item>
			<mt-swipe-item><router-link to="/good/7"><img src="../../assets/img/4.jpg"></router-link></mt-swipe-item>
			<mt-swipe-item><router-link to="/good/6"><img src="../../assets/img/5.jpg"></router-link></mt-swipe-item>
		</mt-swipe>
		<header>

			<form class="search">
				<input type="submit" class="search-icon" value="" />
				<input type="search" class="serach-txt" placeholder="熊本熊" />
				<router-link to="/new"><span class="message"></span></router-link>
			</form>

		</header>
		<aside>
			<div class="money"><img src="../../assets/img/6.jpg"></div>

			<ul class="aside-nav">
				<li>
					<router-link to="/new"><img src="../../assets/img/7.jpg"><span>新品</span></router-link>
				</li>
				<li>
					<router-link to="/channel"><img src="../../assets/img/8.jpg"><span>频道</span></router-link>
				</li>
				<li>
					<router-link to="/shikt"><img src="../../assets/img/9.jpg"><span>衬衫</span></router-link>
				</li>
				<li>
					<router-link to="/shoe"><img src="../../assets/img/10.jpg"><span>帆布鞋</span></router-link>
				</li>
				<li>
					<router-link to="/group"><img src="../../assets/img/11.jpg"><span>V团</span></router-link>
				</li>
			</ul>

		</aside>
		<section>
			<h3>
				<i><img src="../../assets/img/12.jpg"></i>
				<span>日式免烫&nbsp;全新上线</span>
			</h3>
			
			<div class="main">
				
				<div class="area" v-for="(v,i) in list">
					<img :src="v.image" class="areaimg"/>
					<div class="areabox clear">
						
					<ul class="area-main clear" >
						<li v-for="(a,i) in v.areashirt">
					      <router-link :to="'/good/'+a.id">
							<img :src="a.imgsrc" class="area-main-img"/>
							<p class="areatitle">{{a.title}}</p>
							<span class="sale">售价：￥{{a.sale}}</span>
							<span class="price">充值相当于：<span>￥{{a.price}}</span></span>
						  </router-link>
						 
						</li>
						
					</ul>
					
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import data from '../../assets/home.json'　　
	export default {　　　　
		data() {　　　　　　
			return {　　　　　　　　
				list:''　　　
			}　　　　
		},
		mounted() {　　
			this.list= data.areadata;　
			
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		font-family: "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
	}
	
	wrap {
		max-width: 640px;
		margin: 0 auto;
		overflow: hidden;
		min-height: 100%;
		background-color: #fff;
	}
	
	#wrap header {
		z-index: 99;
		top: 0;
		position: fixed;
		width: 100%;
		max-width: 640px;
		height: 4rem;
		background: -webkit-linear-gradient(rgba(209, 207, 207, 1), rgba(209, 207, 207, 0.2));
	}
	
	.search {
		margin-top: 0.7rem;
		margin-left: 0.9rem;
		width: 85%;
		height: 2.2rem;
		line-height: 2.9rem;
		background-color: #fff;
		border: 1px solid #aaaaaa;
		border-radius: 3rem;
		overflow: hidden;
		outline: none;
	}
	
	.search-icon {
		background: url(../../assets/img/search2.png) no-repeat;
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		-webkit-transform: translateY(-50%);
		display: inline-block;
		margin-left: 1.5rem;
		width: 1.5rem;
		height: 1.5rem;
		border: 0;
		background-size: contain;
		cursor: pointer;
		outline: none;
	}
	
	.serach-txt {
		border: 0;
		width: 70%;
		height: 2.2rem;
		position: absolute;
		left: 4rem;
		outline: none;
		display: inline-block;
		border: 0 none;
		vertical-align: middle;
	}
	
	.message {
		position: absolute;
		right: 0.9rem;
		transform: translateY(-50%);
		-webkit-transform: translateY(-50%);
		width: 1.8rem;
		line-height: 1.3rem;
		display: inline-block;
		text-align: center;
		color: #aaa;
		border: 1px solid #aaa;
		border-radius: 6px;
		cursor: pointer;
	}
	
	.mint-swipe-items-wrap {
		padding-bottom: 62.8%;
	}
	
	.mint-swipe-item img {
		width: 100%;
	}
	
	.mint-swipe-indicator .is-active {
		background: red!important;
		opacity: 1;
	}
	
	aside {
		padding: 1rem;
	}
	
	.money {
		width: 100%;
		margin-bottom: 1rem;
	}
	
	.money img {
		width: 100%;
	}
	
	aside {
		background: #fff;
	}
	
	.aside-nav {
		text-align: center;
		color: #666;
		font-size: 1rem;
		overflow: hidden;
		display: flex;
	}
	
	.aside-nav li {
		flex: 1;
	}
	
	.aside-nav li a {
		text-decoration: none;
	}
	
	.aside-nav li img {
		display: block;
		margin: 0 auto;
		width: 2.8rem;
		height: 2.8rem
	}
	
	.aside-nav li span {
		display: block;
		color: #666;
		margin-top: 5px;
	}
	
	section h3 {
		padding: 1rem;
		line-height: 1;
		font-size: 1.3rem;
		text-align: left;
		font-weight: 400;
	}
	
	section i {
		display: inline-block;
		
		width: 1.2rem;
		height: 1.3rem;
		margin-right: 0.4rem;
	}
	
	section i img  {
		width: 100%;
	}
	section .main{
		background-color: #fff;
	}
	.areaimg{
		width: 100%;
	}
	.areabox{
		width: 100%;
		height: 100%;
		display: block;
		overflow-y:hidden;
		}
		
	.area-main{
	    width: 300%;
		padding: 1rem;
		padding-bottom: 1.5rem;
		display:block;
		overflow-x:scroll;
		overflow-y: hidden;
		text-align: left;
		height: 120%;
	}
	.areabox::-webkit-scrollbar {display: none;}
	.area-main li{
		width: 11%;
		margin-right: 6px;
		float: left;
		
	}
	.area-main li a{
		text-decoration: none;
	}
	.area-main li img{
		width: 100%;
	}
	.areatitle{
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
   
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: #565656;
	}
	.sale{
		
		color: #CCCCCC;
		display: block;
	}
	.price{
		width: 100%;
		color: #000;
		margin: 0.5rem 0;
		    font-size: 1rem;
	}
	.price span{
		color:#b81c22;
		font-size: 1.3rem;
	}
</style>
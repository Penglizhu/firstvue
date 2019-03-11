<template>
	
	<div id="cart">
		<ul class="nav">
  				<li><router-link to="/home" class="home" active-class="active1"></router-link></li>
  				<li><router-link to="/classify" class="classifycation" active-class="active2"></router-link></li>
  				<li><router-link to="/channel" class="channel" active-class="active3"></router-link></li>
  				<li><router-link to="/cart" class="cart" active-class="active4"></router-link></li>
  				<li><router-link to="/login" class="my" active-class="active5"></router-link></li>
  	    </ul>
		<header>
			<mt-header title="购物车" class="head">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</header>
		<section>
			<div class="cartnull">
				<div class="cartnull-main">
 					<p><img src="../../assets/img/null-car.png" alt=""></p>
				</div>
       			<p class="cartnull-foot">
       				<span>我的收藏</span>
       				<span>去逛逛</span>
       		    </p>
			</div>
			<div class="exit">登录 | 退出</div>

		</section>
		<footer>
				<ul>
					<li><a href=""><img src="../../assets/img/help.jpg" alt=""></a></li>
					<li><a href=""><img src="../../assets/img/d2.jpg" alt=""></a></li>
					<li><a href=""><img src="../../assets/img/weixin.jpg" alt=""></a></li>
					<li><a href=""><img src="../../assets/img/pcsite.jpg" alt=""></a></li>
				</ul>
				<div class="footernav"><h3>
            京ICP证100557号</h3></div>
		</footer>
	</div>
</template>

<script>
</script>

<style>
	#cart{
		position: relative;
    top: 0rem;
    margin-bottom: 4.25rem;
    max-width: 640px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    line-height: 1.5;
	
}
.cartnull{
	padding: 2rem;
}
.cartnull-main{
	width: 100%;
	height: 20em;
	border: 2px solid #d9d9d9;
}
.cartnull-main p{
	width: 12.5em;
    height: 5em;
    margin: 7em auto;
}
.cartnull-main p img{
	width: 100%;
}
.cartnull-foot{
	height: 3em;
    margin-top: 1em;
}
.cartnull-foot span{
	background-color: #f5f5f5;
	box-shadow: 1px 2px 3px #ececec;
	width: 48%;
    height: 98%;
    float: left;
    text-align: center;
    line-height: 3em;
    font-weight: 700;
}
.cartnull-foot span{

}
.exit{
	text-align: center;
    padding: 3.5em 0;
    font-size: 1.5em;
}
footer ul{
	
	display: inline-block;
    border-bottom: 1px solid #4c4d4d;
    border-top: 1px solid #4d4d4d;
    padding: 1.2em 0;
    list-style: none;
}
footer ul li{
	float: left;
}
footer ul li:nth-child(2) {
    margin-left: 2.8em;
    margin-right: 2.8em;
    }
    footer ul li:nth-child(3) {
   
    margin-right: 2.8em;
    }
 footer ul li a{
 	display: block;
 	width: 3.5em;
 }
 footer ul li img{
 	width: 100%;
 }
</style>
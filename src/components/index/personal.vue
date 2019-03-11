<template>
	<div id="personal">
		<ul class="nav clear">
			<li>
				<router-link to="/home" class="home" active-class="active1"></router-link>
			</li>
			<li>
				<router-link to="/classify" class="classifycation" active-class="active2"></router-link>
			</li>
			<li>
				<router-link to="/channel" class="channel" active-class="active3"></router-link>
			</li>
			<li>
				<router-link to="/cart" class="cart" active-class="active4"></router-link>
			</li>
			<li>
				<router-link to="/personal" class="my" active-class="active5"></router-link>
			</li>
		</ul>
		<header>
			<mt-header title="个人中心">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</header>
		<div class="info">
			<div class="clear infohead"><span></span></div>
			<div class="clear infosec">
				<img src="../../assets/img/H5-V0.jpg" class="general" />
				<p class="infouser">18307682579</p>
				<img src="../../assets/img/H5-NewV0.png" class="member" />
				<p class="infopass">设置登录密码</p>
			</div>
			<div class="clearfix infofoot">
				<ul>
					<li>积分:0</li>
					<li>余额:0.00</li>
					<li>成长值:0</li>
				</ul>
			</div>
		</div>
		<div class="order clear">
			<p>全部订单</p>
			<ul class="clearfix">
				<li><span class="made"></span><span>进行中</span></li>
				<li><span class="finish"></span><span>已完成</span></li>
				<li><span class="assess"></span><span>待评价</span></li>
				<li><span class="void"></span><span>无效</span></li>
			</ul>
		</div>
		<div class="section">
			<ul class="clearfix">
				<li><span class="chongzhi"></span><span>充值返现</span></li>
				<li><span class="siren"></span ><span>我的私人定制</span></li>
				<li><span class="wuliu"></span><span>物流查询</span></li>
				<li><span class="tuihuo"></span><span>退货记录</span></li>
				<li><span class="dizhi"></span><span>地址管理</span></li>
				<li><span class="lipin"></span><span>我的礼品卡</span></li>
				<li><span class="youhui"></span><span>我的优惠券</span></li>
				<li><span class="jifen"></span><span>我的积分</span></li>
				<li><span class="pinlun"></span><span>我的评论</span></li>
				<li><span class="tiwen"> </span><span>我的提问</span></li>
				<li><span class="jianyi"></span><span>投诉建议</span></li>
			</ul>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	
	#personal {
		background-color: #f0eff5;
		margin-bottom: 4.25rem;
	}
	
	.info {
		height: 17.8rem;
		background: url(../../assets/img/uc-topbgd.png) no-repeat center top;
		background-size: cover;
		text-align: center;
		color: #fff;
		line-height: 1.8;
	}
	
	.infohead span {
		background: url(../../assets/img/order-icon.png) no-repeat 0rem 0rem;
		display: block;
		margin: 0.8rem 0.8rem 0 0;
		width: 1.8rem;
		height: 2rem;
		background-size: 1.8rem 8rem;
		float: right;
	}
	
	.general {
		width: 6.5rem;
		height: 6.5rem;
		border-radius: 50%;
	}
	
	.member {
		display: block;
		margin: 0.4rem auto;
		width: 5rem;
		height: 1.5rem;
		background: url(../../assets/img/H5-NewV0.png) no-repeat center;
		background-size: cover;
	}
	
	.infopass {
		display: inline-block;
		color: #4C4C4C;
		font-size: 0.8rem;
		margin: 0 2rem;
		padding: 0rem 0.5rem;
		background-color: #fff;
		border-radius: 0.5rem;
	}
	
	.infofoot ul {
		display: flex;
	}
	
	.infofoot ul li {
		flex: 1;
	}
	
	.order {
		margin: 1rem 0;
		text-align: center;
		background-color: #fff;
	}
	
	.order p {
		position: relative;
		display: block;
		height: 3.4rem;
		padding: 0 0.9rem;
		color: #000;
		text-align: left;
		line-height: 3.4rem;
		border-bottom: 1px solid #f0eff5;
	}
	
	.order ul {
		display: flex;
	}
	
	.order ul li {
		flex: 1;
		padding: 1rem 0;
	}
	
	.order ul li span {
		display: block;
		margin-top: 4px;
		color: #000;
	}
	
	.order ul li span:first-of-type {
		margin: 0 auto;
		width: 1.8rem;
		height: 2rem;
		background: url(../../assets/img/uc-order-icon.png) no-repeat;
		background-size: 1.8rem 10rem;
	}
	
	.made {
		background-position: 0rem -2rem!important;
	}
	
	.finish {
		background-position: 0rem -4rem!important;
	}
	
	.assess {
		background-position: 0rem -8rem!important;
	}
	
	.void {
		background-position: 0rem -6rem!important;
	}
	
	.section {
		text-align: center;
		background-color: #fff;
	}
	
	.section ul li {
		box-sizing: border-box;
		float: left;
		width: 25%;
		padding: 1.5rem 0;
		border-left: 1px solid #f0eff5;
		border-bottom: 1px solid #f0eff5;
		color: #000;
	}
	
	.section ul li span:first-of-type {
		display: block;
		color: #000;
		margin: 0 auto;
		width: 3rem;
		height: 3rem;
		background: url(../../assets/img/uc-section-icon.png) no-repeat;
		background-size: 3rem 42rem;
	}
	
	.chongzhi {
		background-position: 0rem 0rem!important;
	}
	
	.siren {
		background-position: 0rem -3rem!important;
	}
	
	.wuliu {
		background-position: 0rem -36rem!important;
	}
	
	.tuihuo {
		background-position: 0rem -39rem!important;
	}
	
	.dizhi {
		background-position: 0rem -12rem!important;
	}
	
	.lipin {
		background-position: 0rem -6rem!important;
	}
	
	.youhui {
		background-position: 0rem -9rem!important;
	}
	
	.jifen {
		background-position: 0rem -21rem!important;
	}
	
	.pinlun {
		background-position: 0rem -15rem!important;
	}
	
	.tiwen {
		background-position: 0rem -18rem!important;
	}
	
	.jianyi {
		background-position: 0rem -24rem!important;
	}
</style>
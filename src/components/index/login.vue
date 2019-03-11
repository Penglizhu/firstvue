<template>
	<div id="login">
		<header>
			<mt-header title="登录">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>

			</mt-header>

		</header>
		<section>
			<ul class="signin">
				<li id="login1">普通登录</li>
				<li id="login2">快速登录</li>
			</ul>
			<div class="loginmain">
				<form method="post">

					<div class="loginsec">
						<div class="login01 current">
							<div class="loginred01 "></div>
							<input type="text" placeholder="点击输入手机号/Email" id="user" class="txt" />
							<input type="password" placeholder="请输入密码" id="pass" class="txt" />
						</div>
						<div class="login02 ">

							<div class="loginred02"></div>
							<div class="imagecode clear">
								<input type="text" placeholder="请输入图片验证码" id="imgcode" class="txt" />
								<img src="https://m.vancl.com/User/PhoneLoginVerityCode?r=1217459917" />
							</div>
							<div class="phonecode clear">
								<input type="text" placeholder="请输入手机号" id="phone" class="txt" />
								<button>获取动态密码</button>
							</div>
							<input type="password" placeholder="请输入手机登录密码" id="phonepass" class="txt" />
						</div>
						<p class="mistake">用户名或密码错误</p>

						<button type="button" class="btn">登&nbsp;&nbsp;录</button>

						<p class="clearfix">
							<span class="signup"><router-link to="/register">免费注册  ></router-link></span>
							<span class="find"><router-link to="/home">手机账号取回密码  ></router-link></span>
						</p>
						<div class="loginfoot">
							<p>使用其他账号登录</p>
							<ul>
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						</div>
					</div>
				</form>

			</div>
		</section>

		<!--<footer></footer>-->
	</div>
</template>

<script>
	export default {　　　　
		mounted() {　　
			$('#login1').click(function(event) {
				$('.login01').addClass('current');
				$('.login02').removeClass('current');
			})
			$('#login2').click(function(event) {
				$('.login02').addClass('current');
				$('.login01').removeClass('current');
			})
			$('.btn').click(function(event) {
				console.log('111')
				$.ajax({
					type: "post",
					url: "http://localhost:8888/signin",
					dataType: 'json',
					data: {
						user: $("#user").val(),
						pass: $("#pass").val(),
					},
					success: function(res) {
						if(res.ok) {
							location.href = "http://localhost:8282/#/personal"
						} else {
							$(".mistake").css('display', 'block')
						}
					}
				})
			});
		}

	}
</script>
<style>
	body {
		background: #fff;
	}
	
	a {
		text-decoration: none;
		color: #4c4c4c;
	}
	/*	/*
	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}*/
	
	footer {
		list-style-type: none;
		width: 100%;
		max-width: 640px;
		height: 4.4rem;
		background-color: #fff;
		z-index: 999;
		bottom: 0;
		position: fixed;
		overflow: hidden;
	}
	
	.signin {
		width: 100%;
		position: relative;
		line-height: 2.6em;
		font-size: 1.4rem;
		color: #666;
		list-style: none;
		overflow: hidden;
	}
	
	.signin li {
		float: left;
		width: 50%;
	}
	
	.login01,
	.login02 {
		display: none;
	}
	
	.loginred01 {
		display: block;
		width: 44%;
		margin-left: 1%;
		height: 3px;
		text-align: center;
		background-color: #B81B22;
	}
	
	.loginred02 {
		display: block;
		width: 44%;
		margin-left: 56%;
		height: 3px;
		text-align: center;
		background-color: #B81B22;
	}
	
	.loginsec {
		padding: 0 2em 0 2em;
	}
	
	.txt {
		box-sizing: border-box;
		border: 0;
		font-size: 1.2rem;
		display: inline-block;
		background: #f5f5f5;
		color: #b5b5b5;
		padding: 0.8em;
		outline: none;
	}
	
	#user {
		width: 100%;
		padding-bottom: 1rem;
		margin-top: 2.8rem;
	}
	
	#pass {
		width: 100%;
		padding-bottom: 1rem;
		margin-top: 2rem;
	}
	
	.imagecode {
		width: 100%;
		padding-bottom: 1rem;
		margin-top: 2.8rem;
	}
	
	#imgcode,
	#phone {
		width: 14em;
		float: left;
	}
	
	.imagecode img {
		width: 7.8em;
		height: 3.2em;
		float: right;
	}
	
	.phonecode {
		width: 100%;
		padding-bottom: 1rem;
		margin-top: 2rem;
	}
	
	.phonecode button {
		width: 7.6em;
		height: 2.6em;
		vertical-align: middle;
		padding: 0px;
		border-radius: 4px;
		text-align: center;
		float: right;
		color: #b71c22;
		font-size: 1.2em;
		background: #fff;
		border: 2px solid #b2b2b2;
	}
	
	#phonepass {
		width: 100%;
		margin-top: 2rem;
		padding-bottom: 1rem;
	}
	
	.btn {
		width: 100%;
		display: block;
		border: 0;
		outline: none;
		background: #b81b22;
		color: #fff;
		border-radius: 2px;
		padding: 0.5em 0;
		font-size: 1.7rem;
		text-align: center;
		margin-top: 2.8rem;
	}
	
	.current {
		display: block;
	}
	
	.loginsec p {
		padding: 0.8rem 0;
	}
	
	.loginsec .signup {
		float: left;
	}
	
	.loginsec .find {
		float: right;
	}
	
	.loginfoot p {
		margin-top: 1.4rem;
		text-align: left;
	}
	
	.loginfoot ul {
		list-style: none;
	}
	
	.mistake {
		display: none;
		font-size: 1.2rem;
		line-height: 1em;
		color: #e8270c;
		text-align: center;
	}
</style>
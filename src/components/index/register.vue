<template>
	<div id="register">
		<header>
			<mt-header title="注册">
				<router-link to="/login" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</header>
		<section>
			<div class="main">

				<div class="regitxt  clear">
					<input type="text" placeholder="请输入图片验证码" id="regicode" class="txt" />
					<img src="https://m.vancl.com/User/PhoneLoginVerityCode?r=1217459917" />
				</div>
				<div class="regitxt  clear">
					<input type="text" placeholder="请输入手机号" id="regiphone" class="txt" />
					<button>获取验证码</button>
				</div>
				<div class="regitxt clear">
					<input type="text" placeholder="请输入手机验证码" id="phonecode" class="txt" />
				</div>
				<div class="regitxt clear">
					<input type="password" placeholder="密码:6-16位字母，数字，特殊字符" id="regipass" class="txt" />
				</div>
				<p class="regiwrong">用户名已存在</p>
				<p class="regiobey">注册账号即表示同意遵守<span>《VANCL凡客服务条款》</span></p>
				<button type="button" class="btn">点击注册</button>
			</div>
		</section>
	</div>
</template>

<script>

	export default {　　　　
		mounted() {　　
			
			$('.btn').click(function(event) {
				console.log('222')
				$.ajax({
					type: "post",
					url: "http://localhost:8888/register",
					dataType: 'json',
					data: {
						user: $("#regiphone").val(),
						pass: $("#regipass").val()
					},
					success: function(res) {
						if(res.ok) {
							location.href = "http://localhost:8282/#/login"
						} else {
							$(".regiwrong").css('display', 'block')
						}
					}
				})
			});
		}

	}

</script>

<style>
	body {
		background-color: #fff;
		;
	}
	
	section .main {
		padding: 2.5em 2em;
	}
	
	.regitxt {
		padding-bottom: 1rem;
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
	
	#regicode,
	#regiphone {
		width: 14em;
		float: left;
	}
	
	.regitxt img {
		width: 7.8em;
		height: 3.2em;
		float: right;
	}
	
	.regitxt button {
		/*width: 7.6em;*/
		/*height: 2.6em;*/
		vertical-align: middle;
		color: #b71c22;
		font-size: 1.2em;
		background: #fff;
		border: 2px solid #b2b2b2;
		padding: .75em 1.2em;
		border-radius: 4px;
		text-align: center;
		float: right;
		line-height: 1.5;
	}
	
	#phonecode,
	#regipass {
		width: 100%;
	}
	
	.regiobey {
		margin-top: 3rem;
		margin-bottom: 1.5rem;
		color: #b3b3b3;
		text-align: center;
		line-height: 1.5;
	}
	
	.regiobey  span {
		color: #4c4c4c;
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
		font-size: 1.6rem;
		text-align: center;
		line-height: 1.5;
	}
	.regiwrong{
		display: none;
		font-size: 1.2rem;
		line-height: 1em;
		color: #e8270c;
		text-align: center;
	}
</style>
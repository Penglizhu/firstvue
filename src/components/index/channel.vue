<template>
	
	<div id="channel">
		  	<ul class="nav">
  		<li><router-link to="/home" class="home" active-class="active1"></router-link></li>
  		<li><router-link to="/classify" class="classifycation" active-class="active2"></router-link></li>
  		<li><router-link to="/channel" class="channel" active-class="active3"></router-link></li>
  		<li><router-link to="/cart" class="cart" active-class="active4"></router-link></li>
  		<li><router-link to="/login" class="my" active-class="active5"></router-link></li>
  	</ul>
		<header>
			<mt-header title="频道" class="head">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</header>
		<section>
			<ul class="image">
				
				<li v-for="(v,i) in channeldata"><img :src="v"></li>
			</ul>
		</section>
	</div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {

				channeldata: ['./static/img/classify/1.jpg', 
				'./static/img/classify/2.jpg', 
				'./static/img/classify/3.jpg', 
				'./static/img/classify/4.jpg', 
				'./static/img/classify/5.jpg',
				'./static/img/classify/6.jpg',
				'./static/img/classify/7.jpg',
				'./static/img/classify/8.jpg', 
				'./static/img/classify/9.jpg',
				'./static/img/classify/10.jpg',
				'./static/img/classify/11.jpg']
			}
		},
		methods: {

		}
	}
</script>

<style>
.channel{
	max-width: 640px;
	margin: 0 auto;
	background-color: #fff;
}

	.image{
		background: #fff;
	}
.image li{
	padding-top: 2px;
	margin-bottom: 2px;
}
.image img{
	width: 100%;
}
</style>
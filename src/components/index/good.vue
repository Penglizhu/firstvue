<template>
	<div id="good">
		<header>
			<mt-header title="商品详情" class="head">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
			</mt-header>
		</header>
		
			
		<div class="good-img">
			<img :src="msg.imgsrc" class="good-image"/>
	   </div>
	   <div class="good-title">
	   	 <p class="good-tit">{{msg.title}}</p>
	   	 <p><span class="good-sale">{{msg.sale}}</span><span class="good-price">{{msg.price}}元</span></p>
	   	 <p>充100返100，点击充值</p>
	   	 <p>充值购买更优惠</p>
	   	<p class="postage"><span >免邮</span>全场购物满199免运费</p>
	   	 
	   </div>
	   <div class="good-size">
	   	<span>选择 颜色/尺码</span>
	   	<span>></span>
	   </div>
	  <div class="hr1"></div>
	   <ul class="good-des">
	   	<li class="active" >商品详情</li>
	   	<li>评论</li>
	   	<li>咨询</li>
	   </ul>
	   <div class="hr2"></div>
	   <div class="good-img-main">
	   <img :src="v" v-for="(v,i) in msg.goodimg"/>
	   </div>
	</div>
</template>

<script>
	import datas from '../../assets/home.json'　
	export default{
		data(){
			return{
			   n:0,
			    lis:'',
			    msg:''
			}
		},
		mounted(){
			 window.scrollTo(0,0);
			this.n=this.$route.params.id;
			this.lis=datas.areadata;
		$('.good-des li').click(function(event){
		$(this).addClass('active').siblings().removeClass('active')
	})
	
	},
	 
	watch:{
		n(){
			for(var i=0;i<this.lis.length;i++){
				for (var j=0;j<this.lis[i].areashirt.length;j++) {
					if(this.n==this.lis[i].areashirt[j].id){
						this.msg=this.lis[i].areashirt[j]
					}
				}
			}
		}
	}
	}
	
	
</script>

<style>
	#good{
	background: #FFFFFF;
}
	.good-image{
		width: 20rem;
		
		margin: 0 auto;
	}
	.good-title{
		padding: 0.5rem 2rem;
		line-height: 2.2rem;
		color: #C8161E;
		font-size: 1.2em;
		text-align: left;
	}
	.good-tit{
		color: #4c4c4c;
   }
	.good-sale{
	text-decoration: line-through;
    margin-right: 0.5em;
	}
	.good-price{
		font-size: 1.5rem;
	}
	.postage{
		margin: 0.3rem;
		padding: 0.7rem 0;
		color: #717070;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
	}
	.postage span{
		color: #fff;
    border-radius: 0.15em;
    margin-right: 5px;
    padding: 0.1em;
    background: #b81c22;
	}
	.good-size{
		background: #f5f5f5;
		cursor: pointer;
		margin: 0.2rem 2rem 0.7rem;
		padding: 0.8rem;
		text-align: left;
    font-size: 1.2em;
    color: #4c4c4c;
   /* border-bottom: 1px solid #ccc;*/
	}
	.hr1{
		margin: 0 2em;
		display: block;
		height: 1px;
		border-bottom:1px solid #ccc ;
	}
	.good-des{
		display: flex;
		list-style: none;
		margin: 1.5rem 0;
		font-size: 1.2em;
        color: #4c4c4c;
        
	}
	.good-des li{
		flex: 1;
	}
	.active{
		color:#c8161e;
	}
	.hr2{
		    border-bottom: 1px solid #666;
    height: 1px;
	}
	.good-img-main img{
		width: 100%;
	}
</style>

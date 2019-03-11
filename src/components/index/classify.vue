<template>
	
	<div id="classify">
		  	<ul class="nav">
  		<li><router-link to="/home" class="home" active-class="active1"></router-link></li>
  		<li><router-link to="/classify" class="classifycation" active-class="active2"></router-link></li>
  		<li><router-link to="/channel" class="channel" active-class="active3"></router-link></li>
  		<li><router-link to="/cart" class="cart" active-class="active4"></router-link></li>
  		<li><router-link to="/login" class="my" active-class="active5"></router-link></li>
  	</ul>
		<header>
			<mt-header title="分类">
				<router-link to="/" slot="left">
					<mt-button icon="back" ></mt-button>
				</router-link>
				
			</mt-header>
        </header>
        <section class="clear">
        	<ul class="title">
        		<li v-for="(v,i) in classdata" :class="{current:selected==i}" @click="change(i)">{{v.title}}</li>
        	</ul>
        	<div class="txt" v-for="(v,i) in classdata" :class="{show:selected==i}" >
				<ul class="clear classcon">
					<li v-for="(a,i) in v.con" ><img :src="a.imgsrc" class="classimg"/> <span class="classtips">{{a.tips}}</span></li>
				</ul>
			</div>
        </section>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				selected:"0",
				classdata:[
						{
							'title':'推荐',
							'con':[
							{'tips':'吉国武',
							'imgsrc':'./static/img/second/01.jpg'
						},
						{'tips':'T恤',
							'imgsrc':'./static/img/second/02.jpg'
						},
						{'tips':'休闲衬衫',
							'imgsrc':'./static/img/second/03.jpg'
						},
						{'tips':'卫衣',
							'imgsrc':'./static/img/second/04.jpg'
						},
						{'tips':'水柔棉',
							'imgsrc':'./static/img/second/05.jpg'
						},
						{'tips':'牛津纺',
							'imgsrc':'./static/img/second/06.jpg'
						},
						{'tips':'夹克',
							'imgsrc':'./static/img/second/07.jpg'
						},
						{'tips':'针织衫',
							'imgsrc':'./static/img/second/08.jpg'
						},
						{'tips':'外套',
							'imgsrc':'./static/img/second/09.jpg'
						},
						{'tips':'童装',
							'imgsrc':'./static/img/second/10.jpg'
						},
						{'tips':'大衣',
							'imgsrc':'./static/img/second/101.jpg'
						},
						{'tips':'棉服',
							'imgsrc':'./static/img/second/102.jpg'
						},
						{'tips':'羽绒服',
							'imgsrc':'./static/img/second/103.jpg'
						},
						{'tips':'休闲裤',
							'imgsrc':'./static/img/second/104.jpg'
						},
						{'tips':'牛仔裤',
							'imgsrc':'./static/img/second/105.jpg'
						},
						{'tips':'帆布鞋',
							'imgsrc':'./static/img/second/106.jpg'
						},
						{'tips':'复古跑',
							'imgsrc':'./static/img/second/107.jpg'
						},
						{'tips':'拖鞋',
							'imgsrc':'./static/img/second/108.jpg'
						}
							]
						},
						{
							'title':'男装',
							'con':[
							{'tips':'吉国武',
							'imgsrc':'./static/img/second/01.jpg'
						},
						{'tips':'T恤',
							'imgsrc':'./static/img/second/02.jpg'
						},
						{'tips':'休闲衬衫',
							'imgsrc':'./static/img/second/03.jpg'
						},
						{'tips':'卫衣',
							'imgsrc':'./static/img/second/04.jpg'
						},
						{'tips':'水柔棉',
							'imgsrc':'./static/img/second/05.jpg'
						},
						{'tips':'牛津纺',
							'imgsrc':'./static/img/second/06.jpg'
						},
						{'tips':'夹克',
							'imgsrc':'./static/img/second/07.jpg'
						},
						{'tips':'针织衫',
							'imgsrc':'./static/img/second/08.jpg'
						},
						{'tips':'外套',
							'imgsrc':'./static/img/second/09.jpg'
						},
						{'tips':'童装',
							'imgsrc':'./static/img/second/10.jpg'
						},
						{'tips':'大衣',
							'imgsrc':'./static/img/second/101.jpg'
						},
						{'tips':'棉服',
							'imgsrc':'./static/img/second/102.jpg'
						},
						{'tips':'羽绒服',
							'imgsrc':'./static/img/second/103.jpg'
						},
						{'tips':'休闲裤',
							'imgsrc':'./static/img/second/104.jpg'
						},
						{'tips':'牛仔裤',
							'imgsrc':'./static/img/second/105.jpg'
						},
						{'tips':'帆布鞋',
							'imgsrc':'./static/img/second/106.jpg'
						},
						{'tips':'复古跑',
							'imgsrc':'./static/img/second/107.jpg'
						},
						{'tips':'拖鞋',
							'imgsrc':'./static/img/second/108.jpg'
						}
							]
						},
						{
							'title':'女装',
							'con':[
							{'tips':'吉国武',
							'imgsrc':'./static/img/second/01.jpg'
						},
						{'tips':'T恤',
							'imgsrc':'./static/img/second/02.jpg'
						},
						{'tips':'休闲衬衫',
							'imgsrc':'./static/img/second/03.jpg'
						},
						{'tips':'卫衣',
							'imgsrc':'./static/img/second/04.jpg'
						},
						{'tips':'水柔棉',
							'imgsrc':'./static/img/second/05.jpg'
						},
						{'tips':'牛津纺',
							'imgsrc':'./static/img/second/06.jpg'
						},
						{'tips':'夹克',
							'imgsrc':'./static/img/second/07.jpg'
						},
						{'tips':'针织衫',
							'imgsrc':'./static/img/second/08.jpg'
						},
						{'tips':'外套',
							'imgsrc':'./static/img/second/09.jpg'
						},
						{'tips':'童装',
							'imgsrc':'./static/img/second/10.jpg'
						},
						{'tips':'大衣',
							'imgsrc':'./static/img/second/101.jpg'
						},
						{'tips':'棉服',
							'imgsrc':'./static/img/second/102.jpg'
						},
						{'tips':'羽绒服',
							'imgsrc':'./static/img/second/103.jpg'
						},
						{'tips':'休闲裤',
							'imgsrc':'./static/img/second/104.jpg'
						},
						{'tips':'牛仔裤',
							'imgsrc':'./static/img/second/105.jpg'
						},
						{'tips':'帆布鞋',
							'imgsrc':'./static/img/second/106.jpg'
						},
						{'tips':'复古跑',
							'imgsrc':'./static/img/second/107.jpg'
						},
						{'tips':'拖鞋',
							'imgsrc':'./static/img/second/108.jpg'
						}
							]
						},
						{
							'title':'男鞋',
							'con':[
							{'tips':'吉国武',
							'imgsrc':'./static/img/second/01.jpg'
						},
						{'tips':'T恤',
							'imgsrc':'./static/img/second/02.jpg'
						},
						{'tips':'休闲衬衫',
							'imgsrc':'./static/img/second/03.jpg'
						},
						{'tips':'卫衣',
							'imgsrc':'./static/img/second/04.jpg'
						},
						{'tips':'水柔棉',
							'imgsrc':'./static/img/second/05.jpg'
						},
						{'tips':'牛津纺',
							'imgsrc':'./static/img/second/06.jpg'
						},
						{'tips':'夹克',
							'imgsrc':'./static/img/second/07.jpg'
						},
						{'tips':'针织衫',
							'imgsrc':'./static/img/second/08.jpg'
						},
						{'tips':'外套',
							'imgsrc':'./static/img/second/09.jpg'
						},
						{'tips':'童装',
							'imgsrc':'./static/img/second/10.jpg'
						},
						{'tips':'大衣',
							'imgsrc':'./static/img/second/101.jpg'
						},
						{'tips':'棉服',
							'imgsrc':'./static/img/second/102.jpg'
						},
						{'tips':'羽绒服',
							'imgsrc':'./static/img/second/103.jpg'
						},
						{'tips':'休闲裤',
							'imgsrc':'./static/img/second/104.jpg'
						},
						{'tips':'牛仔裤',
							'imgsrc':'./static/img/second/105.jpg'
						},
						{'tips':'帆布鞋',
							'imgsrc':'./static/img/second/106.jpg'
						},
						{'tips':'复古跑',
							'imgsrc':'./static/img/second/107.jpg'
						},
						{'tips':'拖鞋',
							'imgsrc':'./static/img/second/108.jpg'
						}
							]
						},
						{
							'title':'女鞋',
							'con':'这是游戏内容'
						}
						,
						{
							'title':'袜品',
							'con':'这是游戏内容'
						},
						{
							'title':'家居',
							'con':'这是游戏内容'
						},
						{
							'title':'童装',
							'con':'这是游戏内容'
						},
						{
							'title':'内衣',
							'con':'这是游戏内容'
						}

					]
			}
		},
		methods:{
					change(i){
						this.selected=i
					}
				}
	}
</script>

<style>
	.classify {
		max-width: 640px;
		margin: 0 auto;
		overflow: hidden;
		min-height: 100%;
		background-color: #e5e5e5;
	}
	
	section{
		margin-bottom: 4.25rem;
	}
	.title{
		float: left;
        width: 25%;
		height: 100%;
		
		
	}
	.title li{
	display: block;
    height: 3rem;
    line-height: 3rem;
    border-bottom: 1px solid #fff;
    cursor: pointer;
	}
	.txt{
	width: 75%;
	min-height: 548px;
    float: right;
    display: none;
    background-color: #fff;
	}
	.current{
		background: #fff;
		color: #CC0000;
	}
	.show{
		display: block;
	}
	.classcon{
		width: 100%;
	}
	.classcon li{
		float: left;
		width: 33.3%;
		box-sizing: border-box;
		text-align: center;
    overflow: hidden;
    cursor: pointer;
	}
	.classimg{
		width: 75%;
		display: block;
    margin: 0.5rem auto;
	}
	.classtips{
		    display: block;
    color: #999;
	}
</style>
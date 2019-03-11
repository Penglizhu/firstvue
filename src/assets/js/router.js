import vueRouter from "vue-router"
import home from "../../components/index/home.vue"
import classify from "../../components/index/classify.vue"
import channel from "../../components/index/channel.vue"
import cart from "../../components/index/cart.vue"
import my from "../../components/index/my.vue"
import login from "../../components/index/login.vue"
import good from "../../components/index/good.vue"
import register from "../../components/index/register.vue"
import personal from "../../components/index/personal.vue"
export default new vueRouter({
	routes:[
		{
			path:'/home',component:home,
			
		},
		{
			path:'/classify',component:classify
		},
		{
			path:'/channel',component:channel
		},
		{
			path:'/cart',component:cart
		},
		{ 
			path:'/my',component:my
		},
		{
			path:'/login',component:login
		},
		{
			path:'/good/:id',
			component:good
		}
		,
		{
			path:'/',component:home
		},
		{
			path:'/register',component:register
		},
		{
			path:'/personal',component:personal
		}

	]
})

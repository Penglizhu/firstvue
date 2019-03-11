import $ from 'jquery'
import '../node_modules/mint-ui/lib/style.css'
import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './assets/js/router.js'
import Mint from 'mint-ui';
Vue.use(Mint);
Vue.use(vueRouter)
new Vue({
  el: '#app',

  render: h => h(App),
  // 把组件绑定到元素上

	router:router
})

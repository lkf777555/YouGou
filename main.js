import App from './App'
import {
	$http
} from '@escook/request-miniprogram' // 引入第三方包

uni.$http = $http //挂载到顶级对象上

$http.baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1' // 配置请求根路径
// 请求开始之前做一些事情

$http.beforeRequest = function(options) {
	uni.showLoading({
		title: '数据加载中',
	})
}

// 请求完成之后做一些事情
$http.afterRequest = function() {
	wx.hideLoading()
}

// 封装弹框的方法
uni.$showMsg = function(title = "数据请求失败", duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none'
	})
}



// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif

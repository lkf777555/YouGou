
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/Home/Home","pages/Cate/Cate","pages/Cart/Cart","pages/My/My","subpkg/goods_detail/goods_detail","subpkg/goods_list/goods_list"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"优购商城","navigationBarBackgroundColor":"#C00000","backgroundColor":"#FFFFFF"},"tabBar":{"selectedColor":"#C00000","list":[{"pagePath":"pages/Home/Home","text":"首页","iconPath":"static/check/home.png","selectedIconPath":"static/checked/home.png"},{"pagePath":"pages/Cate/Cate","text":"分类","iconPath":"static/check/menu.png","selectedIconPath":"static/checked/menu.png"},{"pagePath":"pages/Cart/Cart","text":"购物车","iconPath":"static/check/cart.png","selectedIconPath":"static/checked/cart.png"},{"pagePath":"pages/My/My","text":"我的","iconPath":"static/check/my.png","selectedIconPath":"static/checked/my.png"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"YouGou","compilerVersion":"3.5.3","entryPagePath":"pages/Home/Home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/Home/Home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false}},{"path":"/pages/Cate/Cate","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"分类","enablePullDownRefresh":false}},{"path":"/pages/Cart/Cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"购物车","enablePullDownRefresh":false}},{"path":"/pages/My/My","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","enablePullDownRefresh":false}},{"path":"/subpkg/goods_detail/goods_detail","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/subpkg/goods_list/goods_list","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});

(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab_wd/wdpm"],{1427:function(t,e,n){"use strict";n.r(e);var o=n("7365"),r=n("59a9");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("9e19");var i=n("2877"),a=Object(i["a"])(r["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},"59a9":function(t,e,n){"use strict";n.r(e);var o=n("c7d1"),r=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=r.a},7365:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r})},9962:function(t,e,n){"use strict";(function(t){n("25b1"),n("921b");o(n("66fd"));var e=o(n("1427"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9e19":function(t,e,n){"use strict";var o=n("fe6f"),r=n.n(o);r.a},c7d1:function(t,e,n){"use strict";(function(t,n,o){function r(t){return a(t)||i(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function a(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{info:[],user:{},img_url:"".concat(this.img_url),user_type:"",is_more:!0,current_page:1}},onShow:function(){var e=t.isLogin();e?(this.user_token=e.user_token,this.user_type=e.user_type,this.get_info()):n.showModal({title:"提示",content:"请先登录吧！",showCancel:!0,success:function(t){t.confirm?n.navigateTo({url:"../login/login"}):t.cancel&&n.showTabBar({url:"../home_page/home_page"})}})},onPullDownRefresh:function(){this.is_more=!0,this.current_page=1,this.get_info(),setTimeout(function(){n.stopPullDownRefresh()},1e3)},onReachBottom:function(){this.is_more&&this.get_more()},methods:{get_info:function(){console.log(o(this.user_token," at pages\\tab_wd\\wdpm.vue:108"));var t=this;t.req.request("/user/myRank",{page:1,token:t.user_token},"POST",function(e){e.data.length<10&&(t.is_more=!1),t.user=e.obj,t.info=e.data})},get_more:function(){var t=this;this.current_page++,this.req.request("/user/myRank",{page:this.current_page,token:this.user_token},"POST",function(e){e.data.length<10&&(t.is_more=!1),t.info=[].concat(r(t.info),r(e.data))})}}};e.default=s}).call(this,n("c8ba"),n("6e42")["default"],n("0de9")["default"])},fe6f:function(t,e,n){}},[["9962","common/runtime","common/vendor"]]]);
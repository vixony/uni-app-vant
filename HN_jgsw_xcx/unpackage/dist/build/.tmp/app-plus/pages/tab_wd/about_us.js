(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tab_wd/about_us"],{"1d03":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{version:""}},onShow:function(){this.version=plus.runtime.version},methods:{check_version:function(n){var e=0;t.getSystemInfo({success:function(t){"ios"==t.platform&&(e=1)}}),t.request({url:"http://27.50.132.78:8083/app/bxApp/version/version_update",method:"POST",data:{type:e,version:plus.runtime.version},header:{"content-type":"application/x-www-form-urlencoded;charset=utf-8"},success:function(n){1===n.data.code?t.showModal({title:"更新提示",showCancel:!1,content:n.data.data.note,success:function(t){t.confirm&&plus.runtime.openURL("http://27.50.132.78:8083"+n.data.data.path)}}):t.showModal({title:"暂无更多",showCancel:!1,content:"已是最新版本！",success:function(t){}})}})}}};n.default=e}).call(this,e("6e42")["default"])},"439d":function(t,n,e){"use strict";e.r(n);var o=e("4b05"),u=e("4778");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);var c=e("2877"),r=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},4778:function(t,n,e){"use strict";e.r(n);var o=e("1d03"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a},"4b05":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return u})},cc55:function(t,n,e){"use strict";(function(t){e("25b1"),e("921b");o(e("66fd"));var n=o(e("439d"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["cc55","common/runtime","common/vendor"]]]);
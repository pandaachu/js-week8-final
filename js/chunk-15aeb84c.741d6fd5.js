(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15aeb84c"],{2241:function(t,a,s){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"logo__icon"},[s("div",{staticClass:"logo__icon__line-wrap"},[s("div",{staticClass:"logo__icon__line"}),s("div",{staticClass:"logo__icon__line"}),s("div",{staticClass:"logo__icon__line"}),s("div",{staticClass:"logo__icon__line"})])])}],i=s("2877"),o={},c=Object(i["a"])(o,n,e,!1,null,null,null);a["a"]=c.exports},"9edf":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"admin"},[s("div",{staticClass:"bg-white sticky-top"},[s("div",{staticClass:"container"},[s("nav",{staticClass:"navbar px-0 navbar-expand-lg navbar-light bg-white d-flex justify-content-between"},[s("router-link",{staticClass:"logo navbar-brand position-absolute text-secondary d-flex m-0",attrs:{to:"/admin/",href:"#"}},[s("Logo",{staticClass:"mr-3"}),t._v(" FOREST ")],1),t._m(0),s("div",{staticClass:"collapse navbar-collapse bg-white custom-header-md-open",attrs:{id:"navbarNavAdimn"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link pl-0",attrs:{to:"/admin/products"}},[t._v("產品列表 "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[t._v("訂單列表")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/storages"}},[t._v("圖片管理")])],1)])]),s("div",[s("button",{staticClass:"btn btn-outline-primary btn-block",attrs:{type:"button"},on:{click:t.signout}},[t._v(" 登出 ")])])],1)])]),s("div",{staticClass:"container"},[t.checkSuccess?s("router-view"):t._e()],1)])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAdimn","aria-controls":"navbarNavAdimn","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],i=(s("ac1f"),s("5319"),s("2241")),o={name:"Dashboard",components:{Logo:i["a"]},data:function(){return{token:"",checkSuccess:!1,messages:[{name:"失敗",content:"回到登入畫面"}]}},methods:{checkLogin:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");var a="".concat("https://course-ec-api.hexschool.io/api","/auth/check");this.$http.post(a,{api_token:this.token}).then((function(a){t.checkSuccess=!0,t.$http.defaults.headers.common.Authorization="Bearer ".concat(t.token)})).catch((function(a){console.log(a.response),t.$bus.$emit("push-messages",t.messages[0]),$(".l-toast").toast("show"),t.$router.push("/admin/login")}))},signout:function(){this.$router.push("/admin/login"),document.cookie="hexToken=; expires=;"}},created:function(){this.checkLogin()}},c=o,l=s("2877"),r=Object(l["a"])(c,n,e,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-15aeb84c.741d6fd5.js.map
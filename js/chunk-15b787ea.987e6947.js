(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15b787ea"],{1297:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"user"},[s("Navbar"),s("router-view"),s("Footer")],1)},n=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"l-navbar bg-primary--t50 sticky-top"},[s("div",{staticClass:"container"},[s("nav",{staticClass:"navbar navbar-dark px-0 navbar-expand-lg"},[s("router-link",{staticClass:"logo navbar-brand position-absolute text-secondary d-flex m-0",attrs:{to:"/"}},[s("Logo",{staticClass:"mr-3"}),t._v(" FOREST ")],1),t._m(0),s("div",{staticClass:"collapse navbar-collapse navbar-collapse-bg custom-header-md-open",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav  pl-3 pl-lg-0"},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link pl-0 text-secondary font-m letter-spacing-xl",attrs:{to:"/"}},[t._v("首頁 "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-secondary font-m letter-spacing-xl",attrs:{to:"/about"}},[t._v("關於")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-secondary font-m letter-spacing-xl",attrs:{to:"/products"}},[t._v("產品列表")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-secondary font-m letter-spacing-xl",attrs:{to:"/admin/login"}},[t._v("登入")])],1)])]),s("div",{staticClass:"d-flex"},[s("router-link",{staticClass:"cartIcon text-secondary",attrs:{to:"/cart"}},[s("i",{staticClass:"fas fa-shopping-cart"}),t.carts.length?s("span",{staticClass:"badge badge-pill badge-danger",staticStyle:{transform:"translateX(-9px) translateY(4px)"}},[t._v(t._s(t.carts.length)+" ")]):t._e()])],1)],1)])])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",staticStyle:{focus:"outline: 0"},attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],r=(s("99af"),s("2241")),c={components:{Logo:r["a"]},data:function(){return{carts:[]}},methods:{getCart:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("289038e7-cea7-4a49-afd4-86ec766c3f7f","/ec/shopping");this.$http.get(a).then((function(a){t.carts=a.data.data,t.isLoading=!1}))}},created:function(){var t=this;this.getCart(),this.$bus.$on("get-cart",(function(){$(".cartIcon").tooltip("show"),t.getCart()})),$(".cartIcon").tooltip("hide")},beforeDestroy:function(){this.$bus.$off("get-cart")}},o=c,v=s("2877"),u=Object(v["a"])(o,i,l,!1,null,null,null),d=u.exports,f=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"bg-primary"},[s("div",{staticClass:"container"},[s("div",{staticClass:"d-flex align-items-center justify-content-between text-white py-4"},[s("p",{staticClass:"mb-0 font-weight-lighter text-secondary font-m"},[t._v("© 2020 Forest All Rights Reserved.")]),s("ul",{staticClass:"d-flex list-unstyled mb-0 h4"},[s("li",[s("a",{staticClass:"text-secondary mx-3",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-facebook"})])]),s("li",[s("a",{staticClass:"text-secondary mx-3",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-instagram"})])]),s("li",[s("a",{staticClass:"text-secondary ml-3",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-line"})])])])])])])}],g={},_=Object(v["a"])(g,f,p,!1,null,null,null),b=_.exports,C={name:"Shop",components:{Navbar:d,Footer:b}},h=C,m=Object(v["a"])(h,e,n,!1,null,null,null);a["default"]=m.exports},2241:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"logo__icon"},[s("div",{staticClass:"logo__icon__line-wrap"},[s("div",{staticClass:"logo__icon__line"}),s("div",{staticClass:"logo__icon__line"}),s("div",{staticClass:"logo__icon__line"}),s("div",{staticClass:"logo__icon__line"})])])}],i=s("2877"),l={},r=Object(i["a"])(l,e,n,!1,null,null,null);a["a"]=r.exports}}]);
//# sourceMappingURL=chunk-15b787ea.987e6947.js.map
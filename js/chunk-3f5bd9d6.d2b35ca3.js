(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f5bd9d6"],{1799:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"d-flex justify-content-center"},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},s=[],n={data:function(){return{imageUrl:[],filePath:""}},props:["pages"],methods:{updatePage:function(t){this.$emit("update",t)}}},o=n,r=(a("786b"),a("2877")),c=Object(r["a"])(o,i,s,!1,null,"4c6bce7a",null);e["a"]=c.exports},"315c":function(t,e,a){},"786b":function(t,e,a){"use strict";var i=a("315c"),s=a.n(i);s.a},"7bda":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"l-background"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"l-products container text-light mt-5"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"input-group col-10 col-md-5"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.input.category,expression:"input.category"}],staticClass:"form-control btn btn-secondary text-white",staticStyle:{width:"35%"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.input,"category",e.target.multiple?a:a[0])}}},[a("option",[t._v("全部")]),a("option",[t._v("香精油")]),a("option",[t._v("蠟燭")])]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.input.title,expression:"input.title",modifiers:{trim:!0}}],staticClass:"form-control btn btn-outline-secondary",staticStyle:{width:"65%"},attrs:{type:"text",placeholder:"搜尋"},domProps:{value:t.input.title},on:{input:function(e){e.target.composing||t.$set(t.input,"title",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"row mt-md-5 mt-3 mb-7 animation-scroll-section",staticStyle:{"min-height":"calc(100vh - 56px - 76px)"}},t._l(t.titleFilter,(function(e){return a("div",{key:e.id,staticClass:"col-md-4"},[a("div",{staticClass:"card bg-transparent border-secondary mb-4 position-relative rounded-0"},[a("router-link",{staticClass:"p-2",attrs:{to:"/product/"+e.id}},[a("span",{staticClass:"badge badge-secondary badge-pill text-white position-absolute",staticStyle:{left:"16px",top:"16px"}},[t._v(" "+t._s(e.category)+" ")]),a("img",{staticClass:"card-img-top rounded-0",attrs:{src:e.imageUrl[0],alt:"..."}}),a("div",{staticClass:"card-body p-0"},[a("h5",{staticClass:"text-secondary mb-2 mt-2"},[t._v(t._s(e.title))]),a("p",{staticClass:"card-text text-muted font-m mb-0",staticStyle:{height:"2rem"}},[t._v(t._s(e.content))]),e.price&&e.price!==e.origin_price?a("div",{staticClass:"mb-5"},[a("div",{staticClass:"h6 text-muted letter-spacing-m mr-3"},[t._v(" "+t._s(t._f("money")(e.price))+" "),a("span",{staticClass:"font-s text-muted letter-spacing-m"},[t._v(" ( "),a("del",[t._v(" "+t._s(t._f("money")(e.origin_price)))]),t._v(" ) ")])])]):a("div",{staticClass:"h6 letter-spacing-m mb-5"},[t._v(" "+t._s(t._f("money")(e.origin_price))+" ")])])]),a("div",{staticClass:"position-absolute",staticStyle:{"font-size":"1.2rem",right:"16px",bottom:"10px"}},[a("a",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:"加到購物車",expression:"'加到購物車'",arg:"top"}],staticClass:"text-light",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.addToCart(e.id)}}},[a("i",{staticClass:"fas fa-cart-plus"}),e.id===t.status.loadingItem?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()])])],1)])})),0),a("Pagination",{attrs:{pages:t.pagination},on:{update:t.getProducts}})],1)],1)},s=[],n=(a("99af"),a("4de4"),a("c975"),a("1799")),o={name:"Products",components:{Pagination:n["a"]},data:function(){return{isLoading:!1,status:{loadingItem:""},messages:[{name:"失敗",content:"出現錯誤"},{name:"加入失敗 - 重複加入",content:"已有這筆訂單在購物車"},{name:"加入成功",content:"已加入到購物車"}],temProduct:{imageUrl:[]},products:[],pagination:{},input:{category:"全部",title:""}}},methods:{addToCart:function(t){var e=this;this.isLoading=!0,this.status.loadingItem=t;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("289038e7-cea7-4a49-afd4-86ec766c3f7f","/ec/shopping");this.$http.post(a,{product:t,quantity:1}).then((function(t){e.$bus.$emit("get-cart"),e.status.loadingItem="",e.$bus.$emit("push-messages",e.messages[2]),$(".l-toast").toast("show"),e.isLoading=!1})).catch((function(t){e.status.loadingItem="",console.log(t.response),e.$bus.$emit("push-messages",e.messages[1]),$(".l-toast").toast("show"),e.isLoading=!1}))},getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("289038e7-cea7-4a49-afd4-86ec766c3f7f","/ec/products?page=").concat(e);this.$http.get(a).then((function(e){t.products=e.data.data,t.pagination=e.data.meta.pagination,t.temProduct.id&&(t.temProduct={imageUrl:[]}),t.isLoading=!1})).catch((function(){t.$bus.$emit("push-messages",t.messages[0]),$(".l-toast").toast("show"),t.isLoading=!1}))}},created:function(){this.getProducts()},computed:{categoryFilter:function(){var t=this;return"全部"!==this.input.category?this.products.filter((function(e){return e.category===t.input.category})):this.products},titleFilter:function(){var t=this;return this.input.title?this.categoryFilter.filter((function(e){var a=e.title.toLowerCase(),i=t.input.title.toLowerCase();return-1!==a.indexOf(i)})):this.categoryFilter}}},r=o,c=a("2877"),l=Object(c["a"])(r,i,s,!1,null,null,null);e["default"]=l.exports},c975:function(t,e,a){"use strict";var i=a("23e7"),s=a("4d64").indexOf,n=a("a640"),o=a("ae40"),r=[].indexOf,c=!!r&&1/[1].indexOf(1,-0)<0,l=n("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?r.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-3f5bd9d6.d2b35ca3.js.map
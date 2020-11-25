(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd9a9"],{"2d67":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"l-background"},[i("div",{staticClass:"container"},[i("div",{staticClass:"my-5 mb-7"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col"},[i("div",{staticClass:"row align-items-stretch",staticStyle:{"min-height":"calc(100vh - 56px - 76px)","margin-top":"10vh"}},[i("div",{staticClass:"col-md-6 mb-4 mb-md-5"},[i("div",{staticClass:"rounded-0 border p-4"},[i("h2",{staticClass:"font-weight-light"},[t._v("訂單成功")]),i("p",{staticClass:"letter-spacing-xl font-weight-lighter"},[t._v("感謝您的訂購，商品將儘快送達！")]),i("router-link",{staticClass:"btn btn-outline-light mr-2 rounded-0 mb-4 letter-spacing-xl",attrs:{to:"/products"}},[t._v("繼續選購")])],1)]),i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"card rounded-0 border-light py-4 bg-transparent"},[t._m(0),i("div",{staticClass:"card-body px-4 py-0"},[i("ul",{staticClass:"list-group list-group-item-white list-group-flush bg-transparent"},[i("li",{staticClass:"list-group-item bg-transparent px-0"},t._l(t.tempOrders.products,(function(s,a){return i("div",{key:a,staticClass:"d-flex mt-4"},[i("img",{staticClass:"mr-2",staticStyle:{width:"60px",height:"60px","object-fit":"cover"},attrs:{src:s.product.imageUrl[0],alt:""}}),i("div",{staticClass:"w-100 d-flex flex-column justify-content-center"},[i("div",{staticClass:"d-flex justify-content-between font-weight-bold"},[i("h6",{staticClass:"font-weight-light0"},[t._v(t._s(s.product.title))]),i("p",{staticClass:"mb-0 font-weight-light"},[t._v("x "),i("span",[t._v(t._s(s.quantity)+" "+t._s(s.product.unit))])])]),i("div",{staticClass:"d-flex justify-content-between"},[i("p",{staticClass:"text-muted mb-0"},[i("del",[i("small",[t._v(t._s(t._f("money")(s.product.origin_price)))])])]),i("p",{staticClass:"mb-0"},[t._v(t._s(t._f("money")(s.product.price)))])])])])})),0),i("li",{staticClass:"list-group-item bg-transparent px-0 pb-0"},[i("table",{staticClass:"table text-muted"},[i("tbody",[i("tr",[i("th",{staticClass:"border-0 px-0 font-weight-normal",attrs:{scope:"row"}},[t._v("折扣")]),i("td",{staticClass:"text-right border-0 px-0"},[t._v(t._s(t._f("money")(t.discount)))])]),i("tr",[i("th",{staticClass:"border-0 px-0 pt-0 font-weight-normal",attrs:{scope:"row"}},[t._v("付款方式")]),i("td",{staticClass:"text-right border-0 px-0 pt-0"},[t._v(t._s(t.tempOrders.payment))])])])]),i("div",{staticClass:"d-flex justify-content-between mt-2"},[i("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v("總計")]),i("p",{staticClass:"mb-0 h4 font-weight-bold"},[t._v(t._s(t._f("money")(t.cartTotal)))])])])])])])])])])])])])])},e=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"card-header border-bottom-0 px-4 py-0"},[i("h2",[t._v("訂單資料")])])}],r=(i("99af"),i("4160"),i("159b"),{name:"CheckoutSuccess",data:function(){return{isLoading:!1,cartTotal:0,discount:0,orders:[],tempOrders:{id:"",payment:"",products:[]},messages:[{name:"失敗",content:"出現錯誤"},{name:"訂單成功",content:"已建立訂單"}],id:this.$route.params.id}},methods:{updateTotal:function(){var t=this;this.cartTotal=0,this.discount=0,this.tempOrders.products.forEach((function(s){t.cartTotal+=s.product.price*s.quantity,t.discount+=(s.product.origin_price-s.product.price)*s.quantity}))},getThisOrder:function(){var t=this;this.orders.forEach((function(s){s.id===t.id&&(t.tempOrders=s)}))},getOrders:function(){var t=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("289038e7-cea7-4a49-afd4-86ec766c3f7f","/ec/orders");this.$http.get(s).then((function(s){t.orders=s.data.data,t.getThisOrder(),t.updateTotal(),t.isLoading=!1})).catch((function(){t.$bus.$emit("push-messages",t.messages[0]),$(".l-toast").toast("show"),t.isLoading=!1}))}},created:function(){this.getOrders()}}),c=r,o=i("2877"),n=Object(o["a"])(c,a,e,!1,null,null,null);s["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0bd9a9.ba7d4f9c.js.map
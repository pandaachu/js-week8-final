// 外部套件要先放前面
import Vue from 'vue'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// bootstrap
// import 'bootstrap'

// jquery
import $ from 'jquery'
// 這一行是關鍵，若不這樣寫是無法在全域下使用唷

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// jquery 全域注冊
window.$ = $
// 在使用 jq 的頁面加上： /* global */
// 解決 Eslint 的錯誤

// 元件，全域注冊
Vue.component('Loading', Loading)

// 套件加入到 Vue 的藍圖內 (原型內)
Vue.use(VueAxios, axios)
// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

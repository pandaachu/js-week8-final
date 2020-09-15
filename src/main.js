// 外部套件要先放前面
import Vue from 'vue'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// Loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// bootstrap
import 'bootstrap'

// jquery
import $ from 'jquery'
// 這一行是關鍵，若不這樣寫是無法在全域下使用

// //VeeValidate
// import zh from '../src/assets/js/validation/zh_TW'

import App from './App.vue'
import router from './router'

// vee-validate
import { ValidationObserver, ValidationProvider, configure, localize, extend } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules' // 規則檔案（ex: email...）
import zhTW from 'vee-validate/dist/locale/zh_TW.json' // 語系檔案
// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
})
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
localize('tw', zhTW)

Vue.config.productionTip = false

// jquery 全域注冊
window.$ = $
// 在使用 jq 的頁面加上： /* global $ */
// 解決 Eslint 的錯誤

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
// 元件，全域注冊
Vue.component('Loading', Loading)

// 套件加入到 Vue 的藍圖內 (原型內)
Vue.use(VueAxios, axios)

// event bus
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

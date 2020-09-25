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

// vee-validate
import { ValidationObserver, ValidationProvider, configure, extend, localize } from 'vee-validate'
import zhTW from 'vee-validate/dist/locale/zh_TW.json' // 語系檔案
import * as rules from 'vee-validate/dist/rules'

import App from './App.vue'
import router from './router'

// 讓 SVG 全域性的引入，元件中就不用特地 import 了
// 全域註冊一個新的元件 SvgIcon
import SvgIcon from './components/SvgIcon'
Vue.component('icon', SvgIcon)

// 一次性的匯入 SVG
const requireAll = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('./components/svg-icons', true, /\.vue$/)
const req = require.context('./assets/icon', true, /\.svg$/)
requireAll(req)

Vue.config.productionTip = false

// jquery 全域注冊
window.$ = $
// 在使用 jq 的頁面加上： /* global $ */
// 解決 Eslint 的錯誤

// vee-validate
// Class 設定檔案
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})
localize('tw', zhTW)
// Install components globally
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

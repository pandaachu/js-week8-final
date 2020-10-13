// 外部套件要先放前面
import Vue from 'vue'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// jquery
import $ from 'jquery'
// 這一行是關鍵，若不這樣寫是無法在全域下使用

// vee-validate
import { ValidationObserver, ValidationProvider, configure, extend, localize } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import zhTW from 'vee-validate/dist/locale/zh_TW.json' // 語系檔案

// bootstrap
import 'bootstrap'

// Loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// vue-awesome-swiper // Custom Build with Swiper
import Swiper, { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import App from './App.vue'
import router from './router'

import moneyFilter from './filters/money'

// import VueLazyload from 'vue-lazyload'

// 讓 SVG 全域性的引入，元件中就不用特地 import 了
// 全域註冊一個新的元件 SvgIcon
// import SvgIcon from './components/svg-icons/SvgIcon'
// Vue.component('icon', SvgIcon)

// // 一次性的匯入 SVG
// const requireAll = requireContext => requireContext.keys().map(requireContext)
// // const req = require.context('./components/svg-icons', true, /\.vue$/)
// const req = require.context('./assets/icon', true, /\.svg$/)
// requireAll(req)

// jquery 全域注冊
window.$ = $
// 在使用 jq 的頁面加上： /* global $ */
// 解決 Eslint 的錯誤

// 套件加入到 Vue 的藍圖內 (原型內)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

// filter
Vue.filter('money', moneyFilter)

// 元件，全域注冊
Vue.use(Loading)
Vue.component('Loading', Loading)

// Vue.use(VueLazyload)

// vee-validate
// install rules and localization
// 所有驗證規則
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})
// Class 設定檔案
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
localize('tw', zhTW)
// Install components globally
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

// Swiper modules
Swiper.use([Navigation, Pagination, Mousewheel, Autoplay])
Vue.use(VueAwesomeSwiper /* { default options with global component } */)

// event bus
Vue.prototype.$bus = new Vue()

Vue.prototype.aos = AOS

// tooltip 提示字元設定
Vue.directive('tooltip', function (el, binding) {
  $(el).tooltip({
    title: binding.value,
    placement: binding.arg,
    trigger: 'hover'
  })
})

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')

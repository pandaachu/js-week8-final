import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from '../views/Shop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // 對應的路徑
    name: 'Home', // 元件呈現的名稱
    component: Home, // 對應的元件
    children: [ // 巢狀結構
      {
        path: '', // 首頁
        component: () => import('../views/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/Products.vue')
      },
      { // 動態路由，後面加參數
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/Product.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/checkout',
        name: 'Checkout',
        component: () => import('../views/Checkout.vue')
      },
      {
        path: '/checkout-success',
        name: 'CheckoutSuccess',
        component: () => import('../views/CheckoutSuccess.vue')
      },
      {
        path: '/shop',
        name: 'Shop',
        component: () => import('../views/Shop.vue')
      }
    ]
  },
  {
    path: '/admin/login',
    name: 'Login',
    component: () => import('../views/admin/Login.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin/Dashboard.vue'),
    redirect: '/admin/products',
    children: [ // 巢狀結構
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/admin/Products.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/admin/Order.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/admin/Orders.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/admin/Coupons.vue')
      }
    ]
  },
  // 路徑輸入錯誤導回首頁
  { // * -> 代表全部
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router

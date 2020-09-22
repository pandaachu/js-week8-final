<template>
  <div class="container">
      <div style="min-height: 400px; background-image: url(https://images.unsplash.com/photo-1532728233432-ca70fefe237a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80);
      background-position: center center;">
      </div>
      <div class="mt-5 mb-7">
        <div class="row">
          <div class="col-md-6">
            <h2>訂單成功</h2>
            <p>感謝您的訂購，商品將儘快送達！</p>
            <router-link to="/products" class="btn btn-outline-light mr-2 rounded-0 mb-4">繼續選購</router-link>
          </div>
          <!-- 取得已清空的訂單資料 -->
          <div class="col-md-6">
            <div class="card rounded-0 border-light py-4 bg-transparent">
              <div class="card-header border-bottom-0px-4 py-0">
                <h2>訂單資料</h2>
              </div>
              <div class="card-body px-4 py-0">
                <ul class="list-group list-group-item-white list-group-flush bg-transparent">
                  <li class="list-group-item bg-transparent px-0">
                    <div class="d-flex mt-2" v-for="(order,index) in tempOrders.products" :key="index">
                      <img :src="order.product.imageUrl[0]" alt="" class="mr-2" style="width: 60px; height: 60px; object-fit: cover">
                      <div class="w-100 d-flex flex-column">
                        <div class="d-flex justify-content-between font-weight-bold">
                          <h5>{{order.product.title}}</h5>
                          <p class="mb-0">x <span>{{order.quantity}} {{order.product.unit}}</span></p>
                        </div>
                        <div class="d-flex justify-content-between mt-auto">
                          <p class="text-muted mb-0"><small>{{order.product.origin_price}}</small></p>
                          <p class="mb-0">{{order.product.price}}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item bg-transparent px-0 pb-0">
                    <table class="table text-muted">
                      <tbody>
                        <tr>
                          <th scope="row" class="border-0 px-0 font-weight-normal">折扣</th>
                          <td class="text-right border-0 px-0">{{ discount }}</td>
                        </tr>
                        <tr>
                          <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">付款方式</th>
                          <td class="text-right border-0 px-0 pt-0">{{ tempOrders.payment }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="d-flex justify-content-between mt-2">
                      <p class="mb-0 h4 font-weight-bold">總計</p>
                      <p class="mb-0 h4 font-weight-bold">{{ cartTotal }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      // products: [],
      // carts: [],
      cartTotal: 0,
      discount: 0,
      orders: [],
      tempOrders: {
        id: '',
        payment: '',
        products: []
      },
      id: this.$route.params.id
      // status: {
      //   loadingItem: '', // 要預先定義 loadingItem, 不然會出錯
      //   loadingUpdateCart: ''
      // }
    }
  },
  methods: {
    updateTotal () {
      // 累加總金額，先歸零後重新計算
      this.cartTotal = 0
      this.discount = 0
      this.tempOrders.products.forEach((item) => {
        this.cartTotal += item.product.price * item.quantity
        this.discount += item.product.origin_price - item.product.price
      })
      console.log(this.cartTotal)
    },
    // 抓下結帳後的訂單資料
    getThisOrder () {
      this.orders.forEach((item) => {
        if (item.id === this.id) {
          this.tempOrders = item
          console.log(this.tempOrders)
          // console.log(item.id)
        }
      })
    },
    getOrders () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`
      this.$http.get(api).then((res) => {
        this.isLoading = false
        // console.log('orders', res)
        this.orders = res.data.data
        this.getThisOrder()
        this.updateTotal()
      }).catch(() => {
        this.isLoading = false
      })
    },
    // getCart () { // 取得購物車資料
    //   this.isLoading = true
    //   const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
    //   this.$http.get(url)
    //     .then(res => {
    //       console.log('cart', res)
    //       this.isLoading = false
    //       this.carts = res.data.data
    //       this.updateTotal()
    //       this.calculateDiscount() // 取得購物車的時候才會做計算
    //     })
    // },
    calculateDiscount () {
      this.discount = 0
      this.originCartTotal = 0
      this.tempOrders.forEach((item) => {
        this.discount += item.product.origin_price - item.product.price
        this.originCartTotal += item.product.origin_price
      })
      // console.log(this.discount)
      // console.log(this.originCartTotal)
    }
  },
  created () {
    this.getOrders()
    // this.updateTotal()
    // this.getCart()
  }
}
</script>

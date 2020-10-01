<template>
  <div class="l-product">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <div style="min-height: 400px;
      background-position: center center;"
      :style="{ backgroundImage: `url(${product.imageUrl[0]})`}">
      </div>
      <div class="row justify-content-between mt-5 mb-7">
        <div class="col-md-7">
          <h2 class="mb-0 mb-4">{{ product.title }}</h2>
          <div class="d-flex justify-content-between align-items-baseline">
            <!-- 售價(price)欄位是可選的，因此售價若為空，就顯示原價(origin_price)
            售價若不為空，就顯示原價(origin_price)與售價(price) -->
            <!-- v-if 去判斷 -->
            <div class="h5" v-if="!product.price || product.price === product.origin_price">
            {{ product.origin_price }}
            </div>
            <div v-else class="d-flex align-items-end">
              <del class="h6">${{ product.origin_price }} </del>
              <div class="h5 pl-2">
                ${{ product.price }}
              </div>
            </div>
          </div>
          <p class="text-muted">{{ product.content }}</p>
          <div class="my-4">
            <img :src="product.imageUrl[0]" alt="" class="img-fluid mt-4">
          </div>
          <p class="brackets py-4 px-4" style="letter-spacing:1.3px; line-height:1.6">{{ product.description }}</p>
          <!-- 內容後續加強 -->
          <!-- <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-minus"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body pb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body pb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingThree" data-toggle="collapse" data-target="#collapseThree">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    Lorem ipsum
                  </h4>
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body pb-5">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="col-md-4">
          <div class="input-group mb-3 border mt-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-dark rounded-0 border-0 py-3 text-gray" type="button" id="button-addon1">
                <i class="fas fa-minus"></i>
              </button>
              <!-- <button class="btn" id="button-addon1"
                type="btn btn-outline-dark rounded-0 border-0 py-3 text-gray" :disabled="carts.quantity === 1 "
                @click="carts.quantity --; updateQuantity(carts.product.id, carts.quantity)"
                >
                <i class="fas fa-minus"></i>
              </button> -->
            </div>
            <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-transparent text-gray" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
            <!-- <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-transparent px-0" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1"
                v-model="carts.quantity"
                @change="updateQuantity(carts.product.id, carts.quantity)"> -->
            <div class="input-group-append">
              <button class="btn btn-outline-dark rounded-0 border-0 py-3 text-gray" type="button" id="button-addon2">
                <i class="fas fa-plus"></i>
              </button>
              <!-- <button class="btn btn-outline-dark rounded-0 border-0 py-3 text-gray" id="button-addon2"
                  type="button" @click="carts.quantity ++; updateQuantity(carts.product.id, carts.quantity)"
                  >
                  <i class="fas fa-plus"></i>
              </button> -->
            </div>
          </div>
          <button class="btn btn-dark btn-block rounded-0 py-3"
          @click="addToCart ()">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
export default {
  data () {
    return {
      isLoading: false,
      carts: [],
      product: {
        imageUrl: []
      },
      status: {
        loadingItem: '', // 要預先定義 loadingItem, 不然會出錯
        loadingUpdateCart: ''
      }
    }
  },
  methods: {
    // 加入購物車後要觸發另外的元件更新資料 -> $bus.$emit
    // navbar 的購物車 icon 用 $bus.$on 接收
    addToCart () {
      // console.log({
      //   product: this.product.id,
      //   quantity: quantity
      // })
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.post(url, {
        product: this.product.id, // 因為是產品單獨頁面，所以不需要另外把產品 id 帶進來，可以直接在這裡用 this
        quantity: 1
        // quantity: this.quantity
      })
        .then((res) => {
          this.isLoading = false
          // console.log(res)
          // $emit 推送資料
          this.$bus.$emit('get-cart') // $bus.$on 定義的方法
        })
    },
    getCart () { // 取得購物車資料
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then(res => {
          // console.log('cart', res)
          this.isLoading = false
          this.carts = res.data.data[0]
          // this.updateTotal()
        })
    },
    updateQuantity (id, quantity) { // 更新數量
      this.isLoading = true
      this.status.loadingUpdateCart = id // 當更新購物車的時候把 id 取出
      // this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = { // 定義資料
        product: id,
        quantity: quantity // ES6 的寫法: quantity
      }
      // console.log(cart);
      this.$http
        .patch(url, cart)
        .then(res => {
          this.status.loadingUpdateCart = '' // 執行完時清空
          this.isLoading = false
          // console.log(res)
          this.getCart() // 更新完數量要重新取得購物車資料
        })
        .catch(error => {
          this.isLoading = false
          // axios 固定的寫法，否則 error 訊息不會出現
          console.log(error.response)
        })
    }
  },
  created () {
    this.isLoading = true
    // 取得產品 id
    // console.log(this.$route.params.id)
    // 屬性 $route
    // 方法 $router
    const id = this.$route.params.id
    const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`
    this.$http.get(url)
      .then((res) => {
        this.isLoading = false
        this.product = res.data.data
      })
    this.getCart()
  }
}

</script>

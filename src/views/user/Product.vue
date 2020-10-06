<template>
  <!-- <div class="l-product">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <div style="min-height: 400px;
      background-position: center center;"
      :style="{ backgroundImage: `url(${product.imageUrl[0]})`}">
      </div>
      <div class="row justify-content-between mt-5 mb-7">
        <div class="col-md-7">
          <h2 class="mb-0 mb-4 optimaNovaFont letter-spacing-l">{{ product.title }}</h2>
          <div class="d-flex justify-content-between align-items-baseline">
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
          <div class="accordion bg-transparent border border-bottom border-top-0 border-left-0 border-right-0 mb-3" id="accordionExample">
            <div class="card border-0 bg-transparent">
              <div class="card-header px-0 py-4 bg-transparent border border-bottom-0 border-top border-left-0 border-right-0" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <h4 class="mb-0">
                    注意事項
                  </h4>
                  <i class="fas fa-minus"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse bg-transparent show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body pb-5">
                  可能導致肌膚敏感，請放置在兒童無法拿取處。懷孕、哺乳或接受治療者，請先諮詢醫師後再使用。避免接觸眼睛、耳內和敏感部位。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group mb-3 border mt-3">
            <div class="input-group-prepend">
              <button
                class="btn btn-outline-dark rounded-0 border-0 py-3 text-gray"
                id="button-addon2"
                type="button"
                :disabled="productAddToCart.quantity === 1"
                @click="productAddToCart.quantity -- ; updateQuantity(productAddToCart.quantity)"
              >
                <i class="fas fa-minus"></i>
              </button>
            </div>
            <input
              type="text"
              class="form-control border-0 text-center my-auto shadow-none bg-transparent px-0"
              placeholder=""
              aria-label="Example text with button addon" aria-describedby="button-addon1"
              v-model="productAddToCart.quantity"
            >
            <div class="input-group-append">
              <button
                class="btn btn-outline-dark rounded-0 border-0 py-3 text-gray"
                id="button-addon2"
                type="button" @click="productAddToCart.quantity ++ ; updateQuantity(productAddToCart.quantity)"
              >
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <button
            class="btn btn-dark btn-block rounded-0 py-3 letter-spacing-m"
            @click="addToCart ()"
            >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div> -->
<div class="l-background">
    <Loading :active.sync="isLoading"></Loading>
    <div class="l-product container">
      <div class="row justify-content-between align-items-center mt-5 mb-7">
        <div class="col">
          <!-- <div>
            <img v-if="!product.price || product.price === product.origin_price" src="../../../public/images/kelly-sikkema-XU1-sAMZFqc-unsplash.jpg" alt="" class="rounded-circle mr-5" style="width: 200px; height: 200px; object-fit: cover;">
            <img src="../../../public/images/kelly-sikkema-XU1-sAMZFqc-unsplash.jpg" alt="" class="rounded-circle mr-5" style="width: 200px; height: 200px; object-fit: cover;">
          </div> -->
          <div
            class="my-4"
            style="height: 650px;background-position: center center;background-size:cover"
            :style="{ backgroundImage: `url(${product.imageUrl[0]})`}"
          >
          </div>
          <!-- <div class="my-4">
            <img :src="product.imageUrl[0]" alt="" class="img-fluid mt-2">
          </div> -->
        </div>
        <div class="col-5 offset-1">
          <div class="scrollbarHide" style="overflow:auto; height: 60vh;">
            <span
                class="badge badge-secondary badge-pill text-white mb-4"
              >
              {{product.category}}
            </span>
            <h2 class="mb-0 mb-4 optimaNovaFont letter-spacing-l">{{ product.title }}</h2>
            <div class="d-flex justify-content-between align-items-baseline">
              <!-- 售價(price)欄位是可選的，因此售價若為空，就顯示原價(origin_price)
              售價若不為空，就顯示原價(origin_price)與售價(price) -->
              <!-- v-if 去判斷 -->
              <div class="h5 letter-spacing-m mb-5" v-if="!product.price || product.price === product.origin_price">
              {{ product.origin_price }}
              </div>
              <div v-else class="mb-5">
                <div class="h5 letter-spacing-m pl-2 mr-3">
                  <small>$</small>{{ product.price }}
                  <span class="font-m letter-spacing-m">
                    ( <del> <small>$</small>{{ product.origin_price }}</del> )
                  </span>
                </div>
              </div>
            </div>
            <p class="text-muted font-weight-lighter">{{ product.content }}</p>
            <p class="brackets py-4 px-4 font-weight-lighter" style="letter-spacing:1.3px; line-height:1.6">{{ product.description }}</p>
            <!-- 內容後續加強 -->
            <div class="bg-transparent mb-3">
              <div class="card border-0 bg-transparent">
                <div class="card-header px-0 pt-4 mb-3 border border-bottom border-top-0 border-left-0 border-right-0">
                    <h4 class="mb-0 letter-spacing-l">
                      使用方法
                    </h4>
                </div>
                <div class="card-body font-weight-lighter">
                  <ol class="p-0 letter-spacing-s">
                    <li class="pb-3">可以滴在吸收精油的材料，如紙類、布類、木類讓它自然揮發。</li>
                    <li class="pb-3">用罐子裝一些自然材料如乾花草，松果相思子這些，處理乾淨後，就可以當做最自然的擴香。</li>
                    <li class="pb-3">精油水氧機，一次5-10滴，用水稀釋後擴香，可以用一晚上。</li>
                    <li class="pb-3">使用精油擴香儀，精油沒有稀釋，原汁原味的擴香。</li>
                  </ol>
                </div>
                <div class="card-header px-0 pt-4 mb-3 border border-bottom border-top-0 border-left-0 border-right-0">
                    <h4 class="mb-0 letter-spacing-l">
                      注意事項
                    </h4>
                </div>
                <p class="card-body pb-5 font-weight-lighter letter-spacing-s">
                  可能導致肌膚敏感，請放置在兒童無法拿取處。 <br>
                  懷孕、哺乳或接受治療者，請先諮詢醫師後再使用。 <br>
                  避免接觸眼睛、耳內和敏感部位。
                </p>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <div class="input-group mb-3 border mt-3">
              <div class="input-group-prepend">
                <!-- 減數量 -->
                <button
                  class="btn btn-outline-dark rounded-0 border-0 py-3 text-gray"
                  id="button-addon2"
                  type="button"
                  :disabled="productAddToCart.quantity === 1"
                  @click="productAddToCart.quantity -- ; updateQuantity(productAddToCart.quantity)"
                >
                  <i class="fas fa-minus"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-transparent px-0"
                placeholder=""
                aria-label="Example text with button addon" aria-describedby="button-addon1"
                v-model="productAddToCart.quantity"
              >
              <div class="input-group-append">
                <!-- 加數量 -->
                <button
                  class="btn btn-outline-dark rounded-0 border-0 py-3 text-gray"
                  id="button-addon2"
                  type="button" @click="productAddToCart.quantity ++ ; updateQuantity(productAddToCart.quantity)"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <button
              class="btn btn-dark btn-block rounded-0 py-3 letter-spacing-m"
              @click="addToCart ()"
              >
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scrollbarHide::-webkit-scrollbar{
  display: none;
}
</style>

<script>
export default {
  data () {
    return {
      isLoading: false,
      productAddToCart: {
        product: this.$route.params.id,
        quantity: 1
      },
      carts: [],
      product: {
        imageUrl: []
      },
      order: {},
      status: { // 讀取效果
        loadingItem: '', // 要預先定義 loadingItem, 不然會出錯
        loadingUpdateCart: ''
      }
    }
  },
  methods: {
    // 加入購物車後要觸發另外的元件更新資料 -> $bus.$emit
    // navbar 的購物車 icon 用 $bus.$on 接收
    addToCart () {
      console.log(this.productAddToCart)
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.post(url, this.productAddToCart)
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
          this.carts = res.data.data
        })
    },
    updateQuantity (quantity) { // 更新數量
      this.productAddToCart.quantity = quantity
      // console.log(quantity)
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
    this.$http.get(url) // 取得當前產品資料
      .then((res) => {
        this.isLoading = false
        this.product = res.data.data
      })
    this.getCart()
  }
}

</script>

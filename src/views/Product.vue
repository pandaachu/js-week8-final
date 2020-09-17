<template>
  <div>
    <div class="container">
      <div style="min-height: 400px;
      background-position: center center;"
      :style="{ backgroundImage: `url(${product.imageUrl[0]})`}">
      </div>
      <div class="row justify-content-between mt-4 mb-7">
        <div class="col-md-7">
          <h2 class="mb-0">{{ product.title }}</h2>
          <p class="font-weight-bold">NT$1,200</p>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea</p>
          <div class="my-4">
            <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="img-fluid mt-4">
          </div>
          <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3" id="accordionExample">
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
          </div>
        </div>
        <div class="col-md-4">
          <div class="input-group mb-3 border mt-3">
            <div class="input-group-prepend">
              <button class="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon1">
                <i class="fas fa-minus"></i>
              </button>
            </div>
            <input type="text" class="form-control border-0 text-center my-auto shadow-none" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
            <div class="input-group-append">
              <button class="btn btn-outline-dark rounded-0 border-0 py-3" type="button" id="button-addon2">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <button class="btn btn-dark btn-block rounded-0 py-3"
          @click="addToCart ()">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {
        imageUrl: []
      }
    }
  },
  methods: {
    // 加入購物車後要觸發另外的元件更新資料 -> $bus.$emit
    // navbar 的購物車 icon 用 $bus.$on 接收
    addToCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.post(url, {
        product: this.product.id, // 因為是產品單獨頁面，所以不需要另外把產品 id 帶進來，可以直接在這裡用 this
        quantity: 1
      })
        .then((res) => {
          this.isLoading = false
          // $emit 推送資料
          this.$bus.$emit('get-cart') // $bus.$on 定義的方法
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
  }
}

</script>

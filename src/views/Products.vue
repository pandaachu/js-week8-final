<template>
  <div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-3" v-for="product in products" :key="product.id">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img :src="product.imageUrl[0]" class="card-img-top rounded-0" alt="...">
            <a href="#" class="text-dark">
              <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
            </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3"><router-link :to="`/product/${product.id}`" >{{ product.title }}</router-link></h4>
              <p class="card-text text-muted mb-0">{{ product.description }}</p>
              <p class="text-muted mt-3"> {{ product.price }}</p>
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
      products: []
    }
  },
  methods: {
    goProduct (item) {
      console.log(this.$router)
      // 頁面轉換
      // push 為方法
      this.$router.push(`/product/${item.id}`)
    }
  },
  created () {
    // 以 node.js 運行，所以要加 process.env
    this.isLoading = true
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.isLoading = false
        this.products = res.data.data
      })
  }
}

</script>

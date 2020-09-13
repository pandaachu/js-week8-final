<template>
  <div class="container">
    <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
      <router-link to="/" class="navbar-brand position-absolute" href="#" style="left: 50%; transform: translate(-50%, -50%); top: 50%;">Navbar</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse bg-white custom-header-md-open" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link pl-0">首頁 <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">產品列表</router-link>
          </li>
        </ul>
      </div>
      <div class="d-flex">
        <a href="#"><i class="fas fa-heart mr-5"></i></a>
        <a href="./cart-2.html">
          <i class="fas fa-shopping-cart"></i>
          <span
            class="badge badge-pill badge-danger"
            v-if="carts.length"
            style="transform: translateX(-9px) translateY(4px)"
            >{{ carts.length }}
          </span>
        </a>
      </div>
    </nav>
  </div>
  <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand" href="#">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">首頁 <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">關於</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link">購物車</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/products" class="nav-link">後台產品列表</router-link>
        </li>
      </ul>
    </div>
  </nav> -->
</template>

<script>
export default {
  data () {
    return {
      carts: []
    }
  },
  methods: {
    getCart () { // 購物車 icon 顯示有幾筆訂單
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false
          // console.log('cart', res)
          this.carts = res.data.data
        })
    }
  },
  created () {
    this.getCart()
    this.$bus.$on('get-cart', () => {
      this.getCart() // <- 這段不懂
    })
  }
}

</script>

<style scoped lang="scss">
  // @import "~bootstrap/scss/bootstrap";
</style>

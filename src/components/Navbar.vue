<template>
  <div class="l-navbar bg-primary--t50 sticky-top">
    <div class="container">
      <nav class="navbar px-0 navbar-expand-lg">
        <router-link to="/" class="navbar-brand position-absolute" href="#" style="left: 50%; transform: translate(-50%, -50%); top: 50%;">FOREST</router-link>
        <button style="focus:outline: 0" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse custom-header-md-open" id="navbarNav">
          <ul class="navbar-nav  pl-3 pl-lg-0">
            <li class="nav-item active">
              <router-link to="/" class="nav-link pl-0 text-secondary ">首頁 <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link text-secondary ">關於</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link text-secondary ">產品列表</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/login" class="nav-link text-secondary ">登入</router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <!-- <a href="#"><i class="fas fa-heart mr-5"></i></a> -->
          <router-link to="/cart"><i class="fas fa-shopping-cart"></i>
            <span
              class="badge badge-pill badge-danger"
              v-if="carts.length"
              style="transform: translateX(-9px) translateY(4px)"
              >{{ carts.length }}
            </span>
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
  // .l-navbar{

  // }
</style>

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
    // $on('自訂義名稱', 要執行的函式) -> 接收資料
    this.$bus.$on('get-cart', () => {
      this.getCart() // 重新取得購物車資料
    })
  }
}

</script>

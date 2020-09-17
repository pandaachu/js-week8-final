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
              <p class="card-text text-muted mb-0">{{ product.content }}</p>
              <p class="text-muted mt-3"> {{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <Pagination :pages="pagination" @update="getProducts"></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      temProduct: {
        imageUrl: [] // 資料結構
      },
      products: [],
      pagination: {}
    }
  },
  methods: {
    goProduct (item) {
      // console.log(this.$router)
      // 頁面轉換
      // push 為方法
      this.$router.push(`/product/${item.id}`)
    },
    getProducts (num = 1) { // 帶上分頁的參數 -> 第一種寫法
      this.isLoading = true
      // 防止 'url: "https://course-ec-api.hexschool.io/api/289038e7-cea7-4a49-afd4-86ec766c3f7f/admin/ec/products?page=undefined" ' --> 出現 undefined
      // 第二種寫法：
      // 如果 num 不存在，num = 1：
      // if (!num) { num = 1 };
      // 帶上分頁：
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=${num}`
      this.$http.get(api)
        .then(res => {
          this.isLoading = false
          // console.log(res);
          // 對應遠端傳回來的資料
          this.products = res.data.data
          this.pagination = res.data.meta.pagination
          // 如果 id 存在
          if (this.temProduct.id) {
            this.temProduct = {
              imageUrl: [] // 資料結構
            } // 把 temProduct 清除，避免重覆觸發
          }
        })
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
    this.getProducts()
  }
}

</script>

<template>
  <div class="l-products text-light container mt-5">
    <Loading :active.sync="isLoading"></Loading>
    <div class="row justify-content-center">
      <div class="input-group col-5">
        <select class="form-control w-25 btn btn-secondary text-white" v-model="input.category">
          <option>全部</option>
          <option>香精油</option>
          <option>蠟燭</option>
        </select>
        <input v-model.trim="input.title" type="text" placeholder="搜尋" class="form-control btn btn-outline-secondary w-75">
      </div>
    </div>
    <!-- <nav class="navbar navbar-expand-lg navbar-dark justify-content-center border border-left-0 border-right-0 border-top border-bottom"> -->
      <!-- <div class="navbar-nav flex-row overflow-auto navbar-custom-scroll mr-3">
        <a class="nav-item nav-link text-nowrap px-2" href="#">全部 |</a>
        <a class="nav-item nav-link text-nowrap px-2" href="#">香精油 |</a>
        <a class="nav-item nav-link text-nowrap px-2 active" href="#">研究中  |<span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link text-nowrap px-2" href="#">蠟燭</a>
      </div>
      <div class="input-group-prepend">
        <input type="text" class="form-control btn btn-outline-secondary">
      </div> -->
      <!-- <div class="input-group mb-3">
        <select class="custom-select col-sm-1">
          <option selected>選擇...</option>
          <option value="1">全部</option>
          <option value="2">香精油</option>
          <option value="3">蠟燭</option>
        </select>
        <div class="input-group-prepend">
          <input type="text" class="form-control btn btn-outline-secondary">
        </div>
      </div> -->
      <!-- <div class="input-group">
        <select v-model="input.type" class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <option value="">全部</option>
          <option value="">香精油</option>
          <option value="">蠟燭</option>
        </select>
        <input type="text" v-model.trim="input.title">
      </div> -->
    <!-- </nav> -->
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-4" v-for="product in titleFilter" :key="product.id">
          <div class="card bg-transparent border-gray mb-4 position-relative rounded-0">
            <img :src="product.imageUrl[0]" class="card-img-top rounded-0" alt="...">
            <!-- 之後再加我的最愛 -->
            <!-- <a href="#" class="text-light">
              <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
            </a> -->
            <div class="card-body p-2">
              <h4 class="mb-0 mt-3"><router-link :to="`/product/${product.id}`" >{{ product.title }}</router-link></h4>
              <p class="card-text text-muted mb-0">{{ product.content }}</p>
              <p class="text-muted mt-3"> {{ product.price }}</p>
            </div>
            <AddToCartBtn></AddToCartBtn>
          </div>
        </div>
      </div>
      <Pagination :pages="pagination" @update="getProducts"></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '../../components/Pagination.vue'
import AddToCartBtn from '../../components/AddToCartBtn.vue'

export default {
  components: {
    Pagination,
    AddToCartBtn
  },
  data () {
    return {
      isLoading: false,
      temProduct: {
        imageUrl: [] // 資料結構
      },
      products: [],
      pagination: {},
      input: {
        category: '全部',
        title: ''
      }
    }
  },
  methods: {
    // goProduct (item) {
    //   // console.log(this.$router)
    //   // 頁面轉換
    //   // push 為方法
    //   this.$router.push(`/product/${item.id}`)
    // },
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
          // console.log(res)
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
  },
  computed: {
    categoryFilter () {
      if (this.input.category !== '全部') { // 如果 input.category 不是全部
        return this.products.filter(item => {
          return item.category === this.input.category
        })
      } else {
        return this.products
      }
    },
    titleFilter () {
      if (this.input.title) { // input.title 有資料的話
        return this.categoryFilter.filter(item => {
          // 先轉小寫 toLowerCase()
          const content = item.title.toLowerCase()
          const keyword = this.input.title.toLowerCase()
          // 在陣列中找到的第一個元素索引值；沒找到則為 -1。
          // 不等於 -1 -> 有找到資料，再進行比對
          // 比對 keyword 跟 content的字串
          return content.indexOf(keyword) !== -1
        })
      } else {
        return this.categoryFilter
      }
    }
  }
}

</script>

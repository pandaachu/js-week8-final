<template>
<div class=" l-background">
  <div class="row mt-md-5 mt-3 mb-7">
        <div class="col-md-4" v-for="product in collectionFilter" :key="product.id">
          <div class="card bg-transparent border-secondary mb-4 position-relative rounded-0">
            <router-link :to="`/product/${product.id}`" class="p-2">
              <span
                class="badge badge-secondary badge-pill text-white position-absolute"
                style="left: 16px; top: 16px"
              >
              {{product.category}}
              </span>
              <img :src="product.imageUrl[0]" class="card-img-top rounded-0" alt="...">
              <div class="card-body p-0">
                <h5 class="text-secondary mb-2 mt-2">{{ product.title }}</h5>
                <p class="card-text text-muted font-m mb-0" style="height: 2rem">{{ product.content }}</p>
                <p class="text-muted my-3"> ${{ product.price }}</p>
              </div>
            </router-link>
            <!-- <div class="position-absolute" style="font-size:1.2rem; right: 16px; bottom: 10px">
              <a href="#" class="text-light" @click.prevent="addToCart(product.id)" v-tooltip:top="'加到購物車'">
                <i class="fas fa-cart-plus" ></i>
                <i v-if="product.id === status.loadingItem" class="fas fa-spinner fa-spin"></i>
              </a>
            </div> -->
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
      products: []
    }
  },
  methods: {
    getProducts () {
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
        .then((res) => {
          // console.log(res)
          this.products = res.data.data
        })
    }
  },
  mounted () {
    this.getProducts()
  },
  computed: {
    collectionFilter () {
      // const products = this.products
      console.log(this.products)
      const sleepCollection = this.products.filter(item => {
        return item.content.indexOf('夢|休') !== -1
        // return item.title === '沐梨 - Quince'
      })
      return sleepCollection
    }
  }
}
</script>

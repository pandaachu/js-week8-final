<template>
  <a href="#" class="text-light">
    <i class="fas fa-cart-plus position-absolute" style="font-size:1.2rem; right: 16px; bottom: 16px"></i>
  </a>
  <!-- <a href="#" class="text-light" @click="handleClick">
    <i class="fas fa-cart-plus position-absolute" style="font-size:1.2rem; right: 16px; bottom: 16px"></i>
  </a> -->
</template>

<script>

export default {
  data () {
    return {
      product: {}
    }
  },
  //   // 把外面的資料傳入
  props: ['id'],
  //   // 切換頁
  // props: ['temProduct'],
  methods: {
    // updatePage (num) {
    //   // 要知道點的是哪個，所以上面要帶上 -> updatePage(i) ，這裡用 num 接收
    //   // console.log(num)
    //   this.$emit('update', num)
    // }
    // handleClick () {
    //   this.$emit('getProductId')
    //   // this.addToCart()
    // },
    addToCart () {
      // this.isLoading = true
      // const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      // this.$http.post(url, {
      //   product: this.id, // 因為是產品單獨頁面，所以不需要另外把產品 id 帶進來，可以直接在這裡用 this
      //   quantity: 1
      // })
      //   .then((res) => {
      //     this.isLoading = false
      //     // $emit 推送資料
      //     this.$bus.$emit('get-cart') // $bus.$on 定義的方法
      //   })
    }
  }
}

</script>

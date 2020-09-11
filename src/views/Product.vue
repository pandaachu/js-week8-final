<template>
  <div>
    <h2>product</h2>
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  },
  created () {
    // 取得產品 id
    console.log(this.$route.params.id)
    // 屬性 $route
    // 方法 $router
    const id = this.$route.params.id
    this.isLoading = true
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.isLoading = false
        this.product = res.data.data
      })
  }
}

</script>

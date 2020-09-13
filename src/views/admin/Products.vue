
<template>
  <div>
    <h2>後台 - 產品列表頁面</h2>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td> {{ item.title }} </td>
        <td> {{ item.content }} </td>
        <td>
          <router-link :to="`/product/${item.id}`">看產品</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  props: ['token'],
  created () {
    const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products`
    this.isLoading = true
    this.$http.get(url)
      .then((res) => {
        this.isLoading = false
        this.products = res.data.data
      })
  }
}
</script>

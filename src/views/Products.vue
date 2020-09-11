<template>
  <div>
    <h2>products</h2>
    <table>
      <tr v-for="item in products" :key="item.id">
        <td> {{ item.title }} </td>
        <td> {{ item.origin_price }} </td>
        <td>
          <!-- <router-link :to="`/product/${item.id}`">link</router-link> -->
          <button @click="goPage(item)">進入頁面</button>
          <!-- 如果使用 a tag，要加上 prevent，否則會把路徑蓋掉 -->
          <!-- <a href="#" @click.prevent="goPage(item)"></a> -->
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
  methods: {
    goPage (item) {
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

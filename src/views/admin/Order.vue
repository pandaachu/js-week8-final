<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
    <h2 class="h3 m-3 text-left">訂單細節</h2>
    <table>
      <tr>
        <th>訂單編號</th>
        <!-- <td>{{ order.id }}</td> -->
      </tr>
      <tr>
        <th>下單日期</th>
        <!-- <td>{{ order.created.datetime }}</td> -->
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {},
      tempOrder: {},
      isLoading: false
    }
  },
  methods: {
    // getOrder () {
    //   const id = this.$route.params
    //   const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${id}`
    //   this.isLoading = true
    //   this.$http.get(url).then((res) => {
    //     this.isLoading = false
    //     this.order = res.data.data
    //   }).catch(() => {
    //     this.isLoading = false
    //   })
    // }
  },
  created () {
    this.isLoading = true
    console.log(this.$route.params.id)
    const id = this.$route.params.id
    const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${id}`
    // this.getOrder()
    this.$http.get(url)
      .then((res) => {
        // console.log(res)
        this.isLoading = false
        this.order = res.data.data
      })
  }
}
</script>

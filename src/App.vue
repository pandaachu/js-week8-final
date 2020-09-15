<template>
  <div id="app">
    <!-- 把 isLoading 載進 -->
    <loading :active.sync="isLoading"></loading>
    <!-- router-view 放不一樣的內容 -->
    <router-view/>
  </div>
</template>

<script>
// 匯出 loading
export default {
  // 元件裡面的資料要用 function return 的方式
  // false 效果不會出現
  data () {
    return {
      isLoading: false
    }
  },
  mounted () {
    // 以 node.js 運行，所以要加 process.env
    this.isLoading = true
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.isLoading = false
        console.log(res)
      })
  }
}
</script>

<style lang="scss">
  @import "./assets/scss/all";
</style>

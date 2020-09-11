<template>
  <div id="app">
    <!-- 把 isLoading 載進 -->
    <loading :active.sync="isLoading"></loading>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/cart">Cart</router-link>
    </div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

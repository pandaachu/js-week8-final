<template>
  <div class="home">
    <h2>這是首頁</h2>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  created () {
    const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`
    this.$http
      .get(url)
      .then((res) => {
        console.log(res)
      })
    this.$bus.$on('onEvent', (para) => {
      console.log('觸發 Event Bus', para)
    })
  }
}
</script>

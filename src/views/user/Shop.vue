<template>
  <div class="user">
    <!-- 把 isLoading 載進 -->
    <!-- <loading :active.sync="isLoading"></loading> -->
    <!-- 呼叫元件 -->
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
// .user{
//   color: $white;
// }
</style>

<script>
// 匯入元件
import Navbar from '../../components/Navbar.vue'
import Footer from '../../components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      // isLoading: false
    }
  }
}

</script>

<template>
  <div class="home">
    <!-- 呼叫元件 -->
    <Navbar></Navbar>
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

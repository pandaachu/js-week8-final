<template>
  <div id="app">
    <!-- 呼叫元件 -->
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
// 匯入元件
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

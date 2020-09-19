<template>
  <a href="#" class="text-muted">
    <i class="far fa-shopping-cart"></i>加到購物車(後續加)
  </a>
</template>

<script>

export default {
  data () {
    return {
      imageUrl: [],
      filePath: ''
    }
  }
//   // 把外面的資料傳入
//   props: ['pages'],
//   // 切換頁
//   methods: {
//     updatePage (num) {
//       // 要知道點的是哪個，所以上面要帶上 -> updatePage(i) ，這裡用 num 接收
//       // console.log(num)
//       this.$emit('update', num)
//     }
//   }
}

</script>

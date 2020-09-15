<template>
  <div>
    <!-- <h2>這裡是管理頁面</h2> -->
    <router-view :token="token" v-if="checkSuccess"/>
    <!-- 當驗證沒有問題，checkSuccess = true ，再跑下面的區塊 -->
  </div>
</template>

<script>
// 這裡是後台入口，驗證要做在這
export default {
  data () {
    return {
      token: '',
      checkSuccess: false
    }
  },
  created () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      // 登入後取得 token
      // 帶上 token
      // 外層已經把 token 儲存，所以外層就不用再寫一次了
      // 但是要把 token 從外層傳到內層，使用 props
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`

      const api = `${process.env.VUE_APP_APIPATH}/auth/check`
      // 發送 api 來檢查
      this.$http.post(api, {
        api_token: this.token
      })
      // 看驗證結果
      // then & catch 都要做
        .then(res => {
          // console.log(res)
          this.checkSuccess = true
        })
        .catch(error => {
          console.log(error.response)
          // 如果驗證失敗畫面回到 login
          this.$router.push('/login')
        })
    }
  }
}
</script>

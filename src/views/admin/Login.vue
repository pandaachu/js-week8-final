<template>
  <div class="login">
    <Loading :active.sync="isLoading"></Loading>
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal">
        請先登入
      </h1>
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          id="inputEmail"
          v-model="user.email"
          type="email"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        />
      </div>
      <div class="form-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          id="inputPassword"
          v-model="user.password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        />
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">
        登入
      </button>
      <br />
      <p class="mt-5 mb-3 text-muted">
        © 2020 Forest All Rights Reserved.
      </p>
    </form>
  </div>
</template>

<script>
/* global $ */
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      token: '',
      isLoading: false,
      messages: [
        {
          name: '失敗',
          content: '登入失敗'
        }
      ]
    }
  },
  methods: {
    signin () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/auth/login` // login API
      this.$http
        .post(api, this.user)
        .then(response => {
          const token = response.data.token // 把 token 存起來
          const expired = response.data.expired // 把 到期日 存起來
          // 儲存 cookie，new Date(expired * 1000)是固定的寫法，時間格式的轉換，path=/ -> 可寫可不寫
          document.cookie = `hexToken=${token}; expires=${new Date(expired * 1000)}; path=/`
          // 登入後轉址
          // window.location = '/js-week4-homework/product.html'; // for gitHub only
          // 1. $route  2. $router
          // 登入成功後使用 $router 方法轉址
          this.$router.push('/admin/products')
          // axios 是非同步行為，因此如果要正確儲存 token，轉址的步驟要放在 axios 裡，否則轉址會比 axios 先進行，結果不會進行 axios 的步驟
          this.isLoading = false
        })
        .catch(() => {
          this.$bus.$emit('push-messages', this.messages[0])
          $('.l-toast').toast('show')
          this.isLoading = false
        })
    }
  }
}
</script>

<style>
  .login {
    height: 100vh;
    text-align: center;
  }
  .login {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

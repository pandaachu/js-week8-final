<template>
  <div>
    <div class="bg-light pt-5 pb-7">
      <div class="container">
        <div class="row justify-content-center flex-md-row flex-column-reverse">
          <div class="col-md-6">
            <div class="bg-white p-4">
              <h4 class="font-weight-bold">聯絡方法</h4>
              <p class="mt-4">填寫聯絡資料</p>
              <form @submit.prevent="createOrder">
                <div class="form-group mb-0">
                  <ValidationProvider rules="required|email" v-slot="{ errors, classes }">
                    <label for="ContactMail" class="text-muted mb-0">Email</label>
                    <input id="ContactMail" v-model="form.email" type="email" class="form-control rounded-0" placeholder="example@gmail.com" :class="classes">
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!-- <label for="ContactMail" class="text-muted mb-0">Email</label>
                  <input type="email" class="form-control rounded-0" id="ContactMail" aria-describedby="emailHelp" placeholder="example@gmail.com" :class="{'is-invalid':errors.has('email')}">
                  <span class="text-danger" v-if="errors.has('email')">{{errors.first('email')}}</span> -->
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input rounded-0" id="ContactLorem">
                  <label class="form-check-label" for="ContactLorem">Lorem ipsum dolor sit amet, consetetur</label>
                </div>
                <div class="form-group mb-2">
                  <ValidationProvider rules="required" v-slot="{ errors, classes }">
                    <label for="ContactName" class="text-muted mb-0">收件人姓名</label>
                    <input id="ContactName" v-model="form.email" type="text" class="form-control rounded-0" placeholder="王大明" :class="classes">
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <ValidationProvider rules="required|min:10" v-slot="{ errors, classes }">
                    <label for="ContactPhone" class="text-muted mb-0">收件人手機號碼</label>
                    <input id="ContactPhone" v-model="form.phone" type="tel" class="form-control rounded-0" placeholder="0933-123-123" :class="classes">
                    <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                  <!-- <label for="ContactPhone" class="text-muted mb-0">Phone</label>
                  <input type="text" class="form-control rounded-0" id="ContactPhone" placeholder="0933-123-123">
                  <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span> -->
                </div>
              </form>
            </div>
            <div class="bg-white p-4 mt-3">
              <h4 class="font-weight-bold">運送及付款資訊</h4>
              <form>
                <p class="mt-4 mb-3">運送地址</p>
                <div class="form-row">
                  <div class="col">
                    <select id="inputState" class="form-control rounded-0">
                      <option selected>Country/Region</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div class="col">
                    <select id="inputState" class="form-control rounded-0">
                      <option selected>City</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <input type="text" class="form-control rounded-0 mt-1" id="inputCity" placeholder="Address">
                <p class="mt-4 mb-2">Payment</p>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                  <label class="form-check-label text-muted" for="gridRadios1">WebATM
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                  <label class="form-check-label text-muted" for="gridRadios2">ATM
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
                  <label class="form-check-label text-muted" for="gridRadios3">ApplePay
                  </label>
                </div>
              </form>
            </div>
            <div class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100">
              <router-link to="/product" class="text-dark mt-md-0 mt-3"><i class="fas fa-chevron-left mr-2"></i> 回訂單列表 </router-link>
              <router-link to="/checkout-success" class="btn btn-dark py-3 px-7 rounded-0">確訂付款</router-link>
            </div>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="mb-4">訂單資料</h4>
              <div class="d-flex mb-2" v-for="item in carts" :key="item.product.id + 1">
                <img :src="item.product.imageUrl" alt="" class="mr-2" style="width: 48px; height: 48px; object-fit: cover">
                <div class="w-100">
                  <div class="d-flex justify-content-between font-weight-bold">
                    <p class="mb-0">{{ item.product.title }}</p>
                    <p class="mb-0">x{{ item.quantity }}</p>
                  </div>
                  <div class="d-flex justify-content-between">
                    <p class="text-muted mb-0"><small>NT$12,000</small></p>
                    <p class="mb-0">{{ item.product.price }}</p>
                  </div>
                </div>
              </div>
              <table class="table mt-4 border-top border-bottom text-muted">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th>
                    <td class="text-right border-0 px-0 pt-4">NT$24,000</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th>
                    <td class="text-right border-0 px-0 pt-0 pb-4">ApplePay</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 font-weight-bold">總計</p>
                <p class="mb-0 h4 font-weight-bold">{{ cartTotal }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tempProduct: {},
      products: [],
      carts: [],
      cartTotal: 0,
      status: {
        loadingItem: '', // 要預先定義 loadingItem, 不然會出錯
        loadingUpdateCart: ''
      },
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: ''
      }
    }
  },
  methods: {
    updateTotal () {
      // 累加總金額，先歸零後重新計算
      this.cartTotal = 0
      this.carts.forEach((item) => {
        this.cartTotal += item.product.price * item.quantity
      })
    },
    getCart () { // 取得購物車資料
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then(res => {
          // console.log('cart', res)
          this.isLoading = false
          this.carts = res.data.data
          this.updateTotal()
        })
    },
    createOrder () {
      this.isLoading = true
      const url = `${this.APIPATH}/api/${this.UUID}/ec/orders`

      this.$http.post(url, this.form).then((response) => {
        if (response.data.data.id) {
          this.isLoading = false
          // 跳出提示訊息
          // $('#orderModal').modal('show')

          // 重新渲染購物車
          this.getCart()
        }
      }).catch((error) => {
        this.isLoading = false
        console.log(error.response.data.errors)
      })
    }
  },
  created () {
    this.updateTotal()
    this.getCart()
  }
}
</script>

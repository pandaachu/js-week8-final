<template>
  <div class="container">
      <div style="min-height: 400px; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
      background-position: center center;">
      </div>
      <div class="mt-5 mb-7">
        <div class="row">
          <div class="col-md-6">
            <h2>訂單成功</h2>
            <p>感謝您的訂購，商品將儘快送達！</p>
            <router-link to="/products" class="btn btn-outline-light mr-2 rounded-0 mb-4">繼續選購</router-link>
          </div>
          <!-- 這邊還沒想到要何何取得已清空的訂單資料 -->
          <div class="col-md-6">
            <div class="card rounded-0 border-light py-4 bg-transparent">
              <div class="card-header border-bottom-0px-4 py-0">
                <h2>訂單資料</h2>
              </div>
              <div class="card-body px-4 py-0">
                <ul class="list-group list-group-item-white list-group-flush bg-transparent">
                  <li class="list-group-item bg-transparent px-0">
                    <div class="d-flex mt-2">
                      <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" alt="" class="mr-2" style="width: 60px; height: 60px; object-fit: cover">
                      <div class="w-100 d-flex flex-column">
                        <div class="d-flex justify-content-between font-weight-bold">
                          <h5>Lorem ipsum</h5>
                          <p class="mb-0">x10</p>
                        </div>
                        <div class="d-flex justify-content-between mt-auto">
                          <p class="text-muted mb-0"><small>NT$12,000</small></p>
                          <p class="mb-0">NT$12,000</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item bg-transparent px-0 pb-0">
                    <table class="table text-muted">
                      <tbody>
                        <tr>
                          <th scope="row" class="border-0 px-0 font-weight-normal">折扣</th>
                          <td class="text-right border-0 px-0">NT$24,000</td>
                        </tr>
                        <tr>
                          <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">付款方式</th>
                          <td class="text-right border-0 px-0 pt-0">ApplePay</td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="d-flex justify-content-between mt-2">
                      <p class="mb-0 h4 font-weight-bold">總計</p>
                      <p class="mb-0 h4 font-weight-bold">{{ cartTotal }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

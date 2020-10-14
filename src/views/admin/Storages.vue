<template>
<div>
  <Loading :active.sync="isLoading" />
  <table class="table mt-4 text-primary">
      <thead>
        <tr>
          <th>圖片縮圖</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody v-if="storages.length">
        <tr
          v-for="item in storages"
          :key="item.id"
        >
          <td>
            <img
              :src="item.path"
              width="100px"
              class="img-fluid"
            >
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                class="btn btn-outline-danger"
                @click.prevent="openModel(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
</div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      storages: []
    }
  },
  methods: {
    getStorages () {
      const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/storage`
      this.$http.get(url)
        .then(res => {
          // console.log(res)
          this.storages = res.data.data
        })
    }
  },
  created () {
    this.getStorages()
  }
}
</script>

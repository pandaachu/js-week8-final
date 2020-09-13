<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">首頁 <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">關於</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cart" class="nav-link">購物車</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/products" class="nav-link">後台產品列表</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>

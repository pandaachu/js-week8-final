<template>
<div class="bg-white sticky-top">
  <div class="container">
    <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
      <router-link to="/" class="navbar-brand position-absolute" href="#" style="left: 50%; transform: translate(-50%, -50%); top: 50%;">Navbar</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse bg-white custom-header-md-open" id="navbarNavAdimn">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link pl-0">首頁 <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link">產品列表</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
</template>

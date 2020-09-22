<template>
  <div id="loading">
    <div class="load-center">
      <div class="line-wrap">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>
    <div id="progress-bar" class="load-line leftToRight"></div>
  </div>
</template>

<script>
/* global $ */
import { TweenMax } from 'gsap'

export default {
  created () {
    const url = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`
    this.$http
      .get(url)
      .then((res) => {
        console.log(res)
      })
  },
  mounted () {
    TweenMax.to('#loading', 0.5, {
      delay: 2,
      display: 'none',
      autoAlpha: 0,
      // ease: Quart.easeOut,
      onComplete: function () {
        // onComplete do something
        $('.l-home').addClass('on')
        // $('.l-navbar ').addClass('on')
        setTimeout(function () {
          $('.kvSection .kvTitle ').addClass('on')
          $('.kvSection .kv-en').addClass('on')
        }, 500)
      }
    })
  }
}
</script>

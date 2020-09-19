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
  <div id="progress-bar" class="load-line" style="width: 98.1481%;"></div>
  </div>
</template>

<script>
/* global $ */
import { TweenMax } from 'gsap'

export default {
  methods: {

  },
  mounted () {
    TweenMax.to('#loading', 0.5, {
      delay: 2,
      display: 'none',
      autoAlpha: 0,
      // ease: Quart.easeOut,
      onComplete: function () {
        // onComplete do something
        $('.l-home ').addClass('on')
        setTimeout(function () {
          $('.kvSection .kvTitle ').addClass('on')
          $('.kvSection .kv-en').addClass('on')
        }, 500)
      }
    })
  }
}
</script>

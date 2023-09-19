<script setup lang="ts">
import { ref } from 'vue'

// const qcodeSrc = ref('')

let endTime = ref(0)
let timer: number

// 加载二维码
const loadQcode = () => {
  // qcodeSrc.value = new URL('../../../assets/qcode.png', import.meta.url).href

  endTime.value = 5

  timer = setInterval(() => {
    endTime.value--

    // 每隔一秒,检测用户是否扫码
    checkLogin()

    if (endTime.value <= 0) {
      timer && clearInterval(timer)
      timer = 0
    }
  }, 1000)
}
loadQcode()
const checkLogin = () => {}
</script>
<template>
  <div class="qcode">
    <div class="box">
      <img src="@/assets/qcode.png" alt="" />
      <div class="refresh" v-if="endTime <= 0" @click="loadQcode">
        当前二维码已失效，点击重新加载
      </div>
    </div>
    <div class="info">使用微信或者移动端扫码登录</div>
  </div>
</template>
<style lang="scss" scoped>
.qcode {
  text-align: center;

  .box {
    width: 70%;
    height: 70%;
    margin: auto;
    position: relative;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      display: block;
    }

    .refresh {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0%;
      top: 0;
      background: rgba($color: #000000, $alpha: 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: red;
      cursor: pointer;
    }
  }
}
</style>

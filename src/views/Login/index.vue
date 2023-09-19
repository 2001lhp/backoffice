<script setup lang="ts">
import { ref } from 'vue'
import { PhoneForm, AccountForm, QcodeForm } from './components'
import type { ComponentMap } from './types/index'

const tabs: ComponentMap[] = [
  { name: '免密登录', type: PhoneForm },
  { name: '账号登录', type: AccountForm },
  { name: '扫码登录', type: QcodeForm }
]
const tab = ref(0)
</script>
<template>
  <div class="login">
    <div class="box">
      <div class="img"><img src="@/assets/logo.svg" alt="" /></div>
      <div class="line"></div>
      <div class="formpanel">
        <div class="tabs">
          <span
            v-for="(item, index) in tabs"
            :key="index"
            :class="{ selected: tab === index }"
            @click="tab = index"
            >{{ item.name }}</span
          >
        </div>
        <div style="padding: 20px 45px 0">
          <component :is="tabs[tab].type"></component>
        </div>
      </div>
    </div>
    <div class="footer">版权所有: 通用管理系统</div>
  </div>
</template>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #2196f3, #00bcd4, #00bcd4, #03a9f4);
  position: fixed;
  top: 0;

  .box {
    width: 800px;
    height: 400px;
    background-color: #fff;
    margin: auto;
    margin-top: calc((100vh - 400px) / 2);
    display: flex;
    align-items: center;
    box-shadow: 0 0 20px 2px #000055;

    .img {
      width: 40%;
      text-align: center;

      img {
        width: 60%;
      }
    }

    .line {
      width: 1px;
      height: 94%;
      background-color: #ddd;
    }

    .formpanel {
      flex: 1;
      height: 100%;

      .tabs {
        width: 100%;
        line-height: 45px;
        display: flex;
        justify-content: space-around;

        span {
          cursor: pointer;
        }

        .selected,
        :hover {
          color: red;
          font-weight: 600;
        }
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 14px;
    color: #fff;
  }
}
</style>

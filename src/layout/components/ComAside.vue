<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import MenuItem from './MenuItem.vue'
import { ref } from 'vue'
const logo = new URL('@/assets/logo.svg', import.meta.url).href
const store = useMenuStore()
const menuData = ref([])
</script>
<template>
  <div class="logo-page">
    <span v-if="!store.status">通用后台管理系统</span>
    <img :src="logo" alt="" />
  </div>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#23262E"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#ccc"
    :collapse="store.status"
  >
    <MenuItem :menu="menuData" />
  </el-menu>
</template>
<style lang="scss" scoped>
.logo-page {
  height: 50px;
  background: var(--junjun-topbar-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  img {
    height: 30px;
    height: 30px;
    margin: 0 10px;
  }
}

.el-menu {
  width: 100%;
  /* height: 100%; */
  border: 0;
}
</style>

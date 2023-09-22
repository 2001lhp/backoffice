<script setup lang="ts">
import ComAside from './components/ComAside.vue'
import ComHeader from './components/ComHeader.vue'
import { useMenuStore } from '@/stores/menu'
const store = useMenuStore()
</script>
<template>
  <el-container>
    <el-aside :width="store.asideWidth + 'px'">
      <ComAside />
    </el-aside>
    <el-container>
      <el-header>
        <ComHeader />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped>
.el-container {
  height: 100%;

  .el-aside {
    background: var(--junjun-topbar-bg);
    transition: width 0.4s linear;
  }

  .el-header {
    display: flex;
    align-items: center;
  }
}
</style>

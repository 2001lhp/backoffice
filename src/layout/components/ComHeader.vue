<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
const store = useMenuStore()
</script>
<template>
  <div class="icon" @click="store.setAsideWidth">
    <el-icon v-if="!store.status">
      <Fold />
    </el-icon>
    <el-icon v-else>
      <Expand />
    </el-icon>
  </div>
</template>
<style lang="scss" scoped></style>

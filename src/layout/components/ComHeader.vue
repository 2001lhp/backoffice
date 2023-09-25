<script setup lang="ts">
import TagsView from './TagsView.vue'
import ToolBar from './ToolBar.vue'
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
  <TagsView />
  <ToolBar />
</template>
<style lang="scss" scoped></style>

<script setup lang="ts">
import { useTagsStore } from '@/stores/tags'
const store = useTagsStore()
</script>
<template>
  <div class="tags">
    <div
      class="tag"
      :class="item.path == $route.path ? 'active' : ''"
      v-for="(item, index) in store.tagslist"
      :key="item.name"
      @click="$router.push(item.path)"
    >
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <span>{{ item.name }}</span>
      <el-icon v-show="index != 0" @click.stop="store.del(index)">
        <Close />
      </el-icon>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.tags {
  flex: 1;
  display: flex;
  overflow: auto;
  margin-left: 20px;

  .tag {
    min-width: 110px;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 15px;
    margin-right: 10px;
    font-size: 12px;

    span {
      margin: 0 5px;
    }

    &:hover {
      background-color: rgb(172, 125, 215);
    }
  }

  .active {
    background-color: blueviolet;
  }
}

.tags::-webkit-scrollbar {
  display: none;
}
</style>

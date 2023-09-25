<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import MenuItem from './MenuItem.vue'
import { ref, watch } from 'vue'
import { getMenuData } from '@/api/user'
import type { MenuResponseType } from '@/types/menu'
import { useTagsStore } from '@/stores/tags'
import { useRoute } from 'vue-router'
const logo = new URL('@/assets/logo.svg', import.meta.url).href
const route = useRoute()
const store = useMenuStore()
const tagstore = useTagsStore()
const menuData = ref<MenuResponseType[]>()
const getMenuList = async () => {
  const res = await getMenuData()
  menuData.value = res.data
}
getMenuList()

const isTags = (path: string) => {
  const whiteList = ['/login', '/404', '/401']
  return whiteList.includes(path)
}
watch(route, (to) => {
  if (isTags(to.path)) return
  const { fullPath, meta } = to
  if (!fullPath || !meta.icon || !meta.title) return
  tagstore.addtagslist({
    name: meta.title as string,
    icon: meta.icon as string,
    path: fullPath
  })
})
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
    :default-active="$route.path"
    text-color="#ccc"
    :collapse="store.status"
    router
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

import router from '@/router'
import type { TagsType } from '@/types/tags'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTagsStore = defineStore('tags', () => {
  const tagslist = ref<TagsType[]>([
    {
      name: '工作台',
      icon: 'Monitor',
      path: '/Index/Home'
    }
  ])
  const addtagslist = (obj: TagsType) => {
    const i = tagslist.value.findIndex((item) => item.name == obj.name)
    if (i == -1) {
      tagslist.value.push(obj)
    }
  }
  const del = (i: number) => {
    if (i + 1 == tagslist.value.length) {
      router.push(tagslist.value[i - 1].path)
    } else {
      router.push(tagslist.value[i + 1].path)
    }
    tagslist.value.splice(i, 1)
  }
  return { tagslist, addtagslist, del }
})

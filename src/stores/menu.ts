import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const asideWidth = ref(260)
  const setAsideWidth = () => {
    asideWidth.value = asideWidth.value === 260 ? 64 : 260
  }
  const status = computed(() => {
    return asideWidth.value === 260 ? false : true
  })
  return { asideWidth, status, setAsideWidth }
})

import type { LoginResponseType } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const userinfo = ref<LoginResponseType>()
    const token = ref()
    return { userinfo, token }
  },
  { persist: true }
)

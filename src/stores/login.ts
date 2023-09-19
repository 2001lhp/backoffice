import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore(
  'login',
  () => {
    const phone = ref('')
    const savePhone = ref(false)
    const username = ref('')
    const password = ref('')
    const saveUsername = ref(false)
    const savePass = ref(false)
    return { phone, savePhone, username, password, saveUsername, savePass }
  },
  {
    persist: true
  }
)

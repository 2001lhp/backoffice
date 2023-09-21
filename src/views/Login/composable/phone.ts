import type { PhoneFormType } from '@/types/login'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useLoginStore } from '@/stores/login'

export const useGetPhoneCode = (phoneForm: PhoneFormType) => {
  const disabled = ref(false)
  const time = ref(0)
  const getcode = () => {
    if (!phoneForm.phone) {
      ElMessage.error('请输入手机号')
      return
    }
    disabled.value = true
    time.value = 60
    const timer = setInterval(() => {
      time.value--
      if (time.value <= 0) {
        disabled.value = false
        clearInterval(timer)
        time.value = 0
      }
    }, 1000)
  }
  return { disabled, getcode, time }
}

export const useSaveUser = (phoneForm: PhoneFormType) => {
  const store = useLoginStore()
  const phonelogin = () => {
    if (phoneForm.savePhone) {
      console.log(phoneForm)
      store.phone = phoneForm.phone
      console.log(store.phone)
      store.savePhone = phoneForm.savePhone
    } else {
      store.phone = ''
    }
  }

  const getPhoneDate = () => {
    if (store.savePhone) {
      phoneForm.phone = store.phone
    }
  }
  return { phonelogin, getPhoneDate }
}

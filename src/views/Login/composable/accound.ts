import type { AccoundFormType } from '@/types/login'
import { useLoginStore } from '@/stores/login'

export const useSaveUser = (accoundForm: AccoundFormType) => {
  const store = useLoginStore()
  const accoundlogin = () => {
    if (accoundForm.saveUsername) {
      store.username = accoundForm.username
      store.saveUsername = accoundForm.saveUsername
    } else {
      store.username = ''
    }
    if (accoundForm.savePass) {
      store.password = accoundForm.password
      store.savePass = accoundForm.savePass
    } else {
      store.password = ''
    }
  }
  const getAccoundDate = () => {
    if (store.saveUsername) {
      accoundForm.username = store.username
    }
    if (store.savePass) {
      accoundForm.password = store.password
    }
  }
  return { accoundlogin, getAccoundDate }
}

import type { AccoundFormType } from '@/types/login'
import { useLoginStore } from '@/stores/login'
import utils from '@/utils/utils'
import type { FormInstance } from 'element-plus'
import { accountLogin } from '@/api/user'
import { useUserStore } from '@/stores/user'
import type { Router } from 'vue-router'

export const useSaveUser = (accoundForm: AccoundFormType, router: Router) => {
  const store = useLoginStore()
  const accoundLocalUser = () => {
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
      accoundForm.saveUsername = store.saveUsername
    }
    if (store.savePass) {
      accoundForm.password = store.password
    }
  }

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    const store = useUserStore()
    await formEl.validate(async (valid, fields) => {
      if (valid) {
        accoundLocalUser()
        utils.openLoading()
        const res = await accountLogin({
          username: accoundForm.username,
          password: accoundForm.password,
          imgcode: accoundForm.imgcode
        })
        console.log(res)
        if (res.code == 888) {
          store.userinfo = res.data
          store.token = res.token
          router.push('/')
        } else {
          utils.showError(res.message)
        }
        utils.closeLoading()
      } else {
        console.log('error submit!', fields)
        for (const key in fields) {
          utils.showError(fields[key][0].message!)
        }
        return
      }
    })
  }
  return { getAccoundDate, submitForm }
}

import { type DefineComponent } from 'vue'
// 定义组件名称和组件类型的映射关系
export type ComponentMap = {
  name: string
  type: DefineComponent<{}, {}, any>
}

// 定义登录表单的数据类型
export interface PhoneFormType {
  phone: string
  smscode: string
  imgcode: string
  savePhone: boolean
}

export interface AccoundFormType {
  username: string
  password: string
  imgcode: string
  saveUsername: boolean
  savePass: boolean
}

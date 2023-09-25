import type { MenuResponseType } from '@/types/menu'
import type { LoginResponseType, accountLoginType } from '@/types/user'
import request from '@/utils/http'

//登录
export const accountLogin = (data: accountLoginType) => {
  return request<LoginResponseType>({ url: '/api/login/username', method: 'POST', data })
}

// 获取菜单列表
export const getMenuData = () => {
  return request<MenuResponseType[]>({ url: '/api/menu', method: 'POST' })
}

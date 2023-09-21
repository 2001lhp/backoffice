import type { DATA } from '@/types/request'
import axios, { type AxiosRequestConfig } from 'axios'
import utils from './utils'

const http = axios.create({
  baseURL: '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  withCredentials: true,
  responseType: 'json',
  responseEncoding: 'utf8'
})

http.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    // Do something before response is sent
    if (response.status === 200) {
      const data = response.data
      // 全局异常处理
      if (data.code !== 888) {
        return utils.showError(data.message || '发生错误')
      }
      return data
    }

    if (response.status === 401) {
      // TODO token过期处理
      return
    }

    utils.showError('请求失败')
  },
  (error) => {
    // Do something with response error
    utils.showError(error.response.statusText || '请求失败')
    return Promise.reject(error)
  }
)

const request = <T>(config: AxiosRequestConfig) => {
  if (config.method?.toLocaleLowerCase() === 'get') {
    config.params = config.data
    delete config.data
  }
  return http.request<T, DATA<T>>(config)
}

// 导出axios实例对戏那个
export default request

import type { DATA } from '@/types/request'
import axios, { type AxiosRequestConfig } from 'axios'

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
    return response.data
  },
  (error) => {
    // Do something with response error
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

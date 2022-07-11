import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5 * 1000
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO 发送请求头
    return config
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // TODO 全局响应处理
    return response
  },
  (error) => {
    return Promise.reject(new Error(error))
  }
)

// 统一传参处理
const request = (options) => {
  options.params = options.method.toLowerCase() === 'get' ? options.data : {}
  return instance(options)
}

export default request

import axios from 'axios'
import { Message } from 'element-ui'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 3 * 1000
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
    const { data, code, msg } = response.data
    if (code === 200) {
      return data
    }
    _showErrorMsg(msg)
    return Promise.reject(new Error(msg))
  },
  (error) => {
    const { message } = error
    if (message.includes('timeout')) {
      _showErrorMsg('网络超时啦')
    }
    if (message.includes('Network Error')) {
      _showErrorMsg('请检查网络')
    }
    return Promise.reject(new Error(error))
  }
)

const _showErrorMsg = (msg) => {
  Message.error(msg)
}

// 统一传参处理
const request = (options) => {
  options.params = options.method.toLowerCase() === 'get' ? options.data : {}
  return instance(options)
}

export default request

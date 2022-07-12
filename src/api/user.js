import request from '@/utils/request'

/**
 * 获取图片验证码
 * @returns {AxiosPromise}
 */
export const captcha = () => {
  return request({
    url: '/captcha',
    method: 'GET'
  })
}
/**
 * 用户登录
 * @param data
 * @returns {AxiosPromise}
 */
export const login = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}
/**
 * 获取用户新形象
 * @returns {AxiosPromise}
 */
export const userInfo = () => {
  return request({
    url: '/user/info',
    method: 'GET'
  })
}
/**
 * 获取用户权限
 * @returns {AxiosPromise}
 * @constructor
 */
export const MenuNav = () => {
  return request({
    url: '/menu/nav',
    method: 'GET'
  })
}
/**
 * 用户退出
 * @returns {AxiosPromise}
 */
export const logout = () => {
  return request({
    url: '/logout',
    method: 'POST'
  })
}
/**
 * 获取用户列表
 * @param data
 * @returns {AxiosPromise}
 */
export const userListApi = (data) => {
  return request({
    url: '/user/list',
    data,
    method: 'GET'
  })
}
/**
 * 添加用户
 * @param data
 * @returns {AxiosPromise}
 */
export const addUserApi = (data) => {
  data.avatar = data.avatar ? data.avatar : 'https://joeschmoe.io/api/v1/random'
  return request({
    url: '/user/add',
    method: 'POST',
    data
  })
}
/**
 * 编辑用户
 * @param data
 * @returns {AxiosPromise}
 */
export const updateUserApi = (data) => {
  return request({
    url: '/user/update',
    method: 'PUT',
    data
  })
}

export const roleApi = (id, data) => {
  return request({
    url: `/user/assign/${id}`,
    method: 'POST',
    data
  })
}

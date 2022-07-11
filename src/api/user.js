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

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

export const login = (data) => {
  return request({
    url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`,
    method: 'POST'
  })
}

import request from '@/utils/request'

/**
 * 获取菜单列表
 * @param data
 * @returns {AxiosPromise}
 */
export const menuListApi = (data) => {
  return request({
    url: '/menu/list',
    method: 'GET',
    data
  })
}

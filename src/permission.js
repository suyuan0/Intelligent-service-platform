import router from '@/router'
import store from '@/store'

router.beforeEach(async (to, from, next) => {
  const token = store.getters.token
  if (token && to.path === '/login') {
    return next(from.path)
  }
  if (!token && to.path !== '/login') {
    return next('/login')
  }
  if (to.path !== '/login') {
    // 获取用户信息
    const userInfo = store.getters.userInfo
    if (JSON.stringify(userInfo) === '{}') {
      await store.dispatch('user/userInfo')
    }
    // 获取权限
    const authoritys = store.getters.authoritys
    if (JSON.stringify(authoritys) === '[]') {
      await store.dispatch('user/userNav')
    }
  }
  next()
})

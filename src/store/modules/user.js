import { login } from '@/api/user'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/utils/const'

export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    async login({ commit }, data) {
      const res = await login(data)
      commit('setToken', res)
    }
  }
}

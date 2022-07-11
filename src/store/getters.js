const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  authoritys: (state) => state.user.authoritys
}

export default getters

const actions = { // 异步操作
  incrementAsync(context) { // context 与 store 实例具有相同方法和属性
    const { commit } = context
    setTimeout(() => {
      commit('increment')
    }, 200)
  },
  async actionA({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('incrementN', { amount: 2 })
        resolve()
      }, 2000)
    })
  },
  async incrementPromise(context, paylod) {
    const { dispatch, commit } = context
    await dispatch('actionA')
    commit('incrementN', paylod)
  }
}

export default actions
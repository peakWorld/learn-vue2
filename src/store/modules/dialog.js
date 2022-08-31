const store = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    addDialog(state, config) {
      state.list.push(config)
    },
    delDialog(state, index) {
      state.list.splice(index, 1)
    }
  }
}

export default store
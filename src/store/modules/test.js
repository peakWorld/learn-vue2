const test = {
  namespaced: true,
  state: {
    x: 1
  },
  getters: {
    t1(state, getters, rootState, rootGetters) {
      // state    局部state
      // getters  局部getters
      // rootState 根state
      // rootGetters 根getters
      console.log(state, getters, rootState, rootGetters)
      return state.x + rootState.count
    }
  },
  mutations: {
    addx(state, payload) {
      state.x =+ payload
    }
  },
  actions: {
    ta1(context, paylod) {
      const { dispatch, commit, getters, rootGetters } = context
      getters.x  // 局部getters
      rootGetters.count // 全局根getters

      dispatch('ta2') // 局部actions
      dispatch('incrementAsync', null, { root: true } ) // 全局actions

      commit('t1', paylod) // 局部commit
      commit('increment', null, { root: true }) // 全局commit
    },
    ta2() {}
  }
}

export default test
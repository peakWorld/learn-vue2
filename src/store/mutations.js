const mutations = { // 必须是同步函数
  increment (state) {
    state.count++
  },
  incrementN (state, paylod) { // payload
    state.count += paylod.amount
  }
}

export default mutations
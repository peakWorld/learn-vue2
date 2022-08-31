export default (store) => {
  let preState = { ...store.state }

  // 订阅 store 的 mutation
  // handler 在每个 mutation 完成后调用，接收 mutation 和经过 mutation 后的状态
  store.subscribe((mutation, state) => {
    console.log('mutation', mutation, 'preState', preState.count, 'state', { ...state }.count)
  })

  // 订阅 store 的 action
  // handler 会在每个 action 分发的时候调用，接收 action 描述和当前的 store 的 state 
  // store.subscribeAction((action, state) => {
  //   console.log('action', action, 'preState', preState, 'state', { ...state })
  // })

  // store.subscribeAction({
  //   before: (action, state) => {
  //     console.log(`before action ${action.type}`, { ...state })
  //   },
  //   after: (action, state) => {
  //     console.log(`after action ${action.type}`, { ...state })
  //   },
  //   error: (action, state, error) => {
  //     console.log(`error action ${action.type}`, { ...state })
  //     console.error(error)
  //   }
  // })
}

export const test2 = () => (store) => {
  store.subscribeAction((action, state) => {
    console.log('action.type', action.type, 'state.count', { ...state }.count)
  })
}
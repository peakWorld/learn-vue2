import store from '@/store'

function createDialog (configs = {}) {
  return new Promise((resolve, reject) => {
    store.commit('dialog/addDialog', {
      ...configs,
      resolve,
      reject
    })
  })
}

export { createDialog }
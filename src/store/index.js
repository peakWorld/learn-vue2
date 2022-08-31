import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import actions from './actions'
import moduleDialog from './modules/dialog'
import moduleTest from './modules/test'
import pluginSnapshot, { test2 as pluginTest } from './plugins/snapshot'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 3,
    useId: -1,
    placeId: -1,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ],
  },
  getters: { // 对state做特定处理
    doneTodos(state){
      return state.todos.filter(({ done }) => !!done)
    },
    doneTodosCount(state, getters) {
      return state.count > 0 ? getters.doneTodos.length : 0
    },
    getTodoById: (state) => (id) => { // 返回一个函数, 不会缓存
      return state.todos.find(item => item.id === id)
    } 
  },
  mutations,  // 根级别的 mutation
  actions,    // 根级别的 action
  modules: {  // 模块级别
    dialog: moduleDialog,
    test: moduleTest
  },
  plugins: [pluginSnapshot, pluginTest()]
});

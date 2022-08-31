import Vue from 'vue'
import App from './App.vue' // 根组建
import store from './store'
import { router } from './router'
import '@/filters/global'
import '@/directive/index'
import '@/plugins/vant'

Vue.config.productionTip = false

// 根实例
const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// vm.$data; // 获取 data
// vm.$props; // 获取 props
// vm.$el; // 获取挂载元素
// vm.$options; // 获取 Vue 实例的初始选项
// vm.$parent; // 获取父实例
// vm.$root; // 获取根实例
// vm.$children; // 获取当前实例的直接子组件
// vm.$refs; // 获取持有注册过 ref 特性 的所有 DOM 元素和组件实例

// vm.$watch; // 观察 Vue 实例变化的一个表达式或计算属性函数
// vm.$set; // 向响应式对象中添加一个属性，并确保这个新属性同样是响应式的，且触发视图更新
// vm.$delete; // 删除对象的属性。如果对象是响应式的，确保删除能触发更新视图

console.log(vm.$root)
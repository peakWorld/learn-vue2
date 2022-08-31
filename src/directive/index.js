import Vue from 'vue'

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  }
})

// 使用地址: src/components/child/index.vue
Vue.directive('test', {
  bind(el, binding, vnode) {
    // 只调用一次，指令第一次绑定到元素时调用。
    // 在这里进行一次性的初始化设置。

    // el 指令所绑定的元素, 用来直接操作 DOM。
    el.innerHTML = binding.value

    // binding 指令属性
      // name 指令名, 不包括 v- 前缀
      // arg 指令参数 例如 v-test:name中的 name
      // modifiers 包含修饰符的对象
      // expression 指令表达式(字符串形式)
      // value 指令的绑定值
    console.log('binding', binding)

    // vnode 虚拟节点
      // vnode.context VueComponent, 直接获取data、methods中的属性和方法
    console.log('vnode', vnode)

    // 除了 el 之外，其它参数都应该是只读的. 
    // 通过 el 在钩子之间共享参数据
  },
  inserted() {
    // 被绑定元素插入父节点时调用(仅保证父节点存在，但不一定已被插入文档中)
  },
  update() {
    // 组件的 VNode 更新时调用(可能发生在其子 VNode 更新之前)
    // 指令的值可能发生了改变，也可能没有
  },
  componentUpdated () {
    // 所在组件的 VNode 及其子 VNode 全部更新后调用
  },
  unbind () {
    // 只调用一次，指令与元素解绑时调用。
  }
})

// 实践
Vue.directive('click-outside', {
  bind(el, binding, vnode) {
    el.event = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        if (typeof vnode.context[binding.expression] == 'function') {
          vnode.context[binding.expression](event)
        }
      }
    }
    document.body.addEventListener('click', el.event, false)
  },
  unbind(el) {
    document.body.removeEventListener('click', el.event, false)
  }
})
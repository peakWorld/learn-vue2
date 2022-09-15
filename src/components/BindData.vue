<template>
  <div>
    <div>
      <div>文本 {{ msg }}</div>
      <!-- 设置了v-once的元素、组件只渲染一次，跳过后续所有渲染过程; 该元素、组件及其所有的子节点将被视为静态内容 -->
      <div v-once>once {{ msg }}</div>
      <div v-html="msg"></div>
      <div v-html="msgHtml"></div>
      <div>name: {{ name }} /// _name: {{ $data.$name }}</div>
      <div>根数据 {{ $root.$data }}</div>
      <button @click="msg = '数据绑定更新'">更新操作</button>
      <button @click="changeName">修改名称(name)</button>
    </div>

    <div>
      <!-- 绑定属性 -->
      <div :id="name"></div>
      <!-- 动态特性 -->
      <div :[name]="name"></div> 

      <!-- class 绑定 -->
      <div class="red"></div>
      <div :class="{ red: isRed }"></div> 
      <div :class="[classA, classB, classObject]"></div>
      <div :class="[classA, { classB: isB, classC: isC }]"></div>

      <!-- style 绑定 -->
      <div :style="{ fontSize: size + 'px' }"></div>
      <div :style="[styleObjectA, styleObjectB]"></div>

      <!-- 绑定一个有属性的对象 -->
      <div v-bind="{ id: msg, 'other-attr': msgHtml }"></div>
    </div>

    <!-- 过滤器 -->
    <div>
      <div>{{ num | multiply(1100) | thousandth }}</div>
      <div :data-id="num | thousandth"></div>
    </div>

    <div style="margin-top: 20px">
      <span>{{ autoprops.name }}</span>
      <span>{{ testA }}</span>
      <button @click="editAutoProp">修改非初始化属性</button>
      <button @click="addAutoProp">新增响应式属性</button>
      <button @click="handleWObj">修改watch监听属性</button>
    </div>
  </div>
</template>

<script>
import { multiply } from '@/filters'
export default {
  name: 'bind-data',
  data() {
    // 只有当实例被创建时就已经存在于data中的属性才是响应式的（新增的属性等都不会触发视图的更新）
    return {
      msg: '数据绑定',
      msgHtml: '<p style="color:red">数据绑定html</p>',
      name: 'jack',
      $name: 'lucky', // 以_或$开头的property不会被Vue实例代理; 通过vm.$data.$name获取属性
      isRed: true,
      classA: 'jack-a',
      classB: 'jack-b',
      classObject: {
        'jack-c': true,
        'jack-d': false
      },
      isB: true,
      isC: false,
      size: 10,
      styleObjectA: {
        color: 'blue'
      },
      styleObjectB: {
        fontSize: '20px'
      },
      autoprops: {},
      num: 1,
      wObj: {
        x: 1
      }
    }
  },
  computed: { // 结果缓存, 除非依赖属性变化
    plusNum() {
      return this.num + 1
    },
    mlusNum: {
      get() {
        return this.num - 1
      },
      set (val) {
        this.num = val
      }
    }
  },
  watch: {
    msg(val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal)
    },
    name: 'watchUseMethod', // 方法名
    wObj: {
      handler () {
        console.log('wObj handler', arguments)
      },
      deep: true
    },
    'styleObjectA.color': 'watchUseMethod'
  },
  created () {
    // 修改初始化data数据
    this.msg = "created..."
  },
  mounted () {
    // 真实DOM挂载发生在beforeMount之后、mounted之前。
    this.msg = "mounted..."
  },
  methods: {
    addAutoProp() {
      console.log(this.$data)
      this.$set(this.autoprops, 'name', 'autojack')
      // 不能给根数据$data添加响应式属性
      // this.$set(this.$data, 'testA', 1)
    },
    editAutoProp() {
      // 必须先执行addAutoProp, 使name成为响应式属性, addProp更新操作才起效果。
      // 如果先执行addProp, 再执行addAutoProp无效。
      this.autoprops.name = 'jack'
    },
    changeName () {
      this.name = 'jack2'
      this.$name = 'lucky2'
    },
    watchUseMethod () {
      console.log('watchUseMethod', arguments)
    },
    handleWObj() {
      this.wObj.x = 2 // 必须特性deep: true, 才能出发handler回调
      // this.wObj = { ...this.wObj, x: 2 } // deep:false, 必须改变wObj属性的引用
    }
  },
  filters: {
    multiply
  }
}
</script>

<style lang="scss" scoped>

</style>
<template>
  <div>
    <span>{{ name }}</span>
    <button @click="handleClick">触发更新操作</button>
  </div>
</template>

<script>
  export default {
    name: 'lifecycles-vue',
    data() {
      return {
        name: '生命周期组建'
      }
    },
    beforeCreate() {
      // 初始化实例前，data、methods等不可获取
      console.log('beforeCreate...')
    },
    created () {
      // 实例初始化完成，此时可获取data里数据和methods事件，无法获取 DOM
      console.log('created...', this.name)
    },
    beforeMount () {
      // 虚拟 DOM 创建完成，此时未挂载到页面中，vm.$el可获取未挂载模板
      console.log('beforeMount...', this.$el)
    },
    mounted () {
      // 数据绑定完成，真实 DOM 已挂载到页面，vm.$el可获取真实 DOM
      console.log('mounted...', this.$el)

      // mounted 不会承诺所有的子组件也都一起被挂载
      // 如果希望等到整个视图都渲染完毕，可以用 vm.$nextTick
      this.$nextTick(function() {
        // 此处整个视图已渲染完毕
      });
    },
    beforeUpdate () {
      // 数据更新，DOM Diff 得到差异，未更新到页面
      // 适合在更新之前访问现有的 DOM
      console.log('beforeUpdate...')
    },
    updated () {
      // 数据更新，页面也已更新
      // 执行依赖于 DOM 的操作
      console.log('updated...')
    },
    beforeDestroy () {
      // 实例销毁前, 实例仍然完全可用
      console.log('beforeDestroy...')
    },
    destroyed () {
      // 实例销毁完成
      // Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁
      console.log('destroyed...')
    },
    methods: {
      handleClick () {
        this.name = '生命周期组建更新'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
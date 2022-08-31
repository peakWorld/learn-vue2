<template>
  <div>
    <div class="hello">{{ msg }}</div>
    <div class="tool">
      <router-link :to="{ name: 'lifecycles'}">生命周期</router-link>
      <router-link :to="{ name: 'bindData'}">数据绑定</router-link>
      <router-link :to="{ name: 'child'}">特性</router-link>
      <router-link :to="{ name: 'animation'}">动画</router-link>

      <!-- 声明式导航 -->
      <!-- <router-link :to="{ path: 'animation'}">动画</router-link> -->
      <!-- <router-link :to="{ path: '/hello-world/animation'}">动画</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'hello-world',
  props: {
    msg: String
  },
  data() {
    return {
      key: -1
    }
  },
  watch: {
    $route(to, from) { // 对路由变化做出响应
      // 响应 参数params或查询query的改变
      console.log('from', from, 'to', to)
    }
  }
}
</script>

<style scoped lang="scss">
.tool {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #feeefe;
  height: 60px;
  overflow-x: auto;

  & a {
    margin-right: 8px;
  }
}
</style>

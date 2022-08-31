<template>
  <div>
    <ChildSon @plus="onPlus" name="name-child" v-model="val">
      <div>默认插槽</div>
      <template #header>头部</template>
    </ChildSon>

    <!-- 不初始化, 符合条件才渲染 -->
    <div v-if="visible"></div> 
    <!-- 初始化, 符合条件才展示 -->
    <div v-show="visible"></div>
    
    <!-- v-for 优先级高于 v-if; v-if对每个item起效 -->
    <div v-for="(item, index) in list" :key="index">{{ item }}</div>
    <div v-for="(value, key, index) in obj" :key="key">{{ value }} {{ index }}</div>

    <!-- v-model 修饰符
      1. lazy 使用change事件
      2. number/trim
    -->
    <input v-model.lazy="val"/>
    <input :value="val" @input="val=$event.target.value"/>

    <input v-focus />

    <!-- 自定义命令 -->
    <div v-test:fly.a.b="test"></div>

    <!-- 切换组建 component -->
    <button @click="comKey = comKey === 1 ? 2 : 1">切换组建</button>
    <component :is="compName" v-if="comKey > -1"></component>
    <div @click="handleDialog">展示dialog</div>
  </div>
</template>

<script>
import ChildSon from './son.vue'
import SonA from './son-a.vue'
import SonB from './son-b.vue'
import { createDialog } from '@/utils'

export default {
  name: 'child-props',
  components: {
    ChildSon,
    SonA,
    SonB
  },
  props: {
    propA: String,
    propB: [String, Number],
    propC: {
      type: String,
      require: true
    },
    propD: {
      type: Object,
      default() {
        return { message: 'hello' }
      }
    },
    propF: {
      validator(value) {
        return ["success", "warning", "danger"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      visible: false,
      list: [],
      obj: {},
      val: 2,
      test: 'directive',
      comKey: 1
    }
  },
  computed: {
    compName() {
      if (this.comKey === 1) {
        return SonA
      } else {
        return SonB
      }
    }
  },
  created() {
    console.log('query', this.$route.query)
  },

  methods: {
    onPlus(val) {
      console.log('onPlus...', val)
    },
    handleDialog() {
      createDialog({ title: '测试' })
        .then(() => {
          console.log('reslove')
        })
        .catch(() => {
          console.log('reject')
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
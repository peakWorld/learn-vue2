<template>
  <div>
    <div>{{ count }}</div>
    <button @click="doStoreFuncs">doStoreFuncs</button>
    <button @click="doGetterFunc">doGetterFunc</button>
    <button @click="doMapAction">doMapAction</button>
    <button @click="doModuleJb">doModuleJb</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

  export default {
    name: 'data-vuex',
    data() {
      return {
        localCount: -1
      }
    },
    computed: {
      // ...mapState({
      //   count: state => state.count,
      //   countAlias: 'count', // 等同于 `state => state.count`
      //   countPlusLocalState(state) { // 获取本地状态
      //     return state.count + this.localCount
      //   }
      // })
      ...mapState([
        'count' // 映射this.count为store.state.count
      ]),
      // ...mapGetters({
      //   doneCount: 'doneTodosCount' // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
      // }),
      ...mapGetters([
        'doneTodos',
        'doneTodosCount',
        'getTodoById' // 函数
      ]),
      ...mapState('test', ['x']), // 局部状态
      ...mapGetters('test', ['t1']) // 局部getters
    },
    methods: {
      // ...mapMutations({
      //   add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
      // }),
      ...mapMutations([
        'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      ]),
      // ...mapActions({
      //   addSync: 'incrementAsync' // // 将 `this.addSync()` 映射为 `this.$store.dispatch('incrementAsync')`
      // }),
      ...mapActions([
        'incrementAsync', // // 将 `this.incrementAsync()` 映射为 `this.$store.dispatch('incrementAsync')`
        'incrementPromise'
      ]),
      ...mapMutations('test', ['addx']), // 局部actions
      ...mapActions('test', ['ta1']), // 局部actions
      doGetterFunc() {
        console.log('doGetterFunc => getTodoById:', this.getTodoById(1))
      },
      doStoreFuncs() { // 无需注入
        this.$store.state.count
        this.$store.getters.doneTodos
        // 触发mutations
        // this.$store.commit({ type: 'incrementN', amount: 10 })
        // this.$store.commit('incrementN', { amount: 10 })
        // 触发actions
        // this.$store.dispatch({ type: 'incrementAsync', amount: 10 })
        this.$store.dispatch('incrementAsync', { amount: 10 })
      },
      doMapAction() {
        this.incrementPromise({ amount: 3 }).then(() => {
          console.log('incrementPromise...')
        })
      },
      doModuleJb() {
        this.addx(1000)
        console.log('局部 state => x', this.$store.state.test.x)
        console.log('局部 getters => t1', this.$store.getters['test/t1'])
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
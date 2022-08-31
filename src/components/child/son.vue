<template>
  <div>
    <button @click="$emit('plus', 1)">emit plusEvent</button>
    <div>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot>
        <div>{{ tName }}</div>
      </main>
      <footer>
        <slot name="footer"> <!-- 插槽默认值 --> footer</slot>
      </footer>
    </div>
    <input :value="value" @input="$emit('input', $event.target.value)"/>
  </div>
</template>

<script>
export default {
  name: 'child-son',
  props: {
    name: String,
    value: [String, Number]
  },
  data() {
    return {
      tName: this.name, // 用props做初始值
    }
  },
}



</script>

<style lang="scss" scoped>

</style>
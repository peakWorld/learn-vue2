<template>
  <div id="app">
    <router-view class="app-router-view" />
    
    <component
      v-for="(item, index) in list"
      :key="index"
      :is="dialogName"
      :configs="item"
      :index="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Dialog from '@/components/Dialog.vue'

export default {
  name: 'App',
  components: {
    Dialog
  },
  computed: {
    ...mapState('dialog', ['list']),
    dialogName() {
      return Dialog
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>

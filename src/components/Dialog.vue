<template>
  <div class="dialog">
    <div class="dialog__bg"></div>
    <div class="dialog__content">
      <div class="dialog__content__header">{{ configs.title }}</div>
      <div class="dialog__content__bottom">
        <div @click="confirm">确定</div>
        <div @click="cancel">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'dialog-vue',
  props: {
    configs: Object,
    index: Number
  },
  methods: {
    ...mapMutations('dialog', ['delDialog']),
    confirm() {
      if (this.configs.resolve) {
        this.configs.resolve()
        this.delDialog(this.configs.index)
      }
    },
    cancel() {
      if (this.configs.reject) {
        this.configs.reject()
        this.delDialog(this.configs.index)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  &__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #efefef;
    opacity: 0.5;
  }

  &__content {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 150px;
    width: 200px;
    height: 200px;
    background: #fff;
    opacity: 1;

    &__bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;

      & > div:first-of-type {
        margin-right: 20px;
      }
    }
  }
}
</style>
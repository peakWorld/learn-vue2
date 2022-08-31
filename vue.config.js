const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: true,
  lintOnSave: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/scss/variables.scss";` // 前置样式变量
      }
    }
  }
})

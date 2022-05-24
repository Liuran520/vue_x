const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //不写的话会变成“严格模式”，关闭eslint.
  lintOnSave: false,
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/',//打包路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')//设置别名
    }
  },
  server: {
    port: 4000,//端口
    open: true,
    proxy: {
      '/api': ''//代理地址
    },
    cors: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/mixin/scss/mixin.scss";'
      }
    }
  }
})

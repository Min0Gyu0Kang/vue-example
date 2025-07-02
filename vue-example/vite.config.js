import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/vue-example/' // 리포지토리명이 'vue-example'이면 이렇게!
})
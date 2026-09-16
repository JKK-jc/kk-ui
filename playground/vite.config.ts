import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

const src = resolve(__dirname, '../packages/kk-ui/src')

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: 'kk-ui/style.css', replacement: resolve(src, 'styles.ts') },
      { find: 'kk-ui/styles', replacement: resolve(src, 'styles.ts') },
      { find: 'kk-ui/theme', replacement: resolve(src, 'theme/index.ts') },
      { find: 'kk-ui', replacement: resolve(src, 'index.ts') },
      { find: '@kk-ui', replacement: src },
    ],
  },
  server: {
    port: 5173,
  },
})

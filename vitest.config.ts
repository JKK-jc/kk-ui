/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@kk-ui': resolve(__dirname, 'packages/kk-ui/src'),
      'kk-ui': resolve(__dirname, 'packages/kk-ui/src/index.ts'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['packages/**/__tests__/**/*.test.ts'],
    setupFiles: [resolve(__dirname, 'vitest.setup.ts')],
    css: false,
    coverage: {
      provider: 'v8',
      include: ['packages/kk-ui/src/**/*.{ts,vue}'],
      exclude: [
        'packages/kk-ui/src/**/*.d.ts',
        'packages/kk-ui/src/index.ts',
        'packages/kk-ui/src/styles.ts',
      ],
      thresholds: {
        'packages/kk-ui/src/utils/**': { statements: 90, functions: 90 },
        'packages/kk-ui/src/hooks/**': { statements: 90, functions: 90 },
      },
    },
  },
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: resolve(__dirname, '../../tsconfig.json'),
      outDir: 'dist',
      include: ['src'],
      exclude: ['src/**/__tests__/**', 'src/styles.ts'],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      // index：组件库主入口；theme：主题 API 独立入口；styles：纯样式入口
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        theme: resolve(__dirname, 'src/theme/index.ts'),
        styles: resolve(__dirname, 'src/styles.ts'),
      },
      name: 'KkUI',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['vue', '@vueuse/core', '@iconify/utils', /^@iconify-json\//],
      output: {
        assetFileNames: (info) => {
          const name = info.names?.[0] ?? info.name ?? ''
          return name.endsWith('.css') ? 'style.css' : 'assets/[name][extname]'
        },
        exports: 'named',
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    minify: 'esbuild',
  },
})

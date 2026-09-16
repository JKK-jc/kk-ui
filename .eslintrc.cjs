module.exports = {
  root: true,
  env: { browser: true, es2022: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'coverage',
    'docs/.vitepress/cache',
    'docs/.vitepress/dist',
    '**/*.d.ts',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  overrides: [
    {
      // 测试里常用多个一次性桩组件，不应受单文件单组件约束
      files: ['**/__tests__/**/*.{ts,tsx,vue}'],
      rules: {
        'vue/one-component-per-file': 'off',
      },
    },
  ],
}

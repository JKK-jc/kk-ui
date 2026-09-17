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
    // 下面几条只管「怎么换行 / 缩进 / 要不要斜杠」，而排版是 prettier 的职责。
    // prettier 会按 printWidth 88 自行折行与缩进，也接受 void 元素带斜杠，
    // 保留这些规则只会与 prettier 互相打架（谁最后写谁赢，导致 lint 反复失败），
    // 故统一按 prettier 的口径对齐。
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-indent': 'off',
    'vue/html-self-closing': [
      'warn',
      {
        html: { void: 'always', normal: 'always', component: 'always' },
        svg: 'always',
        math: 'always',
      },
    ],
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

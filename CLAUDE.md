# KK UI 项目开发手册（AI 规则）

> 一套会呼吸的 Vue 3 组件库 · 项目规则  
> 适用于 Cursor / Windsurf / Claude Code / GitHub Copilot 等 AI 编程工具  
> 版本：v0.1.0　最后更新：2025

## 0. 项目基本信息

- 包名：`kk-ui`
- 组件前缀：`KkButton` / `<kk-button>`
- 样式前缀：`.kk-button`
- CSS 变量前缀：`--kk-`
- 仓库类型：pnpm monorepo
- 主包位置：`packages/kk-ui`
- 文档位置：`docs`（VitePress）
- 本地调试：`playground`
- 视觉风格：**柔光几何**（Soft Geometry）

## 1. 技术栈（禁止更改）

- Vue 3.4+ `<script setup>` + TypeScript 5.4+
- Vite 5 构建，Rollup library mode
- pnpm 8+ 包管理
- VitePress 1.x 文档
- Vitest + @vue/test-utils 测试
- SCSS + CSS 变量 + BEM
- Changesets 版本管理

## 2. 目录规范（严格遵守）

```
packages/kk-ui/src/
├─ components/
│  └─ button/
│     ├─ Button.vue
│     ├─ types.ts
│     ├─ style.scss
│     ├─ __tests__/button.test.ts
│     ├─ index.ts
│     └─ README.md
├─ theme/
│  ├─ tokens.scss
│  ├─ semantic.scss
│  ├─ themes/{light,dark,soft,cyber}.scss
│  ├─ mixins.scss
│  └─ index.ts
├─ hooks/
│  ├─ useNamespace.ts
│  ├─ useTheme.ts
│  └─ useId.ts
├─ utils/
│  ├─ withInstall.ts
│  ├─ is.ts
│  └─ index.ts
├─ icons/
├─ locale/
├─ index.ts
└─ styles.ts
```

## 3. 组件开发规则

### 3.1 每个组件的必备文件

- `Xxx.vue` —— 主组件，`<script setup lang="ts">`
- `types.ts` —— 所有对外类型
- `style.scss` —— 组件样式
- `index.ts` —— 带 `withInstall` 的导出
- `__tests__/xxx.test.ts` —— 至少 3 个用例
- `README.md` —— 组件简述

### 3.2 命名

- 组件目录 kebab-case：`input-number/`
- 组件文件 PascalCase：`InputNumber.vue`
- 组件导出 PascalCase 且带前缀：`KkInputNumber`
- CSS BEM：`.kk-input-number__suffix--disabled`
- Props camelCase：`modelValue` / `showIcon`
- 事件 kebab-case：`update:modelValue` / `change`
- 插槽 kebab-case：`#prefix` / `#suffix`

### 3.3 统一 Props

所有可交互组件必须支持：

```ts
interface CommonProps {
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
}
```

### 3.4 组件模板（照抄结构，只改具体逻辑）

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import type { XxxProps } from './types'

defineOptions({ name: 'KkXxx', inheritAttrs: false })

const props = withDefaults(defineProps<XxxProps>(), {/* 默认值 */})
const emit = defineEmits<{ change: [value: string] }>()

const ns = useNamespace('xxx')
const classes = computed(() => [ns.b(), ns.m(props.size)])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
```

### 3.5 样式规则

- 所有样式写在 `style.scss`，引用 CSS 变量，禁止硬编码颜色
- 颜色用 `var(--kk-color-*)`
- 圆角用 `var(--kk-radius-*)`
- 间距用 `var(--kk-space-*)`
- 阴影用 `var(--kk-shadow-*)`
- 动效用 `var(--kk-duration-*)` + `var(--kk-ease-*)`
- 禁止使用全局标签选择器（如 `button {}`）
- 禁止 `!important`（除非覆盖第三方库）

## 4. 主题系统规则

- 三层 Token：Primitive → Semantic → Component
- 主题通过 `[data-kk-theme="xxx"]` 切换
- 新组件必须验证 4 套主题（light/dark/soft/cyber）下均正常
- 不允许在组件内直接改 `--kk-color-primary` 值

## 5. TypeScript 规则

- 禁止 `any`（除非真的有理由，需注释说明）
- Props 用 `defineProps<XxxProps>()`
- Emits 用 `defineEmits<{ ... }>()`
- 所有对外类型放 `types.ts` 并从 `index.ts` 导出
- 用 `withDefaults` 提供默认值，不在模板里写 `??`

## 6. 测试规则

- 每个组件至少测试：默认渲染 / Props 生效 / Emits 触发
- 禁用或 loading 状态必须测试
- 使用 `mount` 而非 `shallowMount`（除非有性能问题）
- 覆盖率目标：工具函数 90%+，组件逻辑分支 70%+

## 7. 文档规则

- 组件文档路径：`docs/components/{name}.md`
- 每个组件页必须包含：何时使用 / 代码演示 / API 表格 / 设计规范
- 示例文件放：`docs/components/demos/{name}/basic.vue`
- 用 `<Demo src="./demos/xxx/basic.vue" />` 引入示例

## 8. 提交规则

commit message 遵循 Angular 规范：

```
feat(button): 新增 block 属性
fix(input): 修复 clearable 不生效
docs(theme): 补充自定义主题说明
style: 调整圆角 token
refactor(core): 重构 useNamespace
test(button): 补充 disabled 测试
chore: 升级 vite 到 5.3
```

## 9. AI 行为准则

1. **写完组件必须同步**：组件 + 类型 + 样式 + 测试 + 文档 + 导出，一个不能少
2. **不要自创 API**：命名先参考已有组件（Button / Card 等）风格
3. **不要引入新的运行时依赖**（如 lodash、moment）除非明确允许
4. **不要删掉没让删的代码**
5. **不要用 `<style scoped>`**，样式一律走独立 `.scss`
6. **改代码前先读现有同类组件**，保持一致
7. **不确定时先问**，不要瞎猜
8. **输出代码必须是完整文件**，不要用 `// ...省略` 占位

## 10. 当前进度

- ✅ 项目脚手架
- ✅ 设计 token（4 套主题）
- ✅ useNamespace
- ✅ Button 组件
- ✅ Icon 组件
- ✅ Space / Divider / Card
- ✅ Input / Form
- ✅ Modal（头部 / 底部插槽 + 拖动，默认不销毁 DOM）

**默认下一步：除非指定，从当前进度往下做。**

## 11. 快速自检清单（每次交付前跑一遍）

- [ ] 组件文件结构完整？
- [ ] Props / Events / Slots 都导出类型了吗？
- [ ] 样式全部用 CSS 变量？
- [ ] 4 套主题下视觉正常？
- [ ] 有测试且 `pnpm test` 通过？
- [ ] 有文档页和 Demo？
- [ ] `pnpm lint` 无错误？
- [ ] `pnpm build` 能成功？

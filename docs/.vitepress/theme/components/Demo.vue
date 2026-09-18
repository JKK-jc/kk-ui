<script setup lang="ts">
import { computed, onErrorCaptured, ref, type Component } from 'vue'
import { useLocale } from 'kk-ui'
import { DOCS_TEXT_EN } from '../i18n/docs-dict'

const props = withDefaults(
  defineProps<{
    /** 示例文件路径，相对于 docs/components/demos */
    src?: string
    /** 示例标题 */
    title?: string
    /** 示例说明 */
    desc?: string
    /** 内容区是否纵向排列 */
    column?: boolean
    /** 是否默认展开代码 */
    defaultOpen?: boolean
  }>(),
  {
    src: '',
    title: '',
    desc: '',
    column: false,
    defaultOpen: false,
  }
)

/**
 * 示例统一放在 `docs/components/demos/**`。
 * eager 预注册保证 SSR 与客户端渲染一致；
 * 同时以 raw 方式导入源码，供「查看代码 / 复制」使用。
 */
const components = import.meta.glob<{ default: Component }>(
  '../../../components/demos/**/*.vue',
  { eager: true }
)
const sources = import.meta.glob<string>('../../../components/demos/**/*.vue', {
  eager: true,
  query: '?raw',
  import: 'default',
})

const { locale, t } = useLocale()

const error = ref('')
const open = ref(props.defaultOpen)
const copied = ref(false)
let copiedTimer: ReturnType<typeof setTimeout> | undefined

/**
 * 示例标题本地化：非中文语言下按中文原题查词条表；查不到时回退中文原题，
 * 保证任何情况下都有可读文案。
 */
const displayTitle = computed(() => {
  if (!props.title) return ''
  if (String(locale.value).toLowerCase().startsWith('zh')) return props.title
  return DOCS_TEXT_EN[props.title] ?? props.title
})

onErrorCaptured((err) => {
  error.value = err instanceof Error ? err.message : String(err)
  return false
})

function resolveKey(map: Record<string, unknown>): string | undefined {
  if (!props.src) return undefined
  const normalized = props.src.replace(/^\.\//, '')
  return Object.keys(map).find((path) => path.endsWith(normalized))
}

const component = computed<Component | undefined>(() => {
  const key = resolveKey(components)
  return key ? components[key].default : undefined
})

const source = computed(() => {
  const key = resolveKey(sources)
  return key ? sources[key] : ''
})

const ESCAPE_RE = /&/g
const escapeHtml = (value: string): string =>
  value.replace(ESCAPE_RE, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/**
 * 轻量语法高亮：只识别注释、标签、属性名与字符串，
 * 输出为纯字符串，保证 SSR / CSR 渲染一致。
 */
function highlight(code: string): string {
  const pattern =
    /(<!--[\s\S]*?-->)|(<\/?[A-Za-z][\w-]*)|("[^"]*"|'[^']*')|([A-Za-z_@:#][\w-:@.]*(?=\s*=))/g

  let html = ''
  let last = 0
  let match: RegExpExecArray | null

  while ((match = pattern.exec(code)) !== null) {
    html += escapeHtml(code.slice(last, match.index))
    const cls = match[1] ? 'cmt' : match[2] ? 'tag' : match[3] ? 'str' : 'attr'
    html += `<span class="kk-code__${cls}">${escapeHtml(match[0])}</span>`
    last = match.index + match[0].length
  }

  return html + escapeHtml(code.slice(last))
}

const highlighted = computed(() => highlight(source.value))

function toast(message: string) {
  window.dispatchEvent(new CustomEvent('kk-toast', { detail: message }))
}

async function copyCode() {
  if (!source.value) return
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(source.value)
    } else {
      const area = document.createElement('textarea')
      area.value = source.value
      area.style.position = 'fixed'
      area.style.opacity = '0'
      document.body.appendChild(area)
      area.select()
      document.execCommand('copy')
      document.body.removeChild(area)
    }
    copied.value = true
    toast(t('docs.demo.copySuccess'))
    clearTimeout(copiedTimer)
    copiedTimer = setTimeout(() => (copied.value = false), 1600)
  } catch {
    toast(t('docs.demo.copyFail'))
  }
}
</script>

<template>
  <div class="kk-demo">
    <div v-if="title || desc" class="kk-demo__head">
      <div v-if="title" class="kk-demo__title">{{ displayTitle }}</div>
      <div v-if="desc" class="kk-demo__desc">{{ desc }}</div>
    </div>

    <div class="kk-demo__body" :class="{ 'kk-demo__body--col': column }">
      <component :is="component" v-if="component && !error" />
      <pre v-else-if="error" class="kk-demo__error"
        >{{ t('docs.demo.loadFail') }}：{{ error }}</pre>
      <slot v-else />
    </div>

    <div v-if="source" class="kk-demo__bar">
      <button type="button" @click="open = !open">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
        </svg>
        {{ open ? t('docs.demo.hideCode') : t('docs.demo.viewCode') }}
      </button>
      <div class="kk-demo__spacer" />
      <button type="button" @click="copyCode">
        {{ copied ? t('docs.demo.copied') : t('docs.demo.copy') }}
      </button>
    </div>

    <div v-if="source" class="kk-demo__code" :class="{ 'is-open': open }">
      <pre><code v-html="highlighted" /></pre>
    </div>
  </div>
</template>

<style>
.kk-demo {
  margin-bottom: var(--kk-space-5);
  border: 1px solid var(--kk-border-color);
  border-radius: var(--kk-radius-lg);
  background: var(--kk-bg-container);
  overflow: hidden;
  transition:
    border-color var(--kk-duration-slow) var(--kk-ease-out),
    border-radius var(--kk-duration-slow) var(--kk-ease-out);
}

.kk-demo__head {
  padding: var(--kk-space-5) var(--kk-space-5) var(--kk-space-4);
}

.kk-demo__title {
  font-weight: 600;
  color: var(--kk-text-primary);
  margin-bottom: 4px;
}

.kk-demo__desc {
  font-size: var(--kk-font-size-sm);
  color: var(--kk-text-secondary);
}

.kk-demo__body {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--kk-space-3);
  padding: var(--kk-space-5) var(--kk-space-6) var(--kk-space-6);
  background-image: radial-gradient(
    circle at 1px 1px,
    var(--kk-demo-dot) 1px,
    transparent 0
  );
  background-size: 16px 16px;
}

.kk-demo__body--col {
  flex-direction: column;
  align-items: flex-start;
}

.kk-demo__error {
  margin: 0;
  color: var(--kk-color-danger);
  font-family: var(--kk-font-mono);
  font-size: var(--kk-font-size-sm);
  white-space: pre-wrap;
}

.kk-demo__bar {
  display: flex;
  align-items: center;
  gap: var(--kk-space-2);
  padding: 8px 14px;
  border-top: 1px solid var(--kk-border-color);
  background: var(--kk-bg-subtle);
}

.kk-demo__bar button {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border: none;
  border-radius: var(--kk-radius-sm);
  background: transparent;
  color: var(--kk-text-secondary);
  font-family: inherit;
  font-size: var(--kk-font-size-xs);
  cursor: pointer;
  transition: all var(--kk-duration-fast) var(--kk-ease-out);
}

.kk-demo__bar button:hover {
  background: var(--kk-bg-hover);
  color: var(--kk-text-primary);
}

.kk-demo__spacer {
  flex: 1;
}

.kk-demo__code {
  display: none;
  border-top: 1px solid var(--kk-border-color);
}

.kk-demo__code.is-open {
  display: block;
}

.kk-demo__code pre {
  margin: 0;
  padding: var(--kk-space-5) var(--kk-space-6);
  background: var(--kk-bg-code);
  color: #e8eaf2;
  font-family: var(--kk-font-mono);
  font-size: var(--kk-font-size-sm);
  line-height: 1.75;
  overflow-x: auto;
}

.kk-demo__code code {
  font-family: inherit;
  font-size: inherit;
  background: transparent;
  color: inherit;
  padding: 0;
}

.kk-code__tag {
  color: #7dd3fc;
}

.kk-code__attr {
  color: #c6c2ff;
}

.kk-code__str {
  color: #86efac;
}

.kk-code__cmt {
  color: #6e7789;
}
</style>

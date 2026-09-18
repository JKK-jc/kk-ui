import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import { useLocale } from 'kk-ui'
import { DOCS_SIDEBAR_EN, DOCS_TEXT_EN } from './docs-dict'

/**
 * 让语言切换「作用于全局」。
 *
 * VitePress 的 `useData().theme` 是 `computed(() => shallowRef.themeConfig)`：
 * 运行时改 `sidebar` 不会触发重渲染（`siteDataRef` 是 shallowRef，且 themeConfig 会被
 * 序列化进客户端），所以侧边栏与正文标题无法靠配置响应式切换。
 * 这里改为「渲染后按词条替换文本」——只动文本节点，保留 VitePress 注入的锚点链接，
 * 并把中文原文缓存在 `data-i18n-src` 上以便切回中文时还原。
 */

/** 取标题里「最后一个非空文本节点」，避开 `.header-anchor` 的零宽字符 */
function lastInlineTextNode(el: HTMLElement): Text | null {
  let found: Text | null = null
  el.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && (node.nodeValue ?? '').trim()) {
      found = node as Text
    }
  })
  return found
}

export function useDocsText(): void {
  const { locale } = useLocale()
  const route = useRoute()

  function apply(): void {
    if (typeof document === 'undefined') return
    const isZh = String(locale.value).toLowerCase().startsWith('zh')

    // 侧边栏：分组标题按文案查表，条目按 href 查表（更稳）
    document
      .querySelectorAll<HTMLElement>('.VPSidebar .VPSidebarItem .text')
      .forEach((el) => {
        const src = el.dataset.i18nSrc ?? (el.textContent ?? '').trim()
        el.dataset.i18nSrc = src
        const href = el.closest('a')?.getAttribute('href') ?? ''
        const en = (href && DOCS_SIDEBAR_EN[href]) || DOCS_TEXT_EN[src]
        if (en) el.textContent = isZh ? src : en
      })

    // 正文标题（h2 / h3）
    document
      .querySelectorAll<HTMLElement>('.vp-doc h2, .vp-doc h3')
      .forEach((heading) => {
        const node = lastInlineTextNode(heading)
        if (!node) return
        const src = heading.dataset.i18nSrc ?? (node.nodeValue ?? '').trim()
        heading.dataset.i18nSrc = src
        const en = DOCS_TEXT_EN[src]
        if (en) node.nodeValue = isZh ? src : en
      })

    // 右侧「本页目录」（含移动端下拉），文本与正文标题一致
    document
      .querySelectorAll<HTMLElement>(
        '.VPDocAsideOutline .outline-link, .VPLocalNavOutlineDropdown .outline-link'
      )
      .forEach((link) => {
        const node = lastInlineTextNode(link)
        if (!node) return
        const src = link.dataset.i18nSrc ?? (node.nodeValue ?? '').trim()
        link.dataset.i18nSrc = src
        const en = DOCS_TEXT_EN[src]
        if (en) node.nodeValue = isZh ? src : en
      })
  }

  function schedule(): void {
    void nextTick(() => {
      apply()
      if (typeof window !== 'undefined') window.requestAnimationFrame(apply)
    })
  }

  onMounted(schedule)
  watch([locale, () => route.path], schedule)
}

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import { useLocale } from 'kk-ui'

withDefaults(defineProps<{ mobile?: boolean }>(), { mobile: false })

const { t } = useLocale()
const route = useRoute()

const items = computed(() =>
  [
    { key: 'guide', match: '/guide', link: '/guide/introduction' },
    { key: 'components', match: '/components', link: '/components/' },
    { key: 'theme', match: '/theme', link: '/theme/' },
  ].map((item) => ({ ...item, text: t(`docs.nav.${item.key}`) }))
)

function isActive(match: string): boolean {
  const path = route.path
  return path === match || path.startsWith(`${match}/`)
}
</script>

<template>
  <nav class="kk-docs-nav" :class="{ 'is-mobile': mobile }">
    <a
      v-for="item in items"
      :key="item.key"
      :href="withBase(item.link)"
      class="kk-docs-nav__link"
      :class="{ 'is-active': isActive(item.match) }"
    >
      {{ item.text }}
    </a>
  </nav>
</template>

<style scoped>
.kk-docs-nav {
  display: flex;
  align-items: center;
  gap: 2px;
}

.kk-docs-nav.is-mobile {
  flex-direction: column;
  align-items: stretch;
  gap: 2px;
  padding: var(--kk-space-2) var(--kk-space-3);
  border-bottom: 1px solid var(--kk-border-color);
}

.kk-docs-nav__link {
  display: block;
  padding: 6px 12px;
  border-radius: var(--kk-radius-sm);
  color: var(--kk-text-secondary);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  transition:
    color var(--kk-duration-fast) var(--kk-ease-out),
    background var(--kk-duration-fast) var(--kk-ease-out);
}

.kk-docs-nav__link:hover {
  color: var(--kk-text-primary);
  background: var(--kk-bg-hover);
}

.kk-docs-nav__link.is-active {
  color: var(--kk-color-primary);
}

.kk-docs-nav.is-mobile .kk-docs-nav__link {
  padding: 10px 12px;
  font-size: 15px;
}
</style>

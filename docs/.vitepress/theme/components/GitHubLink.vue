<script setup lang="ts">
/**
 * 导航栏 GitHub 仓库入口。
 *
 * 放在主体切换 / 语言切换旁边，方便直接从文档站跳到源码仓库。
 * 仓库地址集中在 `REPO_URL`，换仓库只改这一处。
 */
const REPO_URL = 'https://github.com/JKK-jc/kk-ui'
</script>

<template>
  <a
    class="kk-github-link"
    :href="REPO_URL"
    target="_blank"
    rel="noopener noreferrer"
    title="KK UI 源码仓库"
    aria-label="KK UI GitHub 仓库"
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
      />
    </svg>
    <span class="kk-github-link__text">GitHub</span>
  </a>
</template>

<style>
.kk-github-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  margin-left: 10px;
  border: 1px solid var(--kk-border-color);
  border-radius: var(--kk-radius-full);
  background: var(--kk-bg-subtle);
  color: var(--kk-text-secondary);
  font-size: var(--kk-font-size-xs);
  font-weight: 500;
  text-decoration: none;
  transition: all var(--kk-duration-base) var(--kk-ease-out);
}

.kk-github-link:hover {
  border-color: var(--kk-color-primary);
  color: var(--kk-color-primary);
}

.kk-github-link:focus-visible {
  outline: none;
  box-shadow: var(--kk-focus-ring);
}

/* 窄屏只留图标，避免挤压导航项 */
@media (max-width: 960px) {
  .kk-github-link__text {
    display: none;
  }

  .kk-github-link {
    padding: 0 9px;
  }
}
</style>

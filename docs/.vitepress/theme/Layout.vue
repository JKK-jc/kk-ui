<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import KkToast from './components/KkToast.vue'
import KkDocMeta from './components/KkDocMeta.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <ThemeSwitcher />
    </template>
    <template #aside-outline-after>
      <KkDocMeta />
    </template>
  </Layout>
  <KkToast />
</template>

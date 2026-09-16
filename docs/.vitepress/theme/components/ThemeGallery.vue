<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getTheme, setTheme, useTheme } from 'kk-ui'

interface ThemePreset {
  name: string
  label: string
  tag: string
  page: string
  primary: string
  border: string
  container: string
}

const PRESETS: ThemePreset[] = [
  {
    name: 'light',
    label: 'Light',
    tag: '默认',
    page: '#F7F8FC',
    primary: '#5B4FE9',
    border: '#E0E3EC',
    container: '#FFFFFF',
  },
  {
    name: 'dark',
    label: 'Dark',
    tag: '暗色',
    page: '#0B0D12',
    primary: '#8B80FF',
    border: '#2A3040',
    container: '#1F242F',
  },
  {
    name: 'soft',
    label: 'Soft',
    tag: '柔光',
    page: '#FFF9FB',
    primary: '#E879A6',
    border: '#F5DDE7',
    container: '#FFFFFF',
  },
  {
    name: 'cyber',
    label: 'Cyber',
    tag: '赛博',
    page: '#05080F',
    primary: '#00E5FF',
    border: '#1E3A52',
    container: '#0C1220',
  },
]

const { theme } = useTheme()
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
  if (!getTheme()) setTheme('light')
})

function select(name: string) {
  setTheme(name)
}
</script>

<template>
  <div class="kk-grid kk-grid--4">
    <button
      v-for="preset in PRESETS"
      :key="preset.name"
      class="kk-theme-card"
      :class="{ 'is-active': mounted && theme === preset.name }"
      type="button"
      @click="select(preset.name)"
    >
      <div class="kk-theme-card__preview" :style="{ background: preset.page }">
        <div
          class="kk-theme-card__bar"
          :style="{ background: preset.primary, width: '60%' }"
        />
        <div
          class="kk-theme-card__bar"
          :style="{ background: preset.border, width: '90%' }"
        />
        <div class="kk-theme-card__row">
          <div
            class="kk-theme-card__chip"
            :style="{
              background: preset.container,
              border: `1px solid ${preset.border}`,
            }"
          />
          <div class="kk-theme-card__chip" :style="{ background: preset.primary }" />
        </div>
      </div>
      <div class="kk-theme-card__meta">
        <span class="kk-theme-card__name">{{ preset.label }}</span>
        <span class="kk-theme-card__tag">{{ preset.tag }}</span>
      </div>
    </button>
  </div>
</template>

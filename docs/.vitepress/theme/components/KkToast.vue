<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const visible = ref(false)
const text = ref('')
let timer: ReturnType<typeof setTimeout> | undefined

function onToast(event: Event) {
  const detail = (event as CustomEvent<string>).detail
  text.value = detail || ''
  visible.value = true
  clearTimeout(timer)
  timer = setTimeout(() => {
    visible.value = false
  }, 1800)
}

onMounted(() => {
  window.addEventListener('kk-toast', onToast)
})

onBeforeUnmount(() => {
  window.removeEventListener('kk-toast', onToast)
  clearTimeout(timer)
})
</script>

<template>
  <div
    class="kk-toast"
    :class="{ 'is-show': visible }"
    role="status"
    aria-live="polite"
  >
    <span class="kk-toast__dot" />
    <span>{{ text }}</span>
  </div>
</template>

<style>
.kk-toast {
  position: fixed;
  left: 50%;
  top: 80px;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border: 1px solid var(--kk-border-color);
  border-radius: var(--kk-radius-md);
  background: var(--kk-bg-elevated);
  box-shadow: var(--kk-shadow-lg);
  color: var(--kk-text-primary);
  font-size: var(--kk-font-size-sm);
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -12px);
  transition: all var(--kk-duration-base) var(--kk-ease-out);
}

.kk-toast.is-show {
  opacity: 1;
  transform: translate(-50%, 0);
}

.kk-toast__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--kk-color-success);
}
</style>

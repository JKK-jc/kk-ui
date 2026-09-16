import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function withInstall<T extends { name?: string }>(
  component: T,
  name?: string
): SFCWithInstall<T> {
  const comp = component as SFCWithInstall<T>
  comp.install = (app: App) => {
    const finalName = name || component.name
    if (finalName) {
      app.component(finalName, comp)
    }
  }
  return comp
}

/**
 * 批量注册组件：`components.map(withInstallGroup)` 或直接传入数组
 */
export function withInstallGroup<T extends { name?: string }>(
  components: T[]
): SFCWithInstall<T>[] {
  return components.map((component) => withInstall(component))
}

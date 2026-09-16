const BLOCK = 'kk'

export interface Namespace {
  b: () => string
  e: (el: string) => string
  m: (mod: string) => string
  em: (el: string, mod: string) => string
  is: (state: string, active?: boolean) => string
  cssVar: (name: string) => string
  cssVarBlock: (name: string) => string
  cssVarName: (name: string) => string
}

export function useNamespace(block: string): Namespace {
  const full = `${BLOCK}-${block}`

  const b = () => full
  const e = (el: string) => `${full}__${el}`
  const m = (mod: string) => `${full}--${mod}`
  const em = (el: string, mod: string) => `${full}__${el}--${mod}`
  const is = (state: string, active = true) => (active ? `is-${state}` : '')
  const cssVarName = (name: string) => `--${BLOCK}-${name}`
  const cssVar = (name: string) => `var(${cssVarName(name)})`
  const cssVarBlock = (name: string) => `var(--${full}-${name})`

  return { b, e, m, em, is, cssVar, cssVarBlock, cssVarName }
}

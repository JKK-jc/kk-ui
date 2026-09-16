const toString = Object.prototype.toString

export function isUndefined(val: unknown): val is undefined {
  return val === undefined
}

export function isNull(val: unknown): val is null {
  return val === null
}

export function isNil(val: unknown): val is null | undefined {
  return val === undefined || val === null
}

export function isString(val: unknown): val is string {
  return typeof val === 'string'
}

export function isNumber(val: unknown): val is number {
  return typeof val === 'number' && !Number.isNaN(val)
}

export function isBoolean(val: unknown): val is boolean {
  return typeof val === 'boolean'
}

export function isFunction(val: unknown): val is (...args: unknown[]) => unknown {
  return typeof val === 'function'
}

export function isArray<T = unknown>(val: unknown): val is T[] {
  return Array.isArray(val)
}

export function isObject(val: unknown): val is Record<string, unknown> {
  return toString.call(val) === '[object Object]'
}

export function isPlainObject(val: unknown): val is Record<string, unknown> {
  if (!isObject(val)) return false
  const proto = Object.getPrototypeOf(val)
  return proto === null || proto === Object.prototype
}

export function isEmpty(val: unknown): boolean {
  if (isNil(val)) return true
  if (isString(val) || isArray(val)) return val.length === 0
  if (isObject(val)) return Object.keys(val).length === 0
  return false
}

export function isElement(val: unknown): val is HTMLElement {
  return typeof HTMLElement !== 'undefined' && val instanceof HTMLElement
}

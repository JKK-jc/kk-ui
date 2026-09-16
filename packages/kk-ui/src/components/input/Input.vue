<script setup lang="ts">
import { computed, inject, ref, nextTick } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { FORM_CONTEXT_KEY, FORM_ITEM_CONTEXT_KEY } from '../form/context'
import type { InputProps } from './types'

defineOptions({ name: 'KkInput', inheritAttrs: false })

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  readonly: false,
  clearable: false,
  showPassword: false,
  invalid: false,
  errorMessage: '',
  block: false,
  autofocus: false,
  name: '',
  autocomplete: 'off',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  input: [value: string]
  change: [value: string]
  clear: []
  focus: [e: FocusEvent]
  blur: [e: FocusEvent]
  keydown: [e: KeyboardEvent]
  enter: [e: KeyboardEvent]
}>()

const ns = useNamespace('input')

const formContext = inject(FORM_CONTEXT_KEY, undefined)
const formItem = inject(FORM_ITEM_CONTEXT_KEY, undefined)

const inputRef = ref<HTMLInputElement>()
const focused = ref(false)
const passwordVisible = ref(false)

const isDisabled = computed(() => props.disabled || Boolean(formContext?.disabled))
const mergedSize = computed(() => props.size ?? formContext?.size ?? 'medium')
const isInvalid = computed(() => props.invalid || Boolean(formItem?.message?.value))

const nativeType = computed(() => {
  if (props.showPassword) {
    return passwordVisible.value ? 'text' : 'password'
  }
  return props.type
})

const displayValue = computed(() =>
  props.modelValue === undefined || props.modelValue === null
    ? ''
    : String(props.modelValue)
)

const showClear = computed(
  () =>
    props.clearable &&
    !isDisabled.value &&
    !props.readonly &&
    displayValue.value.length > 0
)

const classes = computed(() => [ns.b(), ns.is('block', props.block)])

const controlClasses = computed(() => [
  ns.e('control'),
  ns.em('control', mergedSize.value),
  ns.is('disabled', isDisabled.value),
  ns.is('focused', focused.value),
  ns.is('readonly', props.readonly),
  ns.is('invalid', isInvalid.value),
])

function handleInput(e: Event) {
  const value = (e.target as HTMLInputElement).value
  emit('update:modelValue', value)
  emit('input', value)
  void formItem?.validate('change')
}

function handleChange(e: Event) {
  emit('change', (e.target as HTMLInputElement).value)
  void formItem?.validate('change')
}

function handleFocus(e: FocusEvent) {
  focused.value = true
  emit('focus', e)
}

function handleBlur(e: FocusEvent) {
  focused.value = false
  emit('blur', e)
  void formItem?.validate('blur')
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter') emit('enter', e)
  emit('keydown', e)
}

function handleClear() {
  emit('update:modelValue', '')
  emit('input', '')
  emit('change', '')
  emit('clear')
  nextTick(() => inputRef.value?.focus())
}

function togglePassword() {
  passwordVisible.value = !passwordVisible.value
  nextTick(() => {
    const el = inputRef.value
    if (!el) return
    const end = el.value.length
    el.setSelectionRange(end, end)
  })
}

function focus() {
  inputRef.value?.focus()
}

function blur() {
  inputRef.value?.blur()
}

function select() {
  inputRef.value?.select()
}

defineExpose({ focus, blur, select, inputRef })
</script>

<template>
  <div :class="classes">
    <div :class="ns.e('row')" v-bind="$attrs">
      <span v-if="$slots.prepend" :class="ns.e('prepend')">
        <slot name="prepend" />
      </span>

      <div :class="controlClasses">
        <span v-if="$slots.prefix" :class="ns.e('prefix')">
          <slot name="prefix" />
        </span>

        <input
          ref="inputRef"
          :class="ns.e('inner')"
          :type="nativeType"
          :value="displayValue"
          :placeholder="placeholder"
          :disabled="isDisabled"
          :readonly="readonly"
          :maxlength="maxlength"
          :minlength="minlength"
          :name="name"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :aria-invalid="isInvalid"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @keydown="handleKeydown"
        />

        <button
          v-if="showClear"
          :class="ns.e('clear')"
          type="button"
          aria-label="清空"
          @click="handleClear"
        >
          <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
            <path
              d="M5 5L19 19M19 5L5 19"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <button
          v-if="showPassword"
          :class="ns.e('password')"
          type="button"
          :aria-label="passwordVisible ? '隐藏密码' : '显示密码'"
          @click="togglePassword"
        >
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path
              d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />
            <circle
              cx="12"
              cy="12"
              r="2.5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />
            <path
              v-if="!passwordVisible"
              d="M4 20L20 4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <span v-if="$slots.suffix" :class="ns.e('suffix')">
          <slot name="suffix" />
        </span>
      </div>

      <span v-if="$slots.append" :class="ns.e('append')">
        <slot name="append" />
      </span>
    </div>

    <div v-if="errorMessage" :class="ns.e('error')" role="alert">
      <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        />
        <path
          d="M12 7v6M12 16.5v.5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
      <span>{{ errorMessage }}</span>
    </div>
  </div>
</template>

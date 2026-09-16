<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, provide, ref, watch } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { FORM_CONTEXT_KEY, FORM_ITEM_CONTEXT_KEY } from '../form/context'
import { getValueByPath, mergeRules, validateField } from '../form/validator'
import type { FormItemContext, FormItemProps, FormRuleTrigger } from '../form/types'

defineOptions({ name: 'KkFormItem', inheritAttrs: false })

const props = withDefaults(defineProps<FormItemProps>(), {
  prop: '',
  label: '',
  labelWidth: '',
  required: false,
  rules: () => [],
  showMessage: true,
  error: '',
})

const ns = useNamespace('form-item')

const form = inject(FORM_CONTEXT_KEY, undefined)
const message = ref('')
const validating = ref(false)

const labelPosition = computed(() => form?.labelPosition ?? 'right')

const labelWidth = computed(() => {
  const width = props.labelWidth || form?.labelWidth || ''
  return typeof width === 'number' ? `${width}px` : width
})

const showMessage = computed(() => props.showMessage && (form?.showMessage ?? true))

const rules = computed(() => mergeRules(form?.rules?.[props.prop], props.rules))

const isRequired = computed(
  () => props.required || rules.value.some((rule) => rule.required)
)

const fieldValue = computed(() =>
  props.prop && form ? getValueByPath(form.model, props.prop) : undefined
)

const displayedError = computed(() => props.error || message.value)

const classes = computed(() => [
  ns.b(),
  ns.m(`label-${labelPosition.value}`),
  ns.is('required', isRequired.value),
  ns.is('error', Boolean(displayedError.value)),
  ns.is('validating', validating.value),
])

const labelStyle = computed(() =>
  labelWidth.value ? { width: labelWidth.value } : undefined
)

async function validate(trigger?: FormRuleTrigger): Promise<string> {
  if (!props.prop || rules.value.length === 0) {
    message.value = ''
    return ''
  }

  validating.value = true
  try {
    const result = await validateField(fieldValue.value, rules.value, trigger)
    message.value = result
    form?.notifyValidate(props.prop, !result, result)
    return result
  } finally {
    validating.value = false
  }
}

function clearValidate(): void {
  message.value = ''
}

function resetField(): void {
  message.value = ''
  if (!props.prop || !form) return

  const initial = getValueByPath(form.model, props.prop)
  if (Array.isArray(initial)) {
    initial.splice(0, initial.length)
  }
}

const itemContext: FormItemContext = {
  get prop() {
    return props.prop
  },
  message,
  validate,
  resetField,
  clearValidate,
}

provide(FORM_ITEM_CONTEXT_KEY, itemContext)

onMounted(() => {
  if (props.prop) form?.addField(itemContext)
})

onBeforeUnmount(() => {
  form?.removeField(itemContext)
})

// 值变化时按 change 触发时机重新校验（仅在已有错误时静默重校验，避免打扰输入）
watch(fieldValue, () => {
  if (message.value) {
    void validate('change')
  }
})

defineExpose({ validate, clearValidate, resetField, message })
</script>

<template>
  <div :class="classes" :data-kk-form-prop="prop || undefined" v-bind="$attrs">
    <label v-if="label || $slots.label" :class="ns.e('label')" :style="labelStyle">
      <slot name="label">{{ label }}</slot>
    </label>

    <div :class="ns.e('content')">
      <div :class="ns.e('control')">
        <slot />
      </div>

      <div v-if="showMessage && displayedError" :class="ns.e('error')" role="alert">
        <slot name="error">
          {{ displayedError }}
        </slot>
      </div>
    </div>
  </div>
</template>

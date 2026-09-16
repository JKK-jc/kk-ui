<script setup lang="ts">
import { computed, provide, reactive, shallowRef, watch } from 'vue'
import { useNamespace } from '../../hooks/useNamespace'
import { FORM_CONTEXT_KEY } from './context'
import type { FormContext, FormItemContext, FormProps } from './types'

defineOptions({ name: 'KkForm', inheritAttrs: false })

const props = withDefaults(defineProps<FormProps>(), {
  model: () => ({}),
  rules: () => ({}),
  labelWidth: '',
  labelPosition: 'right',
  size: 'medium',
  disabled: false,
  showMessage: true,
  inline: false,
  validateOnRuleChange: true,
})

const emit = defineEmits<{
  submit: [e: Event]
  reset: []
  validate: [prop: string, valid: boolean, message: string]
}>()

const ns = useNamespace('form')

const fields = shallowRef<FormItemContext[]>([])

const formDisabled = computed(() => props.disabled)

const context: FormContext = reactive({
  model: props.model,
  rules: props.rules,
  size: props.size,
  disabled: props.disabled,
  labelWidth: props.labelWidth,
  labelPosition: props.labelPosition,
  showMessage: props.showMessage,
  inline: props.inline,
  addField(field: FormItemContext) {
    if (!fields.value.includes(field)) {
      fields.value.push(field)
    }
  },
  removeField(field: FormItemContext) {
    const index = fields.value.indexOf(field)
    if (index > -1) fields.value.splice(index, 1)
  },
  notifyValidate(prop: string, valid: boolean, message: string) {
    emit('validate', prop, valid, message)
  },
})

provide(FORM_CONTEXT_KEY, context)

// 保持上下文与 props 同步
watch(
  () => props.model,
  (model) => {
    context.model = model
  },
  { deep: false }
)

watch(
  () => props.rules,
  (rules) => {
    context.rules = rules
  }
)

watch(
  () => props.disabled,
  (disabled) => {
    context.disabled = disabled
  }
)

watch(
  () => props.size,
  (size) => {
    context.size = size
  }
)

watch(
  () => props.labelPosition,
  (position) => {
    context.labelPosition = position
  }
)

watch(
  () => props.labelWidth,
  (width) => {
    context.labelWidth = width
  }
)

const classes = computed(() => [
  ns.b(),
  ns.m(`label-${props.labelPosition}`),
  ns.is('inline', props.inline),
  ns.is('disabled', props.disabled),
])

async function validate(callback?: (valid: boolean) => void): Promise<boolean> {
  let valid = true

  const results = await Promise.all(
    fields.value.map(async (field) => {
      const message = await field.validate()
      return { prop: field.prop, valid: !message, message }
    })
  )

  results.forEach((item) => {
    if (!item.valid) valid = false
  })

  callback?.(valid)
  return valid
}

async function validateField(target: string | string[]): Promise<void> {
  const props_ = Array.isArray(target) ? target : [target]
  await Promise.all(
    fields.value
      .filter((field) => props_.includes(field.prop))
      .map((field) => field.validate())
  )
}

function resetFields(target?: string[]): void {
  const list = target
    ? fields.value.filter((field) => target.includes(field.prop))
    : fields.value
  list.forEach((field) => field.resetField())
  emit('reset')
}

function clearValidate(target?: string[]): void {
  const list = target
    ? fields.value.filter((field) => target.includes(field.prop))
    : fields.value
  list.forEach((field) => field.clearValidate())
}

function scrollToField(prop: string): void {
  const el = document.querySelector(`[data-kk-form-prop="${prop}"]`)
  el?.scrollIntoView({ block: 'center', behavior: 'smooth' })
}

function handleSubmit(e: Event) {
  e.preventDefault()
  emit('submit', e)
}

function handleReset(e: Event) {
  e.preventDefault()
  resetFields()
}

defineExpose({
  validate,
  validateField,
  resetFields,
  clearValidate,
  scrollToField,
  fields,
  disabled: formDisabled,
})
</script>

<template>
  <form :class="classes" v-bind="$attrs" @submit="handleSubmit" @reset="handleReset">
    <slot />
  </form>
</template>

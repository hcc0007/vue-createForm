<template>
  <el-form-item
    v-if="
      element &&
        element[key] &&
        middleWareJudgeType('isShow', element.option)
    "
    :prop="element.key"
  >
    <!-- input text -->
    <template v-if="element.type === 'text'">
      <el-input
        :disabled="element.option.disabled"
        v-model="element.option.defaultValue"
        type="text"
      />
    </template>
    <!-- input textarea -->
    <template v-if="element.type === 'textarea'">
    </template>
  </el-form-item>
</template>

<script>
export default {
  name: 'CreateFormItem',
  props: {
    key: {
      required: true,
      type: String
    },
    element: {
      required: true,
      type: Object
    }
  },
  data() {
    return {}
  },
  method: {
    middleWareJudgeType(key, element, ...args) {
      if (!key || !element || element[key]) {
        // eslint-disable-next-line no-console
        console.error(
          'meddleWareJudgeType error',
          key,
          element
        )
        return false
      }

      const type = (typeof element[key]).toLowerCase()
      switch (type) {
        case 'function':
          return element[key](...args)
        // string boolean number
        default:
          return element[key]
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>

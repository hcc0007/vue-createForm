<template>
  <el-form-item
    v-if="
      element.key &&
        middleWareJudgeType('isShow', element.option)
    "
    :prop="element.prop || element.key"
    :label="element.label"
    :class="element.option.itemClassName"
    :style="element.option.itemStyle"
  >
    <!-- input -->
    <template
      v-if="
        ['text', 'textarea', 'password'].indexOf(
          element.type
        ) > -1
      "
    >
      <el-input
        v-model="element.option.defaultValue"
        :type="element.type"
        :placeholder="element.option.placeholder"
        :disabled="element.option.disabled"
        :clearable="element.option.clearable"
        :maxlength="element.option.maxlength"
        :minlength="element.option.minlength"
        :show-word-limit="element.option.showWordLimit"
        :size="element.option.size"
        :prefix-icon="element.option.prefixIcon"
        :suffix-icon="element.option.suffixIcon"
        :rows="element.option.rows"
        :autosize="element.option.autosize"
        :autocomplete="element.option.autocomplete"
        :resize="element.option.resize"
        :class="element.option.elClassName"
        :style="element.option.elStyle"
        @input="handleChange"
      >
      </el-input>
    </template>

    <!-- select -->
    <template v-if="element.type === 'select'">
      <el-select
        v-model="element.option.defaultValue"
        :placeholder="element.option.placeholder"
        :disabled="element.option.disabled"
        :clearable="element.option.clearable"
        :multiple="element.option.multiple"
        :filterable="element.option.filterable"
        @change="handleChange"
      >
        <el-option
          v-for="item in element.option.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </el-option>
      </el-select>
    </template>
  </el-form-item>
</template>

<script>
export default {
  name: 'CreateFormItem',
  props: {
    elementInfo: {
      type: Object,
      default: () => ({})
    },
    bindingForm: {
      type: Object,
      default: () => ({})
    },
    handleInstance: Function
  },
  data() {
    const modelForm = JSON.parse(
      JSON.stringify(this.bindingForm)
    )
    const elementConfig = Object.keys(
      this.elementInfo
    ).reduce((result, key) => {
      if (
        ['type', 'key', 'prop'].indexOf(key) > -1 &&
        this.elementInfo[key]
      ) {
        result[key] = this.elementInfo[key]
      }

      return result
    }, {})
    const elementOption = {
      ...(this.elementInfo.option || {})
    }

    return {
      /**
       * @param element {Object}
       */
      element: {
        type: '',
        key: '',
        prop: '',
        label: '',
        ...elementConfig,
        option: {
          defaultValue: '',
          placeholder: '',
          disabled: false,
          clearable: false,
          isShow: true,
          ////////
          multiple: false,
          filterable: false,
          options: [],
          ...elementOption
        }
      },
      modelForm
    }
  },
  methods: {
    /**
     * judge the element[key] type and return the result.
     * @method middleWareJudgeType
     * @param key {String}
     * @param element {Object}
     * @param args {Array}
     * @returns {String|Array|Boolean}
     */
    middleWareJudgeType(key, element, ...args) {
      if (!key || !element) {
        // eslint-disable-next-line no-console
        console.error(
          'meddleWareJudgeType error',
          key,
          element
        )
        return false
      }

      const type = (typeof element[key]).toLowerCase()

      if (element[key] === undefined) {
        return (type === 'boolean' && true) || element[key]
      }

      switch (type) {
        case 'function':
          return element[key](...args)
        // string boolean number
        default:
          return element[key]
      }
    },
    /**
     * upload value.
     * @method handleChange
     * @param val {String|Number}
     * @returns
     */
    handleChange(val) {
      this.handleInstance(val, this.element)
    }
  }
}
</script>

<style lang="scss" scoped></style>

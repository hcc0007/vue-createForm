<template>
  <el-form id="CreateForm" ref="CreateForm" :model="createForm" :rules="rules">
    <create-form-item v-for="elementInfo in elementInfos" :key="elementInfo.key" :element-info="elementInfo" :handle-instance="handleChange" :binding-form="createForm" />
  </el-form>
</template>

<script>
import CreateFormItem from './CreateFormItem';
export default {
  name: 'CreateForms',
  components: {
    CreateFormItem
  },
  props: {
    /**
     * the option of element
     * @param elementInfosOptions
     */
    elementInfosOptions: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    rules() {
      const rules = this.elementInfos.reduce((result, elementInfo) => {
        if (elementInfo.option.rule) {
          result[elementInfo.key] = [].concat(elementInfo.option.rule);
        }
        return result;
      }, {});
      return rules;
    }
  },
  data() {
    const elementInfos = [].concat(this.elementInfosOptions);
    const createForm = elementInfos.reduce((result, element) => {
      result[element.key] = element.option.defaultValue;
      return result;
    }, {});
    return {
      elementInfos,
      createForm
    };
  },
  methods: {
    /**
     * keep the value equal to the Form-item components.
     * @method handleChange
     * @param val {String|Number}
     * @param elementInfo {Object}
     * @returns {String|Array|Boolean}
     */
    handleChange(val, elementInfo) {
      this.createForm[elementInfo.key] = val;
    },

    /**
     * determine if the incoming value is a method.
     * @method isFunction
     * @param judgeBody {String|Number|Function|Object}
     * @param typeOf {String} toLowerCase
     * @returns {Boolean}
     */
    isTypeOf(judgeBody, typeOf) {
      return (typeof judgeBody).toLowerCase() === typeOf;
    },

    /**
     * validate form.
     * @method validateForm
     * @param val {String|Number}
     * @returns {Promise}
     */
    validateForm() {
      return new Promise((resolve, reject) => {
        this.$refs.CreateForm.validate(validate => {
          validate && resolve(this.createForm);
        });
      });
    }
  }
};
</script>

<style scoped></style>

<template>
  <div id="CreateForms">
    <el-form>
      <create-form-item
        v-for="elementInfo in elementInfos"
        :key="elementInfo.key"
        :element-info="elementInfo"
        @handleChange="handleChange"
      />
    </el-form>
  </div>
</template>

<script>
import CreateFormItem from './CreateFormItem'

export default {
  name: 'CreateForms',
  components: {
    CreateFormItem
  },
  props: {},
  data() {
    const elementInfos = [
      {
        type: 'text',
        key: 'name',
        label: '姓名',
        option: {
          defaultValue: '张三',
          placeholder: '请输入名字',
          clearabled: true
        }
      }
    ]
    return {
      elementInfos
    }
  },
  methods: {
    handleChange(val, elementInfo) {
      // this.elementInfos.filter(
      //   info => elementInfo[key] === info[key]
      // )
    }
  }
}
</script>

<style scoped></style>

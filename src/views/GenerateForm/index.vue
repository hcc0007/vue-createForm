<template>
  <div>
    <h1>这里是home</h1>
    <create-forms ref="ruleForm" :element-infos-options="elementInfos" />
    <div>
      <el-button @click="onSubmit">
        提交
      </el-button>
    </div>
  </div>
</template>

<script>
import CreateForms from '@/components/GenerateForm/CreateForms.vue';
export default {
  components: {
    CreateForms
  },
  data() {
    return {
      rulesForm: {},
      instanceForm: {},
      elementInfos: [
        {
          type: 'text',
          key: 'name',
          label: '名字',
          option: {
            defaultValue: '',
            rule: [
              {
                required: true,
                trigger: 'blur',
                message: '姓名不能为空'
              },
              {
                trigger: 'blur',
                message: '仅支持英文、数字、汉字、划线和括号且长度小于100',
                // validator: (rule, value, callback) => {
                //   ;/^[\u4e00-\u9fa5_a-zA-Z0-9-()\\（\\）\\——\\—]{1,100}$/.test(
                //     value
                //   )
                //     ? callback()
                //     : callback(
                //         new Error('仅支持英文、数字')
                //       )
                // },
                pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9-()\\（\\）\\——\\—]{1,100}$/
              }
            ],
            placeholder: '请输入姓名',
            clearable: true
          }
        },
        {
          type: 'select',
          key: 'gender',
          label: '性别',
          option: {
            defaultValue: 1,
            placeholder: '请选择',
            clearable: true,
            options: [
              {
                label: '男',
                value: 0
              },
              {
                label: '女',
                value: 1
              }
            ]
          }
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validateForm().then(form => {
        // eslint-disable-next-line no-console
        console.log('通过');
        // eslint-disable-next-line no-console
        console.log(form);
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>

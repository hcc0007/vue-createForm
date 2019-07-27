<template>
  <div id="CreateForms">
    <el-form>
      <el-form-item
        v-for="formItem in formItems"
        :key="formItem.key"
        :prop="formItem.prop"
      >
        <!-- input text -->
        <template v-if="formIntem.type === 'text'">
          <el-input
            :type="formItem.type"
            v-model="bindingForm[formItem.key]"
          />
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CreateForms',
  method: {}
}
</script>

<style scoped></style>

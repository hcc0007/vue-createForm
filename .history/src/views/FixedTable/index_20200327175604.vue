<template>
  <div>
    <h1>FixedTable</h1>
    <div></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import GenerateTableModule from '@/components/FixTable/FixedTable.vue'

@Component({
  components: {
    GenerateTableModule
  }
})
export default class FixedTablePage extends Vue {}
</script>

<style lang="scss" scoped></style>

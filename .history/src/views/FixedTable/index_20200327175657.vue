<template>
  <div>
    <h1>FixedTable</h1>
    <generate-table />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import GenerateTableModule from '@/components/FixTable/FixedTable.vue'

@Component({
  components: {
    GenerateTable: GenerateTableModule
  }
})
export default class FixedTablePage extends Vue {}
</script>

<style lang="scss" scoped></style>

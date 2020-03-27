<template>
  <div>
    <h1>FixedTable</h1>
    <fixed-table>
      <fixed-table-column></fixed-table-column>
    </fixed-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import GenerateTableModule from '@/components/FixTable/FixedTableModule.vue';
import GenerateTableColumnModule from '@/components/FixTable/FixedTableColumnModule.vue';

@Component({
  components: {
    FixedTable: GenerateTableModule,
    FixedTableColumn: GenerateTableColumnModule
  }
})
export default class FixedTablePage extends Vue {}
</script>

<style lang="scss" scoped></style>

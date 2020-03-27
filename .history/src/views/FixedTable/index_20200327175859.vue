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
import GenerateTableModule from '@/components/FixTable/FixedTable.vue';
import Generate

@Component({
  components: {
    FixedTable: GenerateTableModule
  }
})
export default class FixedTablePage extends Vue {}
</script>

<style lang="scss" scoped></style>

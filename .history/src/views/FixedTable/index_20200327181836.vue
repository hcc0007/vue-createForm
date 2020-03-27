<template>
  <div>
    <h1>FixedTable</h1>
    <fixed-table>
      <fixed-table-column prop="name" label="姓名"> </fixed-table-column>
    </fixed-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import FixedTableModule from '@/components/FixTable/FixedTableModule.vue';
import FixedTableColumnModule from '@/components/FixTable/FixedTableColumnModule.vue';

@Component({
  components: {
    FixedTable: FixedTableModule,
    FixedTableColumn: FixedTableColumnModule
  }
})
export default class FixedTablePage extends Vue {
  columns = [{ prop: 'name', label: '姓名' }, { prop: 'age', label: '年龄' }, { prop: 'address', label: '地址' }];
}
</script>

<style lang="scss" scoped></style>

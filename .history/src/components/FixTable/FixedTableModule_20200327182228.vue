<template>
  <div>
    <table border="1px solid #ddd">
      <thead>
        <tr>
          <td v-for="column in columnList" :key="column.prop">
            {{ column.label }}
          </td>
        </tr>
      </thead>
    </table>

    <table border="1px solid #ddd">
      <tbody>
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
const _: any = require('lodash');

interface Column {
  prop: string;
  label: string;
}

@Component({})
export default class FixedTableModule extends Vue {
  @Prop({ required: true, type: Array, default: () => [] })
  tableData: object[] = [];

  @Prop({ required: true, type: Array })
  columns: Column[] = [];

  columnList: Column[] = [...this.columns];
  rowList: object[] = _.cloneDeep(this.tableData);

  initRowList() {
    const columnList = this.columnList;
    const rowList = this.rowList;
    this.rowList = this.rowList.reduce((rowList: object[], row: { _id?: number; format?: any } = {}, _id: number = 0) => {
      row._id = _id;
      columnList.forEach(col => {});
      rowList.push(row);
      return [];
    }, []);
  }

  typeMaps() {
    return;
  }
}
</script>

<style lang="scss" scoped></style>

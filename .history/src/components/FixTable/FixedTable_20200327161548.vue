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
        <tr v-for="row in rowList" :key="row._id">
          <td v-for="column in columnList" :key="column.prop">
            {{ row[column.prop] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
const _: any = require('lodash')

interface Column {
  prop: string;
  label: string;
}

@Component({})
export default class FixedTable extends Vue {
  @Prop({ required: true, type: Array, default: () => [] })
  tableData: object[] = [];

  @Prop({ required: true, type: Array })
  columns: Column[] = [];

  columnList: Column[] = [...this.columns];
  rowList: object[] = _.deepClone(this.tableData);

  initRowList() {
    const columnList = this.columnList;
    const rowList = this.rowList;
    this.rowList = this.rowList.reduce((rowList: object[], row: {
      _id?: number;
      format?: any;
    } = {}, _id: number = 0) => {
      columnList.forEach(col => {
        row._id = _id;
        row.
      })
        rowList.push(row);
      return [];
    }, []);
  }

  typeMaps() {
    return 
  }
}
</script>

<style lang="scss" scoped></style>

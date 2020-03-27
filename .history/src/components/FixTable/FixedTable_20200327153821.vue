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
  rowList: object[] = [
    ...this.tableData.map((data: object, _id: number) => ({
      ...data,
      _id
    }))
  ];

  initRowList() {
    const rowList = this.tableData.reduce((rowList: object[], row: object, _id: number) => {
      return [];
    }, []);
    this.rowList = rowList
  }
}
</script>

<style lang="scss" scoped></style>

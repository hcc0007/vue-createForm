<template>
  <div>
    <table>
      <thead>
        <tr>
          <td
            v-for="column in columns"
            :key="column.prop"
          >
            {{ column.label }}
          </td>
        </tr>
      </thead>
    </table>

    <table>
      <tbody>
        <tr
          v-for="row in rows"
          :key=""
        >
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {
  Vue,
  Prop,
  Component
} from 'vue-property-decorator';

interface Column {
  prop: string;
  label: string;
}

@Component({})
export default class FixedTable extends Vue {
  @Prop({
    required: true,
    type: Array,
    default: () => []
  })
  tableData: object[] = [];

  @Prop({ required: true, type: Array, default: () => [] })
  columns: Column[] = [];
}
</script>

<style lang="scss" scoped></style>

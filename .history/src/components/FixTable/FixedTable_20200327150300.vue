<template>
  <div>
    <table>
      <thead>
        <tr v-for="column in columns" :key="column.prop">
          <td>
            {{ column.label }}
          </td>
        </tr>
      </thead>
    </table>

    <table>
      <tbody>
        <tr v-for="row in rows" :key="">
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

@Component({})
export default class FixedTable extends Vue {
  @Prop({
    required: true
  }) tableData: object[] = [];

}
</script>

<style lang="scss" scoped></style>

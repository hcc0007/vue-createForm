<template>
  <div>
    <tr v-for="row in rowList" :key="row._id">
      <td v-for="column in columnList" :key="column.prop">
        {{ row[column.prop] }}
      </td>
    </tr>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class FixedTableColumnModule extends Vue {}
</script>

<style scoped></style>

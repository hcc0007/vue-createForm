<template>
  <div>
    <tr>
      <td v-for="column in columnList" :key="column.prop">
        {{ column.label }}
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

<template>
  <div>
    <side-bar />
    <app-main />
  </div>
</template>

<script lang="ts">
import SideBar from './components/SideBar.vue'
import AppMain from './components/AppMain.vue'

export default {
  name: 'Layout',
  components: {
    SideBar,
    AppMain
  }
}
</script>

<style scoped></style>

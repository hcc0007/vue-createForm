<template>
  <div>
    <top-bar />
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TopBar from './TopBar.vue'

@Component({
  components: {
    TopBar
  }
})
export default class AppMain extends Vue {}
</script>

<style scoped></style>

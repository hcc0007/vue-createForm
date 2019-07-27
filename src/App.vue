<template>
  <div id="app">
    <route-view />
  </div>
</template>

<script>
import { Vue } from 'vue-property-decorator'

export default class App extends Vue {
  name = 'App'

  // 周期
  mounted() {
    this.$router.push('/')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app"></div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import CreateForms from './components/CreateForms'

@Component({
  components: {
    CreateForms
  }
})
export default class App extends Vue {
  name = 'App'
  data() {
    return {
      formItems: []
    }
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

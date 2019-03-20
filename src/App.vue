<template>
  <div id="app">
    <CruiseHeader></CruiseHeader>
    <router-view/>
    <CruiseFooter></CruiseFooter>
  </div>
</template>

<script>
import CruiseHeader from './components/CruiseHeader'
import CruiseFooter from './components/CruiseFooter'

export default {
  name: 'App',
  components: {
    CruiseHeader,
    CruiseFooter
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>

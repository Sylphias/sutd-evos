<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

var chart = require("chart.js")
export default {
  name: 'App'
}
</script>

<style>
html, body {
	height: 100%;
	width: 100%;
  overflow-y: hidden;
  margin: 0px;
}
#app {
	height: 100%;
	width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#ecf0f1;
  background-color: #2c3e50;

}
</style>

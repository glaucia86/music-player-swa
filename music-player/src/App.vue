<template>
  <div id="app">
    <MusicPlayer msg="Welcome to the SWA + GitHub Actions + Vue.js Application"/>
  </div>
</template>

<script>
import MusicPlayer from './components/MusicPlayer.vue'

export default {
  name: 'App',
  components: {
    MusicPlayer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

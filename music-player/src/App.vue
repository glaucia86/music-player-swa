<template>
  <div id="app">
    <MusicPlayer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import MusicPlayer from './components/MusicPlayer/index'

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

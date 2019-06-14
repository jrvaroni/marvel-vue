<template>
  <div id="app">
    <Header />
    <Hero />
  </div>
</template>

<script>
import Hero from './components/Hero';
import Header from './components/header/Header';

export default {
  name: 'app',
  components: {
    Hero,
    Header
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>

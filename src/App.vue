<!-- Source: https://github.com/Beavercreek-Robotics/creekrobotics.org/blob/main/src/App.vue -->
<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
}
</style>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <body>
    <div>
      <NavBar />
      <NuxtPage />
      <Footer />
    </div>
  </body>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/druk-text-wide-trial');
</style>

<style scoped>
* {
  margin: 0;
}

body {
  background-color: #f8faec;
}
</style>

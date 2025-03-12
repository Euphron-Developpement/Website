<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import BodyHome from '~/components/BodyHome.vue';
</script>

<template>
  <body>
    <div>
      <NavBar  style="margin-bottom: 20px"/>
      <NuxtPage />

      <Footer  style="margin-top: 20px"/>
    </div>
  </body>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/druk-text-wide-trial');
</style>

<style scoped>
body {
  background-color: #f8faec;
  overflow-x: hidden;
}
</style>
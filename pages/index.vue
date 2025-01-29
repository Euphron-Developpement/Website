<script setup>
import { ref } from 'vue'
import NavBar from '../components/NavBar.vue'
import Login from './login.vue'



</script>






<template>
<body>
  <NavBar>

</NavBar>
</body>
  
<Login>
  
</Login>

</template>

<style>
  @import url('https://fonts.cdnfonts.com/css/druk-text-wide-trial');


  
</style>
             


<style scoped>

body{
  background-color: #F8FAEC;
}

body {
  background-color: #F8FAEC;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

@media (max-width: 768px) {
  body {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  body {
    padding: 10px;
  }
}
</style>
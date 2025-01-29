<script setup>
import "~/assets/css/login.css";
</script>

<template>
  <div class="form-container">
    <div class="header-container">
        <button @click="goBack" class="back-button">‹</button>
        <h1>Se Connecter</h1>
    </div>
    <form @submit.prevent="handleSubmit">


      <div class="form-group">
        <label for="email">Adresse mail</label>
        <input v-model="email" type="email" id="email"  />
      </div>

      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input v-model="password" type="password" id="password" />
      </div>

      <button type="submit" class="submit-btn">Se Connecter</button>
    </form>
  </div>

</template>
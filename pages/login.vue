<script setup>
import "~/assets/css/login.css";

const email = ref('');
const password = ref('');
const handleSubmit = () => {
  console.log('Email:', email.value);
  console.log('Password:', password.value);
};


</script>

<template>

  <div class="form-container">
    <div class="header-container">
        <h1>Se Connecter</h1>
    </div>
    <form @submit.prevent="handleSubmit">


      <div class="form-group">
        <label for="email">Adresse mail</label>
        <input v-model="email" type="email" id="email"  placeholder=""/>
      </div>

      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input v-model="password" type="password" id="password" placeholder=""/>
      </div>

      <button type="submit" class="submit-btn">Connexion</button>
    </form>
  </div>

</template>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 40px 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .form-container {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .form-container {
    padding: 10px;
  }
}
</style>

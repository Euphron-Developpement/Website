<template>
    <div class="login-page">
      <h1>Se Connecter</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Adresse mail</label>
          <input 
            id="email" 
            v-model="email" 
            type="email" 
            placeholder="Entrez votre email" 
            required 
          />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input 
            id="password" 
            v-model="password" 
            type="password" 
            placeholder="Entrez votre mot de passe" 
            required 
          />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleLogin() {
        // Logique de connexion
        console.log("Email:", this.email);
        console.log("Password:", this.password);
        // Exemple : envoyer les données au backend
      },
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    max-width: 400px;
    margin: auto;
    padding: 20px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    background-color: #000;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #444;
  }
  </style>
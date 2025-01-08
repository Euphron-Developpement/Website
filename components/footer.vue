<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p>&copy; {{ new Date().getFullYear() }} - Votre Site. Tous droits réservés.</p>
          <nav class="footer-nav">
            <nuxt-link to="/" class="footer-link">Accueil</nuxt-link>
            <nuxt-link to="/about" class="footer-link">À propos</nuxt-link>
            <nuxt-link to="/contact" class="footer-link">Contact</nuxt-link>
          </nav>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #2c3e50;
    color: #ffffff;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }
  
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-nav {
    margin-top: 10px;
  }
  
  .footer-link {
    color: #ecf0f1;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
  }
  
  .footer-link:hover {
    text-decoration: underline;
  }
  </style>
  
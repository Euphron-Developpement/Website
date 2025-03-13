<template>
  <div class="container">
    <h2>QUELQUE CHOSE À NOUS DIRE ?</h2>
    <form>
      <div class="input-group">
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Nom"
          required
        />
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Prénom"
          required
        />
      </div>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Adresse email"
        required
      />
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Numéro de téléphone"
        required
      />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        required
      ></textarea>
      <button type="submit">ENVOYER</button>
    </form>
  </div>
</template>

<style scoped>
/* Conteneur principal */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;
  padding: 1rem;
  width: 100%;
}

/* Titre */
h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #000;
  width: 90%;
  max-width: 500px;
}

/* Formulaire */
form {
  width: 90%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  box-sizing: border-box;
}

/* Groupe d'inputs (Nom & Prénom) */
.input-group {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.input-group input {
  width: 100%;
}

/* Inputs et textarea */
input,
textarea {
  width: 100%;
  background-color: transparent;
  border: 1.5px solid #000;
  padding: 10px;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}

textarea {
  min-height: 200px;
  resize: vertical;
}

/* Bouton */
button {
  background-color: #2f2f2f;
  color: #f8faec;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 200px;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #be2625;
}

/* Responsive */
@media (max-width: 600px) {
  .input-group {
    flex-direction: column;
    gap: 1rem;
  }

  form {
    width: 100%;
    padding: 0 1rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    font-size: 1rem;
    padding: 0.8rem;
    max-width: 100%;
  }
}
</style>
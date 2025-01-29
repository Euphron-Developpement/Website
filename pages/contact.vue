<template>
  <div class="container">
    <h2>QUELQUE CHOSE À NOUS DIRE ?</h2>
    <form>
      <div>
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
          placeholder="Prenom"
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
h2 {
  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: block;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #000;
}
@media (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }
  button {
    font-size: 1.2rem !important;
  }
}
@media (max-width: 480px) {
  h2 {
    font-size: 1.2rem;
  }
}
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
}
input,
textarea {
  display: block;
  position: relative;
  background-color: transparent;
  border: 1.5px solid #000;
  height: 30px;
  max-height: 50px;
  width: -webkit-fill-available;
  color: #000;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  padding: 10px;
  line-height: 1.5;
}
::placeholder {
  color: #000;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
}
input::placeholder {
  bottom: 10px;
  left: 10px;
}
textarea::placeholder {
  top: 20px;
  left: 10px;
}
form {
  min-width: 310px;
  width: 50%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}
form div {
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: space-between;
}
form div input {
  width: 50%;
}
textarea {
  min-width: 310px;
  width: 80vw;
  min-height: 300px;
  height: auto;
}
button {
  background-color: #2f2f2f;
  color: #f8faec;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.7rem;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}
button:hover {
  background-color: #be2625;
}
</style>

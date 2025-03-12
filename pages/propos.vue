<script setup>
import "~/assets/css/propos.css";
</script>

<template>
  <div class="cards">
    <div class="card card-euphron">
      <h1>
        EUPHRON,
        <br />
        C'EST
        <br />
        QUOI ?
      </h1>
      <div class="container-p">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="containerLogo">
        <img
          class="imgLogo"
          src="assets/icons/logo-propos.svg"
          alt="Mon icône"
        />
      </div>
    </div>
    <div class="card card-partner">
      <img
        class="imgPartner"
        src="assets/icons/nos-partenaires.svg"
        alt="Mon icône"
      />
      <h1 class="text-right">
        NOS
        <br />
        PARTENAIRES
      </h1>
    </div>
    <div class="card card-projet">
      <h1>
        NOTRE
        <br />
        PROJET
      </h1>
      <div class="containerImg">
        <img
          class="imgProjet"
          src="assets/icons/notre-projet.svg"
          alt="Mon icône"
        />
      </div>
    </div>
  </div>
</template>

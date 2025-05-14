<script setup>
import "~/assets/css/account.css";
import { ref, computed } from 'vue';
import infoWhiteIcon from '~/assets/icons/informations-white.svg';
import infoBlackIcon from '~/assets/icons/informations-black.svg';
import shopWhiteIcon from '~/assets/icons/shop-white.svg';
import shopBlackIcon from '~/assets/icons/shop-black.svg';
const activeSection = ref('informations');

const commandes = ref([
  { type: 'Place tarif réduit', quantite: 1 },
  { type: 'Place tarif normal', quantite: 2 }
]);

const showInformations = () => {
  activeSection.value = 'informations';
};

const showCommandes = () => {
  activeSection.value = 'commandes';
};

const infoIconSrc = computed(() => {
  return activeSection.value === 'informations' ? infoWhiteIcon : infoBlackIcon;
});

const shopIconSrc = computed(() => {
  return activeSection.value === 'commandes' ? shopWhiteIcon : shopBlackIcon;
});
</script>

<template>
  <div class="account-container">
    <div class="account-header">
      <img
        class="img-icons" id="account-icon"
        src="assets/icons/account.svg"
        alt="Mon compte icône"
      />
      <h1 class="account-title">MON COMPTE</h1>
    </div>

    <div class="nav-buttons">
      <button 
        class="button" 
        id="nav-button-informations"
        :class="{ active: activeSection === 'informations' }"
        @click="showInformations"
      >
        <img
          class="img-icons"
          :src="infoIconSrc"
          alt="Informations icône"
        />
        <span>Mes informations</span>
      </button>
      <button 
        class="button" 
        id="nav-button-shop"
        :class="{ active: activeSection === 'commandes' }"
        @click="showCommandes"
      >
        <img
          class="img-icons"
          :src="shopIconSrc"
          alt="Commande icône"
        />
        <span>Commande</span>
      </button>
    </div>

    <div v-if="activeSection === 'informations'" class="user-info">
      <div class="section-infos">
            <div class="container-name">
                <div class="info">
                    <p>Prénom</p>
                    <input type="text" placeholder="Prénom" />
                </div>
                <div class="info">
                    <p>Nom</p>
                    <input type="text" placeholder="Name" />
                </div>
                <div class="info">
                    <p>Adresse email</p>
                    <input type="email" placeholder="Adresse mail" />
                </div>
            </div>
            <div class="container-mdp">
                <div class="info">
                    <p>Mot de passe</p>
                    <input type="password" placeholder="*****" />
                </div>
                <div class="info">
                    <p>Nouveau mot de passe</p>
                    <input type="password" placeholder="*****"/>
                </div>
                <div class="info">
                    <p>Confirmation mot de passe</p>
                    <input type="password" placeholder="*****"/>
                </div>
            </div>
            <div class="container-button">
                <button class="button">Enregistrer</button>
            </div>
        </div>
    </div>

    <div v-if="activeSection === 'commandes'" class="commandes-container">
      <table class="commandes-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          <div v-for="(commande, index) in commandes" :key="index">
            <p>{{ commande.type }}</p>
            <p>{{ commande.quantite }}</p>
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>
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
      <div class="info-row">
        <span class="info-label">Prénom :</span>
        <span class="info-value">...</span>
        <button class="edit-button">Modifier</button>
      </div>
      <div class="info-row">
        <span class="info-label">Nom :</span>
        <span class="info-value">...</span>
        <button class="edit-button">Modifier</button>
      </div>
      <div class="info-row">
        <span class="info-label">Adresse mail :</span>
        <span class="info-value">...</span>
        <button class="edit-button">Modifier</button>
      </div>
      <div class="info-row">
        <span class="info-label">Mot de passe :</span>
        <span class="info-value">...</span>
        <button class="edit-button">Modifier</button>
      </div>
      <button class="button" id="logout-button">
        <img
          class="img-icons"
          src="assets/icons/logout.svg"
          alt="Se déconnecter icône"
        />
        <span>Déconnexion</span>
      </button>
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
          <tr v-for="(commande, index) in commandes" :key="index">
            <td>{{ commande.type }}</td>
            <td>{{ commande.quantite }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
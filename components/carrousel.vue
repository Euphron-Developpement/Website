<template>
  <div class="carrousel">
    <div class="carrousel-images">
      <!-- Affichage des images en boucle -->
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        alt="Image du carrousel"
      />
      <img
        v-for="(image, index) in images"
        :key="index + images.length"
        :src="image"
        alt="Image du carrousel"
      />
    </div>
  </div>
</template>

<script>
import img1 from "../assets/Pictures/Carrousel/Boxe.jpeg";
import img2 from "../assets/Pictures/Carrousel/Natation.jpg";
import img3 from "../assets/Pictures/Carrousel/Equitation.jpg";
import img4 from "../assets/Pictures/Carrousel/Tenis.jpg";

export default {
  data() {
    return {
      images: [img1, img2, img3, img4], // Liste des images
    };
  },
};
</script>

<style scoped>
.carrousel {
  position: relative;
  width: 95%; /* Largeur du carrousel */
  height: 300px; /* Hauteur du carrousel (ajustez selon vos besoins) */
  margin: 0 auto;
  overflow: hidden; /* Masque les images qui sortent */
  border-radius: 15px; /* Coins arrondis pour un effet moderne */
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1); /* Ombre légère autour du carrousel */
}

.carrousel-images {
  display: flex; /* Dispose les images sur une seule ligne */
  width: 200%; /* Largeur totale de la ligne pour inclure deux fois les images */
  animation: scroll 12s linear infinite; /* Animation continue pour faire défiler les images */
}

.carrousel-images img {
  width: 25%; /* Chaque image prend 25% de la largeur */
  height: 100%; /* Chaque image prend toute la hauteur du carrousel */
  object-fit: cover; /* Remplir l’espace sans déformation */
  display: block;
  border-radius: 10px; /* Coins arrondis pour chaque image */
  border: 3px solid rgba(255, 255, 255, 0.7); /* Bordure subtile autour des images */
  transition: transform 0.5s ease; /* Transition fluide pour les mouvements */
}

/* Animation pour faire défiler les images */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(
      -100%
    ); /* Déplace les images de -100% pour les faire défiler */
  }
}
</style>

<template>
  <div class="carrousel">
    <div class="carrousel-container" ref="carrousel">
      <div class="carrousel-track" ref="track">
        <img
          v-for="(image, index) in clonedImages"
          :key="index"
          :src="image"
          alt="Image du carrousel"
          class="carrousel-image"
        />
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "../assets/pictures/Carrousel/Boxe.jpeg";
import img2 from "../assets/pictures/Carrousel/Natation.jpg";
import img3 from "../assets/pictures/Carrousel/Equitation.jpg";
import img4 from "../assets/pictures/Carrousel/Tenis.jpg";

export default {
  data() {
    return {
      images: [img1, img2, img3, img4], // Images originales
      clonedImages: [], // Pour le scroll infini
      scrollSpeed: 1, // Vitesse du défilement
      scrollInterval: null, // Stockage de l'intervalle JS
    };
  },
  mounted() {
    this.setupInfiniteScroll();
  },
  methods: {
    setupInfiniteScroll() {
      // Clonage des images pour un effet infini
      this.clonedImages = [...this.images, ...this.images];

      this.$nextTick(() => {
        this.startScrolling();
      });
    },
    startScrolling() {
      const track = this.$refs.track;
      let position = 0;

      this.scrollInterval = setInterval(() => {
        position -= this.scrollSpeed;
        if (Math.abs(position) >= track.scrollWidth / 2) {
          position = 0;
        }
        track.style.transform = `translateX(${position}px)`;
      }, 20);
    },
  },
  beforeUnmount() {
    clearInterval(this.scrollInterval);
  },
};
</script>

<style scoped>
.carrousel {
  position: relative;
  width: 90%;
  height: 250px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;

}

.carrousel-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carrousel-track {
  display: flex;
  width: max-content;
  transition: transform 0.1s linear;
  height: 100%;
}

.carrousel-image {
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin: 0; /* Supprime toute marge */
  padding: 0;
  border: 3px solid rgba(255, 255, 255, 0.7);
}





</style>

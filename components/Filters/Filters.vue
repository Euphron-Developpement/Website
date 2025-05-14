<script setup lang="ts">

</script>

<template>
  <div class="filtres-container">
    <div class="recherche">
      <input type="text" placeholder="Rechercher un sport, une equipe ..." />
    </div>
    <div class="filtres-categories">
      <div class="filtre-item">
        <div class="filtre-texte">Handi-sports</div>
      </div>
      <div class="filtre-item">
        <div class="filtre-texte">Sports mainstream</div>
      </div>
      <div class="filtre-item">
        <div class="filtre-texte">Sports niche</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Filtres et recherche */
.filtres-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: clamp(1rem, 5vw, 2rem) auto;
  max-width: 1350px;
  gap: clamp(0.5rem, 3vw, 1rem);
}

.filtres-categories {
  display: flex;
  gap: clamp(0.5rem, 2vw, 1rem);
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
}

@media (min-width: 768px) {
  .filtres-categories {
    width: auto;
    justify-content: flex-start;
  }
}

.filtre-item {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  background-color: #f8faec;
  padding: clamp(0.5rem, 2vw, 0.8rem) clamp(1rem, 4vw, 2rem);
}

.filtre-texte {
  text-transform: uppercase;
  font-weight: 600;
  font-size: clamp(0.75rem, 3vw, 1rem);
  white-space: nowrap;
}

.recherche {
  flex-grow: 1;
  max-width: 100%;
  width: 100%;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .recherche {
    max-width: 571px;
    margin-bottom: 0;
    width: auto;
  }
}

.recherche input {
  width: 100%;
  padding: clamp(0.75rem, 2vw, 1rem);
  border-radius: 30px;
  border: none;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #f8faec;
  font-family: inherit;
  font-size: clamp(0.875rem, 2vw, 1rem);
}
</style>
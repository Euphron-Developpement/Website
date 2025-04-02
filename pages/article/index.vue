<template>
  <div class="article">
    <Filters />

    <!-- Section principale -->
    <section class="une-section">
      <h1 class="titre-section">À la une</h1>
      <p class="sous-titre">Toutes les nouvelles sportives sont sur Euphron !</p>

      <div class="image-principale">
        <!-- Image principale -->
        <h2 class="titre-image">Les records battus durant les para-lympiques 2024</h2>
      </div>
    </section>

    <!-- Section actualités -->
    <section class="actualites">
      <h2 class="titre-section">Un peu d'actu</h2>
      <div class="grille-actualites">
        <div class="actu-section">
          <div class="actu-carte" />
          <div class="actu-info">
            <h3 class="titre">TITRE</h3>
          </div>
        </div>
        <div class="actu-section">
          <div class="actu-carte" />
          <div class="actu-info">
            <h3 class="titre">TITRE</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Section interviews -->
    <section class="interviews">
      <h2 class="titre-section">Le meilleur de nos interviews</h2>
      <div class="grille-interviews">
        <div class="interview-carte">
          <p class="texte-court">Court texte/titre</p>
        </div>
        <div class="interview-carte">
          <p class="texte-court">Court texte/titre</p>
        </div>
        <div class="interview-carte">
          <p class="texte-court">Court texte/titre</p>
        </div>
        <div class="interview-carte">
          <p class="texte-court">Court texte/titre</p>
        </div>
      </div>
    </section>

    <!-- Section recommandations -->
    <section class="recommandations">
      <h2 class="titre-section">Nos recommandations rien que pour vous</h2>
      <div class="grille-recommandations">
        <article class="recommandation">
          <div class="thumbnail"></div>
          <div class="info">
            <h3 class="titre">TITRE</h3>
            <p class="teaser">un petit peu de texte pour teaser</p>
          </div>
        </article>
        <article class="recommandation">
          <div class="thumbnail"></div>
          <div class="info">
            <h3 class="titre">TITRE</h3>
            <p class="teaser">un petit peu de texte pour teaser</p>
          </div>
        </article>
        <article class="recommandation">
          <div class="thumbnail"></div>
          <div class="info">
            <h3 class="titre">TITRE</h3>
            <p class="teaser">un petit peu de texte pour teaser</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Stevie+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Druk+Text+Wide+Trial:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

.article {
  background-color: #f8faed;
  font-family: Montserrat, sans-serif;
  color: #000;
  max-width: 100%;
  overflow-x: hidden;
  padding: 0 clamp(0.5rem, 3vw, 1rem);
}

/* Section À la une */
.une-section {
  max-width: 1350px;
  margin: clamp(1rem, 5vw, 2rem) auto;
}

.une-section .titre-section {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 8px;
}

.titre-section {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  font-weight: bold;
  line-height: 1.2;
}

.sous-titre {
  font-size: clamp(1rem, 3vw, 1.25rem);
  font-weight: 500;
  margin-bottom: clamp(1rem, 5vw, 2rem);
}

.image-principale {
  width: 100%;
  height: clamp(300px, 50vw, 615px);
  background-color: #2f2f2f;
  position: relative;
  margin-bottom: clamp(1rem, 5vw, 2rem);
  display: flex;
  align-items: flex-end;
}

.titre-image {
  color: #fff;
  font-size: clamp(1.25rem, 4vw, 2.5rem);
  text-transform: uppercase;
  padding: clamp(1rem, 3vw, 2rem);
  max-width: 100%;
  line-height: 1.3;
}

/* Section actualités */
.actualites {
  max-width: 1350px;
  margin: clamp(2rem, 8vw, 3rem) auto;
}

.grille-actualites {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 5vw, 2rem);
  margin-top: 1.5rem;
  padding: clamp(1rem, 4vw, 2rem);
  background: #DCDED1;
}

@media (min-width: 768px) {
  .grille-actualites {
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(2rem, 8vw, 4rem);
    padding: clamp(1.5rem, 5vw, 3rem);
  }
}

.actu-section {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  align-items: center;
}

@media (min-width: 768px) {
  .actu-section {
    gap: 1.5rem;
    flex-direction: row;
  }
}

.actu-carte {
  background-color: #2f2f2f;
  height: clamp(180px, 30vw, 245px);
  width: 100%;
}

@media (min-width: 768px) {
  .actu-carte {
    height: clamp(150px, 25vw, 200px);
    width: clamp(150px, 40vw, 300px);
  }
}

.actu-info {
  margin: 1rem 0;
  font-weight: bold;
  font-size: clamp(1.25rem, 4vw, 2rem);
}

/* Section interviews */
.interviews {
  max-width: 1350px;
  margin: clamp(2rem, 8vw, 3rem) auto;
}

.grille-interviews {
  display: flex;
  overflow-x: auto;
  gap: clamp(1rem, 4vw, 2rem);
  margin-top: 1.5rem;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
}

.grille-interviews::-webkit-scrollbar {
  height: 6px;
}

.grille-interviews::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 6px;
}

.interview-carte {
  flex: 0 0 clamp(50px, 30vw, 150px);
  min-width: clamp(150px, 80vw, 200px);
  scroll-snap-align: start;
  background-color: #2f2f2f;
  height: clamp(300px, 60vw, 495px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
}

@media (min-width: 768px) {
  .interview-carte {
    flex: 0 0 350px;
    min-width: 300px;
  }
}

.texte-court {
  position: absolute;
  bottom: 1rem;
  font-weight: 500;
  padding: 0 1rem;
  text-align: center;
  width: 100%;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
}

/* Section recommandations */
.recommandations {
  max-width: 1350px;
  margin: clamp(2rem, 8vw, 3rem) auto;
}

.grille-recommandations {
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 4vw, 2rem);
  padding: clamp(1rem, 4vw, 2rem);
  background: #DCDED1;
}

.recommandation {
  display: flex;
  flex-direction: row;
  gap: clamp(1rem, 4vw, 2rem);
  margin-bottom: clamp(1rem, 4vw, 2rem);
}

@media (min-width: 768px) {
  .recommandation:not(:last-child) {
    padding-bottom: clamp(1rem, 4vw, 2rem);
    border-bottom: 1px solid #000;
  }
}

.thumbnail {
  background-color: #2f2f2f;
  min-width: clamp(120px, 40%, 180px);
  height: clamp(100px, 25vw, 160px);
  flex-shrink: 0;
}

@media (min-width: 768px) {
  .thumbnail {
    min-width: 236px;
    max-width: 236px;
    height: clamp(160px, 30vw, 222px);
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info .titre {
  font-size: clamp(1.5rem, 4vw, 2rem);
  text-transform: uppercase;
  font-weight: bold;
}

.teaser {
  font-weight: 500;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
}

/* Ajout de media queries générales */
@media (max-width: 480px) {
  .sous-titre {
    text-align: center;
  }
}
</style>


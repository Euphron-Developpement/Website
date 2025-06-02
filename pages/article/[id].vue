<script setup lang="ts">
import { findOneArticle } from '~/utils/api/route/article';
import type { Article } from '~/entities/article';

const route = useRoute();
const { data: article, error: apiError } = await useAsyncData(
  `article-${route.params.id}`,
  () => findOneArticle(Number(route.params.id))
    .then(response => response.data || null)
    .catch(e => {
      console.error(e);
      return null;
    })
);
const error = computed(() => apiError.value || article.value === null);
</script>

<template>
  <div class="article-detail">
    <Filters />

    <div v-if="error" class="error">
      Une erreur est survenue lors du chargement de l'article.
    </div>

    <section v-else-if="article" class="article-hero" :key="`article-${article.id}`">
      <div class="image-principale">
        <img
          :src="article.Media?.find(m => m.hero)?.url || '/placeholder-image.jpg'"
          :alt="article.title"
        />
      </div>
      <div class="titre-container">
        <div class="titre-section">
          <h1>{{ article.title }}</h1>
        </div>
      </div>
      <div v-if="article.content" class="article-content" v-html="article.content"></div>
    </section>

    <!-- Section articles liés -->
    <section v-if="!error && article" class="recommandations">
      <h2 class="titre-section">Sur le même sujet :</h2>
      <div class="grille-recommandations">
        <article class="recommandation">
          <div class="thumbnail"></div>
          <div class="info">
            <h3 class="titre">Titre</h3>
          </div>
        </article>
        <article class="recommandation">
          <div class="thumbnail"></div>
          <div class="info">
            <h3 class="titre">Titre</h3>
          </div>
        </article>
        <article class="recommandation">
          <div class="thumbnail"></div>
          <div class="info">
            <h3 class="titre">Titre</h3>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ----- MAIN CONTENT ----- */
@import url('https://fonts.googleapis.com/css2?family=Stevie+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Druk+Text+Wide+Trial:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

.article-detail {
  background-color: #f8faed;
  font-family: Montserrat, sans-serif;
  color: #000;
  max-width: 100%;
  overflow-x: hidden;
  padding: 0 clamp(0.5rem, 3vw, 1rem);
}

/* Section principale de l'article */
.article-hero {
  max-width: 1350px;
  margin: clamp(2rem, 5vw, 3rem) auto;
  position: relative;
}

.image-principale {
  width: 100%;
  margin-bottom: 0;
  position: relative;
}

.image-principale img {
  width: 100%;
  height: auto;
  max-height: clamp(300px, 50vw, 615px);
  object-fit: cover;
}

.titre-container {
  position: relative;
  height: auto;
  margin-bottom: clamp(3rem, 8vw, 5rem);
}

.article-hero .titre-section {
  position: absolute;
  z-index: 2;
  width: 80%;
  left: 50%;
  top: -5rem;
  transform: translateX(-50%);
  background-color: #2f2f2f;
  padding: clamp(1rem, 3vw, 2rem) clamp(0.5rem, 3vw, 1rem) clamp(0.5rem, 3vw, 1rem);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.titre-section h1 {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.2;
  color: #fff;
  margin: 0;
}

/* Style pour le titre dans les autres sections */
.recommandations .titre-section {
  font-size: clamp(1.75rem, 5vw, 2.5rem);
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .titre-section {
    width: 95%;
  }
}

@media (max-width: 768px) {
  .titre-section {
    width: 95%;
  }

  .titre-container {
    height: 3rem;
  }
}

.article-content {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .article-content {
    padding: clamp(1rem, 4vw, 2rem);
  }
}

.article-content p {
  margin-bottom: clamp(1rem, 4vw, 2rem);
}

.error {
  text-align: center;
  padding: 3rem 0;
  font-size: 1.2rem;
}

.error {
  color: #c53030;
}

/* Section recommandations */
.recommandations {
  max-width: 1100px;
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
  align-items: start;
  text-align: center;
}

@media (min-width: 768px) {
  .grille-recommandations {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: clamp(1rem, 4vw, 2rem);
  }

  .recommandation {
    width: calc(33.33% - 1rem);
    flex-direction: column;
    margin-bottom: 0;
    align-items: center;
  }

  .recommandation:not(:last-child) {
    border-bottom: none;
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
  text-align: left;
  gap: 1rem;
  min-width: 236px;
  max-width: 236px;
  display: flex;
  flex-direction: column;
}

.info .titre {
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 600;
  text-align: left;
}

@media (max-width: 767px) {
  .info {
    justify-content: start;

    .titre {
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: bold;
    }
  }
}
</style>
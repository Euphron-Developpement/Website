<template>
  <div class="cards">
    <div
      :class="{ ishover: isHovered[0] }"
      @mouseover="isHovered[0] = true"
      @mouseleave="isHovered[0] = false"
      class="block_card"
    >
      <div :style="{ zIndex: isHovered[2] ? 1 : '' }" class="content">
        <h1 :style="{ opacity: isHovered[2] || isHovered[1] ? 0 : '1' }">
          EUPHRON,
          <br />
          C'EST
          <br />
          QUOI ?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          adipisci earum accusamus hic perspiciatis id! Commodi veniam, quae
          incidunt perferendis tenetur delectus voluptas dolor voluptate
          blanditiis nihil amet reiciendis autem?
        </p>
        <div
          class="logo"
          :style="{ opacity: isHovered[2] || isHovered[1] ? 0 : '1' }"
        ></div>
      </div>
      <div class="expander"></div>
    </div>
    <div
      :class="{
        ishover: isHovered[1],
        left: isHovered[2],
        right: isHovered[0],
      }"
      @mouseover="isHovered[1] = true"
      @mouseleave="isHovered[1] = false"
      class="block_card"
    >
      <div class="left-expander">
        <div
          class="logo"
          :style="{ opacity: isHovered[0] || isHovered[2] ? 0 : '1' }"
        ></div>
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          quos illum accusamus, dignissimos eligendi numquam omnis. Est,
          excepturi cumque quo pariatur alias impedit quibusdam beatae enim
          numquam blanditiis veritatis explicabo!
        </p>
      </div>
      <h2 :style="{ opacity: isHovered[0] || isHovered[2] ? 0 : '1' }">
        NOS
        <br />
        PARTENAIRES
      </h2>
      <div class="right-expander"></div>
    </div>
    <div
      :class="{ ishover: isHovered[2] }"
      @mouseover="isHovered[2] = true"
      @mouseleave="isHovered[2] = false"
      class="block_card"
    >
      <div :style="{ zIndex: isHovered[0] ? 1 : '' }" class="content">
        <h2 :style="{ opacity: isHovered[0] || isHovered[1] ? 0 : '1' }">
          NOTRE
          <br />
          PROJET
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam magni
          tempore, at accusantium quibusdam animi quo vitae consectetur optio
          earum quae voluptatibus non aut reiciendis possimus amet! Rerum,
          provident dicta.
        </p>
        <div
          class="logo"
          :style="{ opacity: isHovered[0] || isHovered[1] ? 0 : '1' }"
        ></div>
      </div>
      <div class="expander"></div>
    </div>
  </div>
  <div class="arrow">
    <svg
      width="118"
      height="43"
      viewBox="0 0 118 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.0023 42.6054L117.294 11.7453L111.211 0.255859L59.0023 27.8959L6.79351 0.255859L0.710938 11.7453L59.0023 42.6054Z"
        fill="#2F2F2F"
      />
    </svg>
  </div>
  <div class="mayLike">
    <h2>VOUS POURRIEZ AIMER</h2>
    <div class="article-cards">
      <div class="article-card">
        <div class="image-wrapper">
          <img src="~/assets/pictures/Carrousel/Boxe.jpeg" alt="" />
        </div>
        <div class="article-content">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            incidunt voluptas at sunt nam corporis explicabo perferendis
            corrupti neque, delectus aspernatur aut aperiam consectetur minima
            quidem saepe quia quaerat excepturi.
          </p>
          <div class="article-meta">
            <span>Xavier</span>
            <span>13/12/2024</span>
          </div>
        </div>
      </div>
      <div class="article-card">
        <div class="image-wrapper">
          <img src="~/assets/pictures/Carrousel/Tenis.jpg" alt="" />
        </div>
        <div class="article-content">
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            incidunt voluptas at sunt nam corporis explicabo perferendis
            corrupti neque, delectus aspernatur aut aperiam consectetur minima
            quidem saepe quia quaerat excepturi.
          </p>
          <div class="article-meta">
            <span>Gregory</span>
            <span>11/09/2024</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isHovered = ref([false, false, false]);
</script>

<style>
.article-card {
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--primary-white, #ffffff);
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  font-family: 'Montserrat';
}
.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  position: relative;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center; /* centrer le recadrage */
  display: block;
}
.article-card h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
}

.article-content {
  position: relative;
  font-size: 16px;
  margin: 2rem 0;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pic {
  aspect-ratio: 1/1;
  background-color: #f0f0f0;
  margin: 0.5rem 0;
  border-radius: 4px;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #666;
}
.mayLike {
  margin: 2rem 0;
  padding: 1rem;
}

.mayLike h2 {
  margin-bottom: 1rem;
  font-size: 24px;
  font-weight: bold;
}

.article-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .article-cards {
    flex-direction: column;
  }
}

.cards {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
}
.arrow {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 3rem 0;
}
.block_card {
  position: relative;
  min-height: 400px;
  width: 100%;
  transition: all 0.3s ease-in-out;
}
.block_card * {
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease-in-out;
}
.block_card p {
  position: absolute;
  font-size: 24px;
  text-align: justify;
  width: 130%;
  opacity: 0;
}
.block_card h2 {
  position: absolute;
  font-size: 30px;
}
.block_card h1 {
  position: absolute;
  font-size: 30px;
  left: 10px;
  top: 10px;
  margin: 0;
}
.block_card .logo {
  z-index: inherit;
  position: absolute;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom left;
  width: 100%;
}
.block_card .content {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 4;
  height: 100%;
  width: 100%;
}
.block_card .expander {
  background-color: inherit;
  position: absolute;
  width: 170%;
  min-height: 400px;
  max-height: 400px;
}
.block_card:nth-child(1) {
  background-color: var(--primary-red);
}
.block_card:nth-child(1) .content {
  color: var(--primary-white);
}
.block_card:nth-child(1) .logo {
  background-image: url('assets/icons/logo-propos.svg');
  bottom: 0;
  left: 0;
}
.block_card:nth-child(1) .expander {
  right: 0;
  top: 0;
}
.block_card:nth-child(1).ishover .expander {
  z-index: 3;
  transform: translateX(99%);
}
.block_card:nth-child(1).ishover p {
  opacity: 1;
  transform: translateX(35%);
}
.block_card:nth-child(2) {
  display: flex;
  align-items: center;
  background-color: var(--primary-black);
}
.block_card:nth-child(2) .content {
  transform: scaleX(0) translateX(-50%);
  position: absolute;
  z-index: 10;
  width: 130%;
  color: var(--primary-white);
  justify-content: center;
  left: 50%;
}
.block_card:nth-child(2) .logo {
  z-index: 6;
  height: 250px;
  background-image: url('assets/icons/nos-partenaires.svg');
}
.block_card:nth-child(2) .left-expander,
.block_card:nth-child(2) .right-expander {
  background-color: inherit;
  position: absolute;
  height: 100%;
  width: 80%;
}
.block_card:nth-child(2) .left-expander {
  z-index: 9;
}
.block_card:nth-child(2) .right-expander {
  right: 0;
  bottom: 0;
  z-index: 5;
}
.block_card:nth-child(2) h2 {
  z-index: 10;
  bottom: 0;
  right: 10px;
  width: 80%;
  color: var(--primary-white);
  text-align: end;
  margin-bottom: 10px;
}
.block_card:nth-child(2).ishover .content {
  transform: scaleX(1) translateX(-50%);
}
.block_card:nth-child(2).ishover p {
  opacity: 1;
}
.block_card:nth-child(2).ishover .left-expander {
  transform: translatex(-99%);
}
.block_card:nth-child(2).ishover .right-expander {
  transform: translatex(99%);
}
.block_card:nth-child(2).ishover h2 {
  transform: translateX(99%);
}
.block_card:nth-child(2).right {
  z-index: 2;
  transform: translateX(90%);
}
.block_card:nth-child(2).left {
  z-index: 2;
  transform: translateX(-90%);
}
.block_card:nth-child(3) {
  background-color: var(--primary-white);
}
.block_card:nth-child(3) h2 {
  top: 10px;
  left: 10px;
  margin: 0;
  color: var(--primary-black);
  z-index: 1 !important;
  width: 170%;
}
.block_card:nth-child(3) p {
  color: var(--primary-black);
  display: block;
  width: 130%;
  opacity: 0;
}
.block_card:nth-child(3) .content {
  background-color: var(--primary-white);
}
.block_card:nth-child(3) .logo {
  background-position: right;
  background-image: url('assets/icons/notre-projet.svg');
  bottom: 0;
  right: 0;
}
.block_card:nth-child(3) .expander {
  overflow: hidden;
  left: 0;
  top: 0;
}
.block_card:nth-child(3).ishover .expander {
  z-index: 3;
  transform: translateX(-100%);
}
.block_card:nth-child(3).ishover p {
  opacity: 1;
  transform: translateX(-85%);
}
.block_card:nth-child(3).ishover h2 {
  transform: translateX(-100%);
  z-index: -2 !important;
}
.mayLike {
  margin: 0 3rem;
}
.mayLike > h2 {
  font-family: 'Montserrat';
  font-size: 2rem;
  font-weight: 600;
}
</style>

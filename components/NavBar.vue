<template>
  <div class="contentNav">
    <nav>
      <div :class="{ NavBtn: true, active: navOpen }">
        <div class="close_nav" @click="toggleNav()">Fermer la navBar</div>
        <div class="ButtonNav">
          <a href="/" :class="{ TextNav: true, active: isActive('/') }"
            >Accueil</a
          >
        </div>

        <div class="ButtonNav">
          <a
            href="/propos"
            :class="{ TextNav: true, active: isActive('/about') }"
            >A propos</a
          >
        </div>

        <div class="ButtonNav">
          <a
            href="/event"
            :class="{ TextNav: true, active: isActive('/event') }"
            >Evenement</a
          >
        </div>

        <div class="ButtonNav">
          <a
            href="/article"
            :class="{ TextNav: true, active: isActive('/article') }"
            >Article</a
          >
        </div>

        <div class="ButtonNav">
          <a
            href="/contact"
            :class="{ TextNav: true, active: isActive('/contact') }"
            >Contact</a
          >
        </div>
      </div>
      <div class="ConteneurImage">
        <a href="/login" class="ButtonImg">
          <svg
            width="35"
            height="35"
            viewBox="0 0 57 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_124_194)">
              <path
                d="M13.957 45.2207C13.957 37.4887 20.3743 31.2207 28.2904 31.2207C36.2065 31.2207 42.6237 37.4887 42.6237 45.2207H39.0404C39.0404 39.4217 34.2274 34.7207 28.2904 34.7207C22.3533 34.7207 17.5404 39.4217 17.5404 45.2207H13.957ZM28.2904 29.4707C22.351 29.4707 17.5404 24.772 17.5404 18.9707C17.5404 13.1695 22.351 8.4707 28.2904 8.4707C34.2297 8.4707 39.0404 13.1695 39.0404 18.9707C39.0404 24.772 34.2297 29.4707 28.2904 29.4707ZM28.2904 25.9707C32.2499 25.9707 35.457 22.8382 35.457 18.9707C35.457 15.1032 32.2499 11.9707 28.2904 11.9707C24.3308 11.9707 21.1237 15.1032 21.1237 18.9707C21.1237 22.8382 24.3308 25.9707 28.2904 25.9707Z"
                fill="#2F2F2F"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_124_194"
                x="-100"
                y="-100"
                width="257"
                height="257"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_124_194"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_124_194"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </a>
        <div class="burger_nav" @click="toggleNav()"></div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const navOpen = ref(false);

const isActive = (path) => {
  return route.path === path;
};

const toggleNav = () => {
  navOpen.value = !navOpen.value;
  document.body.style.overflowX = navOpen.value ? 'hidden' : 'auto';
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8faec;
  border: 1px solid white;
  border-radius: 999px;
  box-shadow: 2px 2px 2px #00000040;
  min-height: 4.5rem;
  width: 70vw;
}

.NavBtn {
  margin-left: 15px;
  display: flex;
  height: 51px;
  width: 987;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease-in-out;
}

.contentNav {
  display: flex;
  justify-content: center;
  margin-top: 65px;
  align-items: center;
}

.ButtonNav {
  margin-left: 17px;
  gap: 0px;
  opacity: 0px;
  align-items: center;
  text-align: center;
}

.ButtonImg {
  display: flex;
  align-items: center;
  text-align: center;
}

.TextNav {
  font-family: 'Druk Text Wide Trial', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 120px;
  text-align: center;
  text-decoration: none;
  color: #2f2f2f;
}

.ButtonNav :hover {
  text-align: center;
  color: #be2625;
}

.ConteneurImage {
  margin-right: 30px;
  display: flex;
  align-items: center;
}

.active {
  color: #be2625;
}
.burger_nav {
  display: none;
  background-color: #2f2f2f;
  border-radius: 999px;
  width: 50px;
  aspect-ratio: 1/1;
  box-shadow: 0px 4px 4px #00000040;
}
.close_nav {
  display: none;
  background-color: #f8faec;
  color: #2f2f2f;
  padding: 4px;
  cursor: pointer;
}
@media (max-width: 1180px) {
  .NavBtn {
    gap: 0;
  }
  .TextNav {
    font-size: 16px;
  }
}
@media (max-width: 910px) {
  nav {
    width: 80vw;
  }
  .ButtonNav {
    margin-left: 13px;
  }
}
@media (max-width: 768px) {
  .contentNav {
    margin-top: 1rem;
  }
  nav {
    width: 93vw;
    box-shadow: none;
    justify-content: end;
  }
  .close_nav {
    display: block;
  }
  .NavBtn {
    position: absolute;
    height: 100vh;
    right: 0;
    top: 0;
    width: 90vw;
    background-color: #2f2f2f;
    flex-direction: column;
    transform: translateX(100%);
  }
  .NavBtn.active {
    transform: translateX(0);
  }
  .TextNav {
    color: #f8faec;
  }
  .burger_nav {
    display: block;
  }
  .ConteneurImage {
    margin: 0;
  }
}
</style>

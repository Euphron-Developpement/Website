<script setup>
import { onMounted } from 'vue';

function AffichageDescription() {
  const Bulle1 = document.getElementById("Bulle1");
  const Bulle2 = document.getElementById("Bulle2");
  const Bulle3 = document.getElementById("Bulle3");


  [Bulle1, Bulle2, Bulle3].forEach(bulle => {
    console.log(bulle?.id); // Utilisation de l'opérateur "?" pour éviter une erreur si bulle est null
    let bulleInfo = null;
    let CadreBulle = null;
    switch (bulle?.id) {
      case 'Bulle1':
        CadreBulle = document.getElementById("CadreBulle1");
        bulleInfo = document.getElementById("BulleInfo1");
        break;
      case 'Bulle2':
        CadreBulle = document.getElementById("CadreBulle2");
        bulleInfo = document.getElementById("BulleInfo2");

        break;
      case 'Bulle3':
        CadreBulle = document.getElementById("CadreBulle3");
        bulleInfo = document.getElementById("BulleInfo3");

        break;
    }



    if (bulle && CadreBulle) {
      bulle.style.position = "relative";
      bulle.addEventListener("mouseover", () => {
        let PositionIniBulle = bulle.getBoundingClientRect();
        CadreBulle.style.display = "flex"
      
        CadreBulle.style.position = "absolute";
       // CadreBulle.style.top = PositionIniBulle.top + "px";
        CadreBulle.style.left = PositionIniBulle.left -30 + "px";

        bulle.style.height = "200px"
        bulle.style.width = "200px"
        // bulleInfo.style.display = "block"; 




      });

      bulle.addEventListener("mouseout", () => {
        bulle.style.width = "";
        bulle.style.height = "";
        CadreBulle.style.display = "none";
        // bulleInfo.style.display = "none";
      });
    }
  });

}


onMounted(() => {
 // AffichageDescription();
});
</script>

<template>
  <div class="LogoBody">
    <svg width="949" height="93" viewBox="0 0 949 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M918.223 92.8649C935.074 92.8649 948.734 80.0133 948.734 64.16C948.734 48.3067 935.074 35.4551 918.223 35.4551C901.371 35.4551 887.711 48.3067 887.711 64.16C887.711 80.0133 901.371 92.8649 918.223 92.8649Z"
        fill="#2F2F2F" />
      <path d="M48.4943 1V21.3046H30.9067V34.1222H46.6002V55.1306H30.9067V68.7718H49.2582V89.3159H1V1H48.4943Z"
        stroke="#2F2F2F" stroke-width="2" stroke-miterlimit="10" />
      <path
        d="M56.5312 44.9646V1.52539H86.5653V44.6202C86.5653 54.5778 89.8441 67.7698 112.429 67.7698H113.066C135.524 67.7698 138.548 54.5928 138.548 44.6202V1.52539H168.582V44.9646C168.582 62.529 162.645 91.1291 114.578 91.1291H110.917C60.956 91.1291 56.5312 62.4092 56.5312 44.9646Z"
        stroke="#2F2F2F" stroke-width="2" stroke-miterlimit="10" />
      <path
        d="M208.864 62.7809V90.0783H178.719V1.77734H312.097C344.519 1.77734 353.607 14.011 353.607 31.3358V32.7583C353.607 49.9783 344.153 62.7959 312.097 62.7959H208.88L208.864 62.7809ZM208.864 41.6528H309.567C318.91 41.6528 322.316 37.8494 322.316 32.3989V32.0396C322.316 26.8137 318.91 23.0253 309.567 23.0253H208.864V41.6528Z"
        stroke="#2F2F2F" stroke-width="2" stroke-miterlimit="10" />
      <path
        d="M363.695 3.25977H393.841V35.1841H414.962V3.25977H445.123V91.5757H414.962V57.1508H393.841V91.5757H363.695V3.25977Z"
        stroke="#2F2F2F" stroke-width="2" stroke-miterlimit="10" />
      <path
        d="M629.264 71.0315V82.5465C629.264 88.1167 629.9 89.659 630.776 90.9768V91.5607H599.612C599.23 90.9767 598.864 89.4195 598.864 85.7359V78.3837C598.864 66.9886 594.439 62.8259 581.197 62.8259H485.349V91.5458H455.203V3.25977H589.027C624.107 3.25977 628.516 16.5566 628.516 27.1132V28.1913C628.516 39.9458 619.3 46.8188 608.079 49.0798C620.574 51.3409 629.28 57.7497 629.28 71.0465L629.264 71.0315ZM485.349 41.1137H584.969C594.678 41.1137 597.081 37.2055 597.081 32.6984V32.4588C597.081 28.1913 594.678 24.3879 584.969 24.3879H485.349V41.1137Z"
        stroke="#2F2F2F" stroke-width="2" stroke-miterlimit="10" />
      <path
        d="M703.032 1.82422C750.097 1.82422 761.445 26.6359 761.445 45.3982V48.962C761.445 67.4847 750.208 93.0002 703.032 93.0002H697.35C650.286 93.0002 638.938 67.4847 638.938 48.962V45.3982C638.938 26.6359 650.302 1.82422 697.35 1.82422H703.032ZM700.247 23.9107C675.131 23.9107 670.34 36.7283 670.34 46.3416V47.8839C670.34 57.3773 675.64 70.6741 700.247 70.6741C724.854 70.6741 730.027 57.3773 730.027 47.8839V46.3416C730.027 36.7283 725.236 23.9107 700.247 23.9107Z"
        fill="#2F2F2F" />
      <path
        d="M799.421 37.6697V91.5607H770.023V3.25977H800.806L853.552 56.1924V3.25977H882.822V91.5757H853.679L799.437 37.6847L799.421 37.6697Z"
        fill="#2F2F2F" />
    </svg>
  </div>

  <div class="SousTitreLogo">
    <h3>Votre média sport, où les limites se transforment en opportunités et chaque défi devient possible.</h3>
  </div>
  <div class="SousSousTitreLogo">
    <h4>Rejoignez l'aventure sur nos réseaux du sport, de la passion, et tout ce qu'il vous faut à portée de clics !
    </h4>
  </div>

  <div class="LogoReseau">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8334 11.0833C13.2092 11.0833 11.0833 13.2099 11.0833 15.8333C11.0833 18.4574 13.2099 20.5833 15.8334 20.5833C18.4574 20.5833 20.5834 18.4568 20.5834 15.8333C20.5834 13.2093 18.4568 11.0833 15.8334 11.0833ZM15.8334 7.91667C20.204 7.91667 23.75 11.4587 23.75 15.8333C23.75 20.2041 20.208 23.75 15.8334 23.75C11.4626 23.75 7.91667 20.2079 7.91667 15.8333C7.91667 11.4626 11.4587 7.91667 15.8334 7.91667ZM26.125 7.51949C26.125 8.61216 25.2371 9.49868 24.1459 9.49868C23.0532 9.49868 22.1667 8.6108 22.1667 7.51949C22.1667 6.42817 23.0545 5.54167 24.1459 5.54167C25.2357 5.54029 26.125 6.42817 26.125 7.51949ZM15.8334 3.16667C11.9154 3.16667 11.2768 3.17704 9.45454 3.25818C8.21302 3.31647 7.38079 3.48344 6.60754 3.78364C5.92037 4.05015 5.42467 4.36838 4.89652 4.89654C4.36634 5.42672 4.04868 5.92108 3.78325 6.60856C3.48235 7.38359 3.31542 8.21451 3.25818 9.45432C3.17625 11.2024 3.16667 11.8133 3.16667 15.8333C3.16667 19.7513 3.17704 20.3899 3.25817 22.212C3.31648 23.453 3.48368 24.2864 3.78315 25.0578C4.05036 25.7459 4.36924 26.2428 4.89484 26.7685C5.42711 27.3 5.92295 27.6187 6.60391 27.8815C7.38658 28.1841 8.21829 28.3513 9.4543 28.4085C11.2024 28.4903 11.8133 28.5 15.8334 28.5C19.7513 28.5 20.3899 28.4895 22.212 28.4085C23.4503 28.3504 24.2844 28.1827 25.0579 27.8834C25.7441 27.617 26.2425 27.297 26.7685 26.7718C27.3008 26.2387 27.6189 25.744 27.8821 25.0615C28.1838 24.2817 28.3514 23.4488 28.4085 22.2124C28.4904 20.4643 28.5 19.8533 28.5 15.8333C28.5 11.9154 28.4896 11.2768 28.4085 9.45467C28.3502 8.21601 28.1826 7.38069 27.883 6.60753C27.6172 5.92227 27.2978 5.42505 26.7701 4.89654C26.239 4.36549 25.746 4.04847 25.058 3.78325C24.2836 3.4826 23.4514 3.31544 22.2123 3.2582C20.4643 3.17625 19.8533 3.16667 15.8334 3.16667ZM15.8334 0C20.1347 0 20.6717 0.0158332 22.3607 0.0949999C24.0455 0.172852 25.1948 0.439375 26.2042 0.83125C27.2478 1.23369 28.1292 1.77729 29.0092 2.65736C29.888 3.53744 30.4317 4.42146 30.8354 5.4625C31.2259 6.47056 31.4925 7.62111 31.5717 9.30604C31.6469 10.9949 31.6667 11.5319 31.6667 15.8333C31.6667 20.1348 31.6509 20.6717 31.5717 22.3606C31.4938 24.0456 31.2259 25.1948 30.8354 26.2042C30.433 27.2479 29.888 28.1292 29.0092 29.0094C28.1292 29.8881 27.2438 30.4317 26.2042 30.8354C25.1948 31.226 24.0455 31.4925 22.3607 31.5717C20.6717 31.6469 20.1347 31.6667 15.8334 31.6667C11.5319 31.6667 10.9949 31.6508 9.30604 31.5717C7.62111 31.4938 6.47319 31.226 5.4625 30.8354C4.42013 30.4329 3.53742 29.8881 2.65736 29.0094C1.77729 28.1292 1.235 27.2439 0.83125 26.2042C0.439375 25.1948 0.174167 24.0456 0.0950003 22.3606C0.019792 20.6717 0 20.1348 0 15.8333C0 11.5319 0.0158336 10.9949 0.0950003 9.30604C0.172837 7.61979 0.439375 6.47187 0.83125 5.4625C1.23367 4.42014 1.77729 3.53744 2.65736 2.65736C3.53742 1.77729 4.42146 1.235 5.4625 0.83125C6.47188 0.439375 7.61979 0.174167 9.30604 0.0949999C10.9949 0.0197916 11.5319 0 15.8334 0Z"
        fill="#2F2F2F" />
    </svg>
    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.3333 8.82716V18.5C17.3333 23.2865 13.4532 27.1667 8.66667 27.1667C3.8802 27.1667 0 23.2865 0 18.5C0 13.7135 3.8802 9.83333 8.66667 9.83333C9.35507 9.83333 10.0247 9.91359 10.6667 10.0652V14.2824C10.0605 13.9944 9.3824 13.8333 8.66667 13.8333C6.08933 13.8333 4 15.9227 4 18.5C4 21.0773 6.08933 23.1667 8.66667 23.1667C11.244 23.1667 13.3333 21.0773 13.3333 18.5V0.5H17.3333C17.3333 4.18189 20.3181 7.16667 24 7.16667V11.1667C21.4775 11.1667 19.1595 10.291 17.3333 8.82716Z"
        fill="#2F2F2F" />
    </svg>
    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.876 4.90781C27.7554 4.43619 27.4142 4.08035 27.0234 3.97058C26.3291 3.777 22.9584 3.33268 15.8334 3.33268C8.70833 3.33268 5.33827 3.77717 4.64118 3.97113C4.25407 4.0788 3.91292 4.43457 3.79069 4.90781C3.61842 5.5798 3.16667 8.39294 3.16667 12.8327C3.16667 17.2723 3.61842 20.0856 3.79117 20.7595C3.91128 21.2293 4.25249 21.585 4.64159 21.6943C5.33827 21.8882 8.70833 22.3327 15.8334 22.3327C22.9584 22.3327 26.3291 21.8884 27.0255 21.6943C27.4126 21.5866 27.7538 21.2308 27.876 20.7576C28.0483 20.0856 28.5 17.266 28.5 12.8327C28.5 8.39935 28.0483 5.5798 27.876 4.90781ZM30.9434 4.12147C31.6667 6.94268 31.6667 12.8327 31.6667 12.8327C31.6667 12.8327 31.6667 18.7227 30.9434 21.5439C30.5405 23.1042 29.3645 24.3305 27.874 24.745C25.1689 25.4993 15.8334 25.4993 15.8334 25.4993C15.8334 25.4993 6.50337 25.4993 3.7927 24.745C2.29659 24.3248 1.1207 23.0984 0.723204 21.5439C2.83122e-07 18.7227 0 12.8327 0 12.8327C0 12.8327 2.83122e-07 6.94268 0.723204 4.12147C1.12621 2.56117 2.30212 1.3348 3.7927 0.920252C6.50337 0.166015 15.8334 0.166016 15.8334 0.166016C15.8334 0.166016 25.1689 0.166015 27.874 0.920252C29.3701 1.34056 30.546 2.56692 30.9434 4.12147ZM12.6667 18.3743V7.29102L22.1667 12.8327L12.6667 18.3743Z"
        fill="#2F2F2F" />
    </svg>
  </div>
  <div class="Section">
    <div class="Prochainement">
      <div class="SectionTitle">
        <h2>PROCHAINEMENT </h2>
      </div>

      <div class="NextArticlePicture">

        <a class="NextArticleCadre">
          <img class="ImgNextPicture" id="Bulle1" src="../assets/Pictures/Article/7b30c0f1cf4abb64a082e03d0be3b917.jpg"
            alt="article 1 " />
          <div class="CarerDescription" id="CadreBulle1"></div>
          <div class="BulleInfo" id="BulleInfo1">Description de l'article 1</div>
        </a>



        <a class="NextArticleCadre">

          <img class="ImgNextPicture" id="Bulle2" src="../assets/Pictures/Article/0394f16a001746ba67d1b06d046070b3.jpg"
            alt="article 2" />
          <div class="CarerDescription" id="CadreBulle2"> </div>
          <div class="BulleInfo" id="BulleInfo2">Description de l'article 2</div>
        </a>


        <a class="NextArticleCadre">

          <img class="ImgNextPicture" id="Bulle3" src="../assets/Pictures/Article/c7f5c6f3490fd4947f9ee4b407eda8c0.jpg"
            alt="article 3" />
          <div class="CarerDescription" id="CadreBulle3"> </div>
          <div class="BulleInfo" id="BulleInfo3">Description de l'article 3</div>
        </a>



      </div>

    </div>



    <div class="ProchainementHover">
      <div class="SectionTitle">
        <h2>PROCHAINEMENT </h2>
      </div>

      <div class="NextArticlePicture">

        <a class="NextArticleCadre">
          <img class="ImgNextPicture" id="Bulle1" src="../assets/Pictures/Article/7b30c0f1cf4abb64a082e03d0be3b917.jpg"
            alt="article 1 " />
          <div class="CarerDescription" id="CadreBulle1"></div>
          <div class="BulleInfo" id="BulleInfo1">Description de l'article 1</div>
        </a>



        <a class="NextArticleCadre">

          <img class="ImgNextPicture" id="Bulle2" src="../assets/Pictures/Article/0394f16a001746ba67d1b06d046070b3.jpg"
            alt="article 2" />
          <div class="CarerDescription" id="CadreBulle2"> </div>
          <div class="BulleInfo" id="BulleInfo2">Description de l'article 2</div>
        </a>


        <a class="NextArticleCadre">

          <img class="ImgNextPicture" id="Bulle3" src="../assets/Pictures/Article/c7f5c6f3490fd4947f9ee4b407eda8c0.jpg"
            alt="article 3" />
          <div class="CarerDescription" id="CadreBulle3"> </div>
          <div class="BulleInfo" id="BulleInfo3">Description de l'article 3</div>
        </a>



      </div>

    </div>



    <div class="Mozaik">
      <img class="ImageMozaik" src="../assets/Pictures/Article/95ee75233d46fbe0949783990098227c.jpg" />
      <img class="ImageMozaik" src="../assets/Pictures/Article/662315dfc76d706ae9f669f493096ddc.jpg" />
      <!--Les image devront être ceux des 3 derniers article-->
      <img class="ImageMozaik" src="../assets/Pictures/Article/6a9e0a6d535386bad028addf59b3c775.jpg ">
    </div>



  </div>
</template>





<style scoped>
body {
  background-color: #F8FAEC;
  display: flex;
  justify-content: center;
  flex-direction: column;
}


.LogoBody {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

h2 {
  font-family: "Stevie Sans W00 Regular";
  font-size: 40px;
  font-weight: 900;
  line-height: 48.84px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #F8FAEC;

}

h3 {
  color: #BE2625;
  font-family: "Stevie Sans W00 Regular";
  font-size: 24px;
  font-weight: 700;
  line-height: 29.3px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

}

h4 {
  font-family: "Stevie Sans W00 Regular";
  font-size: 20px;
  font-weight: 700;
  line-height: 24.42px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

}

.SousTitreLogo {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.SousSousTitreLogo {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.LogoReseau {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px
}

.Section {
  display: flex;
  margin-top: 35px;

  flex-direction: row;
}

.Prochainement {
  height: 277px;
  width: 50%;
  background-color: #BE2625;
}

.ProchainementHover{
  display: none;
}

.Mozaik {
  height: 277px;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

.ImageMozaik {
  width: 33.33%;

}

.NextArticlePicture {
  display: flex;
  flex-direction: row;
  justify-content: space-around;




}

.ImgNextPicture {
  position: relative;
  width: 130px;
  height: 122px;
  border-radius: 100%;
  z-index: 2;
  /* La bulle doit être au-dessus */
}

.CarerDescription {
  display: none;
  /* Caché par défaut */
  position: absolute;
  /* Assure un bon placement */
  width: 400px;
  height: 175px;
  background-color: #2F2F2F;

  overflow: hidden;

  padding: 10px;
  /* Pour éviter que la bulle touche directement le bord */
}

.BulleInfo {
  display: none;
}

.NextArticleCadre {
  display: flex;
  flex-direction: row;
  justify-content:left;
  align-items: center;
}
</style>
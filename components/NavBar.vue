<template>
  <div class="contentNav">
    <nav>
      <div class="NavBtn">
          <div class="ButtonNav">
            <a class="TextNav">Accueil</a>
          </div>

          <div class="ButtonNav">
            <a class="TextNav">A propos</a>
          </div>

          <div class="ButtonNav">
            <a class="TextNav">Evenement</a>
          </div>

          <div class="ButtonNav">
            <a class="TextNav">Article</a>
          </div>

          <div class="ButtonNav">
            <a class="TextNav">Contact</a>
          </div>

         
      </div>
      <div class="ConteneurImage">
        
        <div class="ButtonImg">
          <svg width="35" height="35" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_b_124_194)">
            <path d="M13.957 45.2207C13.957 37.4887 20.3743 31.2207 28.2904 31.2207C36.2065 31.2207 42.6237 37.4887 42.6237 45.2207H39.0404C39.0404 39.4217 34.2274 34.7207 28.2904 34.7207C22.3533 34.7207 17.5404 39.4217 17.5404 45.2207H13.957ZM28.2904 29.4707C22.351 29.4707 17.5404 24.772 17.5404 18.9707C17.5404 13.1695 22.351 8.4707 28.2904 8.4707C34.2297 8.4707 39.0404 13.1695 39.0404 18.9707C39.0404 24.772 34.2297 29.4707 28.2904 29.4707ZM28.2904 25.9707C32.2499 25.9707 35.457 22.8382 35.457 18.9707C35.457 15.1032 32.2499 11.9707 28.2904 11.9707C24.3308 11.9707 21.1237 15.1032 21.1237 18.9707C21.1237 22.8382 24.3308 25.9707 28.2904 25.9707Z" fill="#2F2F2F"/>
            </g>
            <defs>
            <filter id="filter0_b_124_194" x="-100" y="-100" width="257" height="257" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_124_194"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_124_194" result="shape"/>
            </filter>
            </defs>
          </svg>

        </div>
      </div>  
  </nav>
 

  </div>
  
</template>

<script setup>
import { ref } from 'vue';


</script>
<style scoped>

nav{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: #F8FAEC;
   border:  1px solid white;
   border-radius: 36px;
  box-shadow: 2px 2px 2px #00000040;
}

.NavBtn{
  margin-left: 15px;
  display: flex;
   height: 51px;
   width: 987;
   justify-content: center;
   align-items: center;
   flex-direction: row; 
 
   
}

.contentNav{
  display: flex;
  justify-content: center;
  flex-direction: row; 
  margin-top: 65px;
  align-items: center;
}

.ButtonNav{
margin-left: 17px;
gap: 0px;   
opacity: 0px;
align-items: center;
text-align: center;

}

.ButtonImg{


align-items: center;
text-align: center;

}

.TextNav{
font-family: 'Druk Text Wide Trial', sans-serif; /* Druk Text Wide Trial*/  
font-size: 14px;
font-weight: 700;
line-height: 120px;
text-align: center;
text-decoration-skip-ink: none; 
color: #2F2F2F;




}

.ButtonNav :hover{

text-align: center;
color: #BE2625;

}

.ConteneurImage{
  margin-left: 100px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
 
}

@media (max-width: 480px) {
  
}


@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
  }

  .NavBtn {
    flex-direction: column;
    width: auto;
  }

  .ButtonNav {
    margin: 10px 0;
  }

  .ConteneurImage {
    margin: 10px 0;
  }
}

@media (max-width: 480px) {
  nav {
    flex-direction: column;
    align-items: center;
  }

  .NavBtn {
    flex-direction: column;
    width: auto;
  }

  .ButtonNav {
    margin: 5px 0;
  }

  .ConteneurImage {
    margin: 5px 0;
  }
}


</style>


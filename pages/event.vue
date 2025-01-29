<!-- Contenu HTML -->
<template>
    <div class="main_content">
        <h1 class="event_title">
            Ne manquez pas l'évenement de l'année:
            <br>
            Vivez une expérience inoubliable
        </h1>
        <div class="event_content">
            <div class="event_image">
                <img src="https://s3-alpha-sig.figma.com/img/4acb/d005/4d4426fe0f6db745f32b35393cd7840c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pd2y5262JQaWxGi3av5XnIHp4I-8wpqkbLXm2uVh93aETMff~OQwvpIbevuhOdX8bzZXuwLU9VMTgSOqNhQtROBAazOoNRKZ1CB5V6zifbXPKAVNUXHU9JsIjkP8tfL3Pv1h9LcUg6hBuCZjkqpLZSrtw0ZYX-6rBmJ3lIAFgc4o2IAvzeRgzDe7hGOZyWBY0xhLAPRk0ePeX9mNO0TZP76080zdnGff1HNXYb2syz4yuqdMcyDJaGad6x8oDpAwdr7A3Oyi6WJ~ID0~65kpm8GtEPVpgyY1NubxnsXFs7zTLfwm6O2RGC0NBiOrM-FtjG75-UXicOcXbGL0gKy3lg__">
                <button class="reservation_btn">Réservez votre place dès maintenant</button>
            </div>
            <div class="event_text">
                <p>
                    Préparez-vous à monter sur le ring ! 
                </p>
                <p>
                    Cette année, nous vous invitons à un événement exceptionnel dédié à la passion, 
                    à la force et à l'esprit de la boxe. 
                </p>
                <p>
                    Rendez-vous le samedi 15 janvier 2025, à partir de 18h, dans l'ambiance électrisante de la Salle Lyon Fight Club, située au cœur de Lyon, dans le 7e arrondissement.
                </p>
                <p>
                    Au programme :
                </p>
                <ul>
                    <li>Rencontres avec des champions.</li>
                    <li>Démonstrations en live de techniques et combats spectaculaires.</li>
                    <li>Initiations pour petits et grands, encadrées par des coachs professionnels.</li>
                    <li>Une soirée conviviale pour partager l'amour du noble art.</li>
                </ul>
                <p>
                    Les places sont limitées, alors ne laissez pas ce moment unique filer entre vos gants !
                    Soyez au rendez-vous du combat de l'année
                </p>
            </div>
        </div>
    </div>
    <FooterComponent/>
</template>


<!-- Script -->
<script setup lang="ts"></script>



<!-- Style CSS -->
 <style>
.main_content {
    background-color: #F8FAEC;
    margin: 20px;
    font-family: Montserrat, sans-serif;
}

.event_title {
    color: #BE2625;
    font-weight: 800;
    font-size: calc(0.3rem + 2vw)
}

.event_content {
    display: flex;
    align-items: center;
}

.event_image {
    width: 100%;
    position: relative;
}

.event_image img {
    width: 100%;
    height: auto;
    aspect-ratio: auto;
}

.reservation_btn {
    width: 140px;
    height: 140px;
    background-color: #be2525b1;
    color: #F8FAEC;
    padding: 10px;
    border: none;
    border-radius: 50%;
    text-wrap: wrap;
    text-align: center;
    position: absolute;
    bottom: 15px;
    left: 15px; 
}

.event_text {
    display: flex;
    flex-direction: column;
    margin: 0px 35px 0px 15px;
    font-size: calc(0.25rem + 1vw);
}

/* Media queries */
@media screen and (max-width: 1200px) {
    .event_image img {
        aspect-ratio: 1/1;
    }
}

@media screen and (max-width: 920px) {
    .reservation_btn {
        width: 100px;
        height: 100px;
        font-size: 12px;
    }
}

/* Mobile */
@media screen and (max-width: 700px) {
    .event_content {
        display: flex;
        flex-direction: column;
    }

    .reservation_btn {
        width: 120px;
        height: 120px;
        font-size: 16px;
    }
}
</style>

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
                <img src="../assets/images/4d4426fe0f6db745f32b35393cd7840c.jpg">
                <button @click="showModal = true" type="button" class="reservation_btn">Réservez votre place dès maintenant</button>
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
    <Teleport to="body">
        <div v-if="showModal" class="modal">
            <div class="modal_size">
                <button @click="showModal = false" type="button" class="close_modal_btn">X</button>
                <div class="modal_content">
                    <img src="../assets/images/4d4426fe0f6db745f32b35393cd7840c.jpg" class="modal_img" />
                    <div class="modal_bottom">
                        <div class="bottom_text">
                            <p>Préparez-vous à monter sur le ring !</p>
                            <ul>
                                <li>Rencontres avec des champions.</li>
                                <li>Démonstrations en live de techniques et combats spectaculaires.</li>
                                <li>Initiations pour petits et grands, encadrées par des coachs professionnels.</li>
                                <li>Une soirée conviviale pour partager l'amour du noble art.</li>
                            </ul>
                        </div>
                        <div class="bottom_form">
                            <div v-for="visitor in visitors" :key="visitor.id" class="visitor">
                                <div>
                                    <p>12/03/2025</p>
                                </div>
                                <div>
                                    <p>Sélectionner</p>
                                </div>
                                <div style="display: flex; justify-content: space-around;">
                                    <button @click="changeVisitorCount(false)" type="button">&#60;</button>
                                    <p>{{ currentVisitorCount }}</p>
                                    <button @click="changeVisitorCount(true)" type="button">&#62;</button>
                                </div>
                            </div>
                            <button @click="addVisitor" type="button" class="add_visitor">+</button>
                            <div style="width: 100%; display: flex; justify-content: end;">
                                <button type="button" class="confirm_visitor">RESERVER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
    <FooterComponent/>
</template>


<!-- Script -->
<script setup lang="ts">
    import { ref } from "vue";

    // Toggle pour savoir si la modal est ouverte ou fermée
    const showModal = ref(false);

    // Structure du visiteur
    interface Visitor {
        id: number;
        name: string;
    }

    // Tableau permettant l'affichage d'es utilisateurs dans la reservation
    const visitors = ref<Visitor[]>([]);

    // Nombre de visiteurs ajouté
    const currentVisitorCount = ref(0);

    // Ajout des visiteurs dans le tableau
    const addVisitor = () => {
        visitors.value.push({ id: visitors.value.length + 1, name: `Visiteur ${visitors.value.length + 1}` });
        currentVisitorCount.value = visitors.value.length;
    }

    // Incrémentation du nombre de visiteurs (avec < ou >)
    const changeVisitorCount = (increment: boolean) => {
        if (increment) {
            currentVisitorCount.value += 1;
        } else {
            if (currentVisitorCount.value == 0) {
                currentVisitorCount.value = 0; 
            } else {
                currentVisitorCount.value -= 1;
            }
        }
    };

    // Empêche le scroll du body quand la modale est ouverte
    watch(showModal, (newValue) => {
    if (newValue) {
        document.body.classList.add("modal_open");
    } else {
        document.body.classList.remove("modal_open");
    }
    });
</script>



<!-- Style CSS -->
 <style>
 /* Empeche le scroll dans la page quand la modal est ouverte */
body {
    font-family: Montserrat, sans-serif;
}

body.modal_open {
    overflow: hidden;
}

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
    cursor: pointer; 
}

.reservation_btn:hover {
    background-color: #BE2625;
}

.event_text {
    display: flex;
    flex-direction: column;
    margin: 0px 35px 0px 15px;
    font-size: calc(0.25rem + 1vw);
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal_size {
    position: relative;
    width: 60%;
    max-height: 90vh;
    padding: 20px;
    background: #F8FAEC;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    overflow: auto;
}

.modal_content {
    width: 90%;
    height: max-content;
    border: solid 1px black;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modal_img {
    width: 100%;
    object-fit: contain;
}

.modal_bottom {
    width: 90%;
    display: flex;
    flex-direction: row;
    margin: 20px;
}

.bottom_text {
    width: 50%;
}

.bottom_form {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.add_visitor {
    width: 100%;
    height: 50px;
    border: solid 2px black;
    font-size: 40px;
    background-color: #F8FAEC;
    cursor: pointer;
    margin-bottom: 5px;
}

.visitor {
    width: 100%;
    margin: 5px;
    padding: 10px;
    color: #F8FAEC;
    display: flex;
    justify-content: space-between;
}

.visitor div {
    width: 33.2%;
    background-color: #2f2f2f;
    text-align: center;
}

.visitor button {
    cursor: pointer;
    background: none;
    border: none; 
    color: #F8FAEC;
    font-size: 26px;
}

.confirm_visitor {
    width: 40%;
    height: 30px;
    background-color: #2f2f2f;
    border: none;
    font-size: 16px;
    color: #F8FAEC;
}

.close_modal_btn {
  position: absolute;
  top: 10px;
  right: 10px;
  color: black;
  background-color: #F8FAEC;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 16px;
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

                                            <!-- ****** Contenu HTML ****** -->
<template>
    <div class="main_content">
        <h1 class="event_title">
            Ne manquez pas l'évenement de l'année:
            <br>
            Vivez une expérience inoubliable
        </h1>
        <div class="event_content">
            <div class="event_image">
                <img src="../assets/images/4d4426fe0f6db745f32b35393cd7840c.jpg" alt="Événement boxe">
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
                    <img src="../assets/images/4d4426fe0f6db745f32b35393cd7840c.jpg" alt="Événement boxe" class="modal_img" />
                    <!-- Partie reservation -->
                    <div class="reservation_modal" v-show="isReservationVisible">
                        <div class="reservation_text">
                            <p>Préparez-vous à monter sur le ring !</p>
                            <ul>
                                <li>Rencontres avec des champions.</li>
                                <li>Démonstrations en live de techniques et combats spectaculaires.</li>
                                <li>Initiations pour petits et grands, encadrées par des coachs professionnels.</li>
                                <li>Une soirée conviviale pour partager l'amour du noble art.</li>
                            </ul>
                        </div>
                        <div class="reservation_form">
                            <div v-for="visitor in visitors" :key="visitor.id" class="visitor">
                                <div class="visitor_date">
                                    <p>12/03/2025</p>
                                </div>
                                <div @click="toggleDropdown(visitor.id)" class="visitor_age">
                                    <p>{{ visitor.selectedOption ? visitor.selectedOption : "Selectionner" }}</p>
                                    <div v-if="visitor.isDropdownVisible" class="dropdown_menu">
                                        <select v-model="visitor.selectedOption" @change="toggleDropdown(visitor.id)" @click.stop required>
                                            <option value="- 16 ans">- 16 ans</option>
                                            <option value="18 - 30 ans">18 - 30 ans</option>
                                            <option value="30 ans +">30 ans +</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="visitor_count">
                                    <button @click="changeVisitorCount(visitor.id, false)" type="button">&#60;</button>
                                    <p>{{ visitor.count }}</p>
                                    <button @click="changeVisitorCount(visitor.id, true)" type="button">&#62;</button>
                                </div>
                            </div>
                            <button @click="addVisitor" type="button" class="add_visitor">+</button>
                            <div style="width: 100%; display: flex; justify-content: end;">
                                <button 
                                    @click="reserve" 
                                    type="button" 
                                    :class="canReserve ? 'confirm_visitor_red' : 'confirm_visitor_black'"
                                >
                                    RESERVER
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Partie Commande -->
                    <div class="commande_modal" v-show="isCommandeVisible">
                        <div class="recap">
                            <div class="recap_date">
                                <p>12/03/2025</p>
                            </div>
                            <div v-for="visitor in visitors" :key="visitor.id" class="recap_visitor">
                                <div class="recap_visitor_option">
                                    <p>{{ visitor.selectedOption }}</p>
                                </div>
                                <div class="recap_visitor_count"> 
                                    <p>{{ visitor.count }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="commande_text">
                            <p><b>Informations supplementaires</b></p>
                            <p>Ces informations nous permettrons de prévoir les aménagements nécessaires</p>
                        </div>
                        <div class="commande_form">
                            <div 
                                v-for="(visitor, index) in visitors.flatMap(v => Array(v.count).fill(v))"
                                :key="index" 
                                class="visitor_form_block"
                            > <!-- Boucle sur le count de chaque visiteurs -->
                                <p style="font-size: 12px; margin-left: 3px; margin: 0px;">Personne {{ index + 1 }}</p>
                                <form class="visitor_data_form">
                                    <div>
                                        <label for="prenom">Prénom</label>
                                        <input v-model="visitor.prenom" name="prenom" type="text" placeholder="________________________" required/>
                                    </div>
                                    <div>
                                        <label for="nom">Nom</label>
                                        <input v-model="visitor.nom" name="nom" type="text" placeholder="________________________" required/>
                                    </div>
                                    <div>
                                        <label for="age">Tranche d'age</label>
                                        <input v-model="visitor.age" name="age" type="text" placeholder="________________________" required/>
                                    </div>
                                    <label>Sitation d'handicap</label>
                                    <div class="handicap_radio">
                                        <!-- Handicap moteur -->
                                        <div :class="['handicap_icon_container', { 'selected': selectedIndexes[index] === 'motor' }]" 
                                        @click="toggleSelection(index, 'motor')">
                                            <img src="../assets/icons/handicap.svg" class="handicap_icon" alt="Handicap moteur"/>
                                        </div>
                                        <!-- Handicap auditif -->
                                        <div :class="['handicap_icon_container', { 'selected': selectedIndexes[index] === 'deaf' }]" 
                                        @click="toggleSelection(index, 'deaf')">
                                            <img src="../assets/icons/deaf.svg" class="handicap_icon" alt="Handicap auditif"/>
                                        </div>
                                        <!-- Handicap visuel -->
                                        <div :class="['handicap_icon_container', { 'selected': selectedIndexes[index] === 'blind' }]" 
                                        @click="toggleSelection(index, 'blind')">
                                            <img src="../assets/icons/blind.svg" class="handicap_icon" alt="Handicap visuel"/>
                                        </div>
                                        <!-- Pas d'handicap -->
                                        <div :class="['handicap_icon_container', { 'selected': selectedIndexes[index] === 'cross' }]" 
                                        @click="toggleSelection(index, 'cross')">
                                            <img src="../assets/icons/cross.svg" class="handicap_icon" alt="Pas d'handicap"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div style="width: 100%; display: flex; justify-content: end;">
                            <button 
                                @click="checkAllInputs" 
                                type="submit" 
                                class="confirm_commande_red"
                            >
                                Commander
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
    <FooterComponent/>
</template>


                                            <!-- ****** Script ****** -->
<script setup lang="ts">
    import { ref, watch } from "vue";

            /* ------ Déclaration des vairables ------ */
    // Toggle pour savoir si la modal est ouverte ou fermée
    const showModal = ref(false);

    // Tableau permettant l'affichage d'es utilisateurs dans la reservation
    const visitors = ref<Visitor[]>([]);

    // Vérifie si un visiteur majeur est présent
    const canReserve = ref(false);

    // Etat de visibilitée de la partie basse de la modale
    const isReservationVisible = ref(true);
    const isCommandeVisible = ref(false);

    // Nombre total de visiteurs
    var totalVisitorsCount: number = 0;

    // Variable qui stocke l'icône sélectionnée
    const selectedIndexes = ref<string[]>([]);

    // Booleen qui vérifie que tout les champs du formulaire sont remplis
    const formError = ref<boolean>(false);

            /* ------ Déclaration des structures ------ */
    // Structure du visiteur
    interface Visitor {
        id: number;
        name: string;
        selectedOption: string | null;
        isDropdownVisible: boolean;
        count: number;
        prenom: string;
        nom: string;
        age: string; // String car type text entré dans le formulaire
        selectedIcon: string | null;
    }

            /* ------ Fonctions / logique métier ------ */
    // Ajout des visiteurs dans le tableau
    const addVisitor = () => {
        visitors.value.push({ 
            id: visitors.value.length + 1, 
            name: `Visiteur ${visitors.value.length + 1}`,
            selectedOption: null,
            isDropdownVisible: false,
            count: 1,
            prenom: "",
            nom: "",
            age: "",
            selectedIcon: null
        });
        console.log(visitors)
    }

    // Ajout d'un visiteur par l'utilisateur
    const changeVisitorCount = (visitorId: number, increment: boolean) => {
        const visitor = visitors.value.find(v => v.id === visitorId);
        if (visitor) {
            if (increment) {
                visitor.count += 1;
            } else if (visitor.count > 0) {
                visitor.count -= 1;
            }
        }
    };

    // Fonction pour afficher ou masquer le menu déroulant
    const toggleDropdown = (visitorId: number) => {
        const visitor = visitors.value.find(v => v.id === visitorId);
        if (visitor) {
            visitor.isDropdownVisible = !visitor.isDropdownVisible;
        }
    };

    // Vérification si il y a au moin un visiteur majeur
    const adultVerification = () => {
        canReserve.value = visitors.value.some(visitor => 
            (visitor.selectedOption === "18 - 30 ans" || visitor.selectedOption === "30 ans +") && visitor.count > 0
        );
    }

    // Vérification chaque fois qu'un visiteur est ajouté ou que la sélection change
    watch(visitors.value, () => {
        adultVerification();
    });

    // Calcul du nombre total de visiteurs
    const totalVisitorCalculator = () => {
        visitors.value.forEach((visitor) => {
            totalVisitorsCount = totalVisitorsCount += visitor.count;
        })
        return totalVisitorsCount;     
    }

    // Fonction du bouton reserver
    const reserve = () => {
    if (canReserve.value) {
        alert("Réservation possible");
        totalVisitorCalculator();
        changeModalForm();
    } else {
        alert("Impossible d'effectuer la réservation.\nAu moin l'un d'entre vous doit etre majeur.");
    }
    };

    // Selection des icones pour les visiteurs
    const toggleSelection = (index: number, type: string) => {
        selectedIndexes.value[index] = selectedIndexes.value[index] === type ? '' : type;
    };

    // Méthode pour vérifier si tous les champs sont remplis
    const checkAllInputs = () => {
    // Vérifie si tous les champs sont remplis
    const allFieldsFilled = visitors.value.every(visitor => 
        visitor.prenom.trim() && visitor.nom.trim() && visitor.age.trim()
    );

    if (allFieldsFilled) {
        formError.value = false;
        alert('Le formulaire est soumis avec succès !');
    } else {
        formError.value = true;
        alert('Veuillez remplir tous les champs');
    }
    };

    // Toggle contenu de la modale (reservation / commande)
    const changeModalForm = () => {
        isReservationVisible.value = false;
        isCommandeVisible.value = true;
    }

    // Empêche le scroll du body quand la modale est ouverte
    watch(showModal, (newValue) => {
    if (newValue) {
        document.body.classList.add("modal_open");
    } else {
        document.body.classList.remove("modal_open");
    }
    });
</script>



                                            <!-- ****** Style CSS ****** -->
 <style>
 /* Empeche le scroll dans la page quand la modal est ouverte */
 * {
    box-sizing: border-box;
}

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

/* --- Fenetre modal --- */
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

/* --- Partie reservation --- */
.reservation_modal {
    width: 90%;
    display: flex;
    flex-direction: row;
    margin: 20px;
}

.reservation_text {
    width: 50%;
}

.reservation_form {
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

.visitor_date, .visitor_age, .visitor_count {
    width: 33.2%;
    background-color: #2f2f2f;
    text-align: center;
    position: relative;
}

.visitor_age {
    cursor: pointer;
    font-size: 14px;
}

.visitor_count {
    display: flex;
    justify-content: space-around;
}

.dropdown_menu {
    position: absolute;
    width: 100%;
    left: 0;
    background-color: #2f2f2f;
    color: #F8FAEC;
    padding: 5px;
    z-index: 100;
}

.dropdown_menu select {
    background-color: #2f2f2f;
    color: #F8FAEC;
    border: none;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
}

.select-option {
    background-color: #2f2f2f;
    color: #F8FAEC;
    padding: 5px;
    cursor: pointer;
}

.select-option:focus {
    outline: none;
}

.visitor button {
    cursor: pointer;
    background: none;
    border: none; 
    color: #F8FAEC;
    font-size: 26px;
}

.confirm_visitor_red, .confirm_visitor_black {
    width: 40%;
    height: 30px;
    border: none;
    font-size: calc(0.2rem + 1vw);
    color: #F8FAEC;
    cursor: pointer;
    font-family: Montserrat, sans-serif;
}

.confirm_visitor_red {
    background-color: #BE2625;
}

.confirm_visitor_black {
    background-color: #2f2f2f;
}

/* --- Partie commande --- */
.commande_modal {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    font-family: Montserrat, sans-serif;
}

.recap {
    width: 80%;
    height: 50px;
    margin: 5px;
    color: #F8FAEC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    gap: 1px;
    font-family: Montserrat, sans-serif;
}

.recap_date {
    width: 25%;
    height: 100%;
    background-color: #2f2f2f;
}

.recap_visitor {
    width: 50%;
    height: 100%;
    color: #F8FAEC;
    display: flex;
    gap: 1px;
}

.recap_visitor_option {
    width: 70%;
    height: 100%;
    background-color: #2f2f2f;
}

.recap_visitor_count {
    width: 30%;
    height: 100%;
    background-color: #2f2f2f;
}

.commande_text {
    width: 90%;
    font-family: Montserrat, sans-serif;
    color: #2f2f2f;
}

.commande_text p {
    margin: 2px 0px;
}

.commande_form {
    width: 100%;
    margin: 15px 0px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.visitor_form_block {
    width: 240px;
    height: 300px;
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    font-family: Montserrat, sans-serif;
}

.visitor_data_form {
    width: 100%;
    margin-top: 0px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.visitor_data_form label, .visitor_data_form input {
    margin-left: 2px;
}

.visitor_data_form label {
    font-size: 16px;
    font-weight: 750;
    font-family: Montserrat, sans-serif;
    color: #2f2f2f;
}

.visitor_data_form input {
    background-color: transparent;
    width: 90%;
    height: 40px;
    text-align: center;
}

.handicap_radio {
    width: 90%;
    height: 40px;
    display: flex;
}

.handicap_radio div {
    border: solid #2f2f2f 1px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.selected {
  background-color: #2f2f2f;
}

.selected img {
    filter: invert(1);
}

.handicap_icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.handicap_icon:hover {
    width: 35px;
    height: 35px;
}

.confirm_commande_red, .confirm_commande_black {
    width: 20%;
    height: 30px;
    margin-right: 10px;
    border: none;
    font-size: calc(0.2rem + 1vw);
    color: #F8FAEC;
    cursor: pointer;
    font-family: Montserrat, sans-serif;
}

.confirm_commande_red {
    background-color: #BE2625;
}

.confirm_commande_black {
    background-color: #2f2f2f;
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

/* --- Media queries --- */
@media screen and (max-width: 1200px) {
    .event_image img {
        aspect-ratio: 1/1;
    }

    .visitor_age {
        font-size: 12px;
    }
}

@media screen and (max-width: 920px) {
    .reservation_btn {
        width: 100px;
        height: 100px;
        font-size: 12px;
    }

    .reservation_modal {
        display: flex;
        flex-direction: column;
    }

    .reservation_form, .reservation_text {
        width: 100%;
    }
}

/* --- Mobile --- */
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

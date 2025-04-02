<template>
    <div class="back">
        <div class="arrow">
            <img src="/assets/icons/arrow-back.png"/>
        </div>
    </div>
    <div class="container-myaccount">
        <div class="section-hero">
            <div class="title">
                <img src="/assets/icons/account.svg"/>
                <p>MON COMPTE</p>
            </div>
            <div class="cards">
                <div class="card-info">
                    <img src="/assets/icons/informations-white.svg"/>
                    <p>Mes informations</p>
                </div>
                <div class="card-command">
                    <img src="/assets/icons/shop-black.svg"/>
                    <p>Commande</p>
                </div>
            </div>
        </div>
        <div class="section-infos">
            <div class="container-name">
                <div class="info">
                    <p>Prénom</p>
                    <input type="text" placeholder="Prénom" />
                </div>
                <div class="info">
                    <p>Nom</p>
                    <input type="text" placeholder="Name" />
                </div>
                <div class="info">
                    <p>Adresse email</p>
                    <input type="email" placeholder="Adresse mail" />
                </div>
            </div>
            <div class="container-mdp">
                <div class="info">
                    <p>Mot de passe</p>
                    <input type="password" placeholder="*****" />
                </div>
                <div class="info">
                    <p>Nouveau mot de passe</p>
                    <input type="password" placeholder="*****"/>
                </div>
                <div class="info">
                    <p>Confirmation mot de passe</p>
                    <input type="password" placeholder="*****"/>
                </div>
            </div>
            <div class="container-button">
                <button class="button">Enregistrer</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

    .arrow {
        cursor: pointer;
        margin-left: 2rem;
    }

    .title {
        display: flex;
        align-items: center;
        flex-direction: column;

        p  { 
            font-family: Montserrat, sans-serif;
            font-weight: bold;
            font-size: 18px;
            margin-top: 0.8rem;
        }
    }

    .cards {

        font-family: Montserrat, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2.5rem;

        p {
            padding-left: 8px;
            font-weight: bold;
        }

        .card-info, .card-command {
            display: flex;
            align-items: center;
            padding: 10px;
            width: 250px;
            justify-content: center;
            cursor: pointer;
        }
    }

    .card-info {
        background-color: var(--primary-red);
        border: 1px solid var(--primary-red);
        margin-right: 20px;

        p {
            color: var(--primary-white);
        }
    }

    .card-command {
        border: 1px solid black;
        margin-left: 20px;
    }

    .section-infos {
        font-family: Montserrat, sans-serif !important;
        margin: 4rem 10rem 4rem 10rem;

        p {
            margin-left: 10px;
            font-weight: bold;
            font-size: 16px;
        }

        input {
            border: 1px solid black;
            padding: 5px;
            padding-left: 10px;
            width: 80%;
        }

        .container-name, .container-mdp {
            display: flex;
            justify-content: space-between;
        }
        
        .container-mdp {
            margin-top: 2rem;
        }

        .info {
            width: 100%;
        }
    }

    .container-button {
        display: flex;
        justify-content: center; 
        margin-top: 2rem;

        button {
            background-color: var(--primary-red);
            color: var(--primary-white);
            font-weight: bold;
            padding: 10px 15px 10px 15px;
            cursor: pointer;
        }

        button:hover {
            background-color: var(--primary-white);
            color: var(--primary-red);
            border: 1px solid var(--primary-red);
            transition: 0.5s;
        }
    }

    @media screen and (max-width: 1100px) {
        .section-infos {
            margin: 2rem 1rem 2rem 1rem;
        }

        .container-name, .container-mdp {
            flex-direction: column;
        }

        .container-name {
            margin-bottom: 2rem;
        }

        .info {
            width: 100%;
            margin-bottom: 1rem;
        }

        .cards {
            padding-left: 8px;
            padding-right: 8px;

            p {
                font-size: 12px;
            }
        } 

        
        .arrow {
            display: none;
        }
    }
</style>
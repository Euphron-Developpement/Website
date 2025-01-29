<script setup>
import "~/assets/css/register.css";
</script>

<template>
    <div class="form-container">
        <h1>CREER UN COMPTE</h1>
        <form @submit.prevent="handleSubmit" id="registration-form">
            <div class="form-group">
                <label for="prenom">Prénom</label>
                <input v-model="prenom" type="text" id="prenom"/>
            </div>

            <div class="form-group">
                <label for="nom">Nom</label>
                <input v-model="nom" type="text" id="nom"/>
            </div>

            <div class="form-group">
                <label for="email">Adresse mail</label>
                <input v-model="email" type="email" id="email"/>
            </div>

            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input v-model="password" type="password" id="password"/>
            </div>

            <div class="form-group">
                <label for="password">Confirmation de mot de passe</label>
                <input v-model="password" type="password" id="confirm-password"/>
            </div>

            <button type="submit" class="submit-btn">S'inscrire</button>
            <p class="already-account">
                <a href="#">J'ai déjà un compte</a>
            </p>
        </form>
    </div>
</template>

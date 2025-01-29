<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import "~/assets/css/register.css";

const prenom = ref('');
const nom = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const router = useRouter();

const isFormValid = computed(() => {
    return prenom.value && nom.value && email.value && password.value && confirmPassword.value;
});

const handleSubmit = () => {
    if (isFormValid.value) {
        router.push('/');
    } else {
        alert('Veuillez remplir tous les champs.');
    }
};
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
                <label for="confirm-password">Confirmation de mot de passe</label>
                <input v-model="confirmPassword" type="password" id="confirm-password"/>
            </div>

            <button type="submit" class="submit-btn" :class="{ 'active-btn': isFormValid }">S'inscrire</button>
            <p class="already-account">
                <a href="#">J'ai déjà un compte</a>
            </p>
        </form>
    </div>
</template>

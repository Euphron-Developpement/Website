<template>
  <div class="flex justify-center items-center min-h-[80vh] p-8">
    <div class="w-full max-w-lg">
      <h2 class="text-4xl font-bold mb-16 pb-2 border-b-2 border-black text-center md:text-2xl sm:text-xl">
        QUELQUE CHOSE À NOUS DIRE ?
      </h2>
      <form class="w-full flex flex-col gap-4">
        <!-- Conteneur Nom & Prénom -->
        <div class="flex gap-4">
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Nom"
            required
            class="flex-1 min-w-0 border-[1.5px] border-black px-4 py-2 text-xl font-light"
          />
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Prénom"
            required
            class="flex-1 min-w-0 border-[1.5px] border-black px-4 py-2 text-xl font-light"
          />
        </div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Adresse email"
          required
          class="w-full border-[1.5px] border-black px-4 py-2 text-xl font-light"
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Numéro de téléphone"
          required
          class="w-full border-[1.5px] border-black px-4 py-2 text-xl font-light"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          class="w-full min-h-[200px] border-[1.5px] border-black px-4 py-2 text-xl font-light mt-4"
        ></textarea>
        <button
          type="submit"
          class="bg-black text-white px-8 py-4 text-xl font-bold transition-all duration-100 ease-in-out hover:bg-gray-800"
        >
          ENVOYER
        </button>
      </form>
    </div>
  </div>
</template>
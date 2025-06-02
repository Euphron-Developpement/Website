<template>
  <div class="flex justify-center items-center min-h-[80vh] p-8">
    <div class="w-full max-w-3xl">
      <h2 class="text-4xl font-bold mb-16 pb-2 border-b-2 border-black text-center md:text-2xl sm:text-xl">
        QUELQUE CHOSE À NOUS DIRE ?
      </h2>
      <form class="w-full flex flex-col gap-8">
        <div class="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Nom"
            required
            class="flex-1 w-full border-[2px] border-black px-6 py-5 h-16 text-2xl font-light"
          />
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Prénom"
            required
            class="flex-1 w-full border-[2px] border-black px-6 py-5 h-16 text-2xl font-light"
          />
        </div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Adresse email"
          required
          class="w-full border-[2px] border-black px-6 py-5 h-16 text-2xl font-light"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          class="w-full min-h-[300px] border-[2px] border-black px-6 py-5 text-2xl font-light overflow-message"
        ></textarea>
        <button
          type="submit"
          class="bg-black text-white px-10 py-5 text-2xl font-bold transition-all duration-100 ease-in-out hover:bg-red-800"
        >
          ENVOYER
        </button>
      </form>
    </div>
  </div>
</template>

<style>
.overflow-message {
  margin-left: -20px;
  margin-right: 0px; 
  width: calc(100% + 40px); 
}
</style>

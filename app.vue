<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>


<script>
import Footer from "~/components/footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./views/Navbar.vue";
import ReloadPWA from "./pwa/ReloadPWA.vue";

</script>

<template>
  <ReloadPWA />
  <div class="box container">
    <Navbar/>
  </div>
  <div class="box container">
    <RouterView />
  </div>

</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>

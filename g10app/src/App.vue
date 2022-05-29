<script setup>
import { RouterView } from "vue-router";
import Navbar from "./views/Navbar.vue";
</script>

<template>
  <div class="box container">
    <Navbar />
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

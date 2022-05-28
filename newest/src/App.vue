<script setup>
import { RouterView } from "vue-router";
import NavBar from "./views/Navbar.vue";
import "./src/assets/base.css";


</script>

<template>
  <div class="box container">
    <NavBar/>
  </div>
  <div class="box container">
    <RouterView />
  </div>

</template>

<style>

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>

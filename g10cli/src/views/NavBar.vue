<!-- components/Navbar.vue -->
<script setup>
import { RouterLink, RouterView } from "vue-router";

const data = {
    isActive: false,
    showNavbar: true
}

</script>

<template>
  <header class="navbar is-fixed-top is-transparent is-spaced">
    <div class="container">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <h1 class="is-size-4">FoodWa
          </h1>
        </a>
        <a role="button" class="navbar-burger" aria-label="menu" data-target="collapse" >
          <span aria-hidden="true" />
          
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="collapse" class="navbar-menu is-paddingless">
        <nav class="navbar-end">
            <RouterLink to="/" class="navbar-item">Busca Recetas</RouterLink>
            <RouterLink to="/recipes" class="navbar-item">Mis Recetas</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

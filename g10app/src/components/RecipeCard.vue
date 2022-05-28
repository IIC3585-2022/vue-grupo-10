<script setup>
import { useUserStore } from "../stores/recipes";

const store = useUserStore();

defineProps({
  recipe: {
    type: Object,
    required: true,
  },
  inFavorites:{
    type:Boolean,
    required: true,
    default: true
  }
});
</script>

<template>
  <div class="item">
      <h3>{{recipe.id}} {{recipe.title}}</h3>
      <img :src="recipe.image">
      <div v-if="(inFavorites || store.myFavorites.has(recipe) || store.getIdMyFavorites.includes(recipe.id) )">
        <button
          @click="store.removeFromFavorites(recipe)"
          >
          Eliminar receta de favoritos
        </button>
      </div>
      <div v-else>
        <button
          @click="store.addToFavorites(recipe)"
          >
          Añadir receta a favoritos</button>
      </div>
      
  </div>
</template>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
h3 {
  font-weight: 500;
  font-size: 24px;
  top: -10px;
}
  .item{
    display: flex;
  }
</style>

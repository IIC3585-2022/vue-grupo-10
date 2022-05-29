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
<div class="columns">
  <div class="column">
      <div class="card">


<div class="columns is-vcentered">
  <div class="column">
    <figure class="image is-128x128">
      <img class="is-rounded image is-128x128" :src="recipe.image"> 
    </figure>
   
  </div>

  <div class="column ">
  <h3 class="title is-5"> {{recipe.title}}</h3>  
  </div>


    <div class="column">
      <div v-if="(inFavorites || store.myFavorites.has(recipe) || store.getIdMyFavorites.includes(recipe.id) )">

        <button class="button is-danger"
          @click="store.removeFromFavorites(recipe)"
          >
          Eliminar receta de favoritos
        </button>
      </div>
      <div v-else>
        <button class="button is-danger"
          @click="store.addToFavorites(recipe)"
          > Añadir receta a favoritos</button>
      </div>  
    </div>
</div>

  </div>
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

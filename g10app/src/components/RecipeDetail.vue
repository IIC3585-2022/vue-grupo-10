<script setup>
import { useUserStore } from "../stores/recipes";
const store = useUserStore();
const recipe = store.getCurrentRecipe;
</script>

<template>
  <div class="container recipe is-fluid">
    <h1 class="title">{{ recipe.title }}</h1>
    <figure class="image">
      <img class="_image" :src="recipe.image" />
    </figure>
    <div
      class="notification is-success"
      v-for="ingredient in recipe.missedIngredients.concat(
        recipe.usedIngredients
      )"
      v-bind:key="ingredient.id"
    >
      {{ ingredient.original }}
    </div>
  </div>
</template>

<style>
.recipe {
  text-align: center;
  width: 70%;
}
.image {
  margin-bottom: 2em;
}
._image {
  width: 311px !important;
  height: 231px !important;
  margin: auto;
}
</style>

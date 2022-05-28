<script setup>
import { searchIngredients } from "@/api/index.js";
import { searchByIngredientDummy } from "@/dummies";
import { useUserStore } from "../stores/recipes";
import RecipeCard from "./RecipeCard.vue" 

const store = useUserStore();

function onSubmit() {
  store.fetchRecipes();

  /*
  const ingredientsPromises = [];
  this.inputIngredients.map((ingredient) => {
    ingredientsPromises.push(searchIngredients(ingredient));
    Promise.all(ingredientsPromises).then((values) => {
      this.realIngredients = values
        .map((elem) => elem.data.name);
    });
  });
  */
}
</script>

<template>
  <div class="container">
    <h1 class="title">Ingresa tus ingredientes</h1>
    <button class="button is-primary" type="button" @click="store.addIngredient">
      Agregar Ingredientes +
    </button>
    <form @submit.prevent="onSubmit">
      <div
        class="input-container"
        v-for="(_, index) in store.inputIngredients"
        v-bind:key="index"
      >
        <input
          class="input"
          v-model="store.inputIngredients[index]"
          type="text"
          placeholder="onion"
          @change="(event) => store.changeIngredient(index, event)"
          required="true"
        />
        <button
          type="button"
          class="button is-danger"
          @click="store.inputIngredients.splice(index, 1)"
        >
          -
        </button>
      </div>
      <div class="input-container horizontal">
        <button class="divisor button is-success" v-if="store.inputIngredients.length">
          Buscar Receta
        </button>
      </div>
    </form>
  </div>

  <div 
    v-if='store.getRecipes'>
    <div 
      v-for='gettersRecipe in store.getRecipes' 
      :key='gettersRecipe.id'>
      <RecipeCard 
        :recipe="gettersRecipe" 
        :inFavorites="false"
      />
      
      </div>
  </div>
</template>

<style>
.input-container {
  display: flex;
  justify-content: center;
  margin: 5px;
}
.horizontal{
  flex-direction: row;
  justify-content: center;
}
</style>
